# Task 1.3: Restructure Site Navigation

## Objective
Update `docusaurus.config.js` to reorganize navigation for the "Sovereignty Appliance" positioning.

## Background
You just created `src/pages/sovereignty.js` (Task 1.2). Now we need navigation that leads with that page.

## What to Do

### Step 1: Read the current docusaurus.config.js
cat docusaurus.config.js

Look for the `themeConfig.navbar.items` section.

### Step 2: Update the navigation
Edit `docusaurus.config.js` to implement this structure:

**New Navbar (left side):**
1. "Sovereignty Appliance" → `/sovereignty` (NEW - lead with this)
2. "Build Your Own" → `/docs/intro` (keep existing docs intro)
3. "Technical" → dropdown with:
   - Hardware → `/docs/hardware`
   - Assembly → `/docs/assembly`
   - Software → `/docs/software`
4. "Store" → https://store.woodcashbox.com (keep existing)

**New Sidebar Organization:**
Update `sidebars.js` to group by audience:
- "For Merchants" section (leads with sovereignty content)
- "For Builders" section (technical docs)
- "Reference" section (support, laser engraving)

### Step 3: Test the changes
```bash
npm run build
```

Make sure it builds without errors.

### Step 4: Verify navigation
```bash
npm start
```

Open browser, check:
- [ ] "Sovereignty Appliance" appears first in navbar
- [ ] All links work
- [ ] Mobile hamburger menu shows correct items
- [ ] No 404s when clicking around

## Acceptance Criteria
- [ ] `docusaurus.config.js` updated with new navbar
- [ ] `sidebars.js` organized by audience type
- [ ] All existing pages still accessible (no broken links)
- [ ] Mobile menu works correctly
- [ ] Build succeeds without errors

## Constraints
- **NO deletion** of existing routes
- All old URLs must still work
- Preserve all existing content

## When Done
1. git add docusaurus.config.js sidebars.js
2. git commit -m "Restructure navigation for sovereignty appliance messaging"
3. git push origin bot-unstable
4. Reply: "task-1.3 complete"
