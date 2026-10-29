# A Seat in Class

A guided interview with Miguel, a fictional 15-year-old Filipino character exploring education, work, family and his future.

This export preserves the dark layout, all 73 questions, related follow-ups and tracking that prevents questions repeating within one interview. Answers are scripted. This version does not run or call an AI model. There is no database, API key, model download, backend, analytics or paid service in this package. Refreshing the page or restarting clears the interview progress. It was developed with AI assistance.

## Publish on GitHub Pages

1. Extract `A_Seat_in_Class_GitHub.zip` on your computer.
2. Sign in at https://github.com and create a new repository named `a-seat-in-class`. Choose **Public** for GitHub Pages on GitHub Free. Enable **Add README** and create the repository.
3. Open the repository's **Code** tab. Select **Add file > Upload files**. If GitHub shows an empty-repository screen, choose **uploading an existing file**.
4. Upload the extracted files themselves, not the ZIP or its containing folder. Replace the initial README with this package's README if needed. `index.html`, `style.css`, `app.js` and `questions.js` must be visible directly at the top level of the repository. Include `.nojekyll` if your file picker shows it; this site uses plain files and also works without it.
5. Click **Commit changes** to save them to the `main` branch.
6. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
7. Allow up to 10 minutes for publication. Return to **Settings > Pages** and click **Visit site** for your actual address.

A typical address is `https://YOUR-USERNAME.github.io/a-seat-in-class/`. Replace `YOUR-USERNAME` with your GitHub username; GitHub displays the final address. The website is public. GitHub Pages does not require visitors to sign into ChatGPT. No GitHub connection to ChatGPT is needed for a manual upload.

## What to upload

- `index.html`: the page structure and tab title.
- `style.css`: the dark desktop and mobile layout.
- `app.js`: buttons, conversation display, restart and interview progress.
- `questions.js`: all questions, scripted answers, topic links and follow-up selection.
- `.nojekyll`: disables unnecessary Jekyll processing.
- `README.md`: these instructions, visible in the repository rather than in the interview.

All website asset paths are relative, so the package supports a repository subdirectory URL. No build or installation step is needed to publish it.

## Updating it later

Use GitHub's pencil icon to edit a file and commit the change. GitHub Pages will republish automatically. Edit questions and answers in `questions.js`; each question has a unique ID, `question`, `answer`, three preferred `next` question IDs, and topic `tags`. Follow-up selection excludes previously asked questions and prefers those linked to the current topic. Three choices are shown while at least three questions remain. The final turns show the remaining choices, then a completion message.

## Local preview

Double-clicking `index.html` is not a reliable preview because browsers restrict JavaScript modules opened through `file://`. If Python is installed, open a terminal in this folder and run `python -m http.server 8000`, then open http://localhost:8000/. Stop it with Ctrl+C. You can also use an editor's local web preview.

## Troubleshooting

- **404 page:** check that `index.html` is at the repository root and Pages is set to `main` and `/(root)`.
- **No question buttons:** confirm `app.js` and `questions.js` were uploaded, then reload the page.
- **Unstyled page:** confirm `style.css` was uploaded beside `index.html`.
- **Old version:** wait for the Pages deployment to finish in **Actions**, then refresh the browser.
- **Pages unavailable:** check repository visibility and account or school organisation restrictions.

## Limits and transparency

This static export includes the working guided interview, not the old hosted model server or its technical walkthrough. Its scripted responses do not claim to be real testimony or independently verified research. Miguel does not represent every Filipino child's experience. Standard GitHub hosting policies and request logging still apply.

## Official setup documentation

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
