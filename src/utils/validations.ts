export const isValidName = (name: string) => /^[a-zA-Z\s]+$/.test(name)

export const isValidBirthDate = (date: string) => {
  const birthDate = new Date(date)
  const currentDate = new Date()

  return birthDate <= currentDate
}

export const isValidBirthPlace = (place: string) =>
  /^[a-zA-Z\s/,]+$/.test(place)

export const isValidUrl = (url: string) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return pattern.test(url)
}
