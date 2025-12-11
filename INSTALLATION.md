# 🚀 Guide d'Installation - Stream Forge

Ce guide vous aidera à mettre en place le projet Stream Forge de A à Z.

---

## ⚡ Installation Rapide

```bash
# 1. Cloner le repository (ou télécharger les fichiers)
git clone https://github.com/your-username/stream-forge.git
cd stream-forge

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir votre navigateur
# http://localhost:3000
```

---

## 📋 Prérequis

Assurez-vous d'avoir installé :

- **Node.js** 18.17 ou supérieur ([Télécharger](https://nodejs.org/))
- **npm** 9+ ou **pnpm** 8+ (recommandé) ou **yarn** 1.22+

Vérifiez vos versions :

```bash
node --version  # doit être >= 18.17
npm --version   # doit être >= 9
```

---

## 🛠️ Installation Détaillée

### Étape 1 : Récupérer le Projet

**Option A : Via Git**
```bash
git clone https://github.com/your-username/stream-forge.git
cd stream-forge
```

**Option B : Téléchargement Direct**
1. Téléchargez le ZIP du projet
2. Extrayez-le dans un dossier
3. Ouvrez un terminal dans ce dossier

### Étape 2 : Installer les Dépendances

**Avec npm :**
```bash
npm install
```

**Avec pnpm (plus rapide) :**
```bash
pnpm install
```

**Avec yarn :**
```bash
yarn install
```

> ⏱️ L'installation prend environ 2-3 minutes selon votre connexion

### Étape 3 : Configuration (Optionnel)

```bash
# Copier le fichier d'environnement
cp .env.example .env.local

# Éditer .env.local avec vos valeurs
# (optionnel pour le développement local)
```

### Étape 4 : Lancer le Projet

**Mode Développement :**
```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

**Mode Production (pour tester) :**
```bash
npm run build
npm run start
```

---

## 🎨 Personnalisation Initiale

### 1. Changer les Couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  forge: {
    black: '#VOTRE_COULEUR',
    'violet-start': '#VOTRE_COULEUR',
    // ...
  }
}
```

### 2. Modifier les Textes

Éditez les fichiers dans `components/sections/` :
- `Hero.tsx` - Section d'accueil
- `SetupConfigurator.tsx` - Configurateur
- etc.

### 3. Ajouter Vos Images

Placez vos images dans le dossier `public/` :
```
public/
  ├── logo.png
  ├── hero-background.mp4
  └── products/
      └── ...
```

---

## 🐛 Résolution des Problèmes

### Erreur : "Module not found"

```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller
npm install
```

### Erreur : Port 3000 déjà utilisé

```bash
# Utiliser un autre port
npm run dev -- -p 3001
```

Ou tuer le processus sur le port 3000 :

**Windows :**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux :**
```bash
lsof -ti:3000 | xargs kill -9
```

### Erreur TypeScript

```bash
# Supprimer le cache TypeScript
rm -rf .next

# Relancer
npm run dev
```

### Performance Lente

1. **Vérifier Node.js** : Assurez-vous d'utiliser Node 18+
2. **Désactiver les animations** : Commenter temporairement les composants 3D
3. **Utiliser pnpm** : Plus rapide que npm

---

## 🚀 Déploiement

### Vercel (Recommandé - Gratuit)

1. **Créer un compte** : [vercel.com](https://vercel.com)

2. **Installer Vercel CLI** :
```bash
npm i -g vercel
```

3. **Déployer** :
```bash
vercel
```

4. **Suivre les instructions** dans le terminal

> ✅ Votre site sera en ligne en 2 minutes !

### Netlify

1. **Build le projet** :
```bash
npm run build
```

2. **Déployer** :
   - Aller sur [netlify.com](https://netlify.com)
   - Drag & drop le dossier `.next`
   - Ou connecter votre repo Git

### Auto-hébergement

```bash
# Build
npm run build

# Lancer sur votre serveur
npm run start
```

Utilisez PM2 pour garder le process actif :
```bash
npm i -g pm2
pm2 start npm --name "stream-forge" -- start
pm2 save
```

---

## 📊 Optimisation

### Améliorer les Performances

1. **Images** : Utiliser des formats WebP/AVIF
2. **Fonts** : Précharger les polices critiques
3. **3D** : Lazy load les composants Three.js
4. **Code Splitting** : Utiliser dynamic imports

### SEO

1. **Sitemap** : Généré automatiquement à `/sitemap.xml`
2. **Robots.txt** : Créer `public/robots.txt`
3. **Meta Tags** : Modifier dans `app/layout.tsx`

### Analytics (Optionnel)

Ajouter Google Analytics dans `app/layout.tsx` :

```typescript
import Script from 'next/script'

// Dans le <body>
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
/>
```

---

## 🔐 Sécurité

### Variables d'Environnement

- ✅ Utiliser `.env.local` pour les secrets
- ❌ Ne JAMAIS commit `.env.local`
- ✅ Préfixer les variables publiques avec `NEXT_PUBLIC_`

### Headers de Sécurité

Ajouter dans `next.config.js` :

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ]
}
```

---

## 📱 PWA (Progressive Web App)

Le site est déjà configuré comme PWA !

Pour tester :
1. Ouvrir le site en production
2. Chrome DevTools > Application > Manifest
3. Cliquer sur "Install"

---

## 🆘 Support

Des problèmes ? Voici comment obtenir de l'aide :

1. **Documentation** : Lire le [README.md](README.md)
2. **Issues** : [GitHub Issues](https://github.com/your-username/stream-forge/issues)
3. **Discord** : [Rejoindre la communauté](https://discord.gg/streamforge)
4. **Email** : contact@streamforge.com

---

## ✅ Checklist Post-Installation

- [ ] Le site s'affiche correctement
- [ ] Les animations fonctionnent
- [ ] Les particules 3D sont visibles
- [ ] Le mode Ultra Neon fonctionne
- [ ] L'easter egg KAPPAPRIDE marche
- [ ] Responsive sur mobile
- [ ] Temps de chargement < 3s
- [ ] Lighthouse score > 90

---

## 🎓 Prochaines Étapes

1. **Personnaliser** : Modifier les couleurs et textes
2. **Ajouter du contenu** : Remplir les produits et guides
3. **Configurer Analytics** : Suivre les visiteurs
4. **Déployer** : Mettre en ligne sur Vercel
5. **Promouvoir** : Partager sur les réseaux sociaux !

---

**Bon développement ! 🚀**

Si ce guide vous a aidé, n'oubliez pas de ⭐ star le projet sur GitHub !
