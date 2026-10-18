# Brittany portfolio template



Plain HTML/CSS/JS. No build tools, installation, API, or generated output directory required.



## Deploy to Azure Static Web Apps



1. Extract the ZIP. Upload the contents of the portfolio folder to the root of GitHub repository neotheone04/portfolio-1 on branch main. index.html must be at repository root, not inside a portfolio subfolder.

2. In Azure, create a Static Web App and select GitHub, neotheone04/portfolio-1, and main.

3. Choose Custom as the build preset. Set App location to /. Leave API location and Output location blank.

4. Create the app. Azure creates its GitHub Actions workflow and deployment secret automatically. Wait for the workflow to finish, then open the Azure-provided URL.

5. If editing the generated workflow, the upload step should use:



```yaml

app_location: "/"

api_location: ""

output_location: ""

skip_app_build: true

```



Retain Azure's generated deployment token reference and other workflow settings. Do not create a second deployment workflow if one already exists.



Microsoft reference: https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration



## Pages and editing



- index.html: homepage

- project.html: full FreshToDoor case study

- ecommart.html and health-link.html: preview pages using supplied template artwork; no invented case studies

- styles.css: shared layout, colors, typography, mobile rules

- script.js: accessible placeholder dialogs

- assets/: local artwork cropped from the supplied screenshots

- 404.html and staticwebapp.config.json: missing-page handling



The supplied Brittany identity, portrait, project names, and case-study copy are template placeholders, not claims about the owner. Replace them before using this as a personal portfolio. Social, policy, and contact controls open explanatory dialogs until real destinations/content are supplied. Home and About navigate to the homepage and introduction; Contact navigates to the footer. Project tiles navigate to their detail pages.



The linked Figma Community page could not be retrieved. The six supplied screenshots were the visual source. Artwork is cropped from screenshots and will soften when enlarged; replace with original Figma exports when available. The supplied final screenshot jumps to related projects, so no unseen case-study sections were invented. Google Fonts supplies Poppins when connected; Arial is the offline fallback.



Verification: all local page/asset references and configuration JSON checked. Desktop/mobile CSS layouts were implemented; automated visual browser verification was unavailable because local socket access was blocked in this environment.


