# Portfolio - PDF reference rebuild

Plain HTML, CSS, JavaScript. index.html lives at repository root. No installation, build process, API, or output directory required.

## Update the live Azure site

1. Extract portfolio-pdf-rebuild.zip.
2. Upload ALL extracted files and the assets folder to neotheone04/portfolio-1 on branch main. Replace matching existing files. index.html must stay at repository root. Do not upload the ZIP itself.
3. Commit changes. Leave the existing .github/workflows Azure deployment file and secrets in place.
4. In GitHub Actions, wait for the Azure workflow to succeed. Refresh the live site with Ctrl+Shift+R.

Azure settings remain: Custom preset; App location /; API and Output locations blank. No new Azure resource is needed.

## Contents

- index.html: responsive homepage, reconstructed from the supplied full-resolution PDF.
- project.html: complete project detail page, including Implementation and Development, Launch and Evaluation, and Conclusion.
- ecommart.html, health-link.html: template previews; their case-study content was not supplied.
- styles.css and script.js: shared responsive layout and placeholder dialogs.
- assets/: high-resolution artwork rendered/extracted from the supplied PDFs. The text in visual design mockups is part of those illustrations; page headings and body text remain editable HTML.
- 404.html, staticwebapp.config.json: Azure missing-page handling.

## Requested deviations from the PDF

Project title is Social Media Marketing - UX Design Club, displayed smaller. The large banner below the title is removed. Five numbered placeholder icons sit in one row, with Tool 1 through Tool 5 beneath them.

All other identity and project copy remains template content. Grocery-app case-study text has not been invented or rewritten to claim social-media work. Social, contact, and policy buttons open placeholder dialogs until real links/content are supplied. Poppins loads through Google Fonts, with Arial as offline fallback. Decorative geometry and responsive layouts are recreated in CSS rather than treating the page as a single image.

## Verification

Rendered and visually inspected both PDF references. Visually reviewed the desktop homepage, project header, mobile homepage and project content, and implementation panel in the browser. Checked viewport widths 320, 390, 768, and 1440 for the representative layouts. Verified mobile tools stay in one row, no horizontal page overflow in those checks, project navigation, and contact dialog open/close. Checked HTML nesting, local asset/link references, and Azure configuration JSON.
