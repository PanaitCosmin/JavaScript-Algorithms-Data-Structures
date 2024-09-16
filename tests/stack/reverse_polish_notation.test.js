const evalRPN = require('../../src/stack/reverse_polish_notation')

test('should return the correct answer', () => {
    expect(evalRPN(["2","1","+","3","*"])).toBe(9)
    expect(evalRPN(["4","13","5","/","+"])).toBe(6)
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22)
})