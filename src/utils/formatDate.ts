export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const formatDateForInput = (date: string) =>
  date ? new Date(date).toISOString().split('T')[0] : ''
