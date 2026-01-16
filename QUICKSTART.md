# Quick Start: Create Adam Marketing Portfolio Repository

## 🚀 Fastest Way to Create the Repository

### Using GitHub CLI (Recommended)

```bash
# 1. Make sure you're in the repository root
cd /path/to/testimonialportfolio

# 2. Run the automated setup script
./setup-adam-portfolio-repo.sh
```

That's it! The script will:
- ✅ Create the `adam-marketing-portfolio` repository on GitHub
- ✅ Initialize Git in the adam-portfolio directory
- ✅ Commit all files
- ✅ Push to GitHub

### Prerequisites

**Install GitHub CLI** (if not already installed):

**macOS:**
```bash
brew install gh
```

**Windows:**
```powershell
winget install --id GitHub.cli
```

**Linux:**
```bash
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

**Authenticate:**
```bash
gh auth login
```

---

## 🔧 Alternative: Manual Setup

If you prefer to do it manually or don't want to use GitHub CLI:

### Step 1: Create Repository on GitHub Web
1. Go to https://github.com/new
2. Repository name: `adam-marketing-portfolio`
3. Description: "Professional Marketing Head Portfolio for Adam - React TypeScript with Framer Motion"
4. Visibility: **Public**
5. Do NOT check "Add a README file"
6. Click **Create repository**

### Step 2: Push the Code
```bash
cd adam-portfolio
git init
git add .
git commit -m "Initial commit: Adam Marketing Portfolio"
git branch -M main
git remote add origin https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
git push -u origin main
```

---

## 📋 Verification

After setup, verify everything worked:

1. **Check repository exists:**
   - Visit: https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio
   
2. **Clone and test:**
   ```bash
   git clone https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
   cd adam-marketing-portfolio
   npm install
   npm start
   ```

3. **Check files are present:**
   - All src/ components
   - package.json
   - README.md
   - No node_modules (excluded by .gitignore)

---

## 🎨 Next Steps

### Add Repository Topics
Go to repository settings and add:
- `react`
- `typescript`
- `portfolio`
- `framer-motion`
- `marketing-portfolio`

### Deploy to Vercel
```bash
cd adam-marketing-portfolio
npm install -g vercel
vercel --prod
```

### Update README with Live Link
After deployment, add your live URL to the README.

---

## 📚 Documentation

- **Detailed Setup Guide:** `setup-adam-portfolio-repo.md`
- **Validation Checklist:** `SETUP_VALIDATION.md`
- **Repository Overview:** `README.md`

---

## ❓ Troubleshooting

**Error: "gh: command not found"**
→ Install GitHub CLI (see prerequisites above)

**Error: "not logged in"**
→ Run `gh auth login`

**Error: "repository already exists"**
→ Script will ask if you want to push to existing repo

**Permission denied on script**
→ Run `chmod +x setup-adam-portfolio-repo.sh`

---

## 📞 Support

If you encounter issues:
1. Check `SETUP_VALIDATION.md` for common problems
2. Review `setup-adam-portfolio-repo.md` for alternative methods
3. Check GitHub CLI docs: https://cli.github.com/manual/

---

**Time to complete:** ~2 minutes (automated) | ~5 minutes (manual)
