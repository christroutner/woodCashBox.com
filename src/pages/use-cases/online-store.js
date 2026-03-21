import React from 'react';
import Layout from '@theme/Layout';
import styles from './online-store.module.css';

export default function OnlineStore() {
  return (
    <Layout title="E-commerce Without the E-fees">
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>E-commerce Without the E-fees</h1>
        <p>A digital storefront where international customers pay without hidden fees</p>
      </section>

      {/* Problem Section */}
      <section className={styles.problem}>
        <h2>The Hidden Cost of Every Click</h2>
        
        <div className={styles.feeComparison}>
          <div className={styles.costCard}>
            <h3>With PayPal/Stripe</h3>
            <p>PayPal and Stripe taking 2.9% + 30¢ per transaction</p>
            <ul>
              <li>$10.70 fee on a $50 sale</li>
              <li>Currency conversion fees up to 4%</li>
              <li>Chargebacks drain your margins</li>
              <li>Funds held for 2-7 days pending review</li>
            </ul>
          </div>

          <div className={styles.costCard}>
            <h3>With Cash Box + BCH</h3>
            <p>Direct Bitcoin Cash checkout, settlement is final</p>
            <ul>
              <li>~$0.001 network fees regardless of amount</li>
              <li>No currency conversion - customers pay in their local fiat</li>
              <li>No chargebacks on BCH settlements</li>
              <li>Immediate settlement - same day if processed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Cash Box for E-commerce: Global Commerce Made Simple</h2>
        
        <div className={styles.benefitGrid}>
          <div className={styles.benefitItem}>
            <h3>✓ International Payments</h3>
            <p>Customers pay in USD, EUR, JPY - they convert to BCH automatically with no intermediary fees</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ No Chargebacks</h3>
            <p>BCH transactions are irreversible - final settlement, not pending approval</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Lower Fees on High Volume</h3>
            <p>$0.001 per transaction vs 2.9% + 30¢ saves thousands monthly</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Direct Wallet Integration</h3>
            <p>Your own BCH address, no third-party holds or restrictions</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How E-commerce with BCH Works</h2>
        
        <div className={styles.workflowSteps}>
          <div className={styles.step}>
            <h4>Step 1: Customer Checkout</h4>
            <p>Customer clicks checkout button, enters their crypto wallet or pays via fiat through our payment gateway (we convert to BCH behind the scenes)</p>
          </div>

          <div className={styles.step}>
            <h4>Step 2: Instant Confirmation</h4>
            <p>BCH network confirms transactions in ~10 minutes, funds arrive immediately in your wallet</p>
          </div>

          <div className={styles.step}>
            <h4>Step 3: Record Transaction</h4>
            <p>Txn hash auto-sent to your order management system - immutable record never changes</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Start Accepting Bitcoin Cash Today</h2>
        <p className={styles.limited}>Limited spots available for Q2 2026 delivery</p>
        <a href="https://store.woodcashbox.com" className={styles.ctaButton}>
          Start Accepting BCH
        </a>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          Demo the terminal: <a href="https://pos.cash">pos.cash</a> payment processing screenshot collection
        </p>
      </section>

      {/* Footer/Notes */}
      <section className={styles.sources}>
        <h3>Sources (Payment Processor Pricing)</h3>
        <ul>
          <li><strong>Stripe/PayPal Fees:</strong> 2.9% + 30¢ per transaction</li>
          <li><strong>International:</strong> Additional 1-4% currency conversion fees</li>
          <li><strong>Cash Box Hardware:</strong> $399 one-time cost</li>
          <li><strong>BCH Fees:</strong> ~$0.001 per transaction, settlement final</li>
        </ul>
      </section>
    </Layout>
  );
}