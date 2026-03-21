import React from 'react';
import Layout from '@theme/Layout';
import styles from './coffee-shop.module.css';

export default function CoffeeShop() {
  return (
    <Layout title="Your Coffee Shop, Your Bank">
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Your Coffee Shop, Your Bank</h1>
        <p>A brick-and-mortar business where you keep 100% of your earnings</p>
      </section>

      {/* Problem Section */}
      <section className={styles.problem}>
        <h2>The Hidden Cost Counterfeit Payments</h2>
        
        <div className={styles.feeComparison}>
          <div className={styles.costCard}>
            <h3>With Traditional Processors</h3>
            <p>Square takes 2.6% of every $5 latte = real money lost monthly</p>
            <ul>
              <li>$13/transaction on a $500 sale</li>
              <li>Monthly fees and account holds</li>
              <li>Customer data sent to their servers</li>
            </ul>
          </div>

          <div className={styles.costCard}>
            <h3>With Cash Box</h3>
            <p>Transparent BCH payments, no percentage fees</p>
            <ul>
              <li>Nearly zero network fees (~$0.001/tx)</li>
              <li>No account freezes - funds available immediately</li>
              <li>Your data stays local on your terminal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Cash Box for Coffee Shops: Perfect for Counter Transactions</h2>
        
        <div className={styles.benefitGrid}>
          <div className={styles.benefitItem}>
            <h3>✓ Keep 100% of Tips</h3>
            <p>No processor taking a cut of customer tips or revenue</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ No Account Freezes</h3>
            <p>Funds available during busy morning and weekend rushes</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Customer Data Stays Local</h3>
            <p>Your loyalty program data never leaves your control</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Simple Hardware</h3>
            <p>Compact terminal designed for counter-side operation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Take Back Your Coffee Shop?</h2>
        <p className={styles.limited}>Join merchants in 12+ countries who've already made the switch</p>
        <a href="https://store.woodcashbox.com" className={styles.ctaButton}>
          Get Your Cash Box
        </a>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          See it in action: <a href="https://pos.cash">pos.cash</a> payment terminal screenshot gallery
        </p>
      </section>

      {/* Footer/Notes */}
      <section className={styles.sources}>
        <h3>Sources (Payment Processor Research)</h3>
        <ul>
          <li><strong>Square Fees:</strong> 2.6% + 10¢ per transaction on Free/Standard plans</li>
          <li><strong>Cash Box:</strong> BCH network fees ~$0.001 per transaction</li>
          <li><strong>Loyalty Data:</strong> Processed locally, never centralized</li>
        </ul>
      </section>
    </Layout>
  );
}