# Portfolio v07 — 2026-10-19 — Full site

## Manual upload to GitHub

1. Extract portfolio-v07-2026-10-19-full.zip.
2. Open neotheone04/portfolio-1 on branch main, at the repository root.
3. Choose Add file > Upload files.
4. Drag ALL extracted files AND all three asset folders into the upload area. Upload the contents, not the ZIP or an enclosing folder.
5. Commit directly to main. Existing files at matching paths are replaced; new files are added.
6. Wait for the existing Azure workflow to succeed, then refresh the site with Ctrl+Shift+R.

Leave the existing .github/workflows deployment file and Azure settings unchanged. No Azure resource recreation is necessary.

## Three Project 1 versions

- project1.html: current working page, Growing a Student Design Community Through Marketing. Contains the RACE draft, supplied metrics with collective attribution, distinct Marketing Officer and Vice-President responsibilities, and labeled work-sample placeholders.
- project1-original.html: preserved Figma-inspired template backup.
- project1-backup2.html: preserved first adaptation of the Work Samples PDF.

The homepage and other project preview pages link to project1.html. To view backups, replace project1.html in the website URL with either backup filename. Backups are not shown as extra homepage projects.

Each backup has its own CSS, JavaScript, and asset folder. Keep those files and folders so later edits to the working site do not change the backups.

project.html redirects old links to project1.html; it is not another independent project version.

## Other files

index.html is the homepage. ecommart.html and health-link.html remain template previews. styles.css and script.js provide shared styling/behavior; project1.css styles the working case study. assets/ holds current site resources. 404.html and staticwebapp.config.json provide Azure missing-page handling.

Content is preliminary. The supplied metrics are not independently verified. Work-sample placeholders await original assets. Contact/social/policy controls remain template dialogs. Poppins uses Google Fonts, with Arial as a fallback.

No installation or build process is needed. Azure Custom preset: App location /; API location blank; Output location blank.

Includes the latest Jay Phatak homepage greeting, communication/design/marketing introduction, and View Project 1 button. This full package supersedes all earlier ZIPs.
