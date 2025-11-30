# GitHub Pages Deployment Guide

Your portfolio is ready to deploy on GitHub Pages! Follow these steps:

## Option 1: Automatic GitHub Pages Deployment (Recommended)

### Step 1: Enable GitHub Pages in Your Repository

1. Go to your GitHub repository: `https://github.com/Gol-DJeff/My-Coding-Practice`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source," select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)** or **/Web/Portfolio** (depending on your preference)
4. Click **Save**

### Step 2: Automated Workflow

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) is now in place. It will:
- Automatically run on every push to `main`
- Build and deploy your site to GitHub Pages
- Make your portfolio live at: `https://Gol-DJeff.github.io/My-Coding-Practice/Web/Portfolio`

### Step 3: Push to GitHub

```powershell
cd "C:\Users\Gol.D.Jeff\Documents\My Coding Practice"
git add .
git commit -m "chore: add GitHub Pages deployment workflow"
git push origin main
```

Your portfolio will be live in ~1-2 minutes!

---

## Option 2: Manual Deployment (GitHub Pages)

If you prefer not to use actions:

1. Go to **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose **main** and the appropriate folder
4. Every push to `main` will automatically deploy

---

## Option 3: Deploy to a Custom Domain

If you have a custom domain (e.g., `yourname.com`):

1. Add a `CNAME` file to the repo root with your domain:
   ```
   yourname.com
   ```
2. Go to **Settings** → **Pages** → **Custom domain**
3. Enter your domain and click **Save**
4. Update your domain's DNS records to point to GitHub Pages IPs

---

## Verify Deployment

1. Go to **Settings** → **Pages**
2. Look for the "Your site is live at" message with your URL
3. Click the link to visit your live portfolio
4. Test all sections, dark mode toggle, and links

---

## Troubleshooting

**Site not deploying?**
- Check that the workflow file exists at `.github/workflows/deploy-pages.yml`
- Verify your repository is public (or GitHub Pages is enabled for private repos)
- Go to **Actions** tab to see if the workflow ran successfully
- Check for errors in the workflow logs

**Wrong folder being deployed?**
- Update `deploy-pages.yml` line 28 to match your actual folder path
- Common paths: `'Web/Portfolio'`, `'Portfolio'`, or `'.'` (root)

**Custom domain not working?**
- Wait 24 hours for DNS propagation
- Verify CNAME file and DNS settings match exactly

---

## Next Steps

1. **Test locally** before pushing:
   ```powershell
   python -m http.server 8000
   # Open http://localhost:8000
   ```

2. **Customize content** (bio, projects, email, resume link)

3. **Update social links** in `index.html` (GitHub, LinkedIn)

4. **Monitor deployments** via the **Actions** tab on GitHub

---

## Live Site URL

Once deployed, your portfolio will be accessible at:
- `https://Gol-DJeff.github.io/My-Coding-Practice/Web/Portfolio` (if deploying from a folder)
- `https://Gol-DJeff.github.io` (if deploying from repo root)

**Need to change this?** Update the `path` in `.github/workflows/deploy-pages.yml` or adjust your GitHub Pages source settings.
