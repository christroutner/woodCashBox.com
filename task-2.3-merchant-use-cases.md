# Task 2.3: Create Merchant Use Case Pages

## Objective
Create three merchant use case pages showing how Cash Box works for different business types.

## Pages to Create

### 1. Coffee Shop (`src/pages/use-cases/coffee-shop.js`)
**Target:** Local brick-and-mortar businesses

**Content:**
- Hero: "Your Coffee Shop, Your Bank"
- Problem: Square taking 2.6% of every $5 latte = real money lost monthly
- Solution: Cash Box for counter transactions, no percentage fees
- Benefits:
  - Keep 100% of tips (no processor taking cut)
  - No account freezes during busy seasons
  - Customer data stays local
- CTA: "Get Your Cash Box"

### 2. Online Store (`src/pages/use-cases/online-store.js`)
**Target:** E-commerce merchants

**Content:**
- Hero: "E-commerce Without the E-fees"
- Problem: PayPal/Stripe taking 2.9% + 30¢ per transaction
- Solution: Bitcoin Cash checkout with Cash Box
- Benefits:
  - International payments without currency conversion fees
  - No chargebacks (BCH is final settlement)
  - Lower fees on high-volume sales
- CTA: "Start Accepting BCH"

### 3. Freelancer (`src/pages/use-cases/freelancer.js`)
**Target:** Independent professionals

**Content:**
- Hero: "Invoice Without Intermediaries"
- Problem: Payment processors holding funds, freezing accounts
- Solution: Direct BCH payments to your own wallet
- Benefits:
  - Get paid directly, no holds
  - Professional invoices with BCH addresses
  - Client pays fees, not you
- CTA: "Own Your Payment Stack"

## Technical Requirements
- Create `src/pages/use-cases/` directory
- Each page is a React component using Layout from '@theme/Layout'
- Include navigation between use cases
- Mobile responsive

## Content Sources
- Pull from existing docs/intro.md
- Reference hardware specs from docs/hardware.md
- Use POS.cash screenshots (link to pos.cash screenshots)

## Acceptance Criteria
- [ ] `src/pages/use-cases/coffee-shop.js` created
- [ ] `src/pages/use-cases/online-store.js` created
- [ ] `src/pages/use-cases/freelancer.js` created
- [ ] Each page has clear CTA to store
- [ ] npm run build succeeds

## When Done
1. npm run build (verify no errors)
2. git add src/pages/use-cases/
3. git commit -m "Add merchant use case pages"
4. git push origin bot-unstable
5. Reply: "task-2.3 complete"
