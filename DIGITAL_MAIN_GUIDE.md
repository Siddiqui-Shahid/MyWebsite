# DigitalSolutions Guide (`digitalsolutions` / `digital-main`)

This guide is for the DigitalSolutions repository:
- Remote: `digitalsolutions`
- Repository: `git@github.com:Siddiqui-Shahid/DigitalSolutions.git`
- Main working branch: `digital-main`

## Purpose
- Keep the DigitalSolutions brand/content separate from the personal website.
- Use this branch/repo for agency/digital-solutions messaging and related updates.

## Daily workflow
1. Switch to the branch:
   - `git checkout digital-main`
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
- GitHub Actions deploy workflow runs on pushes to `digital-main`.
- Ensure GitHub Pages source is set to `GitHub Actions`.

## Important rules
- Keep DigitalSolutions-specific copy/content only here.
- Avoid merging `website-main` directly into this branch.
- If you need a shared technical fix (not content), cherry-pick the exact commit:
  - `git cherry-pick <commit-hash>`

## Common commands
- Check branch/remotes:
  - `git status -sb`
  - `git branch -vv`
  - `git remote -v`
