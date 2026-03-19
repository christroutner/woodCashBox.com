# Pi Test Task: Calculator Module

**Goal:** Create a simple calculator module.

## Your Task

Create `/home/pi/work/woodCashBox.com/sandbox/calculator.js` with a calculator object:

- `add(a, b)` — returns sum
- `subtract(a, b)` — returns difference
- `multiply(a, b)` — returns product
- `divide(a, b)` — returns quotient (null if divide by zero)

Each method should validate inputs are numbers and return null for invalid input.

Include this test at the bottom:
```javascript
console.log('2 + 3 =', calculator.add(2, 3));
console.log('10 - 4 =', calculator.subtract(10, 4));
console.log('5 * 6 =', calculator.multiply(5, 6));
console.log('20 / 4 =', calculator.divide(20, 4));
console.log('10 / 0 =', calculator.divide(10, 0));
console.log('Invalid:', calculator.add('a', 5));
```

## Steps
1. `cd /home/pi/work/woodCashBox.com`
2. `git pull origin bot-unstable`
3. Create the file
4. `node sandbox/calculator.js` (test it)
5. `git add sandbox/calculator.js`
6. `git commit -m "Pi: Add calculator module"`
7. `git push origin bot-unstable`

Report completion when done.
