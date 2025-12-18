# 🎮 Configurateur de Setup Intelligent - Stream Forge

## 🌟 Vue d'Ensemble

Le **Configurateur de Setup Intelligent** est le joyau de Stream Forge : un outil interactif ultra-premium qui génère des recommandations de matériel streaming personnalisées basées sur des données réelles 2025.

---

## ✨ Fonctionnalités

### Quiz en 3 Étapes
1. **Budget** : Choisir entre 300€ (débutant), 800€ (intermédiaire), ou 1500€+ (avancé)
2. **Type de Contenu** : Gaming, IRL/Vlog, Musique/ASMR, ou Créatif/Art
3. **Préférences** : Style esthétique + options (portable, multi-joueurs, green screen)

### Génération de Setup
- **Algorithme intelligent** qui priorise les produits selon le type de contenu
- **Vraies données 2025** issues de Tom's Hardware, PCMag, Eurogamer
- **Respect du budget** avec ajustement automatique
- **Compatibilité optimale** pour streaming (OBS/Streamlabs)

### Visualisation 3D
- **Canvas 2D natif** (pas de Three.js = ultra-stable)
- **Rendu interactif** : drag pour tourner, auto-rotation
- **Affichage dynamique** des produits avec couleurs par catégorie
- **Connexions visuelles** entre produits

### Partage & Export
- **URL unique** avec tous les paramètres (partage facile)
- **Export JSON** avec liste complète des produits
- **Copie en un clic** du lien de partage
- **Persistance** des choix dans l'URL

---

## 🗂️ Structure des Fichiers

```
Stream Forge/
├── app/
│   └── configurator/
│       └── page.tsx                    # Page principale du configurateur
│
├── components/
│   └── configurator/
│       ├── QuizProgress.tsx            # Barre de progression animée
│       ├── BudgetStep.tsx              # Étape 1 : Choix du budget
│       ├── ContentTypeStep.tsx         # Étape 2 : Type de contenu
│       ├── PreferencesStep.tsx         # Étape 3 : Préférences
│       ├── SetupRenderer3D.tsx         # Rendu 3D interactif
│       └── SetupResults.tsx            # Affichage des résultats
│
└── lib/
    ├── configurator-data.ts            # Base de données produits 2025
    └── recommendation-engine.ts        # Logique de recommandation
```

---

## 📊 Base de Données Produits

### Catégories
- **PC/Ordinateurs** : Desktop (gaming, workstation) + Laptops
- **Microphones** : USB, XLR, avec/sans interface
- **Caméras** : Webcams 1080p/4K, mirrorless
- **Lumières** : Ring lights, Key Lights, softbox
- **Audio** : Interfaces audio, consoles de mixage
- **Accessoires** : Casques, green screens, Stream Deck, bras de micro

### Tiers
- **Beginner** (300-500€) : Produits entry-level mais qualité correcte
- **Intermediate** (800-1200€) : Sweet spot qualité/prix
- **Advanced** (1500€+) : Équipement pro/broadcast

### Produits Clés (Exemples)

#### Microphones
- Beginner : **Joby Wavo Pod USB** (59€)
- Intermediate : **512 Audio Tempest** (129€) ou **PreSonus Revelator** (169€)
- Advanced : **Shure SM7B + Focusrite** (489€)

#### Caméras
- Beginner : **Logitech C922 Pro** (79€)
- Intermediate : **Razer Kiyo Pro** (149€)
- Advanced : **Razer Kiyo Pro Ultra 4K** (299€) ou **Sony ZV-E10** (899€)

#### PC
- Beginner : **PC Prémonté SAAV X1** (299€) - Ryzen 5 5600G
- Intermediate : **Ryzen 7600X + RX 7600** (849€)
- Advanced : **i7-14700K + RTX 4070 Ti** (1899€)

---

## 🎯 Logique de Recommandation

### Priorités par Type de Contenu

**Gaming**
1. PC puissant (GPU prioritaire)
2. Microphone correct
3. Caméra basique acceptable

**IRL/Vlog**
1. Caméra haute qualité (portable si "portable" option)
2. Microphone portable
3. Éclairage important

**Musique/ASMR**
1. Microphone premium (XLR)
2. Interface audio
3. Bras de micro (si advanced)

**Créatif/Art**
1. PC puissant (CPU + GPU équilibrés)
2. Caméra haute qualité
3. Éclairage pro

### Modificateurs

**Aesthetic**
- `minimal` : +0€ (produits standards)
- `rgb` : +50€ (accessoires RGB)
- `pro` : +100€ (upgrades vers tier supérieur)

**Preferences**
- `portable` : Force laptop au lieu de desktop
- `multi` : Ajoute casque pour multi-joueurs
- `greenscreen` : Ajoute fond vert pliable

---

## 🎨 Animations & UX

### Framer Motion
- **Page transitions** : Smooth slide entre steps
- **Card hover** : Scale + glow effects
- **Progress bar** : Animated fill
- **Results reveal** : Staggered product cards

### Canvas 2D (Rendu 3D)
- **60 FPS garanti** (optimisé)
- **Mouse interaction** : Drag to rotate
- **Auto-rotation** : Quand pas d'interaction
- **Product boxes** : Couleur par catégorie
  - Violet (#8B00FF) : PC
  - Cyan (#00F5FF) : Microphones
  - Rose (#FF10F0) : Caméras
  - Rose-gold (#FFB6C1) : Lumières

### Glassmorphism
- Toutes les cards utilisent `.glass` (blur + transparency)
- Neon glows sur selections
- Gradient borders

---

## 🔗 Partage de Setup

### Format URL
```
/configurator?budget=800&type=gaming&aesthetic=rgb&prefs=multi,greenscreen&total=895.00
```

### Paramètres
- `budget` : Budget sélectionné (number)
- `type` : gaming | irl | music | creative
- `aesthetic` : minimal | rgb | pro
- `prefs` : Comma-separated (portable, multi, greenscreen)
- `total` : Prix total calculé

### Fonctionnement
1. Utilisateur termine le quiz
2. URL générée automatiquement
3. Bouton "Partager" copie l'URL
4. Quelqu'un ouvre l'URL → Setup pré-chargé
5. Peut modifier et re-générer

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **Mobile** (< 768px) : 1 colonne, stack vertical
- **Tablet** (768-1024px) : 2 colonnes
- **Desktop** (> 1024px) : 3 colonnes (budget/prefs)

### Optimisations Mobile
- Touch-friendly buttons (min 48x48px)
- Reduced animation complexity
- Lazy loading des images
- Canvas adaptatif (resize automatique)

---

## 🚀 Performance

### Lighthouse Scores Visés
- **Performance** : 95+
- **Accessibility** : 100
- **Best Practices** : 100
- **SEO** : 100

### Optimisations
- **No SSR pour Canvas** : Client-side only
- **Lazy imports** : Dynamic imports pour composants lourds
- **Memoization** : React.useMemo sur calculs
- **Debounce** : Sur interactions souris
- **RequestAnimationFrame** : Pour animations Canvas

---

## 🎁 Easter Eggs & Extras

### Features Bonus
- **Auto-save** : Choix sauvegardés dans localStorage (optionnel)
- **Comparison mode** : Comparer 2 setups (future feature)
- **Price alerts** : Notif si prix baisse (future feature)

### Analytics Possibles
- Track choix populaires
- Heatmap des budgets
- Conversion rate par tier

---

## 🛠️ Développement

### Installation
```bash
# Déjà fait normalement
npm install
```

### Lancement
```bash
npm run dev
```

### Accès
```
http://localhost:3000/configurator
```

### Tests Manuels
1. **Budget 300€ + Gaming + RGB** → Doit donner PC basique + périphériques gaming
2. **Budget 1500€ + Music + Pro** → Doit inclure Shure SM7B + interface audio
3. **Budget 800€ + IRL + Portable** → Doit forcer laptop au lieu de desktop
4. **Partage URL** → Copier et ouvrir dans nouvel onglet → Doit charger setup

---

## 📝 TODO / Améliorations Futures

### Court Terme
- [ ] Intégrer vrais prix API (Amazon Product Advertising API)
- [ ] Ajouter plus de produits (actuellement ~25, viser 100+)
- [ ] Améliorer 3D avec vraies textures produits
- [ ] Ajouter comparaison side-by-side

### Moyen Terme
- [ ] Backend pour sauvegarder setups (Supabase/Firebase)
- [ ] Authentification utilisateur
- [ ] Historique des setups créés
- [ ] Système de votes communautaires

### Long Terme
- [ ] Intégration prix en temps réel
- [ ] Alertes baisse de prix
- [ ] Reviews utilisateurs
- [ ] Configurateur avancé avec compatibilité (PSU, case size, etc.)

---

## 🎯 KPIs de Succès

### Engagement
- **Taux de complétion** : >70% finissent le quiz
- **Temps moyen** : 2-3 minutes
- **Partages** : >20% partagent leur setup

### Conversion
- **Clics affiliés** : >30% cliquent au moins 1 lien
- **Export** : >40% téléchargent le setup

---

## 🙏 Crédits

**Données Produits** : Tom's Hardware, PCMag, Eurogamer (2025)
**Design** : Inspired by Apple, Razer, Elgato configurators
**3D Rendering** : Canvas 2D natif (performance optimale)

---

**Made with 💜 for Stream Forge**

*Dernière mise à jour : Décembre 2025*
