// LINK: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * 
 * @param {string[]} tokens 
 * @returns {number}
 */
function evalRPN(tokens) {
    // Initialize variables for operands
    let first = 0, second = 0
    // Stack to store operands for evaluation
    const stack = []

    // Iterate through every token in the input array
    for (let char of tokens) {
        // Check if the token is an operator
        switch(char) {
            case "+":
                // Get the operands
                second = stack.pop() // the second operand
                first = stack.pop() // the first operand
                // Perform and save the operation
                stack.push(first + second)
                break
            
            case "-": 
                // Get the operands
                second = stack.pop()
                first = stack.pop()
                // Perform and save the operation
                stack.push(first - second)
                break

            case "*": 
                // Get the operands
                second = stack.pop()
                first = stack.pop()
                // Perform and save the operation
                stack.push(first * second)
                break

            case "/": 
                // Get the operands
                second = stack.pop()
                first = stack.pop()
                // Perform and evaluate the operation
                let val = first / second
                // Rounds down
                if (val > 0) {
                    val = Math.floor(val)
                }
                // Rounds up
                if (val < 0) {
                    val = Math.ceil(val)
                }

                // Add the result to the stack
                stack.push(val)
                break
            
            default:
                // Convert and add the operands
                stack.push(+char)
        }
    }
    
    return stack[0]
}

module.exports = evalRPN