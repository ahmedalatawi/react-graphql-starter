export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const formatDateForInput = (date: string) => {
  const d = date ? new Date(date) : new Date()
  return d.toISOString().split('T')[0]
}
