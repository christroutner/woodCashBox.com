# WoodCashBox.com Site Audit

## Summary
- Total docs pages: 6
- Total blog posts: 4
- Total custom pages: 2

## docs/ Directory
| File | Current Location | Purpose | Action |
|------|------------------|---------|--------|
| intro.md | docs/intro.md | Overview of Cash Box, hardware, software stack | relocate |
| support.md | docs/support.md | Telegram channel and support info | keep |
| hardware.md | docs/hardware.md | Hardware components (screen, Pi, storage) with Amazon links | relocate |
| assembly.md | docs/assembly.md | Physical assembly instructions with images | relocate |
| software.md | docs/software.md | Software infrastructure and app descriptions | relocate |
| laser-engraving.md | docs/laser-engraving.md | 3D print and laser design file documentation | relocate |

## blog/ Directory
| File | Date | Topic | Status |
|------|------|-------|--------|
| first-blog-post.md | 2019-05-28 | Placeholder lorem ipsum post | keep |
| 2021-08-26-welcome/index.md | 2021-08-26 | Welcome with Docusaurus blog features tips | keep |
| 2019-05-29-long-blog-post.md | 2019-05-29 | Long placeholder blog post | keep |
| 2021-08-01-mdx-blog-post.mdx | 2021-08-01 | MDX interactive example with JSX | keep |

## Navigation Structure
**Navbar (left/sidebar):**
- Docs → tutorialSidebar (auto-generated from docs/)
- Store → https://store.woodcashbox.com

**Navbar (right/header):**
- GitHub → https://github.com/facebook/docusaurus

**Footer Links:**
- Docs → Tutorial (/docs/intro)
- Community → Stack Overflow, Discord, X
- More → Blog (/blog), GitHub

## Static Assets
**Images in docs/img/ (12 files):**
- block-explorer.png
- box-assembly.jpg
- NVME-hat.jpg
- assembly-1-corner.jpg
- electron-cash.png
- corner-bracket-3d.png
- assembly-2-back.jpg
- punch-out.png
- pos.cash.png
- screen-assembly.jpg
- offset-plate.png
- back-and-sides.png
- screen-mount.png

**SVG files in static/img/ (4 files):**
- undraw_docusaurus_tree.svg
- undraw_docusaurus_mountain.svg
- logo.svg
- undraw_docusaurus_react.svg

**3D/Laser Files:**
Referenced in docs but not stored locally:
- corner-bracket.stl (referenced in laser-engraving.md)
- cable-plug.stl (referenced in laser-engraving.md)
- screen-mount.lbrn2 (referenced in laser-engraving.md)
- back-and-sides.lbrn2 (referenced in laser-engraving.md)

Notes: 3D and laser files are hosted externally at https://github.com/christroutner/cash-box design repository.

## Notes
- **Content Gaps:** No dedicated pages specifically for "Sovereignty Appliance" messaging
- **Broken Links:** None detected in current file structure
- **Action Items:** All docs content should be reviewed for alignment with Sovereignty Appliance positioning; most technical docs may need relocation or reframing to emphasize sovereignty aspects
