# Task 2.2: Build Merchant ROI Calculator

## Objective
Create an interactive React calculator component at `src/components/ROICalculator.js` that shows merchants their savings with Cash Box vs traditional processors.

## Background
You just built the comparison page (Task 2.1). Now merchants need a tool to calculate their specific savings.

## What to Build

Create `src/components/ROICalculator.js`:

```jsx
import React, { useState } from 'react';
import styles from './ROICalculator.module.css';

export default function ROICalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(30000);
  const [avgTransaction, setAvgTransaction] = useState(15);
  const [processorFee, setProcessorFee] = useState(2.6);
  
  // Calculations
  const transactionsPerMonth = Math.round(monthlyVolume / avgTransaction);
  const currentMonthlyCost = (monthlyVolume * (processorFee / 100)) + (transactionsPerMonth * 0.10);
  const cashBoxMonthlyCost = 27.78; // $1,000 / 36 months amortization
  const monthlySavings = currentMonthlyCost - cashBoxMonthlyCost;
  const breakEvenMonths = Math.ceil(1000 / monthlySavings);
  const threeYearSavings = (monthlySavings * 36) - 1000; // Subtract hardware cost

  return (
    <div className={styles.calculator}>
      <h2>Calculate Your Savings</h2>
      
      {/* Inputs */}
      <div className={styles.inputs}>
        <label>
          Monthly Transaction Volume: ${monthlyVolume.toLocaleString()}
          <input 
            type="range" 
            min="5000" 
            max="100000" 
            step="1000"
            value={monthlyVolume}
            onChange={(e) => setMonthlyVolume(Number(e.target.value))}
          />
        </label>
        
        <label>
          Average Transaction: ${avgTransaction}
          <input 
            type="range" 
            min="5" 
            max="100" 
            step="1"
            value={avgTransaction}
            onChange={(e) => setAvgTransaction(Number(e.target.value))}
          />
        </label>
        
        <label>
          Current Processor Fee: {processorFee}%
          <input 
            type="range" 
            min="1.5" 
            max="3.5" 
            step="0.1"
            value={processorFee}
            onChange={(e) => setProcessorFee(Number(e.target.value))}
          />
        </label>
      </div>
      
      {/* Results */}
      <div className={styles.results}>
        <div className={styles.resultBox}>
          <h3>Current Monthly Cost</h3>
          <p className={styles.cost}>${Math.round(currentMonthlyCost).toLocaleString()}/mo</p>
        </div>
        
        <div className={styles.resultBox}>
          <h3>Cash Box Monthly Cost</h3>
          <p className={styles.savings}>${Math.round(cashBoxMonthlyCost).toLocaleString()}/mo</p>
        </div>
        
        <div className={styles.resultBox}>
          <h3>Monthly Savings</h3>
          <p className={styles.savings}>${Math.round(monthlySavings).toLocaleString()}/mo</p>
        </div>
        
        <div className={styles.resultBox}>
          <h3>3-Year Savings</h3>
          <p className={styles.bigSavings}>${Math.round(threeYearSavings).toLocaleString()}</p>
        </div>
        
        <div className={styles.resultBox}>
          <h3>Break-Even</h3>
          <p>{breakEvenMonths} months</p>
        </div>
      </div>
    </div>
  );
}
```

Also create `src/components/ROICalculator.module.css` with basic styling that matches the site.

## Acceptance Criteria
- [ ] `src/components/ROICalculator.js` exists and works
- [ ] `src/components/ROICalculator.module.css` exists with responsive styling
- [ ] Calculator shows correct calculations for sample inputs
- [ ] Add calculator to sovereignty landing page: edit `src/pages/sovereignty.js` to import and display `<ROICalculator />`
- [ ] npm run build succeeds

## Calculations Reference
- Cash Box cost: $1,000 hardware, amortized over 36 months = $27.78/month
- Traditional processor: (monthlyVolume × fee%) + (transactions × $0.10)
- Three-year savings: (monthly savings × 36) - $1,000 hardware cost

## When Done
1. npm run build (verify no errors)
2. git add src/components/ROICalculator.js src/components/ROICalculator.module.css src/pages/sovereignty.js
3. git commit -m "Add merchant ROI calculator component"
4. git push origin bot-unstable
5. Reply: "task-2.2 complete"
