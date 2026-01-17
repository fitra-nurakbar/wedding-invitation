export function formatTimeAgo(date: Date | string): string {
  const now = Date.now()
  const past = new Date(date).getTime()

  const diffInSeconds = Math.floor((now - past) / 1000)

  if (diffInSeconds < 60) {
    return 'sekarang'
  }

  const minutes = Math.floor(diffInSeconds / 60)
  if (minutes < 60) {
    return `${minutes} menit yang lalu`
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours} jam yang lalu`
  }

  const days = Math.floor(hours / 24)
  if (days < 7) {
    return `${days} hari yang lalu`
  }

  const weeks = Math.floor(days / 7)
  if (weeks < 4) {
    return `${weeks} minggu yang lalu`
  }

  const months = Math.floor(days / 30)
  if (months < 12) {
    return `${months} bulan yang lalu`
  }

  const years = Math.floor(days / 365)
  return `${years} tahun yang lalu`
}
