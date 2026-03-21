# Task 2.1: Create Cash Box vs Square Comparison Page

## Objective
Build a comparison page showing Cash Box vs Square Terminal at `src/pages/comparison.js`.

## Research Required (Use Your Tools)
Before writing, research current Square Terminal pricing:
1. Use web_search to find "Square Terminal pricing 2026"
2. Use web_fetch to get accurate per-transaction fees
3. Verify Square's current hardware cost

Your extensions are at: /home/ben/pi-backup/extensions/
- web_search
- web_fetch  
- web_research

## Comparison Table Content

| Feature | Cash Box | Square Terminal |
|---------|----------|-----------------|
| Hardware Cost | $399 (one-time) | $299 (one-time) |
| Monthly Fee | $0 | $0 |
| Per-transaction Fee | ~$0.001 (BCH network) | 2.6% + 10¢ |
| Data Ownership | You own it | Square owns it |
| Censorship Resistance | Yes | No |
| Account Freezes | Impossible | Possible |
| 3-Year TCO (example) | $399 | ~$2,800+ in fees |

## Example Calculation ($30k/month volume, 100 transactions/day)

**Square (3 years):**
- Hardware: $299
- Monthly fees: 2.6% × $30,000 = $780/month
- Transaction fees: 100 × 30 × $0.10 = $300/month
- Total: $299 + ($1,080 × 36) = **$39,179**

**Cash Box (3 years):**
- Hardware: $399
- BCH network fees: ~$0.001 × 3,000 × 36 = ~$108
- Total: **$507**

**Savings: $38,672 over 3 years**

## Page Structure
```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function Comparison() {
  return (
    <Layout title="Cash Box vs Square">
      <h1>Cash Box vs Square Terminal</h1>
      
      {/* Cost Comparison Section */}
      <section>
        <h2>3-Year Total Cost of Ownership</h2>
        <table>
          {/* Comparison table */}
        </table>
        <p>Example: $30k/month volume, 100 transactions/day</p>
      </section>
      
      {/* Why Cash Box Wins Section */}
      <section>
        <h2>Why Merchants Choose Cash Box</h2>
        <ul>
          <li>No percentage fees — keep 100% of revenue</li>
          <li>No account freezes or holds</li>
          <li>Your data stays with you</li>
          <li>Pay for hardware once, use forever</li>
        </ul>
      </section>
      
      {/* CTA */}
      <section>
        <a href="https://store.woodcashbox.com">Order Your Cash Box</a>
      </section>
    </Layout>
  );
}
```

## Acceptance Criteria
- [ ] Page created at `src/pages/comparison.js`
- [ ] Comparison table with accurate Square pricing (researched)
- [ ] 3-year cost projection included
- [ ] Mobile-responsive table
- [ ] Sources cited at bottom of page

## Constraints
- **NO deletion** of existing content
- Research actual Square pricing — don't guess
- Make calculations transparent and verifiable

## When Done
1. npm run build (verify no errors)
2. git add src/pages/comparison.js
3. git commit -m "Add Cash Box vs Square comparison page"
4. git push origin bot-unstable
5. Reply: "task-2.1 complete"
