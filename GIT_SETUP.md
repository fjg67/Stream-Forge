# 🚀 Guide Git - Stream Forge

Guide pour connecter ton projet local à GitHub et pousser ton code.

---

## 📋 Étapes Rapides

```bash
# 1. Initialiser Git (si pas déjà fait)
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Faire le premier commit
git commit -m "🎨 Initial commit: Stream Forge - Ultimate streaming platform"

# 4. Renommer la branche en main
git branch -M main

# 5. Ajouter le remote GitHub
git remote add origin https://github.com/fjg67/Stream-Forge.git

# 6. Pousser vers GitHub
git push -u origin main
```

---

## 📝 Étapes Détaillées

### 1. Vérifier Git

```bash
# Vérifier que Git est installé
git --version

# Si pas installé, télécharger depuis: https://git-scm.com/
```

### 2. Configurer Git (Première fois)

```bash
# Configurer ton nom
git config --global user.name "Ton Nom"

# Configurer ton email (celui de GitHub)
git config --global user.email "ton-email@example.com"

# Vérifier la config
git config --list
```

### 3. Initialiser le Repository Local

```bash
# Se placer dans le dossier du projet
cd "C:\Users\flori\Documents\Projet\Stream Forge"

# Initialiser Git
git init

# Vérifier le statut
git status
```

### 4. Ajouter les Fichiers

```bash
# Ajouter tous les fichiers
git add .

# Ou ajouter fichier par fichier
git add package.json
git add README.md
# etc...

# Vérifier ce qui va être commité
git status
```

### 5. Premier Commit

```bash
# Créer le commit avec un message descriptif
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

# Vérifier le commit
git log
```

### 6. Connecter à GitHub

```bash
# Renommer la branche par défaut en 'main'
git branch -M main

# Ajouter le repository distant
git remote add origin https://github.com/fjg67/Stream-Forge.git

# Vérifier le remote
git remote -v
```

### 7. Pousser vers GitHub

```bash
# Pousser vers GitHub (première fois)
git push -u origin main

# Si le repo GitHub n'est pas vide et a un README, utiliser:
git push -u origin main --force

# Pour les prochains pushs (plus simple)
git push
```

---

## 🔑 Authentification GitHub

### Option 1: HTTPS (Avec Token)

1. **Créer un Personal Access Token** :
   - Aller sur GitHub.com
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token
   - Sélectionner scopes : `repo`, `workflow`
   - Copier le token (tu ne pourras plus le voir!)

2. **Utiliser le token au push** :
   ```bash
   # Quand demandé:
   Username: fjg67
   Password: [COLLER_TON_TOKEN]
   ```

3. **Stocker les credentials** :
   ```bash
   # Windows
   git config --global credential.helper wincred

   # Mac
   git config --global credential.helper osxkeychain

   # Linux
   git config --global credential.helper store
   ```

### Option 2: SSH (Recommandé)

1. **Générer une clé SSH** :
   ```bash
   ssh-keygen -t ed25519 -C "ton-email@example.com"
   # Appuyer sur Entrée pour tout accepter
   ```

2. **Copier la clé publique** :
   ```bash
   # Windows
   type C:\Users\flori\.ssh\id_ed25519.pub

   # Mac/Linux
   cat ~/.ssh/id_ed25519.pub
   ```

3. **Ajouter la clé à GitHub** :
   - GitHub.com → Settings → SSH and GPG keys
   - New SSH key
   - Coller la clé
   - Add SSH key

4. **Changer l'URL du remote** :
   ```bash
   git remote set-url origin git@github.com:fjg67/Stream-Forge.git
   ```

---

## 📂 Structure .gitignore

Ton `.gitignore` est déjà configuré pour ignorer :
- `/node_modules` - Dépendances
- `/.next` - Build Next.js
- `.env*.local` - Variables d'environnement
- `.DS_Store` - Fichiers système Mac
- Etc.

---

## 🔄 Workflow Git Quotidien

### Ajouter des Modifications

```bash
# 1. Vérifier les changements
git status

# 2. Ajouter les fichiers modifiés
git add .

# 3. Commiter avec un message clair
git commit -m "✨ Add new feature: setup sharing"

# 4. Pousser vers GitHub
git push
```

### Conventions de Commits

Utilise des emojis et des messages clairs :

```bash
✨ feat: Nouvelle fonctionnalité
🐛 fix: Correction de bug
📝 docs: Documentation
💄 style: Changement visuel
♻️ refactor: Refactoring
⚡ perf: Performance
✅ test: Tests
🔧 chore: Configuration
🚀 deploy: Déploiement
```

**Exemples** :
```bash
git commit -m "✨ feat: Add product comparison feature"
git commit -m "🐛 fix: Hero video autoplay on mobile"
git commit -m "💄 style: Update button hover effects"
git commit -m "📝 docs: Add setup configurator documentation"
```

---

## 🌿 Branches

### Créer une Branche

```bash
# Créer et basculer sur une nouvelle branche
git checkout -b feature/new-feature

# Travailler sur la branche
git add .
git commit -m "✨ Work in progress"

# Pousser la branche
git push -u origin feature/new-feature
```

### Fusionner une Branche

```bash
# Revenir sur main
git checkout main

# Fusionner la feature
git merge feature/new-feature

# Pousser
git push

# Supprimer la branche (optionnel)
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

---

## 🔙 Commandes Utiles

### Annuler des Changements

```bash
# Annuler les modifications d'un fichier
git checkout -- filename.tsx

# Annuler tous les changements non commités
git reset --hard

# Annuler le dernier commit (garder les changements)
git reset --soft HEAD~1

# Annuler le dernier commit (supprimer les changements)
git reset --hard HEAD~1
```

### Voir l'Historique

```bash
# Voir les commits
git log

# Voir les commits (version courte)
git log --oneline

# Voir les commits avec un graph
git log --graph --oneline --all

# Voir les changements d'un commit
git show <commit-hash>
```

### Synchroniser avec GitHub

```bash
# Récupérer les changements
git pull

# Récupérer sans merger
git fetch

# Voir les différences
git diff
```

---

## 🚨 Résolution de Problèmes

### Erreur: "fatal: remote origin already exists"

```bash
# Supprimer le remote existant
git remote remove origin

# Ré-ajouter le bon remote
git remote add origin https://github.com/fjg67/Stream-Forge.git
```

### Erreur: "Updates were rejected"

```bash
# Option 1: Pull puis Push
git pull origin main --rebase
git push

# Option 2: Force push (ATTENTION: écrase l'historique)
git push --force
```

### Erreur: "Authentication failed"

```bash
# Vérifier l'URL du remote
git remote -v

# Utiliser un token au lieu du mot de passe
# Ou configurer SSH (voir section Authentification)
```

### Fichiers Volumineux

```bash
# Si fichiers > 100MB, utiliser Git LFS
git lfs install
git lfs track "*.mp4"
git lfs track "*.zip"
git add .gitattributes
git commit -m "🔧 Configure Git LFS"
```

---

## 📊 Vérifier l'État

```bash
# Statut actuel
git status

# Branches locales
git branch

# Branches distantes
git branch -r

# Tous les remotes
git remote -v

# Dernier commit
git log -1
```

---

## 🎯 Checklist Premier Push

- [ ] Git installé et configuré
- [ ] Repository initialisé (`git init`)
- [ ] Fichiers ajoutés (`git add .`)
- [ ] Premier commit créé (`git commit -m "..."`)
- [ ] Branche renommée en main (`git branch -M main`)
- [ ] Remote GitHub ajouté (`git remote add origin ...`)
- [ ] Code poussé (`git push -u origin main`)
- [ ] Vérifier sur GitHub.com que tout est là

---

## 🌟 Bonnes Pratiques

1. **Commiter souvent** : Petits commits réguliers
2. **Messages clairs** : Décrire ce qui a changé
3. **Pull avant Push** : Synchroniser avant de pousser
4. **Branching** : Utiliser des branches pour les features
5. **Review** : Vérifier `git status` avant de commit
6. **Backup** : GitHub est ton backup automatique
7. **.gitignore** : Ne jamais commit `node_modules` ou `.env`

---

## 🔗 Ressources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🎉 Après le Premier Push

Une fois poussé sur GitHub, tu peux :

1. **Activer GitHub Pages** (si applicable)
2. **Configurer GitHub Actions** pour CI/CD
3. **Ajouter un README badge** (build status, etc.)
4. **Inviter des collaborateurs**
5. **Créer des Issues** pour tracker les tâches
6. **Utiliser Projects** pour organiser le développement

---

**Ton code Stream Forge est maintenant sur GitHub ! 🚀**

Repository : https://github.com/fjg67/Stream-Forge
