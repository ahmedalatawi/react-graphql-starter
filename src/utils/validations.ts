export const isValidName = (name: string) => /^[a-zA-Z\s]+$/.test(name)

export const isValidBirthDate = (date: string) => {
  const birthDate = new Date(date)
  const currentDate = new Date()

  return birthDate <= currentDate
}

export const isValidBirthPlace = (place: string) =>
  /^[a-zA-Z\s/,]+$/.test(place)
