export function generateGoogleCalendarUrl() {
  const title = "Pernikahan Ifha & Jefri"
  const description = "Dengan penuh syukur kami mengundang Anda untuk hadir di acara pernikahan kami."
  const location = "Lokasi Acara Pernikahan"

  // Waktu acara (contoh: 29 Maret 2026, 10:00 - 13:00 WIB)
  const start = new Date("2026-03-29T10:00:00+07:00")
  const end = new Date("2026-03-29T13:00:00+07:00")

  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]|\.\d{3}/g, "")

  return (
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}` +
    `&details=${encodeURIComponent(description)}` +
    `&location=${encodeURIComponent(location)}` +
    `&dates=${formatDate(start)}/${formatDate(end)}`
  )
}
