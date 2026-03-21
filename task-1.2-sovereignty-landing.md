# Task 1.2: Create Sovereignty Landing Page

## Objective
Create a new landing page at `src/pages/sovereignty.js` that reframes the Cash Box as a "Sovereignty Appliance" — not just hardware, but a tool for financial independence.

## Background
The site audit (site-audit.md) is complete. You now understand the current structure. We need to add a new page that leads with merchant value, not technical specs.

## Task Steps

### Step 1: Read the site audit
cat site-audit.md

This will remind you of the existing content structure.

### Step 2: Read the existing intro.md
cat docs/intro.md

This has good content to reframe, not delete.

### Step 3: Create the landing page
Create `src/pages/sovereignty.js` with this structure:

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function Sovereignty() {
  return (
    <Layout title="Own Your Payment Stack">
      {/* Hero Section */}
      <header>
        <h1>Own Your Payment Stack</h1>
        <p>Stop renting your payment infrastructure. Start owning it.</p>
        <a href="https://store.woodcashbox.com">Get Your Sovereignty Appliance</a>
      </header>

      {/* Problem Section */}
      <section>
        <h2>The Problem</h2>
        <ul>
          <li>Cloud payment processors can freeze your account</li>
          <li>Square charges 2.6% + 10¢ per transaction</li>
          <li>Your customer data is locked in someone else's cloud</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section>
        <h2>The Solution: Cash Box</h2>
        <p>A Bitcoin Cash payment terminal you control. No monthly fees. No account freezes. Your keys, your coins, your business.</p>
        {/* Pull key specs from docs/hardware.md */}
      </section>

      {/* CTA Section */}
      <section>
        <a href="https://store.woodcashbox.com">Order Now</a>
      </section>
    </Layout>
  );
}
```

### Step 4: Test the page
```bash
npm run build
# or
npm start
```

Verify the page loads without errors.

## Acceptance Criteria
- [ ] `src/pages/sovereignty.js` exists and page renders
- [ ] No existing content deleted (only referenced, not removed)
- [ ] Primary CTA links to https://store.woodcashbox.com
- [ ] Page is mobile-responsive (Docusaurus handles this by default)

## Constraints
- **NO deletion** of existing content
- Use existing docs content — reframe it, don't rewrite from scratch
- Lead with merchant value (financial independence), not technical specs

## When Done
1. Test that the page builds without errors
2. git add src/pages/sovereignty.js
3. git commit -m "Add sovereignty landing page for merchant positioning"
4. git push origin bot-unstable
5. Reply: "task-1.2 complete"
