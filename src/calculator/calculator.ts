type Operator = '+' | '-' | '*' | '/';

export function calculator(a: number, b: number, operator: Operator): number {
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
