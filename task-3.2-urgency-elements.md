# Task 3.2: Add Urgency Elements to Store Links

## Objective
Add tasteful urgency messaging to store CTAs on the main site.

## What to Update

### 1. Update `src/pages/sovereignty.js`
Add urgency banner before the main CTA:
```jsx
<div className={styles.urgencyBanner}>
  <p>🔥 Limited production run — Each Cash Box is handmade and tested</p>
  <p>⏱️ Current build queue: Ships within 5-7 business days</p>
</div>
```

### 2. Update `src/pages/use-cases/coffee-shop.js`
Add urgency to CTA section:
```jsx
<p className={styles.limited}>Join merchants in 12+ countries who've already made the switch</p>
```

### 3. Update `src/pages/use-cases/online-store.js`
Add urgency to CTA section:
```jsx
<p className={styles.limited}>Limited spots available for Q2 2026 delivery</p>
```

### 4. Update `src/pages/use-cases/freelancer.js`
Add urgency to CTA section:
```jsx
<p className={styles.limited}>Hand-built and tested — 2-3 days per unit</p>
```

### 5. Create CSS styles
Add to existing CSS files:
```css
.urgencyBanner {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
}

.limited {
  color: #856404;
  font-weight: bold;
}
```

## Guidelines
- Be honest — no fake scarcity
- Focus on craftsmanship and quality
- Keep it tasteful, not pushy
- Mobile responsive

## Acceptance Criteria
- [ ] Urgency elements added to sovereignty landing page
- [ ] Urgency elements added to all 3 use case pages
- [ ] npm run build succeeds
- [ ] All pages still render correctly

## When Done
1. npm run build
2. git add src/pages/sovereignty.js src/pages/use-cases/
3. git commit -m "Add urgency messaging to store CTAs"
4. git push origin bot-unstable
5. Reply: "task-3.2 complete"
