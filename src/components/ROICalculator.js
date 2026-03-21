import React from 'react';
import styles from './ROICalculator.module.css';

const ROICalculator = (props) => {
  const [monthlyVolume, setMonthlyVolume] = React.useState(30000);
  const [avgTransaction, setAvgTransaction] = React.useState(15);
  const [processorFee, setProcessorFee] = React.useState(2.6);
  
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
};

export default ROICalculator;
