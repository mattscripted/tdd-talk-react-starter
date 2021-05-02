function hasChristmasSunday (year) {
  const DAY_OF_WEEK_SUNDAY = 0

  // With Date, months are 0-indexed, so 11 means December
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const christmasDate = new Date(year, 11, 25)

  return christmasDate.getDay() === DAY_OF_WEEK_SUNDAY
}

function findChristmasSundays (startYear, endYear) {
  if (startYear <= 0 || !Number.isInteger(startYear)) {
    throw new Error('startYear must be a positive integer')
  }
  if (endYear <= 0 || !Number.isInteger(endYear)) {
    throw new Error('endYear must be a positive integer')
  }
  if (endYear <= startYear) {
    throw new Error('endYear must be greater than startYear')
  }

  const christmasSundays = []

  for (let year = startYear; year < endYear; year++) {
    if (hasChristmasSunday(year)) {
      christmasSundays.push(year)
    }
  }

  return christmasSundays
}

export default findChristmasSundays
