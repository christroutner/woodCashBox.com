import React from 'react';
import Layout from '@theme/Layout';
import ROICalculator from '../components/ROICalculator';


export default function Sovereignty() {
  return (
    <Layout title="Own Your Payment Stack">
      {/* Hero Section */}
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Own Your Payment Stack</h1>
        <p>Stop renting your payment infrastructure. Start owning it.</p>
        <a href="https://store.woodcashbox.com" style={{ color: '#f7931a', fontWeight: 'bold', fontSize: '1.2rem' }}>Get Your Sovereignty Appliance</a>
      </header>

      {/* Problem Section */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2>The Problem</h2>
        <ul>
          <li>Cloud payment processors can freeze your account without notice</li>
          <li>Square charges 2.6% + 10¢ per transaction — and those fees keep growing</li>
          <li>Your customer data is locked in someone else's cloud, not yours</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2>The Solution: Cash Box</h2>
        <p>A Bitcoin Cash payment terminal you control. No monthly fees. No account freezes. Your keys, your coins, your business.</p>
        
        <h3 style={{ marginTop: '1.5rem' }}>What You Get</h3>
        <ul>
          <li><strong>Hardware Appliance:</strong> Raspberry Pi 5, 10.5" touch screen, and 2TB storage in a beautiful wooden enclosure</li>
          <li><strong>Full Node Control:</strong> Run your own Bitcoin Cash node — no third parties, no middlemen</li>
          <li><strong>Private Transactions:</strong> Use Cash Fusion for CoinJoin privacy protection</li>
          <li><strong>Zero Fees:</strong> Accept BCH with minimal on-chain fees — keep what you earn</li>
        </ul>

        <h3 style={{ marginTop: '1.5rem' }}>Why Merchants Love It</h3>
        <p>The Cash Box works as a Point of Sale terminal. Mount it to the wall, keep it on a counter — your choice. Accept Bitcoin Cash payments and keep 100% of every penny.</p>
        
        {/* Calculate Your Savings */}
        <section style={{ maxWidth: '800px', margin: '3rem auto', padding: '2rem' }}>
          <ROICalculator />
        </section>
      </section>

      {/* Urgency Banner */}
      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', padding: '1rem', margin: '1rem 0', borderRadius: '4px' }}>
        <p style={{ color: '#856404' }}>🔥 Limited production run — Each Cash Box is handmade and tested</p>
        <p style={{ color: '#856404' }}>⏱️ Current build queue: Ships within 5-7 business days</p>
      </div>

      {/* CTA Section */}
      <section style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h2>Ready to Own Your Payment Stack?</h2>
        <a href="https://store.woodcashbox.com" style={{ color: '#f7931a', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'underline' }}>Order Now</a>
      </section>
    </Layout>
  );
}
