import stringModule from './strings'
const { getStringByLanguage } = stringModule

describe('translations strings tests', () => {
  let originalConsoleWarn
  const mockWarn = jest.fn()

  beforeEach(() => {
    originalConsoleWarn = console.warn
    console.warn = mockWarn
  })

  afterEach(() => {
    console.warn = originalConsoleWarn
    mockWarn.mockClear()
  })

  test('returns correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit')
    expect(string).toContain('Submit')
    expect(mockWarn).not.toHaveBeenCalled()
  })

  test('returns correct submit string for portuguese', () => {
    const string = getStringByLanguage('pt', 'submit')
    expect(string).toContain('Manda vê')
    expect(mockWarn).not.toHaveBeenCalled()
  })

  test('returns english submit string when language does not exist', () => {
    const string  = getStringByLanguage('notALanguage', 'submit')
    expect(string).toContain('Submit')
    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [notALanguage]")
  })

  test('returns english submit string when submit key does not exist for language', () => {
    const string  = getStringByLanguage('ru', 'submit')
    expect(string).toContain('Submit')
    expect(mockWarn).toHaveBeenCalledTimes(1)
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [ru]")
  })
})