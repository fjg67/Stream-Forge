# ⚡ Quick Start - Stream Forge

Démarre en 5 minutes chrono !

---

## 🚀 Option 1 : Script Automatique (Windows)

**Double-clique sur `push-to-github.bat`** et c'est tout !

Le script va :
1. Initialiser Git
2. Ajouter tous les fichiers
3. Créer le premier commit
4. Pousser sur GitHub

---

## 💻 Option 2 : Commandes Manuelles

Ouvre un terminal dans le dossier du projet et copie-colle :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le commit
git commit -m "🎨 Initial commit: Stream Forge - Ultimate streaming platform"

# Renommer en main
git branch -M main

# Ajouter GitHub
git remote add origin https://github.com/fjg67/Stream-Forge.git

# Pousser
git push -u origin main
```

---

## 🔑 Authentification GitHub

Quand Git demande tes identifiants :

**Username** : `fjg67`
**Password** : **[Ton Personal Access Token]**

### Créer un Token :

1. Va sur [github.com/settings/tokens](https://github.com/settings/tokens)
2. "Generate new token (classic)"
3. Coche `repo` et `workflow`
4. "Generate token"
5. **COPIE LE TOKEN** (tu ne pourras plus le voir !)
6. Utilise-le comme mot de passe

---

## 📦 Installation des Dépendances

```bash
# Installer
npm install

# Lancer le projet
npm run dev

# Ouvrir http://localhost:3000
```

---

## ✅ Vérification

Une fois poussé, vérifie sur :
👉 **https://github.com/fjg67/Stream-Forge**

Tu devrais voir tous tes fichiers !

---

## 🎯 Prochaines Étapes

1. ✅ Code sur GitHub
2. 🎨 Personnaliser les couleurs
3. 📝 Ajouter ton contenu
4. 🚀 Déployer sur Vercel
5. 🌟 Partager avec le monde !

---

## 🆘 Problèmes ?

**Erreur d'authentification ?**
→ Utilise un Personal Access Token, pas ton mot de passe GitHub

**Erreur "remote origin already exists" ?**
→ Lance : `git remote remove origin` puis réessaye

**Fichier trop volumineux ?**
→ Ajoute-le à `.gitignore`

---

## 📞 Support

- 📖 Voir [GIT_SETUP.md](GIT_SETUP.md) pour le guide complet
- 📚 Voir [INSTALLATION.md](INSTALLATION.md) pour l'installation
- 🌟 Voir [FEATURES.md](FEATURES.md) pour les fonctionnalités

---

**Let's GO ! 🔥**
