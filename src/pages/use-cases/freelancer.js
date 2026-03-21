import React from 'react';
import Layout from '@theme/Layout';
import styles from './freelancer.module.css';

export default function Freelancer() {
  return (
    <Layout title="Invoice Without Intermediaries">
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Invoice Without Intermediaries</h1>
        <p>Professional contractors who get paid directly, no holds, no excuses</p>
      </section>

      {/* Problem Section */}
      <section className={styles.problem}>
        <h2>Payment Processors Holding Your Money</h2>
        
        <div className={styles.feeComparison}>
          <div className={styles.costCard}>
            <h3>With Payment Processors</h3>
            <p>Funds held, accounts frozen, clients complain about delays</p>
            <ul>
              <li>Accounts reviewed for 2-7 days after onboarding</li>
              <li>"Suspicious activity" freezes at first invoice</li>
              <li>2-5% reserve holds for "high risk"</li>
              <li>Sudden bans without appeal process</li>
            </ul>
          </div>

          <div className={styles.costCard}>
            <h3>Cash Box for Professionals</h3>
            <p>Your BCH wallet, your rules, immediate settlement</p>
            <ul>
              <li>No account review - you control your own keys</li>
              <li>Professional invoices with BCH address</li>
              <li>Client pays network fees, not you</li>
              <li>Global payments via simple QR code or address</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Cash Box for Freelancers: Full Control Over Your Income</h2>
        
        <div className={styles.benefitGrid}>
          <div className={styles.benefitItem}>
            <h3>✓ Get Paid Directly, No Holds</h3>
            <p>Funds available immediately - invoice settlement is final</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Professional BCH Invoices</h3>
            <p>Generate invoices with your public address, include QR codes</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Client Pays Fees, Not You</h3>
            <p>Show clients their BCH network fee - you keep 100% of earnings</p>
          </div>

          <div className={styles.benefitItem}>
            <h3>✓ Global Clients, Easy Payments</h3>
            <p>Accept from anyone anywhere - no geo-blocking or restrictions</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={styles.workflow}>
        <h2>Your Freelance Payment Flow With Cash Box</h2>
        
        <div className={styles.invoiceSection}>
          <h3>1. Create Invoice</h3>
          <p>Use your own tools (Fiverr, Upwork, custom) or generate a simple BCH invoice with address and amount</p>
        </div>

        <div className={styles.invoiceSection}>
          <h3>2. Send BCH Address</h3>
          <p>Client scans QR code or copies BCH address - funds go directly to your wallet</p>
        </div>

        <div className={styles.invoiceSection}>
          <h3>3. Confirm Transaction</h3>
          <p>BCH network confirms in ~10 minutes - money arrives immediately, not pending 7-day review</p>
        </div>

        <div className={styles.invoiceSection}>
          <h3>4. Report Income</h3>
          <p>Record transaction hash in your accounting system - immutable proof of payment received</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Own Your Payment Stack</h2>
        <p>Professional contractors worldwide are switching from fragile processor accounts to direct BCH payments.</p>
        <a href="https://store.woodcashbox.com" className={styles.ctaButton}>
          Own Your Payment Stack
        </a>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          See the hardware: <a href="https://pos.cash">pos.cash</a> payment terminal screenshot gallery
        </p>
      </section>

      {/* Footer/Notes */}
      <section className={styles.sources}>
        <h3>Sources (Freelance Payment Issues)</h3>
        <ul>
          <li><strong>Processor Holds:</strong> Stripe/PayPal reserve 2-5% for 30+ days on new accounts</li>
          <li><strong>Account Bans:</strong> "Terms of service violation" with no appeal process</li>
          <li><strong>Cash Box:</strong> $399 terminal or your own phone - full control from day one</li>
        </ul>
      </section>
    </Layout>
  );
}