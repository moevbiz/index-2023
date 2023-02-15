// function convertToICSDate(date){
//   if (date) {
//     const year = date.getFullYear().toString()
//     const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
//     const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()
//     const hour = date.getHours() < 10 ? "0" + date.getHours().toString() : date.getHours().toString()
//     const minute = date.getMinutes() < 10 ? "0" +date.getMinutes().toString() : date.getMinutes().toString()
//     return year + month + day + "T" + hour + minute + "00"
//   }
// }

// module.exports = {
//   eleventyComputed: {
//     ics: data => {
//       let created = convertToICSDate(new Date())
//       let start = convertToICSDate(data.start)
//       let end = convertToICSDate(data.end)
//       let ics = `BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//id//NONSGML v1.0//EN
// BEGIN:VEVENT
// UID:${created}-example@example.com
// DTSTAMP:${created}
// LOCATION:${data.space}
// DTSTART:${start}
// DTEND:${end}
// SUMMARY:${data.title}
// DESCRIPTION:${data.description}
// URL:${data.page.url}
// END:VEVENT
// END:VCALENDAR`
//       return ics
//     }
//   }
// }