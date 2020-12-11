type Operator = '+' | '-' | '*' | '/';

function operate(a: number, b: number, operator: Operator): number {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Delen door null is flauwekul');
            }

            return a / b;
    }
}

export function calculator(numbers: number[], operator: Operator): number {
    return numbers.reduce((acc: number, n): number => {
        return operate(acc, n, operator);
    });
}
