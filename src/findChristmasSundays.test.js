import findChristmasSundays from './findChristmasSundays'

describe('findChristmasSundays', () => {
  it('throws an error, if the start year is not a positive integer', () => {
    const expectedError = new Error('startYear must be a positive integer')

    expect(() => findChristmasSundays(0.1, 1))
      .toThrowError(expectedError)
    expect(() => findChristmasSundays(0, 1))
      .toThrowError(expectedError)
    expect(() => findChristmasSundays(-1, 1))
      .toThrowError(expectedError)
  })

  it('throws an error, if the end year is not a positive integer', () => {
    const expectedError = new Error('endYear must be a positive integer')

    expect(() => findChristmasSundays(1, 0.1))
      .toThrowError(expectedError)
    expect(() => findChristmasSundays(1, 0))
      .toThrowError(expectedError)
    expect(() => findChristmasSundays(1, -1))
      .toThrowError(expectedError)
  })

  it('throws an error, if the end year is less than or equal to the start year', () => {
    const earlierYear = 2000
    const laterYear = 2001

    const expectedError = new Error('endYear must be greater than startYear')

    expect(() => findChristmasSundays(earlierYear, earlierYear))
      .toThrowError(expectedError)
    expect(() => findChristmasSundays(laterYear, earlierYear))
      .toThrowError(expectedError)
  })

  it('returns an array', () => {
    expect(findChristmasSundays(2000, 2001)).toBeInstanceOf(Array)
  })

  it('returns the start year, if the start year has Christmas on a Sunday', () => {
    const christmasSundayYear = 2022
    const actual = findChristmasSundays(christmasSundayYear, christmasSundayYear + 1)

    expect(actual).toContain(christmasSundayYear)
  })

  it('does not return the start year, if the start year does not have Christmas on a Sunday', () => {
    const nonChristmasSundayYear = 2020
    const actual = findChristmasSundays(nonChristmasSundayYear, nonChristmasSundayYear + 1)

    expect(actual).not.toContain(nonChristmasSundayYear)
  })

  it('returns all years where Christmas is on a Sunday within a range', () => {
    const startYear = 2000
    const endYear = 2030

    const actual = findChristmasSundays(startYear, endYear)
    const expected = [2005, 2011, 2016, 2022]

    expect(actual).toStrictEqual(expected)
  })

  it('does not include the end year, even if the end year has Christmas on a Sunday', () => {
    const startYear = 2000
    const endYear = 2022

    const actual = findChristmasSundays(startYear, endYear)
    const expected = [2005, 2011, 2016]

    expect(actual).toStrictEqual(expected)
  })
})
