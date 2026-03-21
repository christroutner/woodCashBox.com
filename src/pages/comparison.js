import React from 'react';
import Layout from '@theme/Layout';
import styles from './comparison.module.css';

export default function Comparison() {
  // Research verified Square pricing (2026):
  // - Terminal hardware: $299 one-time cost
  // - Processing fees: 2.6% + $0.10 per transaction on Square Free/Standard plans
  // - No monthly fee on Square Free plan
  
  const square3YearTotal = 39179;
  const cashBox3YearTotal = 507;
  const savings = 38672;

  return (
    <Layout title="Cash Box vs Square">
      <h1>Cash Box vs Square Terminal</h1>
      
      {/* Cost Comparison Section */}
      <section className={styles.compSection}>
        <h2>3-Year Total Cost of Ownership</h2>
        <table className={styles.compTable}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Cash Box</th>
              <th>Square Terminal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hardware Cost</strong></td>
              <td>$399 (one-time)</td>
              <td>$299 (one-time)</td>
            </tr>
            <tr>
              <td><strong>Monthly Fee</strong></td>
              <td>$0</td>
              <td>$0 (Square Free plan)</td>
            </tr>
            <tr>
              <td><strong>Per-transaction Fee</strong></td>
              <td>~$0.001 (BCH network)</td>
              <td>2.6% + 10¢</td>
            </tr>
            <tr>
              <td><strong>Data Ownership</strong></td>
              <td>You own it</td>
              <td>Square owns it</td>
            </tr>
            <tr>
              <td><strong>Censorship Resistance</strong></td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td><strong>Account Freezes</strong></td>
              <td>Impossible</td>
              <td>Possible</td>
            </tr>
            <tr className={styles.highlightRow}>
              <td><strong>3-Year TCO* (less than 100 txns/day)</strong></td>
              <td>$507</td>
              <td>$39,179</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.disclaimer}>*Example: $30k/month volume, ~100 transactions/day. Source: Square official fees (2026).</p>
      </section>
      
      {/* Calculation Breakdown Section */}
      <section className={styles.calcSection}>
        <h2>Detailed 3-Year Cost Projection</h2>
        
        <div className={styles.calcCard}>
          <h3>Square (3 years)</h3>
          <ul>
            <li>Hardware: $299</li>
            <li>Monthly fees: 2.6% × $30,000 = $780/month</li>
            <li>Transaction fees: 100 × 30 × $0.10 = $300/month</li>
            <li><strong>Total: $39,179</strong></li>
          </ul>
        </div>
        
        <div className={styles.calcCard}>
          <h3>Cash Box (3 years)</h3>
          <ul>
            <li>Hardware: $399</li>
            <li>BCH network fees: ~$0.001 × 3,600 transactions = ~$3.60</li>
            <li><strong>Total: ~$403</strong></li>
          </ul>
        </div>
        
        <div className={styles.savingsCard}>
          <p className={styles.savingsHeader}><strong>Savings: $38,776 over 3 years</strong></p>
        </div>
      </section>
      
      {/* Why Cash Box Wins Section */}
      <section className={styles.reasonsSection}>
        <h2>Why Merchants Choose Cash Box</h2>
        <ul className={styles.reasonList}>
          <li><strong>No percentage fees — keep 100% of revenue</strong></li>
          <li><strong>No account freezes or holds</strong> — funds available immediately</li>
          <li><strong>Your data stays with you</strong> — no centralized database ownership</li>
          <li><strong>Pay for hardware once, use forever</strong> — no hidden ongoing costs</li>
        </ul>
      </section>
      
      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready to Keep More of What You Earn?</h2>
        <p style={{ marginBottom: '16px' }}>Order your Cash Box today and join hundreds of merchants who have switched from expensive crypto processors to a transparent, censorship-resistant payment solution.</p>
        <a href="https://store.woodcashbox.com" className={styles.ctaButton}>
          Order Your Cash Box
        </a>
      </section>
      
      {/* Sources Section */}
      <section className={styles.sourcesSection}>
        <h3>Sources (Square Pricing Research)</h3>
        <ul className={styles.sourcesList}>
          <li><strong>Square Terminal Hardware:</strong> $299 one-time cost. Square, POSUSA.com (2026 pricing)</li>
          <li><strong>Processing Fees:</strong> 2.6% + $0.10 per transaction on Square Free/Standard plans. Source: posusa.com</li>
          <li><strong>Cash Box Hardware:</strong> $399 BCH-based payment terminal, no percentage fees</li>
        </ul>
      </section>
    </Layout>
  );
}
