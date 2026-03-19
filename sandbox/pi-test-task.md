# Pi Test Task: Simple Calculator Module

**Goal:** Create a simple calculator module to test Pi's workflow and Git integration.

---

## Your Task

Create a JavaScript calculator module at `/home/pi/work/woodCashBox.com/sandbox/calculator.js`

### Requirements

1. Create a `calculator` object with these methods:
   - `add(a, b)` — returns sum of two numbers
   - `subtract(a, b)` — returns difference
   - `multiply(a, b)` — returns product
   - `divide(a, b)` — returns quotient, handles divide-by-zero

2. Each method should:
   - Validate inputs are numbers
   - Return `null` for invalid inputs
   - Include JSDoc comments

3. Add a simple test at the bottom:
   ```javascript
   // Test the calculator
   console.log('2 + 3 =', calculator.add(2, 3));
   console.log('10 - 4 =', calculator.subtract(10, 4));
   console.log('5 * 6 =', calculator.multiply(5, 6));
   console.log('20 / 4 =', calculator.divide(20, 4));
   console.log('10 / 0 =', calculator.divide(10, 0));
   console.log('Invalid:', calculator.add('a', 5));
   ```

### Example Output When Run

```
2 + 3 = 5
10 - 4 = 6
5 * 6 = 30
20 / 4 = 5
10 / 0 = null
Invalid: null
```

---

## Steps to Complete

1. **Pull latest changes**
   ```bash
   cd /home/pi/work/woodCashBox.com
   git pull origin bot-unstable
   ```

2. **Create the file**
   - Read this task file for full requirements
   - Create `/home/pi/work/woodCashBox.com/sandbox/calculator.js`

3. **Test your code**
   ```bash
   cd /home/pi/work/woodCashBox.com/sandbox
   node calculator.js
   ```

4. **Commit and push**
   ```bash
   cd /home/pi/work/woodCashBox.com
   git add sandbox/calculator.js
   git commit -m "Pi: Add calculator module (test task)"
   git push origin bot-unstable
   ```

5. **Report completion**
   - Reply in Telegram: "Task complete: calculator.js created and pushed"

---

## Notes

- Work only in the `sandbox/` directory
- This is a test task to verify the Pi workflow
- Ask if anything is unclear
