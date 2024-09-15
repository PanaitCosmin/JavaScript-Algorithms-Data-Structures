const isvalidParentheses = require('../../src/stack/valid_parentheses')

test('should return true', () => {
    expect(isvalidParentheses("()")).toBe(true)
    expect(isvalidParentheses("()[]{}")).toBe(true)
    expect(isvalidParentheses("{[(())]}")).toBe(true)
})

test('should return false', () => {
    expect(isvalidParentheses('(]')).toBe(false)
    expect(isvalidParentheses('()[[{}')).toBe(false)
    expect(isvalidParentheses('[[({)]]')).toBe(false)
})