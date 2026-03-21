# Task 1.1: Audit Current Site Structure

## Objective
Create a complete audit of the WoodCashBox.com website structure. This is the foundation for reorganizing content to support the "Sovereignty Appliance" messaging.

## What to Audit

1. **docs/ directory** — All documentation pages
   - List every .md file
   - Note the purpose of each
   - Mark as "keep" or "relocate"

2. **blog/ directory** — All blog posts
   - List every .md or .mdx file
   - Note publish dates and topics
   - Mark as "keep"

3. **Navigation structure**
   - Document current docusaurus.config.js nav
   - List all sidebar items
   - Note the hierarchy

4. **src/pages/** — Custom pages
   - List all existing pages
   - Note their purpose

5. **Static assets**
   - Images
   - 3D files
   - Laser files

## Output File

Create `site-audit.md` in the repo root with this structure:

```markdown
# WoodCashBox.com Site Audit

## Summary
- Total docs pages: X
- Total blog posts: X
- Total custom pages: X

## docs/ Directory
| File | Current Location | Purpose | Action |
|------|------------------|---------|--------|
| intro.md | docs/intro.md | Overview | relocate |
...

## blog/ Directory
...

## Navigation Structure
...

## Static Assets
...

## Notes
- Any content gaps identified
- Any broken links found
```

## Constraints (CRITICAL)
- **NO deletion** — only document what exists
- **NO modifications** to existing files
- Focus on cataloging, not changing

## Acceptance Criteria
- [ ] site-audit.md exists in repo root
- [ ] All docs/ pages listed with purpose
- [ ] All blog/ posts listed with dates
- [ ] Navigation structure documented
- [ ] Each item marked as "keep" or "relocate"

## When Done
1. Review your site-audit.md for completeness
2. git add site-audit.md
3. git commit -m "Add site audit for sovereignty appliance reorg"
4. git push origin bot-unstable
5. Send API message: "task-1.1 complete"
