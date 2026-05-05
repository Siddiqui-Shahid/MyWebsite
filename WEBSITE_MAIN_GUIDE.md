# Website Main Guide (`origin` / `website-main`)

This guide is for the original website repository:
- Remote: `origin`
- Repository: `git@github.com:Siddiqui-Shahid/MyWebsite.git`
- Main working branch: `website-main`

## Purpose
- Keep the original personal website content and behavior.
- Use this branch/repo for the primary portfolio site updates.

## Daily workflow
1. Switch to the branch:
   - `git checkout website-main`
2. Pull latest updates:
   - `git pull`
3. Make your edits.
4. Validate locally:
   - `npm run lint`
   - `npm run build`
5. Commit and push:
   - `git add .`
   - `git commit -m "your message"`
   - `git push`

## Deployment
- GitHub Actions deploy workflow runs on pushes to `website-main`.
- Ensure GitHub Pages source is set to `GitHub Actions`.

## Important rules
- Do not push DigitalSolutions-specific copy/content to this branch.
- If you need a fix from `digital-main`, cherry-pick only the required commit:
  - `git cherry-pick <commit-hash>`

## Common commands
- Check branch/remotes:
  - `git status -sb`
  - `git branch -vv`
  - `git remote -v`
