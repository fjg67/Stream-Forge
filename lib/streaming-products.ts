// Stream Forge - Base de données produits streaming COMPLETE
// Prix réels basés sur le marché français (Amazon, LDLC, Thomann, Boulanger) - Décembre 2024

export interface Product {
  name: string
  price: number
  description: string
  rating: number
  brand: string
}

export interface ProductCategory {
  [budget: number]: Product
}

// ============================================
// WEBCAMS & CAMÉRAS - 15+ produits
// ============================================
export const webcams: ProductCategory = {
  100: {
    name: 'Logitech C270 HD',
    price: 29,
    description: '720p basique, clip universel, micro intégré. Pour débuter ou en backup.',
    rating: 3.8,
    brand: 'Logitech'
  },
  200: {
    name: 'Logitech C920s HD Pro',
    price: 69,
    description: 'Full HD 1080p, cache confidentialité, autofocus, correction lumière automatique.',
    rating: 4.4,
    brand: 'Logitech'
  },
  300: {
    name: 'Logitech C922 Pro Stream',
    price: 89,
    description: '1080p30 ou 720p60, fond vert automatique, trépied inclus. Conçue pour le streaming.',
    rating: 4.5,
    brand: 'Logitech'
  },
  400: {
    name: 'Razer Kiyo Pro',
    price: 109,
    description: 'Capteur STARVIS 1080p60, HDR, réglages avancés, excellente en basse lumière.',
    rating: 4.5,
    brand: 'Razer'
  },
  500: {
    name: 'Logitech Brio 300',
    price: 79,
    description: '1080p, USB-C, correction auto lumière/bruit, angle 70°, compacte.',
    rating: 4.4,
    brand: 'Logitech'
  },
  600: {
    name: 'Logitech StreamCam',
    price: 119,
    description: '1080p60, USB-C, mode portrait, autofocus intelligent, Logitech Capture.',
    rating: 4.5,
    brand: 'Logitech'
  },
  800: {
    name: 'Elgato Facecam',
    price: 149,
    description: 'Capteur Sony STARVIS 1080p60, pas de compression, Camera Hub pro.',
    rating: 4.7,
    brand: 'Elgato'
  },
  1000: {
    name: 'Logitech Brio 4K',
    price: 179,
    description: '4K Ultra HD, HDR, Windows Hello, zoom 5x, 90° FOV.',
    rating: 4.6,
    brand: 'Logitech'
  },
  1200: {
    name: 'Elgato Facecam Pro',
    price: 299,
    description: '4K60 véritable, capteur Sony, USB 3.0, réglages manuels complets.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1500: {
    name: 'Sony ZV-E10 + Kit 16-50mm',
    price: 749,
    description: 'Vraie caméra APS-C, 4K, autofocus temps réel, écran orientable, micro directionnel.',
    rating: 4.8,
    brand: 'Sony'
  },
  2000: {
    name: 'Sony ZV-E10 + Sigma 16mm f/1.4',
    price: 999,
    description: 'Combo créateur ultime : bokeh cinématique, excellente basse lumière, 4K.',
    rating: 4.9,
    brand: 'Sony + Sigma'
  },
  2500: {
    name: 'Sony A6400 + Sigma 16mm f/1.4',
    price: 1399,
    description: 'Autofocus légendaire (0.02s), 4K, pas de limite enregistrement, eye-tracking.',
    rating: 4.9,
    brand: 'Sony + Sigma'
  },
  3000: {
    name: 'Sony A6700 + Sigma 16mm f/1.4',
    price: 1899,
    description: 'Nouveau capteur 26MP, IBIS, 4K120fps, autofocus IA dernière génération.',
    rating: 4.9,
    brand: 'Sony + Sigma'
  },
  4000: {
    name: 'Sony A7C II + Sony 20mm f/1.8',
    price: 2999,
    description: 'Full-frame compact 33MP, 4K60, IBIS 7 stops, 10bit 4:2:2, eye-tracking.',
    rating: 5,
    brand: 'Sony'
  },
  5000: {
    name: 'Sony A7 IV + Sony 24mm f/1.4 GM',
    price: 3899,
    description: 'Full-frame 33MP, 4K60, autofocus ultime, 10bit, qualité broadcast pro.',
    rating: 5,
    brand: 'Sony'
  }
}

// ============================================
// MICROPHONES - 20+ produits
// ============================================
export const microphones: ProductCategory = {
  50: {
    name: 'Fifine K669B',
    price: 25,
    description: 'USB plug & play, condensateur, gain réglable. Premier micro correct.',
    rating: 4.0,
    brand: 'Fifine'
  },
  100: {
    name: 'Fifine AM8',
    price: 49,
    description: 'Dynamique USB/XLR, RGB, anti-pop intégré, gain tactile. Excellent rapport qualité/prix.',
    rating: 4.3,
    brand: 'Fifine'
  },
  150: {
    name: 'HyperX SoloCast',
    price: 59,
    description: 'Condensateur USB, tap-to-mute LED, compact, cardioïde. Simple et efficace.',
    rating: 4.4,
    brand: 'HyperX'
  },
  200: {
    name: 'Blue Yeti Nano',
    price: 89,
    description: 'Condensateur USB, 2 directivités, Blue VO!CE, compact et premium.',
    rating: 4.4,
    brand: 'Blue'
  },
  300: {
    name: 'HyperX QuadCast S',
    price: 139,
    description: 'Condensateur USB, RGB, 4 directivités, shock mount intégré, anti-pop.',
    rating: 4.6,
    brand: 'HyperX'
  },
  400: {
    name: 'Rode NT-USB Mini',
    price: 99,
    description: 'Condensateur USB studio, monitoring direct, compact, qualité Rode.',
    rating: 4.6,
    brand: 'Rode'
  },
  500: {
    name: 'Audio-Technica AT2020USB+',
    price: 149,
    description: 'Condensateur USB studio, monitoring casque, mixage micro/audio.',
    rating: 4.6,
    brand: 'Audio-Technica'
  },
  600: {
    name: 'Rode NT-USB+',
    price: 169,
    description: 'Nouvelle version Revolution preamp, 24bit, DSP intégré, monitoring.',
    rating: 4.7,
    brand: 'Rode'
  },
  800: {
    name: 'Elgato Wave:3',
    price: 159,
    description: 'Condensateur USB, Clipguard anti-saturation, Wave Link, qualité broadcast.',
    rating: 4.7,
    brand: 'Elgato'
  },
  1000: {
    name: 'Shure MV7',
    price: 249,
    description: 'Dynamique hybride USB/XLR, isolation bruit, égaliseur intégré, app ShurePlus.',
    rating: 4.8,
    brand: 'Shure'
  },
  1200: {
    name: 'Shure MV7+',
    price: 299,
    description: 'Nouveau préamp, LEDs tactiles, meilleure isolation, USB-C.',
    rating: 4.8,
    brand: 'Shure'
  },
  1500: {
    name: 'Rode PodMic USB',
    price: 229,
    description: 'Dynamique broadcast USB/XLR, Revolution preamp, DSP, monitoring.',
    rating: 4.8,
    brand: 'Rode'
  },
  2000: {
    name: 'Shure SM7B + Cloudlifter CL-1',
    price: 499,
    description: 'LE micro broadcast légendaire + boost 25dB pour interfaces standard.',
    rating: 4.9,
    brand: 'Shure + Cloud'
  },
  2500: {
    name: 'Shure SM7dB',
    price: 499,
    description: 'SM7B avec préamp intégré - plus besoin de Cloudlifter ! Sortie XLR.',
    rating: 4.9,
    brand: 'Shure'
  },
  3000: {
    name: 'Shure SM7dB + GoXLR Mini',
    price: 699,
    description: 'Combo broadcast : SM7dB + interface/mixeur streaming tout-en-un.',
    rating: 4.9,
    brand: 'Shure + TC Helicon'
  },
  4000: {
    name: 'Electro-Voice RE20 + Focusrite ISA One',
    price: 899,
    description: 'Micro broadcast radio classique + préamp studio haut de gamme.',
    rating: 4.9,
    brand: 'EV + Focusrite'
  },
  5000: {
    name: 'Neumann TLM 103 + RME Babyface Pro',
    price: 1799,
    description: 'Micro studio légendaire + interface pro. Qualité radio/TV.',
    rating: 5,
    brand: 'Neumann + RME'
  }
}

// ============================================
// ÉCLAIRAGE - 15+ produits
// ============================================
export const lighting: ProductCategory = {
  50: {
    name: 'Selfie Ring Light USB',
    price: 15,
    description: 'Anneau LED 6", clip téléphone, 3 modes, USB. Pour débuter.',
    rating: 3.5,
    brand: 'Générique'
  },
  100: {
    name: 'Neewer Ring Light 10"',
    price: 35,
    description: 'Anneau LED 26cm, trépied 135cm, télécommande, 3200K-5500K.',
    rating: 4.2,
    brand: 'Neewer'
  },
  200: {
    name: 'Elgato Ring Light',
    price: 49,
    description: 'Ring Light premium, contrôle app, température variable, montage webcam.',
    rating: 4.4,
    brand: 'Elgato'
  },
  300: {
    name: 'Neewer 2-Pack LED Panneau',
    price: 79,
    description: '2 panneaux LED 660 avec pieds, télécommande, bi-color 3200K-5600K.',
    rating: 4.3,
    brand: 'Neewer'
  },
  400: {
    name: 'Logitech Litra Glow',
    price: 59,
    description: 'Panneau LED compact, TrueSoft, montage monitor, contrôle Logitech G.',
    rating: 4.4,
    brand: 'Logitech'
  },
  500: {
    name: 'Logitech Litra Beam',
    price: 99,
    description: 'Panneau LED premium, TrueSoft 400 lumens, bi-color, montage flexible.',
    rating: 4.6,
    brand: 'Logitech'
  },
  600: {
    name: 'Elgato Key Light Mini',
    price: 99,
    description: 'Panneau portable 800 lumens, batterie, contrôle app, montage GoPro.',
    rating: 4.5,
    brand: 'Elgato'
  },
  800: {
    name: 'Elgato Key Light Air',
    price: 129,
    description: 'Panneau LED EDGE-LIT 1400 lumens, contrôle app/Stream Deck, 2900K-7000K.',
    rating: 4.7,
    brand: 'Elgato'
  },
  1000: {
    name: 'Elgato Key Light',
    price: 199,
    description: 'Panneau LED 2800 lumens, EDGE-LIT pro, pied bureau, contrôle total.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1500: {
    name: 'Elgato Key Light x2',
    price: 398,
    description: 'Setup 2 Key Light pour éclairage 3 points parfait, sync Stream Deck.',
    rating: 4.8,
    brand: 'Elgato'
  },
  2000: {
    name: 'Elgato Key Light + Govee Flow Pro',
    price: 299,
    description: 'Key Light principal + barres RGB ambilight pour fond dynamique.',
    rating: 4.7,
    brand: 'Elgato + Govee'
  },
  2500: {
    name: 'Elgato Key Light x2 + Hue Play x2',
    price: 499,
    description: 'Setup complet : 2 Key Light face + 2 Hue Play RGB background.',
    rating: 4.8,
    brand: 'Elgato + Philips'
  },
  3000: {
    name: 'Aputure MC Pro x4',
    price: 599,
    description: '4 panneaux RGB portables magnétiques, app, effets dynamiques créatifs.',
    rating: 4.8,
    brand: 'Aputure'
  },
  4000: {
    name: 'Aputure Amaran 100d + MC Pro x2',
    price: 699,
    description: 'Lumière principale 100W daylight + 2 panneaux RGB pour accents.',
    rating: 4.9,
    brand: 'Aputure'
  },
  5000: {
    name: 'Aputure Amaran 200d + MC Pro x4',
    price: 999,
    description: 'Setup studio : 200W key light + 4 RGB créatifs. Qualité cinéma.',
    rating: 5,
    brand: 'Aputure'
  }
}

// ============================================
// CASQUES AUDIO - 15+ produits
// ============================================
export const headphones: ProductCategory = {
  50: {
    name: 'JBL Tune 510BT',
    price: 39,
    description: 'Bluetooth 5.0, 40h autonomie, pliable. Correct pour débuter.',
    rating: 4.0,
    brand: 'JBL'
  },
  100: {
    name: 'HyperX Cloud Stinger',
    price: 49,
    description: 'Casque gaming léger, micro pivotant, confortable pour longues sessions.',
    rating: 4.3,
    brand: 'HyperX'
  },
  150: {
    name: 'SteelSeries Arctis 1',
    price: 59,
    description: 'Casque gaming détachable micro, coussinets AirWeave, léger.',
    rating: 4.3,
    brand: 'SteelSeries'
  },
  200: {
    name: 'Logitech G432',
    price: 69,
    description: 'DTS Headphone:X 2.0, drivers 50mm, micro flip-to-mute.',
    rating: 4.3,
    brand: 'Logitech'
  },
  300: {
    name: 'HyperX Cloud II',
    price: 79,
    description: '7.1 virtuel, mousse mémoire, alu, micro détachable. Référence gaming.',
    rating: 4.5,
    brand: 'HyperX'
  },
  400: {
    name: 'SteelSeries Arctis 7+',
    price: 119,
    description: 'Sans fil 2.4GHz, 30h batterie, micro ClearCast, très confortable.',
    rating: 4.6,
    brand: 'SteelSeries'
  },
  500: {
    name: 'Audio-Technica ATH-M40x',
    price: 99,
    description: 'Casque studio fermé, réponse plate, pliable, câbles détachables.',
    rating: 4.5,
    brand: 'Audio-Technica'
  },
  600: {
    name: 'Beyerdynamic DT 770 Pro 32Ω',
    price: 129,
    description: 'Studio fermé légendaire, confort velours, parfait sans ampli.',
    rating: 4.7,
    brand: 'Beyerdynamic'
  },
  800: {
    name: 'Audio-Technica ATH-M50x',
    price: 149,
    description: 'Référence studio fermé, 15Hz-28kHz, pliable, 3 câbles inclus.',
    rating: 4.7,
    brand: 'Audio-Technica'
  },
  1000: {
    name: 'Beyerdynamic DT 770 Pro 80Ω',
    price: 139,
    description: 'Version 80Ω, basses profondes, isolation parfaite, confort ultime.',
    rating: 4.8,
    brand: 'Beyerdynamic'
  },
  1500: {
    name: 'Beyerdynamic DT 900 Pro X',
    price: 269,
    description: 'Ouvert, transducteurs STELLAR.45, 48Ω polyvalent, coussinets mémoire.',
    rating: 4.8,
    brand: 'Beyerdynamic'
  },
  2000: {
    name: 'Sennheiser HD 660S2',
    price: 449,
    description: 'Ouvert audiophile, transducteurs améliorés, précision référence.',
    rating: 4.8,
    brand: 'Sennheiser'
  },
  2500: {
    name: 'Beyerdynamic DT 1990 Pro',
    price: 449,
    description: 'Ouvert haut de gamme, Tesla transducers, 2 paires de pads incluses.',
    rating: 4.9,
    brand: 'Beyerdynamic'
  },
  3000: {
    name: 'Sennheiser HD 800 S',
    price: 1299,
    description: 'Le roi des casques ouverts. 56mm ring radiator, son spatial incroyable.',
    rating: 5,
    brand: 'Sennheiser'
  },
  5000: {
    name: 'Audeze LCD-X 2021 + Schiit Magni/Modi Stack',
    price: 1599,
    description: 'Planar magnétique 106mm + Amp/DAC stack. Qualité mastering.',
    rating: 5,
    brand: 'Audeze + Schiit'
  }
}

// ============================================
// STREAM DECKS & ACCESSOIRES - 12+ produits
// ============================================
export const accessories: ProductCategory = {
  100: {
    name: 'Loupedeck Live S',
    price: 89,
    description: '4 boutons + molette tactile, contrôle OBS, Twitch, Spotify.',
    rating: 4.2,
    brand: 'Loupedeck'
  },
  200: {
    name: 'Elgato Stream Deck Mini',
    price: 89,
    description: '6 touches LCD personnalisables, parfait pour débuter.',
    rating: 4.5,
    brand: 'Elgato'
  },
  300: {
    name: 'Elgato Stream Deck Neo',
    price: 99,
    description: '8 touches + 2 pages tactiles, nouveau design compact.',
    rating: 4.5,
    brand: 'Elgato'
  },
  400: {
    name: 'Loupedeck Live',
    price: 199,
    description: '12 boutons + 6 molettes + écran tactile, ultra polyvalent.',
    rating: 4.5,
    brand: 'Loupedeck'
  },
  500: {
    name: 'Elgato Stream Deck +',
    price: 199,
    description: '8 touches LCD + 4 molettes + écran tactile. Parfait pour audio.',
    rating: 4.7,
    brand: 'Elgato'
  },
  600: {
    name: 'Razer Stream Controller',
    price: 179,
    description: '12 touches LCD + 6 boutons analogiques, intégration Razer.',
    rating: 4.5,
    brand: 'Razer'
  },
  800: {
    name: 'Elgato Stream Deck MK.2',
    price: 149,
    description: '15 touches LCD, façade interchangeable, support magnétique.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1000: {
    name: 'Elgato Stream Deck MK.2 + Foot Pedal',
    price: 239,
    description: '15 touches + pédalier 3 actions mains libres. Contrôle pro.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1500: {
    name: 'Elgato Stream Deck XL',
    price: 249,
    description: '32 touches LCD, le plus grand, pour power users.',
    rating: 4.9,
    brand: 'Elgato'
  },
  2000: {
    name: 'Elgato Stream Deck XL + Pedal',
    price: 339,
    description: '32 touches + pédalier pour mute/scènes mains libres.',
    rating: 4.9,
    brand: 'Elgato'
  },
  3000: {
    name: 'Elgato Stream Deck XL + Pedal + Prompter',
    price: 549,
    description: 'Setup créateur : 32 touches, pédalier, prompteur Elgato.',
    rating: 5,
    brand: 'Elgato'
  },
  5000: {
    name: 'Elgato Studio Commander',
    price: 799,
    description: 'Stream Deck XL + Pedal + Prompter + Multi Mount system complet.',
    rating: 5,
    brand: 'Elgato'
  }
}

// ============================================
// PC GAMING / STREAMING - 20+ configurations
// ============================================
export const pcs: ProductCategory = {
  200: {
    name: 'PC Reconditionné Dell OptiPlex',
    price: 199,
    description: 'i5-6500, 8Go RAM, SSD 256Go. Pour IRL/Just Chatting uniquement.',
    rating: 3.2,
    brand: 'Dell (reconditionné)'
  },
  300: {
    name: 'PC AMD APU - Ryzen 5 5600G',
    price: 399,
    description: 'Ryzen 5 5600G, 16Go DDR4, SSD 500Go. Stream 720p jeux légers.',
    rating: 3.9,
    brand: 'AMD'
  },
  400: {
    name: 'PC Budget - Ryzen 5 5500 + RX 6500 XT',
    price: 449,
    description: 'Ryzen 5 5500, RX 6500 XT 4Go, 16Go DDR4, SSD 500Go.',
    rating: 4.0,
    brand: 'AMD'
  },
  500: {
    name: 'PC Entry Gaming - Ryzen 5 5500 + RX 6600',
    price: 549,
    description: 'Ryzen 5 5500, RX 6600 8Go, 16Go DDR4, SSD 512Go.',
    rating: 4.2,
    brand: 'AMD'
  },
  600: {
    name: 'PC Gaming - i5-12400F + RTX 3060',
    price: 649,
    description: 'Intel i5-12400F, RTX 3060 12Go, 16Go DDR4, SSD 1To.',
    rating: 4.3,
    brand: 'Intel + Nvidia'
  },
  700: {
    name: 'PC Gaming+ - Ryzen 5 5600 + RTX 4060',
    price: 699,
    description: 'Ryzen 5 5600, RTX 4060 8Go, 16Go DDR4, SSD 1To. NVENC AV1.',
    rating: 4.4,
    brand: 'AMD + Nvidia'
  },
  800: {
    name: 'PC Streaming - Ryzen 5 5600X + RTX 4060',
    price: 749,
    description: 'Ryzen 5 5600X, RTX 4060 8Go, 16Go DDR4-3600, SSD NVMe 1To.',
    rating: 4.5,
    brand: 'AMD + Nvidia'
  },
  1000: {
    name: 'PC Content Creator - Ryzen 5 7600X + RTX 4060 Ti',
    price: 999,
    description: 'Ryzen 5 7600X, RTX 4060 Ti 8Go, 32Go DDR5, SSD NVMe 1To.',
    rating: 4.6,
    brand: 'AMD + Nvidia'
  },
  1200: {
    name: 'PC Pro Streaming - i5-13600KF + RTX 4060 Ti 16Go',
    price: 1199,
    description: 'Intel i5-13600KF, RTX 4060 Ti 16Go, 32Go DDR5, SSD 1To.',
    rating: 4.7,
    brand: 'Intel + Nvidia'
  },
  1500: {
    name: 'PC Enthusiast - Ryzen 7 7700X + RTX 4070',
    price: 1299,
    description: 'Ryzen 7 7700X, RTX 4070 12Go, 32Go DDR5-5600, SSD NVMe 1To.',
    rating: 4.7,
    brand: 'AMD + Nvidia'
  },
  1800: {
    name: 'PC Gaming+ - Ryzen 7 7800X3D + RTX 4070 Super',
    price: 1599,
    description: 'Ryzen 7 7800X3D (V-Cache), RTX 4070 Super, 32Go DDR5, SSD 2To.',
    rating: 4.8,
    brand: 'AMD + Nvidia'
  },
  2000: {
    name: 'PC High-End - i7-14700KF + RTX 4070 Ti Super',
    price: 1899,
    description: 'Intel i7-14700KF, RTX 4070 Ti Super, 64Go DDR5, SSD 2To.',
    rating: 4.8,
    brand: 'Intel + Nvidia'
  },
  2500: {
    name: 'PC Creator - Ryzen 9 7900X + RTX 4080 Super',
    price: 2299,
    description: 'Ryzen 9 7900X, RTX 4080 Super, 64Go DDR5-6000, SSD 2To + 4To HDD.',
    rating: 4.9,
    brand: 'AMD + Nvidia'
  },
  3000: {
    name: 'PC Broadcast - Ryzen 9 7950X + RTX 4080 Super',
    price: 2699,
    description: 'Ryzen 9 7950X 16C/32T, RTX 4080 Super, 64Go DDR5, SSD 4To.',
    rating: 4.9,
    brand: 'AMD + Nvidia'
  },
  3500: {
    name: 'PC Ultimate - i9-14900K + RTX 4090',
    price: 3499,
    description: 'Intel i9-14900K, RTX 4090 24Go, 64Go DDR5-6400, SSD 4To Gen5.',
    rating: 5,
    brand: 'Intel + Nvidia'
  },
  4000: {
    name: 'Workstation Pro - i9-14900K + RTX 4090 + 128Go',
    price: 3999,
    description: 'i9-14900K, RTX 4090, 128Go DDR5, SSD 4To + 8To HDD RAID.',
    rating: 5,
    brand: 'Intel + Nvidia'
  },
  5000: {
    name: 'Dual PC Setup complet',
    price: 4999,
    description: 'Gaming PC (i7+4080) + Stream PC (Ryzen 7+capture). Setup pro séparé.',
    rating: 5,
    brand: 'Intel + AMD'
  }
}

// ============================================
// ÉCRANS / MONITEURS - 15+ produits
// ============================================
export const monitors: ProductCategory = {
  150: {
    name: 'AOC 24G2SE (24" 1080p 165Hz)',
    price: 129,
    description: 'VA, 1ms, 165Hz, FreeSync, inclinable. Budget gaming.',
    rating: 4.3,
    brand: 'AOC'
  },
  200: {
    name: 'AOC 24G2SP (24" 1080p 165Hz IPS)',
    price: 159,
    description: 'IPS, 1ms, FreeSync Premium, réglable hauteur. Meilleur rapport Q/P.',
    rating: 4.5,
    brand: 'AOC'
  },
  300: {
    name: 'ASUS VG249Q1A (24" 1080p 165Hz)',
    price: 179,
    description: 'IPS, 1ms MPRT, FreeSync Premium, pivot rotate.',
    rating: 4.5,
    brand: 'ASUS'
  },
  400: {
    name: 'LG 27GP750-B (27" 1080p 240Hz)',
    price: 249,
    description: '240Hz pour compétitif, IPS, 1ms, G-Sync Compatible.',
    rating: 4.5,
    brand: 'LG'
  },
  500: {
    name: 'Gigabyte M27Q (27" 1440p 170Hz)',
    price: 299,
    description: 'SS IPS, KVM switch, USB-C, excellent pour productivité + gaming.',
    rating: 4.6,
    brand: 'Gigabyte'
  },
  600: {
    name: 'ASUS VG27AQ1A (27" 1440p 170Hz)',
    price: 299,
    description: 'IPS, 1ms, G-Sync Compatible, HDR10, ELMB Sync.',
    rating: 4.6,
    brand: 'ASUS'
  },
  800: {
    name: 'LG 27GP850-B (27" 1440p 180Hz)',
    price: 349,
    description: 'Nano IPS, 1ms, HDR400, G-Sync, DCI-P3 98%. Référence.',
    rating: 4.7,
    brand: 'LG'
  },
  1000: {
    name: 'Dell S2722DGM (27" 1440p 165Hz VA)',
    price: 279,
    description: 'Curved VA, contraste 3000:1, AMD FreeSync Premium Pro.',
    rating: 4.5,
    brand: 'Dell'
  },
  1500: {
    name: 'Setup Dual ASUS VG27AQ1A',
    price: 598,
    description: '2x VG27AQ1A 27" 1440p. Stream sur un, jeu sur l\'autre.',
    rating: 4.7,
    brand: 'ASUS'
  },
  2000: {
    name: 'LG 32GQ950-B (32" 4K 144Hz)',
    price: 799,
    description: 'Nano IPS, HDR1000, G-Sync, Thunderbolt 3. Créateurs.',
    rating: 4.8,
    brand: 'LG'
  },
  2500: {
    name: 'LG 27GR95QE (27" OLED 240Hz)',
    price: 899,
    description: 'OLED gaming, 0.03ms, anti-reflet, G-Sync. Image parfaite.',
    rating: 4.9,
    brand: 'LG'
  },
  3000: {
    name: 'LG 32GQ950-B + Dell S2722DC',
    price: 999,
    description: '32" 4K principal + 27" QHD USB-C secondaire.',
    rating: 4.8,
    brand: 'LG + Dell'
  },
  4000: {
    name: 'Samsung Odyssey OLED G8 (34" OLED 175Hz)',
    price: 1299,
    description: '34" OLED curved 21:9, QD-OLED, Gaming Hub smart.',
    rating: 4.9,
    brand: 'Samsung'
  },
  5000: {
    name: 'LG 27GR95QE OLED + Dell U2723QE',
    price: 1548,
    description: 'OLED 240Hz gaming + 4K IPS Black USB-C créateur.',
    rating: 5,
    brand: 'LG + Dell'
  }
}

// ============================================
// BRAS MICRO - 10+ produits
// ============================================
export const micArms: ProductCategory = {
  50: {
    name: 'Neewer NW-35 Boom Arm',
    price: 19,
    description: 'Bras basique avec pince, ressorts externes visibles, rotation.',
    rating: 3.8,
    brand: 'Neewer'
  },
  100: {
    name: 'Tonor T20 Boom Arm',
    price: 29,
    description: 'Bras articulé ressorts internes, pince bureau, rotation 360°.',
    rating: 4.1,
    brand: 'Tonor'
  },
  200: {
    name: 'Blue Compass',
    price: 99,
    description: 'Bras premium broadcast, ressorts internes, gestion câbles.',
    rating: 4.5,
    brand: 'Blue'
  },
  300: {
    name: 'Elgato Wave Mic Arm LP',
    price: 99,
    description: 'Low-profile horizontal, gestion câbles intégrée, clamp premium.',
    rating: 4.7,
    brand: 'Elgato'
  },
  400: {
    name: 'Rode PSA1',
    price: 99,
    description: 'Bras broadcast classique, ressorts silencieux, rotation 360°.',
    rating: 4.6,
    brand: 'Rode'
  },
  500: {
    name: 'Rode PSA1+',
    price: 119,
    description: 'Version améliorée, charge 1.1kg, ressorts plus silencieux.',
    rating: 4.8,
    brand: 'Rode'
  },
  600: {
    name: 'Elgato Wave Mic Arm',
    price: 99,
    description: 'Bras vertical premium, design épuré, parfait pour bureaux.',
    rating: 4.7,
    brand: 'Elgato'
  },
  800: {
    name: 'Elgato Wave Mic Arm + Shock Mount',
    price: 149,
    description: 'Bras + suspension anti-vibrations pour isolation parfaite.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1000: {
    name: 'Rode PSA1+ + SMR Premium',
    price: 189,
    description: 'Bras broadcast + shock mount Rode intégré.',
    rating: 4.8,
    brand: 'Rode'
  },
  1500: {
    name: 'Yellowtec Mika',
    price: 299,
    description: 'Bras broadcast professionnel, parallélogramme, qualité radio.',
    rating: 4.9,
    brand: 'Yellowtec'
  },
  3000: {
    name: 'Yellowtec Mika + O.C. White ProBoom',
    price: 449,
    description: 'Setup broadcast radio/TV professionnel complet.',
    rating: 5,
    brand: 'Yellowtec + O.C. White'
  },
  5000: {
    name: 'Yellowtec m!ka Telescopic Arm',
    price: 599,
    description: 'Bras télescopique broadcast ultime, utilisé en radio/TV.',
    rating: 5,
    brand: 'Yellowtec'
  }
}

// ============================================
// CARTES CAPTURE - 10+ produits
// ============================================
export const captureCards: ProductCategory = {
  100: {
    name: 'EVGA XR1 Lite',
    price: 69,
    description: 'USB 1080p60 passthrough, capture 1080p30. Budget console.',
    rating: 4.0,
    brand: 'EVGA'
  },
  200: {
    name: 'AVerMedia Live Gamer Mini',
    price: 99,
    description: 'USB 1080p60, passthrough 1080p, ultra compact.',
    rating: 4.2,
    brand: 'AVerMedia'
  },
  300: {
    name: 'Elgato HD60 X',
    price: 179,
    description: '4K30/1080p60 HDR, passthrough VRR, USB 3.0. Standards consoles.',
    rating: 4.6,
    brand: 'Elgato'
  },
  500: {
    name: 'AVerMedia Live Gamer Ultra',
    price: 199,
    description: '4K30 capture, 4K60 HDR passthrough, USB 3.1.',
    rating: 4.5,
    brand: 'AVerMedia'
  },
  600: {
    name: 'Elgato HD60 S+',
    price: 179,
    description: '1080p60 HDR, passthrough 4K60 HDR, ultra faible latence.',
    rating: 4.6,
    brand: 'Elgato'
  },
  800: {
    name: 'Elgato 4K60 S+',
    price: 399,
    description: '4K60 HDR capture sur SD, zero-lag passthrough, standalone.',
    rating: 4.8,
    brand: 'Elgato'
  },
  1000: {
    name: 'Elgato 4K X',
    price: 299,
    description: '4K144 HDR passthrough, capture 4K30, USB 3.0. New gen.',
    rating: 4.7,
    brand: 'Elgato'
  },
  1500: {
    name: 'Elgato 4K Pro (PCIe)',
    price: 399,
    description: 'PCIe x4, 4K60 HDR10 capture, 8K60/4K240 passthrough.',
    rating: 4.8,
    brand: 'Elgato'
  },
  2000: {
    name: 'AVerMedia Live Gamer 4K 2.1',
    price: 449,
    description: '4K144Hz HDR passthrough, VRR, capture 4K60. Plus avancé.',
    rating: 4.8,
    brand: 'AVerMedia'
  },
  3000: {
    name: 'Blackmagic DeckLink Mini Recorder 4K',
    price: 219,
    description: 'PCIe, capture SDI/HDMI 4K, 10bit, broadcast professionnel.',
    rating: 4.9,
    brand: 'Blackmagic'
  },
  5000: {
    name: 'Blackmagic DeckLink 8K Pro',
    price: 795,
    description: 'PCIe, 8K30 ou quad 1080p60, 12bit, pro broadcast.',
    rating: 5,
    brand: 'Blackmagic'
  }
}

// ============================================
// FONDS VERTS - 8+ produits
// ============================================
export const greenScreens: ProductCategory = {
  50: {
    name: 'Tissu vert 2x3m + pinces',
    price: 19,
    description: 'Tissu vert basique avec pinces. DIY mais efficace.',
    rating: 3.5,
    brand: 'Générique'
  },
  100: {
    name: 'Neewer Chromakey Background',
    price: 39,
    description: 'Fond vert pliable 1.5x2m avec support. Polyester anti-plis.',
    rating: 4.0,
    brand: 'Neewer'
  },
  200: {
    name: 'Elgato Green Screen',
    price: 149,
    description: 'Pop-up rétractable 148x180cm, wrinkle-free, install 1 seconde.',
    rating: 4.6,
    brand: 'Elgato'
  },
  300: {
    name: 'Elgato Green Screen MT',
    price: 199,
    description: 'Sur trépied 180x200cm, hauteur réglable, pour debout/assis.',
    rating: 4.7,
    brand: 'Elgato'
  },
  500: {
    name: 'Elgato Green Screen XL',
    price: 199,
    description: 'Extra-large 200x180cm, montage mur, couverture maximale.',
    rating: 4.7,
    brand: 'Elgato'
  },
  800: {
    name: 'Elgato Green Screen + Key Light Air',
    price: 278,
    description: 'Combo fond vert + éclairage pour chroma parfait.',
    rating: 4.7,
    brand: 'Elgato'
  },
  1500: {
    name: 'Elgato Green Screen + Key Light x2',
    price: 547,
    description: 'Setup chroma pro : fond vert + 2 Key Light pour uniformité.',
    rating: 4.8,
    brand: 'Elgato'
  },
  3000: {
    name: 'Studio Setup Complet',
    price: 897,
    description: 'Green Screen XL + 2x Key Light + 2x Hue Play ambiance.',
    rating: 4.9,
    brand: 'Elgato + Philips'
  },
  5000: {
    name: 'Broadcast Studio Kit',
    price: 1497,
    description: 'Green Screen XL + Aputure 200d + MC Pro x4. Qualité cinéma.',
    rating: 5,
    brand: 'Elgato + Aputure'
  }
}

// ============================================
// INTERFACES AUDIO - 12+ produits
// ============================================
export const audioInterfaces: ProductCategory = {
  100: {
    name: 'Focusrite Scarlett Solo 4th Gen',
    price: 99,
    description: '1 entrée XLR/instrument, 24bit/192kHz, Air mode, USB-C.',
    rating: 4.5,
    brand: 'Focusrite'
  },
  150: {
    name: 'PreSonus AudioBox GO',
    price: 79,
    description: 'Ultra compacte, 1 XLR, USB-C, 96kHz, monitoring.',
    rating: 4.3,
    brand: 'PreSonus'
  },
  200: {
    name: 'Focusrite Scarlett 2i2 4th Gen',
    price: 159,
    description: '2 entrées XLR, 24bit/192kHz, Air mode, gain halos.',
    rating: 4.6,
    brand: 'Focusrite'
  },
  300: {
    name: 'Elgato Wave XLR',
    price: 159,
    description: 'Interface/préamp 75dB gain, tap-to-mute, Wave Link app.',
    rating: 4.7,
    brand: 'Elgato'
  },
  400: {
    name: 'Universal Audio Volt 1',
    price: 149,
    description: '1 entrée, vintage preamp mode, compression analogique.',
    rating: 4.6,
    brand: 'Universal Audio'
  },
  500: {
    name: 'Arturia MiniFuse 2',
    price: 149,
    description: '2 entrées, USB-C, monitoring direct, design compact.',
    rating: 4.5,
    brand: 'Arturia'
  },
  600: {
    name: 'Focusrite Scarlett 4i4 4th Gen',
    price: 249,
    description: '4 entrées/4 sorties, MIDI, 2 preamps, monitoring avancé.',
    rating: 4.7,
    brand: 'Focusrite'
  },
  800: {
    name: 'TC Helicon GoXLR Mini',
    price: 229,
    description: '4 faders, effets voix, samples, routing streaming.',
    rating: 4.7,
    brand: 'TC Helicon'
  },
  1000: {
    name: 'Universal Audio Volt 276',
    price: 299,
    description: '2 entrées, compresseur 76 analogique, preamp vintage.',
    rating: 4.7,
    brand: 'Universal Audio'
  },
  1500: {
    name: 'TC Helicon GoXLR',
    price: 449,
    description: 'Version complète : 4 faders, sampler, effets pro, routing.',
    rating: 4.8,
    brand: 'TC Helicon'
  },
  2000: {
    name: 'Rode RodeCaster Duo',
    price: 429,
    description: '2 entrées XLR, 6 faders, effets, pads, Bluetooth, compacte.',
    rating: 4.8,
    brand: 'Rode'
  },
  3000: {
    name: 'Rode RodeCaster Pro II',
    price: 699,
    description: 'Console broadcast : 4 XLR, 9 faders, effets, enreg SD.',
    rating: 5,
    brand: 'Rode'
  },
  5000: {
    name: 'RME Babyface Pro FS',
    price: 899,
    description: 'Interface pro 12 canaux, drivers légendaires, qualité studio.',
    rating: 5,
    brand: 'RME'
  }
}

// ============================================
// EXPORT PRINCIPAL
// ============================================
export const productDatabase = {
  webcam: webcams,
  microphone: microphones,
  lighting: lighting,
  audio: headphones,
  audioInterface: audioInterfaces,
  accessory: accessories,
  pc: pcs,
  monitor: monitors,
  micArm: micArms,
  captureCard: captureCards,
  greenScreen: greenScreens
}

// Fonction utilitaire pour trouver le budget le plus proche
export const findClosestBudget = (targetBudget: number): number => {
  // Récupérer tous les budgets disponibles depuis n'importe quelle catégorie (pcs a le plus)
  const budgets = Object.keys(pcs).map(Number).sort((a, b) => a - b)
  return budgets.reduce((prev, curr) => 
    Math.abs(curr - targetBudget) < Math.abs(prev - targetBudget) ? curr : prev
  )
}
