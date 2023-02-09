// require npm plugins
const embed = require('eleventy-plugin-embed-everything')
const md = require('markdown-it')

module.exports = (eleventyConfig) => {
	// add eleventy plugins
	eleventyConfig.addPlugin(embed)

	// parse text as markdown
	eleventyConfig.addFilter('markdown', txt => md.render(txt))
	
	// get year from datetime
	eleventyConfig.addFilter('year', t => (new Date(t)).getFullYear())
	
	// format datetime as dd/mm/yyyy
	eleventyConfig.addFilter('date', t => {
		t = new Date(t)
		t = t.getDate() + "/" + (t.getMonth() + 1) + "/" + date.getFullYear()
		return t
	})

	// console log element
	eleventyConfig.addFilter('log', e => console.log(e))

	// generate .ics (calendar) file
	eleventyConfig.addFilter('ics', e => {
		let now = new Date()
		let data = {
			title: e.data.title,
			description: e.data.description,
			location: e.data.location,
			start: e.data.start,
			end: e.data.end,
			created: now,
			url: e.data.url
		}
		let ics = `BEGIN:VCALENDAR
			VERSION:2.0
			PRODID:-//id//NONSGML v1.0//EN
			BEGIN:VEVENT
			UID:${data.created}-example@example.com
			DTSTAMP:${data.created}
			LOCATION:${data.location}
			DTSTART:${data.start}
			DTEND:${data.end}
			SUMMARY:${data.title}
			DESCRIPTION:${data.description}
			URL:${data.url}
			END:VEVENT
			END:VCALENDAR`
		return ics
	})

	// copy additional files to the output folder
	eleventyConfig.addPassthroughCopy('./src/assets')
	eleventyConfig.addPassthroughCopy('./src/admin')
	eleventyConfig.addPassthroughCopy('./src/favicon.ico')
	eleventyConfig.addPassthroughCopy('./src/*.png')

	// watch changes of additional files (without triggering a whole eleventy rebuild)
	eleventyConfig.setBrowserSyncConfig({
		files: [
			'./public/*.css',
			'./public/*.js'
		],
		injectChanges: false
	})

	return {
		dir: {
			// where your files come from
			input: 'src',
			// where your site builds to
			output: 'public'
		}
	}
}