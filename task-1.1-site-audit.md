# Task 1.1: Audit Current Site Structure

**Assignee:** Pi  
**Branch:** `bot-unstable` (already on this branch)  
**Repository:** `/home/pi/work/woodCashBox.com`

---

## Objective
List all existing pages, document navigation structure, catalog content in docs/ and blog/. Create site-audit.md in repo root.

## Steps

1. **Catalog all docs/ pages**
   - List every .md file in the docs/ directory
   - Note the purpose of each page
   - Identify which are technical vs merchant-focused

2. **Catalog all blog/ posts**
   - List all posts in blog/
   - Note dates and topics

3. **Document navigation structure**
   - Check docusaurus.config.js for current nav
   - Note sidebar organization

4. **Mark content as "keep" or "relocate"**
   - "keep" = stays in current location
   - "relocate" = move to new section (but don't delete)

## Output File

Create `site-audit.md` in the repo root with this structure:

```markdown
# Site Audit Report

## docs/ Pages
| File | Purpose | Action |
|------|---------|--------|
| intro.md | Introduction | relocate |
| ... | ... | ... |

## blog/ Posts
| File | Date | Topic | Action |
|------|------|-------|--------|
| ... | ... | ... | ... |

## Current Navigation
- Nav item 1 → links to...
- Nav item 2 → links to...

## Proposed Changes
- Move X from Y to Z
- Add new section for...
```

## Acceptance Criteria
- [ ] All docs/ pages catalogued
- [ ] All blog/ posts catalogued
- [ ] Navigation structure documented
- [ ] Content marked as "keep" or "relocate"

## Critical Constraint
**NO DELETION ALLOWED** — Move or reorganize only. Never delete existing content.

---

When complete:
1. Commit: `git add site-audit.md && git commit -m "1.1 Add site audit report"`
2. Push: `git push origin bot-unstable`
3. Message Ben in Telegram that Task 1.1 is complete
