@echo off
echo ========================================
echo   STREAM FORGE - Push to GitHub
echo ========================================
echo.

REM Initialize Git if not already done
if not exist .git (
    echo [1/6] Initializing Git repository...
    git init
) else (
    echo [1/6] Git already initialized!
)

echo.
echo [2/6] Adding all files...
git add .

echo.
echo [3/6] Creating commit...
git commit -m "🎨 Initial commit: Stream Forge - Ultimate streaming platform

- ✨ Next.js 15 + React 18 + TypeScript setup
- 🎨 Complete design system with cyberpunk theme
- 🚀 Hero section with 3D particles
- ⚙️ Interactive setup configurator
- 📦 Material section with products
- 🎓 Academy with 7 training modules
- 👥 Community growth strategies
- 🏆 Hall of Fame showcases
- 🎁 Bonus features (Ultra Neon mode, Easter eggs)
- 📱 Fully responsive design
- ♿ Accessibility compliant
- 🔍 SEO optimized"

echo.
echo [4/6] Renaming branch to main...
git branch -M main

echo.
echo [5/6] Adding GitHub remote...
git remote remove origin 2>nul
git remote add origin https://github.com/fjg67/Stream-Forge.git

echo.
echo [6/6] Pushing to GitHub...
echo.
echo ⚠️  You may need to enter your GitHub credentials:
echo    Username: fjg67
echo    Password: [Your Personal Access Token]
echo.
git push -u origin main

echo.
echo ========================================
echo   ✅ Done! Check your repo on GitHub:
echo   https://github.com/fjg67/Stream-Forge
echo ========================================
echo.
pause
