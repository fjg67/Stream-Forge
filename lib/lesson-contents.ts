// Contenu détaillé des leçons - Stream Forge Academy
// Chaque leçon a un contenu riche avec sections, tips, et exemples

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export interface LessonSection {
  type: 'intro' | 'concept' | 'steps' | 'tip' | 'warning' | 'example' | 'checklist' | 'quote' | 'quiz'
  title?: string
  content: string
  items?: string[]
  icon?: string
  questions?: QuizQuestion[]
}

export interface LessonContent {
  courseSlug: string
  lessonId: number
  sections: LessonSection[]
  keyTakeaways: string[]
  nextSteps?: string
}

export const LESSON_CONTENTS: LessonContent[] = [
  // ============================================
  // COURS 1: Préparer son Premier Stream
  // ============================================
  {
    courseSlug: 'premier-stream',
    lessonId: 1,
    sections: [
      {
        type: 'intro',
        content: `Bienvenue dans le monde incroyable du streaming ! 🎮 Tu es sur le point de rejoindre une communauté de millions de créateurs qui partagent leur passion en direct avec le monde entier. Que tu sois joueur, artiste, musicien ou simplement quelqu'un qui aime discuter, le streaming t'ouvre des portes infinies.`
      },
      {
        type: 'concept',
        title: 'Qu\'est-ce que le streaming ?',
        content: `Le streaming, c'est la diffusion en direct de contenu vidéo sur internet. Contrairement aux vidéos YouTube classiques, ton audience te regarde EN TEMPS RÉEL et peut interagir avec toi via le chat. C'est cette interaction qui rend le streaming si unique et addictif !`
      },
      {
        type: 'steps',
        title: 'Ce que tu vas apprendre dans ce cours',
        content: 'Voici le programme complet qui t\'attend :',
        items: [
          'Choisir la meilleure plateforme pour ton contenu',
          'Configurer ton matériel sans te ruiner',
          'Maîtriser OBS Studio comme un pro',
          'Créer une identité visuelle qui claque',
          'Gérer le stress du premier live',
          'Interagir efficacement avec ton chat',
          'Analyser et améliorer tes performances'
        ]
      },
      {
        type: 'tip',
        title: 'Conseil de pro',
        content: `Ne cherche pas la perfection dès le départ ! Les plus grands streamers ont tous commencé avec zéro viewer et un setup bancal. L'important, c'est de se lancer et d'apprendre en chemin. 🚀`
      },
      {
        type: 'quote',
        content: `"Le meilleur moment pour commencer à streamer, c'était il y a 5 ans. Le deuxième meilleur moment, c'est maintenant." - Shroud`
      }
    ],
    keyTakeaways: [
      'Le streaming est accessible à tous, sans matériel coûteux',
      'L\'interaction en direct est ce qui rend le streaming unique',
      'La régularité prime sur la perfection',
      'Ce cours te guide étape par étape vers ton premier live'
    ],
    nextSteps: 'Dans la prochaine leçon, on va explorer pourquoi 2025 est THE année pour se lancer dans le streaming !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 2,
    sections: [
      {
        type: 'intro',
        content: `2025 est une année exceptionnelle pour se lancer dans le streaming. Les plateformes évoluent, les opportunités se multiplient, et la demande de contenu live n'a jamais été aussi forte. Voyons ensemble pourquoi c'est LE moment parfait ! 🔥`
      },
      {
        type: 'concept',
        title: 'L\'explosion du live streaming',
        content: `Le marché du streaming a explosé ces dernières années. Twitch compte plus de 140 millions de viewers mensuels, YouTube Gaming dépasse les 100 millions, et TikTok Live révolutionne le format court. Les viewers préfèrent de plus en plus le contenu authentique et spontané aux vidéos ultra-produites.`
      },
      {
        type: 'steps',
        title: 'Les opportunités en 2025',
        content: 'Voici ce qui rend 2025 unique :',
        items: [
          'Twitch a revu son programme d\'affiliation : plus accessible',
          'YouTube paie mieux les créateurs live que jamais',
          'TikTok Live explose et cherche des créateurs',
          'Les sponsors investissent massivement dans le gaming',
          'L\'IA facilite la création de contenu (overlays, clips auto)',
          'Le mobile streaming devient viable et populaire'
        ]
      },
      {
        type: 'example',
        title: 'Success Story : De 0 à Partner en 6 mois',
        content: `Thomas, 23 ans, a commencé à streamer Valorant en janvier 2024. Sans aucune audience préalable, il streamait 4 soirs par semaine. En créant du contenu TikTok à partir de ses clips, il a atteint 5000 followers en 3 mois. En juin, il était Partner Twitch avec 500 viewers moyens. Aujourd'hui, c'est son métier à temps plein.`
      },
      {
        type: 'warning',
        title: 'Attention cependant',
        content: `Le streaming demande de la patience et de la régularité. 90% des streamers abandonnent dans les 3 premiers mois. La clé ? Streamer pour le fun d'abord, les stats ensuite. Si tu prends du plaisir, ton audience le ressentira.`
      },
      {
        type: 'tip',
        title: 'Le secret des streamers qui percent',
        content: `Ils ne se contentent pas de streamer. Ils créent du contenu annexe : clips TikTok/Shorts, posts Twitter, communauté Discord active. Le stream, c'est 30% du travail. Les 70% restants, c'est le networking et la création de contenu court.`
      },
      {
        type: 'quiz',
        title: 'Vérifie tes connaissances',
        content: 'Réponds à ces questions pour valider ta compréhension :',
        questions: [
          {
            question: 'Combien de viewers mensuels compte Twitch environ ?',
            options: ['50 millions', '100 millions', '140 millions', '200 millions'],
            correctIndex: 2,
            explanation: 'Twitch compte plus de 140 millions de viewers uniques par mois, ce qui en fait la plateforme de streaming gaming #1.'
          },
          {
            question: 'Quel pourcentage des streamers abandonnent dans les 3 premiers mois ?',
            options: ['50%', '70%', '80%', '90%'],
            correctIndex: 3,
            explanation: 'La patience est clé ! 90% abandonnent trop tôt. La régularité et le plaisir sont essentiels pour durer.'
          },
          {
            question: 'Selon la leçon, quel pourcentage du travail d\'un streamer représente le stream lui-même ?',
            options: ['80%', '60%', '50%', '30%'],
            correctIndex: 3,
            explanation: 'Le stream ne représente que 30% du travail. Le reste, c\'est la création de contenu annexe et le networking !'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Le marché du streaming continue de croître en 2025',
      'Les plateformes facilitent l\'accès à la monétisation',
      'Le multi-plateforme est devenu essentiel',
      'La patience et la régularité sont les clés du succès'
    ],
    nextSteps: 'Maintenant que tu sais pourquoi c\'est le bon moment, passons au choix crucial : quelle plateforme choisir ?'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 3,
    sections: [
      {
        type: 'intro',
        content: `Twitch, YouTube, TikTok... Comment choisir ? Chaque plateforme a ses forces et ses faiblesses. Cette leçon va t'aider à trouver celle qui correspond le mieux à ton contenu et tes objectifs. 🎯`
      },
      {
        type: 'concept',
        title: 'Twitch : Le roi du gaming',
        content: `Twitch reste LA référence pour le gaming et l'esport. Sa culture unique (emotes, raids, hype train) en fait un lieu privilégié pour construire une vraie communauté. Mais la concurrence est rude et la découvrabilité faible.`,
        items: [
          '✅ Communauté gaming très engagée',
          '✅ Outils de monétisation complets (subs, bits, bounties)',
          '✅ Culture unique des emotes et inside jokes',
          '❌ Difficile d\'être découvert sans audience préexistante',
          '❌ Parts de revenus moins avantageuses (50/50 standard)'
        ]
      },
      {
        type: 'concept',
        title: 'YouTube Live : La puissance de la recherche',
        content: `YouTube excelle pour être découvert grâce à son algorithme et son moteur de recherche. Tes lives peuvent être redécouverts des mois après. Idéal si tu fais aussi des vidéos classiques.`,
        items: [
          '✅ Excellent pour la découvrabilité (SEO)',
          '✅ Les VODs restent pertinentes longtemps',
          '✅ Meilleur partage des revenus (70/30)',
          '✅ Super Chat très utilisé',
          '❌ Communauté moins "live focused"',
          '❌ Moins d\'outils d\'interaction que Twitch'
        ]
      },
      {
        type: 'concept',
        title: 'TikTok Live : La viralité instantanée',
        content: `TikTok Live est parfait pour exploser rapidement. L'algorithme peut te propulser devant des milliers de personnes même si tu es nouveau. Mais l'audience est volatile et les lives sont limités en durée.`,
        items: [
          '✅ Potentiel viral énorme',
          '✅ Audience jeune et engagée',
          '✅ Facilite le passage en live depuis téléphone',
          '❌ Audience moins fidèle',
          '❌ Monétisation encore limitée',
          '❌ Format court (moins de 3h recommandé)'
        ]
      },
      {
        type: 'tip',
        title: 'Ma recommandation',
        content: `Commence sur UNE plateforme principale, maîtrise-la, puis étends-toi. Pour le gaming classique → Twitch. Pour le contenu éducatif/tech → YouTube. Pour le contenu court et dynamique → TikTok. Et clippe TOUT pour les réseaux sociaux !`
      },
      {
        type: 'checklist',
        title: 'Questions pour choisir ta plateforme',
        content: 'Réponds honnêtement à ces questions :',
        items: [
          'Quel type de contenu veux-tu créer ?',
          'Préfères-tu les longues sessions ou le format court ?',
          'As-tu déjà une audience sur une plateforme ?',
          'Veux-tu faire aussi des vidéos classiques ?',
          'Quel âge a ton audience cible ?'
        ]
      },
      {
        type: 'quiz',
        title: 'Quelle plateforme pour toi ?',
        content: 'Teste tes connaissances sur les plateformes :',
        questions: [
          {
            question: 'Quelle plateforme offre le meilleur partage de revenus pour les créateurs ?',
            options: ['Twitch (50/50)', 'YouTube (70/30)', 'TikTok', 'Toutes égales'],
            correctIndex: 1,
            explanation: 'YouTube offre un partage 70/30 en faveur du créateur, contre 50/50 sur Twitch pour les Affiliates.'
          },
          {
            question: 'Quelle plateforme est la meilleure pour la découvrabilité grâce au SEO ?',
            options: ['Twitch', 'YouTube', 'TikTok', 'Facebook Gaming'],
            correctIndex: 1,
            explanation: 'YouTube est un moteur de recherche. Tes lives peuvent être trouvés via la recherche des mois après.'
          },
          {
            question: 'Sur quelle plateforme un nouveau streamer peut-il devenir viral le plus facilement ?',
            options: ['Twitch', 'YouTube', 'TikTok', 'Kick'],
            correctIndex: 2,
            explanation: 'TikTok peut propulser n\'importe qui devant des milliers de personnes grâce à son algorithme de recommandation.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Twitch = communauté gaming, culture unique, découvrabilité difficile',
      'YouTube = SEO puissant, VODs durables, audience moins live-focused',
      'TikTok = viralité facile, audience jeune, fidélisation compliquée',
      'Commence par UNE plateforme et maîtrise-la'
    ],
    nextSteps: 'Tu as choisi ta plateforme ? Parfait ! Voyons maintenant les alternatives moins connues qui méritent ton attention.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 4,
    sections: [
      {
        type: 'intro',
        content: `Au-delà des géants Twitch, YouTube et TikTok, d'autres plateformes méritent ton attention. Kick, Facebook Gaming, Trovo... Certaines offrent des conditions très avantageuses pour attirer les créateurs. 🌟`
      },
      {
        type: 'concept',
        title: 'Kick : Le nouveau challenger',
        content: `Kick fait beaucoup parler depuis 2023. Avec un split 95/5 (vs 50/50 chez Twitch) et moins de règles strictes, la plateforme attire des créateurs établis. Côté audience, c'est encore limité mais en forte croissance.`,
        items: [
          '✅ Partage des revenus exceptionnel (95%)',
          '✅ Moins de restrictions de contenu',
          '✅ Créateurs exclusifs de renom (xQc, Amouranth)',
          '❌ Audience encore petite comparée à Twitch',
          '❌ Outils moins développés',
          '❌ Image parfois controversée'
        ]
      },
      {
        type: 'concept',
        title: 'Facebook Gaming : L\'outsider oublié',
        content: `Facebook Gaming est souvent sous-estimé. Pourtant, avec la puissance de Meta et l'intégration aux groupes Facebook, c'est une option solide pour certaines niches comme le mobile gaming.`,
        items: [
          '✅ Intégration aux groupes/communautés Facebook',
          '✅ Excellent pour le mobile gaming',
          '✅ Audience plus âgée (35+)',
          '❌ Stigmatisé par la communauté gaming',
          '❌ Moins de culture "streamer"'
        ]
      },
      {
        type: 'concept',
        title: 'Trovo : Le petit frère de Tencent',
        content: `Trovo appartient à Tencent (le géant chinois). La plateforme offre des programmes d'incentive généreux pour attirer les créateurs. C'est une option à considérer pour diversifier.`
      },
      {
        type: 'tip',
        title: 'Stratégie multi-plateforme',
        content: `Tu n'es pas obligé de choisir une seule plateforme ! Beaucoup de streamers font du simulcast (diffuser sur plusieurs plateformes en même temps) avec des outils comme Restream.io. Attention cependant : Twitch interdit le simulcast pour les Partners.`
      }
    ],
    keyTakeaways: [
      'Kick offre le meilleur split revenus (95%) mais audience limitée',
      'Facebook Gaming fonctionne pour certaines niches',
      'Le multi-plateforme peut maximiser ta portée',
      'Chaque plateforme a sa culture et son audience unique'
    ],
    nextSteps: 'Maintenant qu\'on a vu les plateformes, passons au concret : quel matériel te faut-il pour commencer ?'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 5,
    sections: [
      {
        type: 'intro',
        content: `Bonne nouvelle : tu n'as PAS besoin de matériel coûteux pour commencer ! Les plus grands streamers ont débuté avec un setup basique. Cette leçon te montre le strict minimum pour te lancer. 💰`
      },
      {
        type: 'concept',
        title: 'Le mythe du setup à 5000€',
        content: `Contrairement à ce que beaucoup pensent, tu peux commencer à streamer avec ce que tu as probablement déjà. L'important, c'est le CONTENU, pas la qualité de l'image. Un streamer drôle avec une webcam pourrie sera toujours mieux qu'un streamer ennuyeux avec un setup à 10k€.`
      },
      {
        type: 'steps',
        title: 'Le matériel vraiment essentiel',
        content: 'Voici ce dont tu as RÉELLEMENT besoin :',
        items: [
          '🖥️ Un PC capable de jouer ET encoder (voir specs ci-dessous)',
          '🎤 Un micro correct (même le micro de ton casque gaming)',
          '📷 Une webcam (optionnelle au début, beaucoup streament sans)',
          '🌐 Une connexion internet stable (5 Mbps upload minimum)',
          '💡 Un éclairage basique (ta lampe de bureau suffit)'
        ]
      },
      {
        type: 'concept',
        title: 'Specs PC minimum recommandées',
        content: `Pour streamer confortablement, voici les specs minimales :`,
        items: [
          'Processeur : Intel i5 / AMD Ryzen 5 ou mieux',
          'RAM : 16 Go (8 Go ça passe mais c\'est juste)',
          'GPU : GTX 1660 / RX 580 ou mieux (avec NVENC/VCE)',
          'SSD : Pour le système et OBS',
          'Internet : 5 Mbps upload minimum, 10+ recommandé'
        ]
      },
      {
        type: 'tip',
        title: 'Utilise ton smartphone comme webcam !',
        content: `Tu n'as pas de webcam ? Utilise ton téléphone ! L'app DroidCam (Android) ou EpocCam (iPhone) transforme ton smartphone en webcam HD gratuite. La qualité est souvent meilleure qu'une webcam d'entrée de gamme.`
      },
      {
        type: 'warning',
        title: 'Le piège à éviter',
        content: `N'achète PAS de matériel avant ton premier stream ! Fais d'abord quelques lives avec ce que tu as. Tu comprendras mieux tes vrais besoins et éviteras des achats inutiles.`
      }
    ],
    keyTakeaways: [
      'Tu peux commencer avec ce que tu as déjà',
      'Le contenu prime sur la qualité technique',
      'Un smartphone fait une excellente webcam gratuite',
      'N\'investis qu\'après avoir streamé plusieurs fois'
    ],
    nextSteps: 'Tu veux quand même upgrader ton setup ? La prochaine leçon te donne un setup complet pour moins de 100€ !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 6,
    sections: [
      {
        type: 'intro',
        content: `Prêt à upgrader sans te ruiner ? Voici un setup streaming complet pour moins de 100€ qui rivalisera avec des configurations bien plus chères ! 🎯`
      },
      {
        type: 'steps',
        title: 'Le Setup à moins de 100€',
        content: 'Voici ma liste d\'achats optimisée :',
        items: [
          '🎤 Micro USB Fifine K669B : ~25€ (qualité incroyable pour le prix)',
          '💡 Ring Light LED 10" avec trépied : ~20€',
          '🎧 Casque HyperX Cloud Stinger : ~35€ (confortable, bon son)',
          '🦾 Bras de micro articulé : ~15€',
          '📌 Filtre anti-pop : ~5€'
        ]
      },
      {
        type: 'concept',
        title: 'Pourquoi ce setup fonctionne',
        content: `Le Fifine K669B est LE micro budget par excellence. Des streamers l'utilisent encore après avoir atteint 10k followers. La ring light élimine les ombres et te donne un look professionnel instantanément. Le bras de micro évite les vibrations du bureau.`
      },
      {
        type: 'tip',
        title: 'L\'astuce éclairage',
        content: `Si tu ne veux pas acheter de ring light, place simplement une lampe devant toi (pas derrière, sinon tu seras en contre-jour). La lumière naturelle d'une fenêtre est aussi excellente en journée.`
      },
      {
        type: 'example',
        title: 'Alternatives encore moins chères',
        content: `Budget encore plus serré ? Le micro TONOR TC-777 à ~20€ est aussi très correct. Tu peux aussi utiliser des écouteurs Apple/Android comme micro de dépannage - la qualité est honnête pour débuter.`
      },
      {
        type: 'checklist',
        title: 'Ordre de priorité des achats',
        content: 'Si tu dois acheter progressivement, voici l\'ordre :',
        items: [
          '1. Micro USB (le plus impactant pour la qualité)',
          '2. Éclairage (améliore énormément la webcam)',
          '3. Casque (confort pour les longues sessions)',
          '4. Bras de micro (réduit les bruits de manipulation)'
        ]
      }
    ],
    keyTakeaways: [
      'Un setup complet coûte moins de 100€',
      'Le micro est l\'investissement le plus important',
      'L\'éclairage améliore drastiquement n\'importe quelle webcam',
      'Achète progressivement selon tes besoins réels'
    ],
    nextSteps: 'Setup prêt ? Passons à la configuration de ton profil sur ta plateforme !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 7,
    sections: [
      {
        type: 'intro',
        content: `Ton compte est créé, mais c'est une coquille vide ! Cette leçon va t'aider à optimiser ton profil pour donner envie aux viewers de rester et de follow. 🎨`
      },
      {
        type: 'steps',
        title: 'Les éléments essentiels de ton profil',
        content: 'Voici ce qu\'il te faut absolument configurer :',
        items: [
          '📸 Avatar/Photo de profil reconnaissable',
          '🖼️ Bannière qui représente ton contenu',
          '📝 Bio courte mais percutante',
          '🔗 Liens vers tes réseaux sociaux',
          '⏰ Planning de stream (si tu en as un)',
          '🏷️ Tags pertinents pour être découvert'
        ]
      },
      {
        type: 'concept',
        title: 'L\'art de la bio parfaite',
        content: `Ta bio doit répondre à 3 questions en moins de 2 secondes : Qui es-tu ? Quel contenu ? Pourquoi te follow ? Exemple : "Joueur Valorant immortel 🎮 | Du fun et du skill | Live mar-jeu-sam 20h"`,
        items: [
          '✅ Court et lisible (max 2 lignes)',
          '✅ Emojis pour attirer l\'oeil',
          '✅ Mentionne ton contenu principal',
          '❌ Évite les phrases génériques ("bienvenue sur ma chaîne")',
          '❌ Pas de supplications ("pls follow")'
        ]
      },
      {
        type: 'tip',
        title: 'Astuce Twitch : Les panneaux',
        content: `Sur Twitch, crée des panneaux "About Me", "Règles du chat", "Planning", "Liens" et "Donate" (même si tu ne demandes pas de dons, ça fait pro). Canva propose des templates gratuits parfaits pour ça.`
      },
      {
        type: 'warning',
        title: 'Erreur courante',
        content: `Ne laisse JAMAIS ton profil vide ! Un viewer qui arrive sur une chaîne sans avatar ni bio part immédiatement. Même un profil basique vaut mieux que rien.`
      }
    ],
    keyTakeaways: [
      'Un profil complet donne une impression professionnelle',
      'Ta bio doit accrocher en 2 secondes max',
      'Les panneaux Twitch montrent que tu prends ta chaîne au sérieux',
      'Un profil vide = viewers qui partent'
    ],
    nextSteps: 'Profil configuré ? Parfait ! Passons à la création de ton identité visuelle unique !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 8,
    sections: [
      {
        type: 'intro',
        content: `Ton identité visuelle, c'est ce qui te rend reconnaissable au premier coup d'œil. Couleurs, logo, style... Cette leçon t'aide à créer une marque cohérente qui te ressemble ! 🎨`
      },
      {
        type: 'concept',
        title: 'Pourquoi l\'identité visuelle compte',
        content: `Les streamers les plus reconnus ont tous une identité visuelle forte. Pense à Ninja (bleu néon), Pokimane (rose/violet), ou Squeezie (orange). Quand tu vois leurs couleurs, tu les reconnais instantanément. C'est ça le pouvoir du branding !`
      },
      {
        type: 'steps',
        title: 'Les éléments de ton identité',
        content: 'Définis ces éléments clés :',
        items: [
          '🎨 2-3 couleurs principales (pas plus !)',
          '✍️ Une police de caractère distinctive',
          '🖼️ Un style graphique (néon, minimaliste, cartoon...)',
          '📛 Un logo ou avatar mémorable',
          '🗣️ Un ton de communication (fun, sérieux, détendu...)'
        ]
      },
      {
        type: 'tip',
        title: 'Outil gratuit : Coolors.co',
        content: `Va sur coolors.co et génère des palettes de couleurs harmonieuses. Appuie sur espace pour générer automatiquement. Quand tu trouves une palette qui te plaît, note les codes hex (#XXXXXX) pour les utiliser partout.`
      },
      {
        type: 'example',
        title: 'Exemple de charte simple',
        content: `Voici une charte minimaliste efficace :
        - Couleur principale : Violet électrique (#8B5CF6)
        - Couleur secondaire : Noir (#0F0F10)
        - Couleur accent : Cyan (#00F5FF)
        - Police : Orbitron pour les titres, Inter pour le texte
        - Style : Cyberpunk, néon, futuriste`
      },
      {
        type: 'checklist',
        title: 'Ta charte graphique',
        content: 'Remplis ces éléments :',
        items: [
          'Couleur principale : #______',
          'Couleur secondaire : #______',
          'Couleur accent : #______',
          'Police titres : ____________',
          'Style général : ____________'
        ]
      }
    ],
    keyTakeaways: [
      'Une identité visuelle forte te rend mémorable',
      'Limite-toi à 2-3 couleurs pour rester cohérent',
      'Utilise les mêmes éléments partout (stream, réseaux, Discord)',
      'Coolors.co est ton meilleur ami pour les palettes'
    ],
    nextSteps: 'Tu as défini ton identité ? Super ! La prochaine leçon aborde un sujet crucial : le mindset du streamer.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 9,
    sections: [
      {
        type: 'intro',
        content: `Le streaming, c'est autant mental que technique. Beaucoup de débutants abandonnent non pas par manque de talent, mais par frustration face aux faibles audiences ou au stress du live. Cette leçon va t'armer mentalement ! 🧠`
      },
      {
        type: 'concept',
        title: 'Les attentes réalistes',
        content: `Soyons honnêtes : tu ne vas pas avoir 100 viewers dès ton premier stream. La moyenne des nouveaux streamers ? 0-3 viewers pendant les premiers mois. Et c'est NORMAL. Même les plus grands ont connu ça.`,
        items: [
          'Mois 1-3 : 0-5 viewers moyens = Normal',
          'Mois 3-6 : 5-15 viewers = Très bien',
          'Mois 6-12 : 15-50 viewers = Excellent',
          'Année 1+ : 50+ viewers = Tu fais partie du top 5%'
        ]
      },
      {
        type: 'tip',
        title: 'Le mindset gagnant',
        content: `Streame comme si tu avais 1000 viewers, même si tu en as zéro. L'énergie que tu dégages est contagieuse. Si TU t'amuses, les gens voudront rester. Si tu fixes tristement ton compteur de viewers, ils partiront.`
      },
      {
        type: 'warning',
        title: 'Le piège du "viewer count"',
        content: `CACHE ton compteur de viewers ! Sérieusement. Ce chiffre détruit le moral des débutants. Va dans les paramètres OBS et masque-le. Concentre-toi sur le contenu, pas sur les stats.`
      },
      {
        type: 'steps',
        title: 'Gérer le stress du live',
        content: 'Voici mes techniques anti-stress :',
        items: [
          '🧘 Respire profondément 5 minutes avant de te lancer',
          '🎵 Mets de la musique qui te motive avant le live',
          '📝 Prépare une liste de sujets de discussion',
          '🎮 Joue à un jeu que tu maîtrises pour être confiant',
          '💬 Lis le chat à voix haute même s\'il est vide'
        ]
      },
      {
        type: 'quote',
        content: `"J'ai streamé pendant 2 ans avec 5 viewers moyens. Aujourd'hui j'en ai 5000. La seule différence ? Je n'ai jamais arrêté." - Un streamer Partner`
      }
    ],
    keyTakeaways: [
      'Les faibles audiences du début sont NORMALES',
      'Cache ton compteur de viewers',
      'Streame pour le fun, les stats viendront',
      'La persévérance bat le talent'
    ],
    nextSteps: 'Mindset en place ! Passons à la planification concrète de ton premier stream.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 10,
    sections: [
      {
        type: 'intro',
        content: `On y est presque ! Avant d'appuyer sur "Go Live", il faut planifier intelligemment. Date, heure, durée... Chaque détail compte pour maximiser tes chances de succès. 📅`
      },
      {
        type: 'concept',
        title: 'Choisir le bon créneau horaire',
        content: `Tous les créneaux ne se valent pas. L'audience varie selon l'heure et le jour. En France, les meilleurs créneaux sont généralement le soir (20h-23h) et le week-end après-midi.`,
        items: [
          '🌅 Matin (8h-12h) : Peu de monde, mais concurrence faible',
          '☀️ Après-midi (14h-18h) : Correct le week-end',
          '🌙 Soir (20h-23h) : Prime time, max d\'audience',
          '🌃 Nuit (23h+) : Audience réduite mais fidèle'
        ]
      },
      {
        type: 'tip',
        title: 'Le sweet spot du débutant',
        content: `Pour ton premier stream, choisis un créneau où TU es en forme. Si tu es du soir, stream le soir. Si tu es du matin, stream le matin. Un streamer énergique à 8h vaut mieux qu'un zombie à 21h.`
      },
      {
        type: 'steps',
        title: 'La durée idéale',
        content: 'Combien de temps streamer ?',
        items: [
          '⏱️ Premier stream : 1h-2h max (te laisser sur ta faim)',
          '📈 Streams suivants : 2h-3h (le sweet spot)',
          '🏆 Streams marathon : 4h+ (seulement si tu gères)',
          '⚠️ Plus de 6h : risque d\'épuisement'
        ]
      },
      {
        type: 'checklist',
        title: 'Planifie ton premier stream',
        content: 'Remplis ces informations :',
        items: [
          'Date choisie : ____________',
          'Heure de début : ___h___',
          'Durée prévue : ___ heures',
          'Jeu/Activité : ____________',
          'Titre du stream : ____________'
        ]
      },
      {
        type: 'warning',
        title: 'Erreur classique',
        content: `Ne fais pas ton premier stream un samedi soir prime time ! La concurrence est énorme. Préfère un mardi ou mercredi soir pour avoir moins de streamers en face.`
      }
    ],
    keyTakeaways: [
      'Le créneau 20h-23h est le plus populaire',
      'Commence par des streams de 1h-2h',
      'Évite le prime time du week-end au début',
      'L\'important c\'est ta propre énergie'
    ],
    nextSteps: 'Date fixée ? Voyons maintenant comment structurer le contenu de ton live !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 11,
    sections: [
      {
        type: 'intro',
        content: `"Je fais quoi pendant le stream ?" - La question que tous les débutants se posent ! Cette leçon te donne un framework pour ne jamais être à court de contenu. 🎬`
      },
      {
        type: 'steps',
        title: 'La structure d\'un stream réussi',
        content: 'Découpe ton stream en phases :',
        items: [
          '🎬 Intro (5-10 min) : Accueille, présente le programme',
          '🎮 Contenu principal (80% du temps) : Jeu/Activité',
          '💬 Moments chat (régulièrement) : Réponds aux questions',
          '🎉 Outro (5 min) : Résume, annonce le prochain stream'
        ]
      },
      {
        type: 'concept',
        title: 'Prépare des sujets de discussion',
        content: `Garde une liste de sujets prêts à dégainer quand le silence s'installe. Parle de l'actu gaming, pose des questions au chat, raconte des anecdotes. Ne reste JAMAIS silencieux plus de 30 secondes.`,
        items: [
          'Actualités jeux vidéo récentes',
          'Ta journée, tes projets, tes passions',
          'Questions au chat : "Vous faites quoi ce week-end ?"',
          'Réactions aux events in-game',
          'Anecdotes personnelles (appropriées)'
        ]
      },
      {
        type: 'tip',
        title: 'La technique du commentateur sportif',
        content: `Commente TOUT ce que tu fais comme un commentateur sportif. "Bon là je vais tenter un flank côté A... Je check le coin... OH il était là !" Ça crée de l'engagement même avec zéro viewer.`
      },
      {
        type: 'example',
        title: 'Script type pour un premier stream',
        content: `"Hey tout le monde, bienvenue sur le stream ! Je suis [Pseudo] et aujourd'hui on joue à [Jeu]. C'est mon tout premier live alors soyez indulgents haha ! N'hésitez pas à vous présenter dans le chat, ça me fait super plaisir. Allez, on lance une game !"`,
      },
      {
        type: 'warning',
        title: 'À éviter absolument',
        content: `Ne dis JAMAIS "wow il n'y a personne" ou "bon bah je parle dans le vide". Le VOD/replay peut être vu par des gens plus tard. Toujours supposer qu'il y a du monde !`
      }
    ],
    keyTakeaways: [
      'Structure ton stream en phases claires',
      'Prépare une liste de sujets à l\'avance',
      'Commente tout ce que tu fais',
      'Ne parle jamais de tes faibles audiences'
    ],
    nextSteps: 'Tu as ton plan de contenu ! Voyons maintenant les erreurs classiques à éviter.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 12,
    sections: [
      {
        type: 'intro',
        content: `Apprendre des erreurs des autres te fera gagner des mois. Voici les 10 pièges dans lesquels TOUS les débutants tombent... et comment les éviter ! ⚠️`
      },
      {
        type: 'steps',
        title: 'Les 10 erreurs fatales',
        content: 'Évite ces pièges classiques :',
        items: [
          '❌ 1. Attendre le "setup parfait" avant de commencer',
          '❌ 2. Regarder constamment le compteur de viewers',
          '❌ 3. Streamer sans planning ni régularité',
          '❌ 4. Ignorer le chat même si vide',
          '❌ 5. Jouer à des jeux saturés (Fortnite, LoL) en débutant',
          '❌ 6. Stream trop long dès le début (5h+)',
          '❌ 7. Qualité audio pourrie',
          '❌ 8. Pas d\'overlays ni d\'identité visuelle',
          '❌ 9. Copier exactement un autre streamer',
          '❌ 10. Abandonner après 2 semaines sans résultats'
        ]
      },
      {
        type: 'concept',
        title: 'Erreur #5 détaillée : Les jeux saturés',
        content: `Fortnite a 5000+ streamers en permanence. Un nouveau streamer est introuvable. Privilégie des jeux avec 100-2000 viewers totaux sur la catégorie. Tu seras plus visible dans les résultats.`,
        items: [
          '🔴 Éviter : Fortnite, League of Legends, GTA RP, Valorant',
          '🟢 Privilégier : Jeux indie, rétro, niche',
          '💡 Astuce : Joue aux nouveautés dès la sortie'
        ]
      },
      {
        type: 'tip',
        title: 'La règle des 3 mois',
        content: `Donne-toi 3 mois MINIMUM avant de juger tes résultats. La croissance en streaming est lente au début puis exponentielle. Les streamers qui percent sont ceux qui tiennent les 6 premiers mois difficiles.`
      },
      {
        type: 'quote',
        content: `"L'échec n'est pas le contraire du succès, c'est une partie du succès." - Arianna Huffington`
      },
      {
        type: 'quiz',
        title: 'Évite les pièges !',
        content: 'Vérifie que tu as bien compris les erreurs à éviter :',
        questions: [
          {
            question: 'Combien de viewers totaux sur une catégorie est idéal pour un débutant ?',
            options: ['5000+', '100-2000', '10000+', '0-50'],
            correctIndex: 1,
            explanation: 'Les catégories avec 100-2000 viewers sont le sweet spot : assez populaires pour avoir du public, assez petites pour être visible.'
          },
          {
            question: 'Combien de temps minimum devrais-tu streamer avant de juger tes résultats ?',
            options: ['2 semaines', '1 mois', '3 mois', '1 an'],
            correctIndex: 2,
            explanation: 'La règle des 3 mois ! La croissance est lente au début puis exponentielle. Sois patient.'
          },
          {
            question: 'Qu\'est-ce qui est PLUS important : la qualité audio ou vidéo ?',
            options: ['La vidéo', 'L\'audio', 'Les deux également', 'Ni l\'un ni l\'autre'],
            correctIndex: 1,
            explanation: 'L\'audio est TOUJOURS plus important. Les viewers tolèrent une image moyenne mais pas un son pourri.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'La qualité audio est plus importante que la vidéo',
      'Évite les catégories ultra-saturées',
      'La régularité > la durée',
      'Donne-toi au minimum 3 mois'
    ],
    nextSteps: 'Erreurs notées ! Passons à la checklist technique avant ton live.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 13,
    sections: [
      {
        type: 'intro',
        content: `Rien de pire que de découvrir un problème technique EN LIVE. Cette checklist te garantit un lancement sans accroc. À imprimer et scotcher à côté de ton écran ! ✅`
      },
      {
        type: 'checklist',
        title: 'Checklist Avant Stream',
        content: 'Vérifie chaque point 15 minutes avant :',
        items: [
          '🔌 PC redémarré récemment (pas de lag accumulé)',
          '🌐 Test de connexion internet (speedtest.net)',
          '🔇 Ferme toutes les apps inutiles (Discord notifications off !)',
          '🎤 Test micro dans OBS (vu-mètre qui bouge ?)',
          '📷 Webcam bien cadrée et éclairée',
          '🔊 Volume desktop audio correct',
          '📺 Scènes OBS prêtes (jeu, brb, starting)',
          '🔑 Clé de stream configurée',
          '📝 Titre et catégorie définis',
          '🚽 Passage aux toilettes fait !'
        ]
      },
      {
        type: 'steps',
        title: 'Test Technique Express (5 min)',
        content: 'Fais ce test avant chaque stream :',
        items: [
          '1. Lance un stream TEST en mode privé/non listé',
          '2. Parle pendant 30 secondes, vérifie l\'audio',
          '3. Ouvre le jeu, vérifie la capture',
          '4. Change de scène, vérifie les transitions',
          '5. Ouvre le chat, vérifie qu\'il marche'
        ]
      },
      {
        type: 'tip',
        title: 'Le stream test privé',
        content: `Sur Twitch, tu peux streamer en mode "VOD seulement" pour tester sans que personne ne voie. Sur YouTube, utilise le mode "non répertorié". Fais ça 24h avant ton vrai premier live pour être serein.`
      },
      {
        type: 'warning',
        title: 'Le piège du multi-écran',
        content: `Si tu as 2 écrans, attention à ne pas lancer OBS et le jeu sur le mauvais écran. Vérifie ta source "Capture d'écran" ou "Capture de fenêtre" est sur le bon moniteur !`
      }
    ],
    keyTakeaways: [
      'Toujours faire un test technique avant',
      'Redémarrer le PC évite 90% des bugs',
      'Fermer Discord/Spotify pendant le live',
      'Le stream test privé est ton ami'
    ],
    nextSteps: 'Checklist validée ? C\'est l\'heure de cliquer sur GO LIVE !'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 14,
    sections: [
      {
        type: 'intro',
        content: `Le moment est venu. Ton setup est prêt, ta checklist est validée. Voici les derniers conseils avant de cliquer sur ce fameux bouton "Lancer le Stream" ! 🚀`
      },
      {
        type: 'steps',
        title: 'Les 5 dernières minutes',
        content: 'Juste avant de cliquer sur GO LIVE :',
        items: [
          '🎵 Mets ta musique préférée pour te mettre en énergie',
          '😊 Souris ! Ça s\'entend dans ta voix',
          '🪞 Dernier check de toi-même (cheveux, lumière)',
          '📱 Téléphone en silencieux ou en "Ne pas déranger"',
          '💪 Dis-toi "Je vais kiffer, peut importe les viewers"'
        ]
      },
      {
        type: 'concept',
        title: 'Les 30 premières secondes',
        content: `Dès que tu cliques sur GO LIVE, commence à parler IMMÉDIATEMENT. N'attends pas de voir des viewers. Dis "Hey tout le monde ! Bienvenue, je suis [pseudo], aujourd'hui on [activité]..." avec énergie !`
      },
      {
        type: 'tip',
        title: 'Le secret des streamers',
        content: `Mets une scène "Starting Soon" de 5-10 minutes avant de vraiment commencer. Ça te laisse le temps de souffler, et ça permet à quelques viewers d'arriver avant ton intro.`
      },
      {
        type: 'example',
        title: 'Script d\'ouverture parfait',
        content: `*Après le countdown Starting Soon*
        
"HEYYY bienvenue tout le monde ! C'est parti pour un nouveau stream ! Je suis [Pseudo], super content de vous voir ! Aujourd'hui on va [activité] et ça va être incroyable ! Si vous passez par là, lâchez un petit message dans le chat, ça fait toujours plaisir ! Allez, on démarre !"`
      },
      {
        type: 'quote',
        content: `"J'ai cliqué sur Go Live en tremblant. Aujourd'hui, c'est mon moment préféré de la journée." - Un streamer Partner`
      }
    ],
    keyTakeaways: [
      'Commence à parler dès le GO LIVE',
      'Utilise une scène "Starting Soon"',
      'L\'énergie de ton intro donne le ton',
      'Souris et amuse-toi !'
    ],
    nextSteps: 'Tu es en live ! Voyons comment gérer les interactions avec ton chat.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 15,
    sections: [
      {
        type: 'intro',
        content: `L'interaction avec le chat est ce qui différencie le streaming des vidéos classiques. Bien gérer son chat transforme des viewers anonymes en vraie communauté fidèle. 💬`
      },
      {
        type: 'concept',
        title: 'La règle des 5 secondes',
        content: `Quand quelqu'un envoie un message, réponds dans les 5 secondes si possible. Un viewer qui pose une question et n'obtient pas de réponse ne reviendra probablement pas. Le chat, c'est ta priorité n°1.`
      },
      {
        type: 'steps',
        title: 'Les bonnes pratiques du chat',
        content: 'Comment gérer ton chat efficacement :',
        items: [
          '👋 Salue CHAQUE nouveau chatter par son pseudo',
          '❓ Pose des questions ouvertes au chat',
          '📖 Lis les messages À VOIX HAUTE',
          '👀 Regarde ton chat toutes les 30 secondes minimum',
          '🎉 Célèbre les follows et les subs'
        ]
      },
      {
        type: 'tip',
        title: 'Chat vide ? Pas grave !',
        content: `Parle quand même ! Pose des questions rhétoriques "Bon, qu'est-ce qu'on fait maintenant ?". Fais comme si le chat était plein. Les nouveaux arrivants verront que tu es actif et resteront plus longtemps.`
      },
      {
        type: 'warning',
        title: 'Gérer les trolls',
        content: `Règle d'or : n'engage JAMAIS avec les trolls. Timeout 5 minutes et on continue. Si tu leur réponds, tu leur donnes ce qu'ils veulent : de l'attention. Mode émoji only ou sub-only si ça dégénère.`
      },
      {
        type: 'checklist',
        title: 'Règles de chat à afficher',
        content: 'Crée des règles claires :',
        items: [
          'Respectez tout le monde',
          'Pas de pub/spam',
          'Pas de spoilers',
          'Pas de politique/religion',
          'Parlez français (ou anglais selon ta communauté)'
        ]
      }
    ],
    keyTakeaways: [
      'Réponds au chat dans les 5 secondes',
      'Salue chaque nouveau chatter par son pseudo',
      'N\'engage jamais avec les trolls',
      'Parle même si le chat est vide'
    ],
    nextSteps: 'Tu gères le chat ! Mais que faire si tout plante ? Voyons les imprévus techniques.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 16,
    sections: [
      {
        type: 'intro',
        content: `Le jeu crash. Internet coupe. OBS freeze. Ça ARRIVERA. La différence entre un bon et un mauvais streamer ? Comment il gère la crise. Voici ton guide de survie technique ! 🔧`
      },
      {
        type: 'steps',
        title: 'Problèmes courants et solutions rapides',
        content: 'Les fixes express :',
        items: [
          '🎮 Jeu crash → Passe en scène BRB, relance le jeu',
          '🔇 Audio désync → Redémarre OBS rapidement',
          '📡 Internet coupe → Switch sur scène "Problème technique"',
          '🖥️ Écran noir → Vérifie ta source de capture',
          '🔥 PC surchauffe → Pause 5 min, fenêtre ouverte'
        ]
      },
      {
        type: 'concept',
        title: 'La scène "Problème technique"',
        content: `Crée une scène dédiée aux problèmes avec un texte du genre "Petit souci technique, je reviens dans 2 minutes ! En attendant, dites-moi dans le chat votre jeu préféré du moment 🎮". Le chat reste engagé pendant que tu fixes.`
      },
      {
        type: 'tip',
        title: 'Le F5 magique',
        content: `OBS a tendance à buguer avec les Browser Sources (alertes, overlays). En cas de problème, clique droit sur la source → "Rafraîchir le cache" ou "Actualiser". 80% des bugs se règlent comme ça.`
      },
      {
        type: 'warning',
        title: 'Ne panique jamais',
        content: `Les viewers comprennent les problèmes techniques. Ce qu'ils ne comprennent pas, c'est un streamer qui rage, insulte son PC et abandonne. Reste calme, excuse-toi avec humour, et fix le problème.`
      },
      {
        type: 'example',
        title: 'Le script parfait de gestion de crise',
        content: `"Bon les amis, petit problème technique ! *switch sur scène BRB* Donnez-moi 2 minutes, je règle ça. En attendant, dites-moi dans le chat quel est votre meilleur moment gaming de la semaine !"
        
*Fix le problème*

"Et voilà, on est de retour ! Merci pour votre patience, vous êtes les meilleurs. Allez, on reprend où on en était !"`
      }
    ],
    keyTakeaways: [
      'Prépare une scène "Problème technique"',
      'Reste calme, les viewers comprennent',
      'Rafraîchir les Browser Sources règle beaucoup de bugs',
      'Engage le chat pendant que tu fixes'
    ],
    nextSteps: 'Tu sais gérer les crises ! Passons à l\'analyse post-stream.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 17,
    sections: [
      {
        type: 'intro',
        content: `Le stream est fini, mais le travail continue ! L'analyse post-stream est ce qui te permet de progresser à chaque session. Ne saute JAMAIS cette étape. 📊`
      },
      {
        type: 'steps',
        title: 'L\'analyse en 4 étapes',
        content: 'Fais ça après chaque stream :',
        items: [
          '📈 1. Regarde tes stats (viewers moyens, pics, durée de visionnage)',
          '🎬 2. Revois des passages clés du VOD (intro, meilleurs moments)',
          '💬 3. Note les questions/thèmes du chat récurrents',
          '📝 4. Écris 3 trucs à améliorer pour la prochaine fois'
        ]
      },
      {
        type: 'concept',
        title: 'Les métriques qui comptent',
        content: `Oublie le nombre de viewers brut. Les vraies métriques de santé d'une chaîne sont :`,
        items: [
          '⏱️ Durée moyenne de visionnage (plus c\'est long, mieux c\'est)',
          '📊 Taux de rétention (combien restent après 5 min)',
          '💬 Messages par minute dans le chat',
          '❤️ Ratio followers gagnés vs viewers uniques',
          '🔄 Viewers récurrents (% qui reviennent)'
        ]
      },
      {
        type: 'tip',
        title: 'Le cahier du streamer',
        content: `Tiens un carnet (ou doc Google) où tu notes après chaque stream : date, durée, viewers, ce qui a marché, ce qui n'a pas marché. En le relisant après 3 mois, tu verras ta progression et les patterns.`
      },
      {
        type: 'checklist',
        title: 'Template post-stream',
        content: 'Remplis après chaque session :',
        items: [
          'Date : ____________',
          'Durée : ___ h ___ min',
          'Viewers moyen/max : ___/___',
          'Nouveaux follows : ___',
          'Meilleur moment : ____________',
          'À améliorer : ____________',
          'Idée pour prochain stream : ____________'
        ]
      }
    ],
    keyTakeaways: [
      'L\'analyse post-stream est obligatoire',
      'La durée de visionnage > nombre de viewers',
      'Tiens un cahier de bord de tes streams',
      'Note 3 améliorations après chaque session'
    ],
    nextSteps: 'Dernière leçon ! Ton plan d\'action pour les 30 prochains jours.'
  },
  {
    courseSlug: 'premier-stream',
    lessonId: 18,
    sections: [
      {
        type: 'intro',
        content: `Félicitations, tu as terminé le cours ! 🎉 Tu as maintenant toutes les bases pour te lancer. Voici ton plan d'action concret pour les 30 prochains jours.`
      },
      {
        type: 'steps',
        title: 'Plan d\'action - Semaine 1',
        content: 'Les fondations :',
        items: [
          '📝 Jour 1-2 : Crée/optimise ton profil complet',
          '🎨 Jour 3 : Définis ton identité visuelle',
          '⚙️ Jour 4-5 : Configure OBS et fais des tests',
          '📅 Jour 6 : Planifie tes 4 premiers streams',
          '🚀 Jour 7 : PREMIER STREAM !'
        ]
      },
      {
        type: 'steps',
        title: 'Plan d\'action - Semaines 2-4',
        content: 'La routine :',
        items: [
          '🎮 Stream 3-4x par semaine minimum',
          '📱 Poste 1 clip/jour sur TikTok/Twitter',
          '💬 Engage sur Twitter avec d\'autres streamers',
          '📊 Analyse chaque stream (cahier de bord)',
          '🎓 Commence le Module 02 : OBS Masterclass'
        ]
      },
      {
        type: 'concept',
        title: 'Objectifs réalistes - Mois 1',
        content: `Voici des objectifs atteignables pour ton premier mois :`,
        items: [
          '🎯 10-50 followers',
          '📊 3-10 viewers moyens',
          '📹 12+ streams réalisés',
          '🎬 15+ clips postés sur les réseaux',
          '🤝 5 connexions avec d\'autres streamers'
        ]
      },
      {
        type: 'tip',
        title: 'Le secret de la croissance',
        content: `80% de ta croissance viendra du contenu HORS stream. Clips TikTok, Shorts YouTube, tweets, participation aux communautés Discord... Le stream fait connaître, mais les réseaux font grandir.`
      },
      {
        type: 'quote',
        content: `"Tu as fait le premier pas, le plus dur. Maintenant, ne lâche rien pendant 6 mois. Je te promets que tu seras fier du chemin parcouru." - L'équipe Stream Forge`
      },
      {
        type: 'checklist',
        title: 'Checklist de fin de module',
        content: 'Avant de passer au Module 02, vérifie :',
        items: [
          'Mon profil est 100% complet',
          'J\'ai fait au moins 1 stream test',
          'Mon identité visuelle est définie',
          'J\'ai un planning de stream',
          'Je suis motivé(e) et prêt(e) !'
        ]
      }
    ],
    keyTakeaways: [
      'Premier stream dans les 7 jours max',
      '3-4 streams par semaine minimum',
      'Le contenu hors-stream est crucial',
      'Persévère au moins 3 mois'
    ],
    nextSteps: 'Tu as terminé le Module 01 ! Continue avec le Module 02 : OBS Studio Masterclass pour devenir un expert de ton logiciel de streaming.'
  },
  // ============================================
  // COURS 2: OBS Studio Masterclass
  // ============================================
  {
    courseSlug: 'obs-studio',
    lessonId: 1,
    sections: [
      {
        type: 'intro',
        content: `Bienvenue dans la masterclass OBS Studio ! 🎬 OBS (Open Broadcaster Software) est LE logiciel utilisé par 90% des streamers, et pour cause : il est gratuit, puissant, et infiniment personnalisable. À la fin de ce cours, tu le maîtriseras comme un pro.`
      },
      {
        type: 'steps',
        title: 'Installer OBS Studio',
        content: 'Suis ces étapes :',
        items: [
          '1. Va sur obsproject.com',
          '2. Télécharge la version Windows/Mac/Linux',
          '3. Installe avec les options par défaut',
          '4. Lance OBS pour la première fois',
          '5. Laisse l\'assistant de configuration se lancer'
        ]
      },
      {
        type: 'concept',
        title: 'L\'assistant de première configuration',
        content: `Au premier lancement, OBS propose un assistant. Choisis "Optimiser pour le streaming" puis sélectionne ta plateforme (Twitch, YouTube...). L'assistant testera ta connexion et configurera automatiquement les paramètres de base.`
      },
      {
        type: 'tip',
        title: 'Configuration recommandée',
        content: `L'assistant fait du bon travail, mais on affinera tout ça dans les prochaines leçons. Pour l'instant, accepte les réglages proposés. On optimisera selon TON PC spécifiquement.`
      },
      {
        type: 'warning',
        title: 'Erreur courante',
        content: `N'installe PAS "OBS Streamlabs" par erreur ! C'est un fork différent avec des features payantes. "OBS Studio" (obsproject.com) est le logiciel officiel, gratuit et open source.`
      }
    ],
    keyTakeaways: [
      'OBS Studio est gratuit et open source',
      'Télécharge UNIQUEMENT depuis obsproject.com',
      'L\'assistant de configuration fait les réglages de base',
      'On optimisera manuellement dans les prochaines leçons'
    ],
    nextSteps: 'OBS installé ! Passons au tour complet de l\'interface.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 2,
    sections: [
      {
        type: 'intro',
        content: `L'interface d'OBS peut sembler intimidante au début. Cette leçon va démystifier chaque élément pour que tu te sentes à l'aise. 🖥️`
      },
      {
        type: 'concept',
        title: 'Les 5 zones principales',
        content: `L'interface OBS est divisée en 5 zones clés :`,
        items: [
          '📺 Zone de prévisualisation (centre) : Ce que tes viewers verront',
          '🎬 Scènes (en bas à gauche) : Tes différents écrans',
          '📦 Sources (à côté des scènes) : Les éléments dans chaque scène',
          '🔊 Mixeur audio (en bas au centre) : Contrôle des volumes',
          '⚙️ Contrôles (en bas à droite) : Start/Stop stream'
        ]
      },
      {
        type: 'steps',
        title: 'Navigation rapide',
        content: 'Les raccourcis essentiels :',
        items: [
          'Clic droit dans "Sources" → Ajouter une source',
          'Double-clic sur une source → Modifier ses propriétés',
          'Glisser-déposer → Réorganiser l\'ordre des sources',
          'Molette sur le mixeur → Ajuster le volume',
          'Clic sur Paramètres → Accéder aux réglages avancés'
        ]
      },
      {
        type: 'tip',
        title: 'Personnalise ton interface',
        content: `Tu peux réorganiser les panneaux en les glissant. Va dans Vue → Docks pour afficher/masquer des éléments. Certains streamers mettent les scènes à droite, par exemple.`
      }
    ],
    keyTakeaways: [
      '5 zones principales : Préview, Scènes, Sources, Mixeur, Contrôles',
      'Clic droit = Ajouter/Modifier',
      'L\'interface est personnalisable',
      'Les docks sont réorganisables'
    ],
    nextSteps: 'Interface comprise ! Créons ta première scène.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 3,
    sections: [
      {
        type: 'intro',
        content: `Les scènes sont le cœur d'OBS. Chaque scène est un écran différent que tu peux afficher à tes viewers. Gaming, Just Chatting, BRB... Cette leçon t'apprend à les maîtriser ! 🎬`
      },
      {
        type: 'concept',
        title: 'Qu\'est-ce qu\'une scène ?',
        content: `Une scène = un arrangement de sources. Pense à ça comme un bureau virtuel. Tu peux avoir plusieurs bureaux (scènes) et switcher entre eux instantanément pendant le stream.`
      },
      {
        type: 'steps',
        title: 'Créer ta première scène',
        content: 'Suis ces étapes :',
        items: [
          '1. Clique sur le "+" dans le panneau Scènes',
          '2. Nomme ta scène (ex: "Gaming", "Just Chatting")',
          '3. Ta scène est créée ! Elle est vide pour l\'instant',
          '4. On va maintenant y ajouter des sources'
        ]
      },
      {
        type: 'tip',
        title: 'Nommer intelligemment',
        content: `Nomme tes scènes clairement : "🎮 Gaming", "💬 Chat", "☕ BRB", "🎬 Starting". Les emojis rendent la liste plus lisible et tu trouves instantanément la bonne scène.`
      },
      {
        type: 'checklist',
        title: 'Scènes recommandées pour débuter',
        content: 'Crée ces scènes de base :',
        items: [
          '🎬 Starting Soon - Écran d\'attente avant le live',
          '🎮 Gaming - Ton écran de jeu principal',
          '💬 Just Chatting - Toi face cam en grand',
          '☕ BRB - Pour tes pauses',
          '👋 Ending - Écran de fin avec raid/host'
        ]
      }
    ],
    keyTakeaways: [
      'Une scène = un arrangement de sources',
      'Nomme tes scènes clairement avec des emojis',
      '5 scènes de base : Starting, Gaming, Chat, BRB, Ending',
      'Tu peux switcher entre scènes en un clic'
    ],
    nextSteps: 'Scènes créées ! Remplissons-les avec des sources.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 4,
    sections: [
      {
        type: 'intro',
        content: `Les sources sont les éléments visuels et audio de tes scènes : webcam, capture de jeu, overlay, musique... Cette leçon couvre tous les types de sources essentiels ! 📦`
      },
      {
        type: 'concept',
        title: 'Les types de sources',
        content: `OBS offre de nombreux types de sources. Voici les plus utilisées :`,
        items: [
          '🎮 Capture de jeu - Pour capturer un jeu en plein écran',
          '🖥️ Capture d\'écran - Pour capturer tout un moniteur',
          '📐 Capture de fenêtre - Pour capturer une app spécifique',
          '📷 Périphérique de capture vidéo - Ta webcam',
          '🎤 Capture audio - Sources sonores',
          '🌐 Navigateur - Overlays, alertes, widgets',
          '🖼️ Image - Logos, fonds, cadres',
          '📝 Texte - Titres, info stream'
        ]
      },
      {
        type: 'steps',
        title: 'Ajouter une source',
        content: 'La procédure standard :',
        items: [
          '1. Sélectionne ta scène cible',
          '2. Clique sur "+" dans le panneau Sources',
          '3. Choisis le type de source',
          '4. Nomme-la clairement',
          '5. Configure ses propriétés'
        ]
      },
      {
        type: 'tip',
        title: 'L\'ordre des sources',
        content: `Les sources en HAUT de la liste apparaissent AU DESSUS des autres. Mets ta webcam au-dessus de la capture de jeu pour qu'elle soit visible. Glisse-dépose pour réorganiser.`
      },
      {
        type: 'warning',
        title: 'Piège de la duplication',
        content: `Quand tu ajoutes une source, OBS demande "Créer nouvelle" ou "Ajouter existante". Si tu veux la même webcam dans 2 scènes, choisis "Ajouter existante" ! Sinon tu auras 2 instances différentes.`
      }
    ],
    keyTakeaways: [
      'Capture de jeu > Capture d\'écran (meilleure perf)',
      'L\'ordre des sources = ordre d\'affichage',
      'Utilise "Ajouter existante" pour réutiliser',
      'Nomme clairement tes sources'
    ],
    nextSteps: 'Tu connais les sources ! Configurons ta webcam.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 5,
    sections: [
      {
        type: 'intro',
        content: `Ta webcam est ton visage pour ton audience. Bien la configurer fait une différence énorme sur le rendu final. Résolution, FPS, balance des blancs... On optimise tout ! 📷`
      },
      {
        type: 'steps',
        title: 'Ajouter ta webcam',
        content: 'Configuration étape par étape :',
        items: [
          '1. Sources → "+" → Périphérique de capture vidéo',
          '2. Nomme-la "Webcam" ou "Facecam"',
          '3. Sélectionne ta webcam dans la liste',
          '4. Résolution : Mets le maximum disponible (1080p idéal)',
          '5. FPS : 30 minimum, 60 si possible'
        ]
      },
      {
        type: 'concept',
        title: 'Les réglages avancés',
        content: `Dans les propriétés de ta webcam, clique sur "Configurer la vidéo" pour accéder aux réglages avancés :`,
        items: [
          '☀️ Luminosité - Augmente si l\'image est sombre',
          '🌡️ Balance des blancs - Auto ou selon ton éclairage',
          '🎨 Saturation - Légèrement augmentée donne plus de vie',
          '🔍 Netteté - Un peu d\'augmentation aide',
          '📍 Autofocus - Active-le pour être toujours net'
        ]
      },
      {
        type: 'tip',
        title: 'Désactive l\'exposition automatique',
        content: `L'expo auto te fait "clignoter" quand la lumière change dans ton jeu. Mets l'exposition en manuel et ajuste-la une fois pour toutes. Ta luminosité restera stable.`
      },
      {
        type: 'warning',
        title: 'La webcam s\'affiche en noir ?',
        content: `Une autre application utilise probablement ta webcam (Discord, Zoom...). Ferme ces apps et réessaie. Si le problème persiste, redémarre OBS.`
      }
    ],
    keyTakeaways: [
      'Résolution max + 30 FPS minimum',
      'Désactive l\'exposition automatique',
      'Augmente légèrement saturation et netteté',
      'Une seule app peut utiliser la webcam à la fois'
    ],
    nextSteps: 'Webcam prête ! Passons à la capture de jeu.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 6,
    sections: [
      {
        type: 'intro',
        content: `La capture de jeu est LA source la plus importante pour un streamer gaming. Bien configurée, elle capture ton jeu avec un minimum d'impact sur les performances. 🎮`
      },
      {
        type: 'steps',
        title: 'Configurer la capture de jeu',
        content: 'La méthode qui marche :',
        items: [
          '1. Lance ton jeu AVANT de configurer OBS',
          '2. Sources → "+" → Capture de jeu',
          '3. Mode : "Capturer une fenêtre spécifique"',
          '4. Fenêtre : Sélectionne ton jeu dans la liste',
          '5. Coche "Utiliser l\'accrochage anti-triche"'
        ]
      },
      {
        type: 'concept',
        title: 'Les 3 modes de capture',
        content: `Chaque mode a ses avantages :`,
        items: [
          '🎯 Capturer une fenêtre spécifique - Le plus fiable',
          '🔥 Capturer l\'application au premier plan - Change auto selon le jeu',
          '🖥️ Capturer n\'importe quel plein écran - Pour les jeux récalcitrants'
        ]
      },
      {
        type: 'warning',
        title: 'Écran noir ? Solutions',
        content: `C'est LE problème le plus courant. Essaie dans l'ordre :
1. Lance le jeu en mode fenêtré sans bordure
2. Coche "Utiliser l'accrochage anti-triche"
3. Lance OBS en administrateur
4. Essaie "Capture de fenêtre" au lieu de "Capture de jeu"
5. En dernier recours : "Capture d'écran"`
      },
      {
        type: 'tip',
        title: 'Performance optimale',
        content: `Joue en "Fenêtré sans bordure" plutôt qu'en "Plein écran exclusif". Tu perds 1-2 FPS mais OBS capture beaucoup mieux et tu peux alt-tab facilement.`
      }
    ],
    keyTakeaways: [
      'Lance le jeu AVANT de configurer la capture',
      'Mode "Fenêtre spécifique" est le plus fiable',
      'Fenêtré sans bordure > Plein écran exclusif',
      'L\'anti-triche peut bloquer la capture'
    ],
    nextSteps: 'Capture de jeu OK ! Configurons l\'audio.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 7,
    sections: [
      {
        type: 'intro',
        content: `L'audio est 50% de la qualité de ton stream. Un stream avec un bon son mais une image moyenne est regardable. L'inverse ? Les gens partent. Maîtrisons les sources audio ! 🎤`
      },
      {
        type: 'concept',
        title: 'Les 2 types d\'audio dans OBS',
        content: `OBS gère 2 flux audio séparés :`,
        items: [
          '🎤 Audio d\'entrée (Mic) - Ton micro',
          '🔊 Audio de sortie (Desktop) - Sons du jeu, musique, Discord'
        ]
      },
      {
        type: 'steps',
        title: 'Configurer tes sources audio',
        content: 'Va dans Paramètres → Audio :',
        items: [
          '1. Audio du bureau : Chosis ta sortie audio (casque/enceintes)',
          '2. Micro/Auxiliaire : Sélectionne ton micro',
          '3. Laisse les autres sur "Désactivé"',
          '4. Clique OK et vérifie le mixeur'
        ]
      },
      {
        type: 'tip',
        title: 'Le test du VU-mètre',
        content: `Parle normalement et regarde le VU-mètre dans le mixeur. Ta voix devrait être dans le jaune (-20 à -10 dB). Si elle tape dans le rouge, c'est trop fort. Si elle reste dans le vert, c'est trop faible.`
      },
      {
        type: 'warning',
        title: 'Problème de double audio',
        content: `Tu t'entends en écho ? Tu as probablement "Monitor" activé sur ton micro. Clique sur la roue dentée du micro → "Propriétés audio avancées" → "Monitoring audio" sur "Désactivé".`
      },
      {
        type: 'checklist',
        title: 'Check audio avant stream',
        content: 'Vérifie ces points :',
        items: [
          'Micro dans le jaune quand tu parles',
          'Desktop audio quand le jeu joue',
          'Pas d\'écho ou de feedback',
          'Balance voix/jeu correcte'
        ]
      }
    ],
    keyTakeaways: [
      'L\'audio est 50% de la qualité du stream',
      'Vise le jaune sur le VU-mètre (-20 à -10 dB)',
      'Désactive le monitoring pour éviter l\'écho',
      'Teste AVANT de lancer le stream'
    ],
    nextSteps: 'Audio de base OK ! Passons au mixeur avancé.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 8,
    sections: [
      {
        type: 'intro',
        content: `Le mixeur audio d'OBS te permet de contrôler chaque source sonore individuellement. Discord, jeu, musique... Tout peut être ajusté séparément ! 🎛️`
      },
      {
        type: 'concept',
        title: 'Le panneau Mixeur Audio',
        content: `Le mixeur affiche toutes tes sources audio avec des contrôles :`,
        items: [
          '📊 Faders - Ajuste le volume de chaque source',
          '🔇 Bouton Mute - Coupe une source',
          '⚙️ Roue dentée - Accède aux filtres et options',
          '🔒 Clic droit → Verrouiller - Évite les changements accidentels'
        ]
      },
      {
        type: 'steps',
        title: 'Équilibrer voix et jeu',
        content: 'La bonne balance :',
        items: [
          '1. Lance ton jeu avec un son typique',
          '2. Ajuste Desktop Audio pour que le jeu soit audible mais pas dominant',
          '3. Parle normalement, ajuste ton micro pour couvrir le jeu',
          '4. Règle : Ta voix doit être ~6dB au-dessus du jeu',
          '5. Teste en enregistrant 30 secondes'
        ]
      },
      {
        type: 'tip',
        title: 'Séparer Discord du jeu',
        content: `Par défaut, Discord passe dans Desktop Audio avec le jeu. Pour le contrôler séparément, utilise un câble audio virtuel (VoiceMeeter Banana gratuit). Tu pourras couper Discord sans couper le jeu.`
      },
      {
        type: 'example',
        title: 'Réglages recommandés',
        content: `Voici des niveaux de départ typiques :
- Micro : -5 à 0 dB (le plus fort)
- Jeu : -15 à -10 dB
- Musique de fond : -25 à -20 dB
- Alertes : -15 dB

Ajuste selon tes préférences !`
      }
    ],
    keyTakeaways: [
      'Ta voix doit dominer les autres sons',
      'Chaque source peut être ajustée individuellement',
      'Fais un test d\'enregistrement pour vérifier la balance',
      'VoiceMeeter permet de séparer Discord du jeu'
    ],
    nextSteps: 'Mixeur compris ! Ajoutons des filtres sur ton micro.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 9,
    sections: [
      {
        type: 'intro',
        content: `Le Noise Gate est ton premier filtre essentiel. Il coupe automatiquement ton micro quand tu ne parles pas, éliminant les bruits de fond comme le clavier, la souris ou la ventilation. 🚪`
      },
      {
        type: 'concept',
        title: 'Comment fonctionne le Noise Gate',
        content: `Imagine une porte qui s'ouvre quand le son est assez fort, et se ferme quand c'est trop faible. Les paramètres clés :`,
        items: [
          '🔓 Seuil d\'ouverture - Volume minimum pour ouvrir la porte',
          '🔒 Seuil de fermeture - Volume en dessous duquel la porte se ferme',
          '⏱️ Temps d\'attaque - Vitesse d\'ouverture',
          '⏱️ Temps de relâchement - Vitesse de fermeture'
        ]
      },
      {
        type: 'steps',
        title: 'Ajouter un Noise Gate',
        content: 'Configuration :',
        items: [
          '1. Clique sur la roue dentée de ton micro',
          '2. Sélectionne "Filtres"',
          '3. Clique "+" → Noise Gate',
          '4. Configure les seuils (voir ci-dessous)',
          '5. Teste en parlant et en restant silencieux'
        ]
      },
      {
        type: 'example',
        title: 'Réglages recommandés',
        content: `Réglages de départ :
- Seuil d'ouverture : -32 dB
- Seuil de fermeture : -42 dB
- Temps d'attaque : 10 ms
- Temps de maintien : 200 ms
- Temps de relâchement : 100 ms

Ajuste selon ton environnement !`
      },
      {
        type: 'tip',
        title: 'Trouver le bon seuil',
        content: `Reste silencieux et regarde le VU-mètre : c'est le niveau de ton bruit de fond. Mets le seuil de fermeture juste AU-DESSUS de ce niveau. Si ton bruit est à -50dB, mets -45dB.`
      }
    ],
    keyTakeaways: [
      'Noise Gate = porte automatique qui coupe le silence',
      'Seuil de fermeture = niveau de tes bruits de fond + 5dB',
      'Commence par les réglages recommandés',
      'Affine selon ton environnement'
    ],
    nextSteps: 'Noise Gate configuré ! Ajoutons un compresseur.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 10,
    sections: [
      {
        type: 'intro',
        content: `Le compresseur audio est le secret des micros qui sonnent "pro". Il égalise automatiquement le volume pour éviter les variations brutales entre parler doucement et crier. 📢`
      },
      {
        type: 'concept',
        title: 'Comment fonctionne le compresseur',
        content: `Le compresseur "compresse" les sons forts pour les rapprocher des sons faibles. Résultat : un volume plus constant et professionnel.`,
        items: [
          '📊 Ratio - Combien comprimer (3:1 = divise par 3)',
          '🎚️ Seuil - À partir de quel volume compresser',
          '⏱️ Attaque - Vitesse de réaction',
          '⏱️ Relâchement - Vitesse de retour à la normale',
          '🔊 Gain de sortie - Compense la perte de volume'
        ]
      },
      {
        type: 'steps',
        title: 'Ajouter un compresseur',
        content: 'Après le Noise Gate :',
        items: [
          '1. Filtres du micro → "+" → Compresseur',
          '2. Place-le APRÈS le Noise Gate dans la liste',
          '3. Configure les paramètres (voir recommandations)',
          '4. Teste en parlant fort et doucement',
          '5. Le volume devrait rester stable'
        ]
      },
      {
        type: 'example',
        title: 'Réglages recommandés',
        content: `Réglages de départ :
- Ratio : 3:1 (bon équilibre)
- Seuil : -18 dB
- Attaque : 5 ms
- Relâchement : 100 ms
- Gain de sortie : 3-6 dB (à ajuster)

Pour plus d'effet, monte le ratio à 5:1`
      },
      {
        type: 'tip',
        title: 'Évite la sur-compression',
        content: `Trop de compression = son artificiel et "pompé". Si ta voix semble bizarre ou écrasée, réduis le ratio ou monte le seuil. Une compression légère est préférable.`
      },
      {
        type: 'quiz',
        title: 'Quiz Filtres Audio',
        content: 'Teste tes connaissances sur les filtres :',
        questions: [
          {
            question: 'Dans quel ordre doit-on placer les filtres audio ?',
            options: ['Compresseur → Noise Gate', 'Noise Gate → Compresseur', 'Peu importe', 'Limiter → Noise Gate'],
            correctIndex: 1,
            explanation: 'Toujours Noise Gate en premier pour couper le silence, puis Compresseur pour égaliser le volume.'
          },
          {
            question: 'Quel ratio de compression est recommandé pour commencer ?',
            options: ['10:1', '1:1', '3:1', '20:1'],
            correctIndex: 2,
            explanation: 'Un ratio 3:1 est un bon équilibre entre effet et naturel. Tu peux augmenter jusqu\'à 5:1 si nécessaire.'
          },
          {
            question: 'Que signifie une "sur-compression" ?',
            options: ['Le micro est trop fort', 'Le son devient artificiel et écrasé', 'Le volume varie trop', 'Le bruit de fond augmente'],
            correctIndex: 1,
            explanation: 'Trop de compression donne un son "pompé" et non-naturel. Mieux vaut une compression légère.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Compresseur = égalise les volumes',
      'Place-le APRÈS le Noise Gate',
      'Ratio 3:1 pour commencer',
      'Évite la sur-compression'
    ],
    nextSteps: 'Compresseur ajouté ! Finissons avec la suppression de bruit.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 11,
    sections: [
      {
        type: 'intro',
        content: `La suppression de bruit élimine les sons constants comme la ventilation, le bourdonnement électrique ou le bruit de la rue. C'est la touche finale pour un son cristallin ! ✨`
      },
      {
        type: 'concept',
        title: 'Les options de suppression',
        content: `OBS offre plusieurs méthodes :`,
        items: [
          '🧠 NVIDIA Broadcast (RTX Voice) - Le meilleur, nécessite GPU NVIDIA RTX',
          '🎵 RNNoise - Gratuit, très bon, intégré à OBS',
          '📉 Speex - Plus ancien, moins efficace',
          '🎚️ Expander - Alternative plus légère au Noise Gate'
        ]
      },
      {
        type: 'steps',
        title: 'Configurer RNNoise',
        content: 'La solution recommandée :',
        items: [
          '1. Filtres du micro → "+" → Suppression du bruit',
          '2. Méthode : RNNoise',
          '3. Place-le EN PREMIER dans la chaîne de filtres',
          '4. C\'est tout ! RNNoise n\'a pas de réglages'
        ]
      },
      {
        type: 'tip',
        title: 'Si tu as une RTX',
        content: `NVIDIA Broadcast est encore meilleur que RNNoise. Télécharge-le gratuitement sur le site NVIDIA, installe-le, puis dans OBS sélectionne "NVIDIA Noise Removal" comme source micro au lieu de ton micro direct.`
      },
      {
        type: 'checklist',
        title: 'Ordre optimal des filtres',
        content: 'Place tes filtres dans cet ordre :',
        items: [
          '1. Suppression du bruit (RNNoise)',
          '2. Noise Gate',
          '3. Compresseur',
          '4. (Optionnel) Limiter',
          '5. (Optionnel) EQ'
        ]
      }
    ],
    keyTakeaways: [
      'RNNoise = suppression de bruit gratuite et efficace',
      'NVIDIA Broadcast encore mieux si tu as une RTX',
      'Place la suppression de bruit EN PREMIER',
      'L\'ordre des filtres est important'
    ],
    nextSteps: 'Audio parfait ! Passons aux filtres vidéo.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 12,
    sections: [
      {
        type: 'intro',
        content: `Les filtres vidéo transforment l'image de ta webcam. Correction colorimétrique, LUTs, netteté... Donne un look pro à ta facecam ! 🎨`
      },
      {
        type: 'concept',
        title: 'Les filtres vidéo essentiels',
        content: `Les filtres les plus utiles pour ta webcam :`,
        items: [
          '🎨 Correction colorimétrique - Ajuste luminosité, contraste, saturation',
          '📁 Appliquer LUT - Ajoute un filtre de couleur style Instagram',
          '🔍 Netteté - Rend l\'image plus définie',
          '🖼️ Recadrer/Ajouter des marges - Zoom et recentre'
        ]
      },
      {
        type: 'steps',
        title: 'Ajouter la correction colorimétrique',
        content: 'Configuration :',
        items: [
          '1. Clic droit sur ta webcam → Filtres',
          '2. "+" → Correction colorimétrique',
          '3. Augmente légèrement le contraste (+0.1)',
          '4. Augmente la saturation (+0.1 à +0.2)',
          '5. Ajuste gamma si l\'image est trop sombre/claire'
        ]
      },
      {
        type: 'tip',
        title: 'Les LUTs gratuites',
        content: `Une LUT (Look-Up Table) applique un style de couleur prédéfini. Cherche "free LUT pack streaming" sur Google. Tu trouveras des packs gratuits comme ceux de Tom Antos ou Ground Control.`
      },
      {
        type: 'example',
        title: 'Réglages subtils recommandés',
        content: `Pour un look naturel mais amélioré :
- Contraste : +0.05 à +0.15
- Luminosité : 0 (ajuste si besoin)
- Gamma : 0 (ajuste si trop sombre)
- Saturation : +0.1 à +0.3 (plus de vie)

Reste subtil pour un rendu naturel !`
      }
    ],
    keyTakeaways: [
      'Correction colorimétrique = ajustements fins',
      'LUTs = styles de couleur prédéfinis',
      'Reste subtil, évite le sur-traitement',
      'Saturation légère donne plus de vie'
    ],
    nextSteps: 'Couleurs ajustées ! Voyons le Chroma Key.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 13,
    sections: [
      {
        type: 'intro',
        content: `Le Chroma Key (fond vert) te permet de supprimer ton arrière-plan et de le remplacer par ce que tu veux : overlay, jeu, espace... C'est LE filtre iconique du streaming ! 💚`
      },
      {
        type: 'concept',
        title: 'Comment ça marche',
        content: `Le Chroma Key détecte une couleur spécifique (généralement vert) et la rend transparente. Ce qui était vert disparaît, laissant voir ce qui est derrière dans OBS.`
      },
      {
        type: 'steps',
        title: 'Configurer le Chroma Key',
        content: 'Étape par étape :',
        items: [
          '1. Installe ton fond vert derrière toi',
          '2. Éclaire-le uniformément (CRUCIAL)',
          '3. Webcam → Filtres → "+" → Chroma Key',
          '4. Type de couleur clé : Vert (ou personnalisé)',
          '5. Ajuste Similarité et Lissage jusqu\'à ce que ça soit propre'
        ]
      },
      {
        type: 'tip',
        title: 'L\'éclairage est TOUT',
        content: `90% des mauvais Chroma Key viennent d'un mauvais éclairage. Ton fond vert doit être éclairé uniformément, sans ombres ni plis. Idéalement, 2 sources de lumière sur le fond + 1 sur toi.`
      },
      {
        type: 'example',
        title: 'Réglages typiques',
        content: `Si ton fond vert est bien éclairé :
- Type de couleur clé : Vert
- Similarité : 400-450
- Lissage : 80-100
- Réduction des reflets : 0.2

Ajuste Similarité en premier, puis Lissage.`
      },
      {
        type: 'warning',
        title: 'Évite le vert sur toi',
        content: `Ne porte pas de vêtements verts, sinon tu seras partiellement transparent ! Évite aussi les reflets verts sur ta peau si tu es trop proche du fond.`
      }
    ],
    keyTakeaways: [
      'L\'éclairage uniforme du fond est crucial',
      'Similarité contrôle la tolérance de couleur',
      'Lissage adoucit les bords',
      'Ne porte pas de vert !'
    ],
    nextSteps: 'Chroma Key maîtrisé ! Voyons les masques et le cropping.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 14,
    sections: [
      {
        type: 'intro',
        content: `Les masques et le cropping te permettent de découper et façonner tes sources. Webcam ronde, cadres personnalisés, zones spécifiques... Les possibilités sont infinies ! ✂️`
      },
      {
        type: 'concept',
        title: 'Crop vs Mask',
        content: `Deux techniques pour modifier la forme de tes sources :`,
        items: [
          '✂️ Crop (Recadrer) - Coupe les bords de ta source (rectangle)',
          '🎭 Mask (Masque) - Utilise une image pour définir la forme (n\'importe quelle forme)'
        ]
      },
      {
        type: 'steps',
        title: 'Cropper ta webcam',
        content: 'Méthode simple :',
        items: [
          '1. Sélectionne ta webcam dans la scène',
          '2. Maintiens ALT et glisse les bords rouges',
          '3. Ça "coupe" les zones non désirées',
          '4. Alternative : Filtres → Recadrer/Ajouter des marges'
        ]
      },
      {
        type: 'steps',
        title: 'Utiliser un masque',
        content: 'Pour des formes personnalisées :',
        items: [
          '1. Crée une image PNG avec la forme souhaitée (noir = invisible, blanc = visible)',
          '2. Webcam → Filtres → "+" → Image Mask/Blend',
          '3. Type : Alpha Mask (Alpha Channel)',
          '4. Sélectionne ton image masque',
          '5. Ta webcam prend la forme du masque !'
        ]
      },
      {
        type: 'tip',
        title: 'Masques webcam gratuits',
        content: `Cherche "OBS webcam mask PNG" sur Google Images. Tu trouveras des cercles, hexagones, formes gaming... Assure-toi qu'ils sont en PNG avec transparence.`
      },
      {
        type: 'example',
        title: 'Webcam circulaire',
        content: `Pour une webcam ronde style Discord :
1. Télécharge un cercle blanc sur fond noir (PNG)
2. Applique-le comme masque
3. Résultat : ta facecam devient un cercle parfait !

C'est très tendance pour les overlays modernes.`
      }
    ],
    keyTakeaways: [
      'ALT + glisser = Crop rapide',
      'Masques PNG = formes personnalisées',
      'Noir = transparent, Blanc = visible',
      'Les masques circulaires sont tendance'
    ],
    nextSteps: 'Découpage maîtrisé ! Passons aux scènes multiples.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 15,
    sections: [
      {
        type: 'intro',
        content: `Tu as plusieurs scènes maintenant. Mais comment les organiser efficacement et switcher entre elles de manière fluide ? Cette leçon t'apprend à gérer un setup multi-scènes pro ! 🎬`
      },
      {
        type: 'concept',
        title: 'L\'architecture multi-scènes',
        content: `Un bon setup utilise des scènes de base + des scènes "imbriquées" :`,
        items: [
          '📺 Scènes principales - Ce que tu affiches (Gaming, Chat, BRB)',
          '🧱 Scènes de base - Éléments réutilisables (Webcam seule, Overlays)',
          '🎭 Scene Collections - Groupes de scènes pour différents streams'
        ]
      },
      {
        type: 'steps',
        title: 'Créer une scène réutilisable',
        content: 'Technique des scènes imbriquées :',
        items: [
          '1. Crée une scène "[BASE] Webcam" avec ta webcam configurée',
          '2. Dans ta scène Gaming, ajoute une source "Scène"',
          '3. Sélectionne "[BASE] Webcam"',
          '4. Maintenant, modifier la base modifie TOUTES les scènes qui l\'utilisent !'
        ]
      },
      {
        type: 'tip',
        title: 'Nommage intelligent',
        content: `Préfixe tes scènes de base avec [BASE] ou [COMMON]. Tes scènes principales sans préfixe. Comme ça, elles sont triées logiquement dans la liste.`
      },
      {
        type: 'checklist',
        title: 'Structure recommandée',
        content: 'Organise tes scènes ainsi :',
        items: [
          '[BASE] Webcam - Ta webcam avec tous ses filtres',
          '[BASE] Alerts - Tes alertes et widgets',
          '[BASE] Overlay Frame - Ton cadre/overlay',
          '🎬 Starting Soon - Écran d\'attente',
          '🎮 Gaming - Jeu + base webcam + base overlay',
          '💬 Just Chatting - Base webcam en grand',
          '☕ BRB - Écran de pause',
          '👋 Ending - Écran de fin'
        ]
      }
    ],
    keyTakeaways: [
      'Les scènes imbriquées évitent la duplication',
      'Modifie la base = modifie partout',
      'Préfixe [BASE] pour les scènes réutilisables',
      'Scene Collections pour différents types de streams'
    ],
    nextSteps: 'Scènes organisées ! Voyons les transitions.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 16,
    sections: [
      {
        type: 'intro',
        content: `Les transitions ajoutent du polish à ton stream. Au lieu de coupes brutales entre scènes, ajoute des fades, slides ou même des transitions animées personnalisées ! ✨`
      },
      {
        type: 'concept',
        title: 'Types de transitions',
        content: `OBS offre plusieurs transitions de base :`,
        items: [
          '🌫️ Fade (Fondu) - La plus utilisée, smooth et pro',
          '➡️ Slide (Glissement) - Effet de défilement',
          '✂️ Cut (Coupe) - Instantané, pas d\'animation',
          '🎬 Stinger - Transition vidéo personnalisée'
        ]
      },
      {
        type: 'steps',
        title: 'Configurer une transition',
        content: 'Comment faire :',
        items: [
          '1. Dans le panneau "Transitions de scène", clique sur le nom',
          '2. Choisis le type (Fade, Slide...)',
          '3. Ajuste la durée (300-500ms recommandé)',
          '4. Teste en changeant de scène'
        ]
      },
      {
        type: 'concept',
        title: 'Les transitions Stinger',
        content: `Un Stinger est une vidéo qui joue pendant le changement de scène. Elle doit avoir un "point de transition" où la vidéo couvre tout l'écran, et OBS change de scène à ce moment.`
      },
      {
        type: 'tip',
        title: 'Stingers gratuits',
        content: `Cherche "free OBS stinger transitions" sur YouTube ou Gumroad. Tu trouveras des packs gratuits avec plusieurs styles. Formats : WEBM (léger) ou MOV (qualité).`
      },
      {
        type: 'example',
        title: 'Configurer un Stinger',
        content: `1. Transition → "+" → Stinger
2. Vidéo : Sélectionne ton fichier WEBM/MOV
3. Type de point de transition : Temps
4. Point de transition : Le moment (en ms) où l'écran est couvert
5. Teste et ajuste si besoin

Le timing est crucial pour un résultat fluide !`
      }
    ],
    keyTakeaways: [
      'Fade 300-500ms est le standard pro',
      'Stingers = transitions vidéo personnalisées',
      'Le point de transition doit couvrir l\'écran',
      'WEBM est plus léger que MOV'
    ],
    nextSteps: 'Transitions smooth ! Découvrons le Studio Mode.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 17,
    sections: [
      {
        type: 'intro',
        content: `Le Studio Mode te permet de prévisualiser une scène AVANT de la montrer à tes viewers. C'est le mode utilisé par les pros pour éviter les accidents en live ! 📺`
      },
      {
        type: 'concept',
        title: 'Comment ça marche',
        content: `En Studio Mode, tu vois 2 écrans côte à côte :`,
        items: [
          '👁️ Preview (gauche) - Ce que TU vois, configurable',
          '📺 Program (droite) - Ce que tes VIEWERS voient actuellement',
          '➡️ Transition - Bouton pour envoyer la Preview vers le Program'
        ]
      },
      {
        type: 'steps',
        title: 'Activer le Studio Mode',
        content: 'Simple comme bonjour :',
        items: [
          '1. Clique sur "Mode Studio" en bas à droite',
          '2. L\'interface se divise en deux',
          '3. Clique sur une scène = elle va en Preview',
          '4. Clique "Transition" = elle passe en Program (live)'
        ]
      },
      {
        type: 'tip',
        title: 'Raccourcis clavier',
        content: `Configure des hotkeys pour switcher rapidement :
Paramètres → Raccourcis
- "Transition" : souvent sur ENTER ou F1
- Chaque scène peut avoir son raccourci direct

Les pros utilisent un Stream Deck pour ça !`
      },
      {
        type: 'warning',
        title: 'Attention aux éditions',
        content: `En Studio Mode, si tu modifies une scène (déplaces une source), le changement est visible immédiatement en Preview mais PAS en Program. Tu peux préparer tranquillement puis transitionner.`
      }
    ],
    keyTakeaways: [
      'Studio Mode = Preview + Program',
      'Prépare en Preview, envoie vers Program',
      'Configure des raccourcis clavier',
      'Évite les accidents en live'
    ],
    nextSteps: 'Studio Mode activé ! Passons à l\'encodage.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 18,
    sections: [
      {
        type: 'intro',
        content: `L'encodage, c'est la compression de ta vidéo pour l'envoyer sur internet. Bien comprendre les paramètres te permettra d'optimiser qualité ET performance. 🎥`
      },
      {
        type: 'concept',
        title: 'Les concepts clés',
        content: `L'encodage implique plusieurs paramètres :`,
        items: [
          '📊 Bitrate - Quantité de données par seconde (kbps)',
          '⚙️ Encodeur - Le "moteur" qui compresse (x264, NVENC...)',
          '🎚️ Preset - Vitesse vs Qualité du traitement',
          '🔑 Keyframe - Images complètes pour la synchronisation',
          '📐 Résolution - Taille de l\'image (1080p, 720p...)'
        ]
      },
      {
        type: 'concept',
        title: 'Bitrate : la donnée cruciale',
        content: `Plus de bitrate = meilleure qualité, MAIS :
- Twitch limite à 6000 kbps (sauf partenaires)
- YouTube permet jusqu'à 51000 kbps
- Ta connexion upload doit pouvoir suivre

Règle : utilise 80% de ton upload max.`
      },
      {
        type: 'example',
        title: 'Bitrates recommandés',
        content: `Selon ta résolution :
- 720p 30fps : 2500-4000 kbps
- 720p 60fps : 3500-5000 kbps
- 1080p 30fps : 4500-6000 kbps
- 1080p 60fps : 6000-8000 kbps (si ta plateforme le permet)

Pour Twitch Affiliate : reste à 6000 max.`
      },
      {
        type: 'tip',
        title: 'Le test de bitrate',
        content: `Lance un stream test privé et regarde les "dropped frames" en bas d'OBS. Si tu en as beaucoup, réduis le bitrate. 0.1% de frames perdues est acceptable.`
      }
    ],
    keyTakeaways: [
      'Bitrate = qualité mais limité par ta connexion',
      'Twitch limite à 6000 kbps',
      'Utilise 80% de ton upload max',
      'Teste pour trouver ton équilibre'
    ],
    nextSteps: 'Théorie OK ! Voyons les encodeurs.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 19,
    sections: [
      {
        type: 'intro',
        content: `x264, NVENC, AMF, QuickSync... Quel encodeur choisir ? Cette leçon compare chaque option pour t'aider à trouver celui qui correspond à ton setup ! ⚙️`
      },
      {
        type: 'concept',
        title: 'Les encodeurs disponibles',
        content: `Chaque encodeur a ses forces :`,
        items: [
          '💻 x264 (Software) - Utilise le CPU, meilleure qualité par bitrate',
          '🟢 NVENC (NVIDIA) - Utilise le GPU, excellent et léger',
          '🔴 AMF (AMD) - Utilise le GPU AMD, bon mais inférieur à NVENC',
          '🔵 QuickSync (Intel) - Utilise l\'iGPU Intel, correct'
        ]
      },
      {
        type: 'steps',
        title: 'Choisir son encodeur',
        content: 'Guide de décision :',
        items: [
          '🎮 Tu as une RTX 20xx/30xx/40xx ? → NVENC (New)',
          '🎮 Tu as une GTX 16xx/10xx ? → NVENC (New) aussi',
          '🔴 Tu as une AMD RX 5000+ ? → AMF (decent)',
          '💻 Ton CPU est puissant (Ryzen 7+) ? → x264 medium',
          '⚡ Tu veux les meilleures perfs ? → NVENC'
        ]
      },
      {
        type: 'example',
        title: 'Réglages NVENC recommandés',
        content: `Pour la plupart des streamers NVIDIA :
- Encodeur : NVIDIA NVENC H.264 (new)
- Contrôle du débit : CBR
- Bitrate : 6000 kbps
- Intervalle d'images clés : 2
- Préréglage : Quality
- Profil : high
- Look-ahead : Activé
- Psycho Visual Tuning : Activé`
      },
      {
        type: 'warning',
        title: 'x264 : attention aux perfs',
        content: `x264 mange du CPU ! Si tu streames des jeux lourds, tu risques des lags. Choisis un preset "faster" ou "veryfast" pour alléger. "medium" seulement si tu as un gros CPU.`
      }
    ],
    keyTakeaways: [
      'NVENC est le meilleur choix pour la plupart',
      'x264 = meilleure qualité mais gourmand en CPU',
      'AMF AMD est correct mais pas au niveau NVENC',
      'Preset Quality + Look-ahead pour NVENC'
    ],
    nextSteps: 'Encodeur choisi ! Optimisons pour Twitch.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 20,
    sections: [
      {
        type: 'intro',
        content: `Twitch a ses particularités : limite de bitrate, transcodage réservé aux partenaires, ingest servers... Voici comment optimiser OBS spécifiquement pour Twitch ! 💜`
      },
      {
        type: 'steps',
        title: 'Configuration Twitch optimale',
        content: 'Les réglages recommandés :',
        items: [
          '1. Paramètres → Stream → Service : Twitch',
          '2. Connecte ton compte (recommandé) ou copie ta Stream Key',
          '3. Serveur : Auto ou teste le plus proche avec Twitch Inspector',
          '4. Paramètres → Sortie → Mode : Avancé',
          '5. Configure selon les recommandations ci-dessous'
        ]
      },
      {
        type: 'example',
        title: 'Réglages Twitch recommandés',
        content: `Configuration type pour Affiliate :
- Résolution de base : 1920x1080
- Résolution de sortie : 1280x720 (ou 1080 si bon upload)
- FPS : 60 (ou 30 pour jeux lents)
- Encodeur : NVENC (new)
- Bitrate : 4500-6000 kbps
- Keyframe : 2 secondes (OBLIGATOIRE)`
      },
      {
        type: 'warning',
        title: 'Le keyframe interval',
        content: `Twitch EXIGE un keyframe interval de 2 secondes. Si tu mets autre chose, ton stream peut avoir des problèmes de buffering. C'est non négociable !`
      },
      {
        type: 'tip',
        title: '720p ou 1080p ?',
        content: `Si tu n'es pas Partner, tes viewers n'ont pas le transcodage garanti. Un stream 1080p 6000kbps sera illisible pour quelqu'un avec une mauvaise connexion. 720p 60fps à 4500-5000 kbps est souvent le meilleur compromis.`
      }
    ],
    keyTakeaways: [
      'Keyframe = 2 secondes obligatoire sur Twitch',
      '6000 kbps max (sauf Partner)',
      '720p souvent meilleur que 1080p pour Affiliates',
      'Connecte ton compte pour la config auto'
    ],
    nextSteps: 'Twitch configuré ! Voyons YouTube.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 21,
    sections: [
      {
        type: 'intro',
        content: `YouTube offre plus de flexibilité que Twitch : bitrate plus élevé, transcodage garanti, meilleure découvrabilité... Optimisons OBS pour YouTube ! 🔴`
      },
      {
        type: 'steps',
        title: 'Configuration YouTube',
        content: 'Les bases :',
        items: [
          '1. Paramètres → Stream → Service : YouTube - RTMPS',
          '2. Connecte ton compte OU copie la Stream Key depuis YouTube Studio',
          '3. Serveur : Primary',
          '4. Configure l\'encodage selon tes capacités'
        ]
      },
      {
        type: 'example',
        title: 'Réglages YouTube recommandés',
        content: `YouTube permet d'aller plus haut :
- Résolution : 1920x1080 (voire 1440p/4K)
- FPS : 60
- Encodeur : NVENC ou x264
- Bitrate : 10000-20000 kbps (selon ton upload)
- Keyframe : 2-4 secondes
- Profile : High`
      },
      {
        type: 'concept',
        title: 'Avantages YouTube',
        content: `Pourquoi YouTube peut être meilleur :`,
        items: [
          '✅ Transcodage garanti pour tous (qualité auto)',
          '✅ Bitrate bien plus élevé permis',
          '✅ DVR (les viewers peuvent reculer)',
          '✅ Meilleur SEO (découvrabilité)',
          '⚠️ Communauté moins "live focused"'
        ]
      },
      {
        type: 'tip',
        title: 'Le mode latence ultra-faible',
        content: `YouTube propose 3 modes de latence. "Ultra-faible" réduit le délai à 2-3 secondes (comme Twitch). Active-le dans YouTube Studio → Stream → Latence du stream.`
      }
    ],
    keyTakeaways: [
      'YouTube permet des bitrates plus élevés',
      'Transcodage garanti pour tous les viewers',
      'Mode Ultra-faible latence = 2-3 secondes',
      'Idéal si tu as une grosse connexion upload'
    ],
    nextSteps: 'YouTube prêt ! Passons aux raccourcis clavier.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 22,
    sections: [
      {
        type: 'intro',
        content: `Les raccourcis clavier te rendent 10x plus efficace. Au lieu de cliquer partout, une touche et hop ! Cette leçon configure les hotkeys essentielles. ⌨️`
      },
      {
        type: 'steps',
        title: 'Configurer les raccourcis',
        content: 'Où les trouver :',
        items: [
          '1. Paramètres → Raccourcis',
          '2. Trouve l\'action à configurer',
          '3. Clique dans le champ vide',
          '4. Appuie sur la touche voulue',
          '5. Clique ailleurs pour valider'
        ]
      },
      {
        type: 'checklist',
        title: 'Raccourcis indispensables',
        content: 'Configure au minimum ceux-ci :',
        items: [
          'Mute/Unmute micro → Exemple : F1',
          'Mute/Unmute desktop → Exemple : F2',
          'Transition (Studio Mode) → Exemple : ENTER',
          'Scène Gaming → Exemple : F5',
          'Scène Just Chatting → Exemple : F6',
          'Scène BRB → Exemple : F7',
          'Démarrer/Arrêter le stream → Pas recommandé (évite les accidents)'
        ]
      },
      {
        type: 'tip',
        title: 'Évite les conflits',
        content: `N'utilise pas des touches que tes jeux utilisent ! F1-F12 sont généralement safe. Évite les lettres simples. Tu peux aussi utiliser des combinaisons (Ctrl+F1).`
      },
      {
        type: 'warning',
        title: 'Pas de hotkey Start/Stop',
        content: `Mettre un raccourci pour Start/Stop Stream est risqué. Un appui accidentel et tu coupes ton live ! Laisse ça à la souris.`
      }
    ],
    keyTakeaways: [
      'F1-F12 sont les touches les plus sûres',
      'Mute micro est LE raccourci le plus important',
      'Évite les raccourcis Start/Stop stream',
      'Teste en jeu pour détecter les conflits'
    ],
    nextSteps: 'Hotkeys configurées ! Découvrons les plugins.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 23,
    sections: [
      {
        type: 'intro',
        content: `OBS a une communauté incroyable qui crée des plugins pour étendre ses fonctionnalités. Cette leçon présente les plugins que tout streamer devrait avoir ! 🔌`
      },
      {
        type: 'concept',
        title: 'Les plugins essentiels',
        content: `Ma liste de must-have :`,
        items: [
          '🎬 StreamFX - Effets visuels avancés (blur, 3D transform...)',
          '🔀 Move Transition - Animations fluides entre scènes',
          '🔊 Audio Monitor - Contrôle audio avancé',
          '📊 OBS Websocket - Intégration avec d\'autres apps',
          '⏱️ Advanced Scene Switcher - Automation des scènes'
        ]
      },
      {
        type: 'steps',
        title: 'Installer un plugin',
        content: 'Procédure standard :',
        items: [
          '1. Télécharge le plugin depuis obsproject.com/forum ou GitHub',
          '2. Ferme OBS',
          '3. Extrais/copie les fichiers dans ton dossier OBS (obs-plugins)',
          '4. Relance OBS',
          '5. Le plugin apparaît dans les sources/filtres/menus'
        ]
      },
      {
        type: 'tip',
        title: 'StreamFX en détail',
        content: `StreamFX est LE plugin le plus utile. Il ajoute :
- Blur (flou) pour cacher des éléments
- 3D Transform pour des angles de caméra cool
- Source Mirror pour dupliquer des sources
- Shader effects pour des effets visuels avancés`
      },
      {
        type: 'warning',
        title: 'Compatibilité',
        content: `Les plugins doivent correspondre à ta version d'OBS. OBS 30+ a changé beaucoup de choses. Vérifie que le plugin supporte ta version avant de l'installer.`
      }
    ],
    keyTakeaways: [
      'StreamFX = le plugin le plus utile',
      'Move Transition pour des animations fluides',
      'Toujours vérifier la compatibilité de version',
      'Les plugins sont sur le forum OBS ou GitHub'
    ],
    nextSteps: 'Plugins installés ! Voyons le dépannage.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 24,
    sections: [
      {
        type: 'intro',
        content: `Lag, frame drops, audio désync... Les problèmes arrivent ! Cette leçon te donne les solutions aux problèmes les plus courants. 🔧`
      },
      {
        type: 'concept',
        title: 'Types de problèmes',
        content: `Il y a 2 catégories de "lag" :`,
        items: [
          '📉 Encoding Lag - OBS n\'arrive pas à encoder assez vite',
          '📡 Network Lag - Ta connexion ne suit pas le bitrate'
        ]
      },
      {
        type: 'steps',
        title: 'Diagnostiquer le problème',
        content: 'Regarde en bas d\'OBS :',
        items: [
          '💚 Tout vert = Tout va bien',
          '🟡 "Encoding overloaded" = Problème CPU/GPU',
          '🔴 "Dropped frames" = Problème réseau',
          '⚠️ Les deux = Vérifie les deux !'
        ]
      },
      {
        type: 'example',
        title: 'Solutions Encoding Lag',
        content: `Ton CPU/GPU n'arrive pas à suivre :
1. Baisse le preset d'encodage (ex: medium → faster)
2. Réduis la résolution de sortie (1080p → 720p)
3. Passe de x264 à NVENC si possible
4. Ferme les applications en arrière-plan
5. Limite les FPS du jeu (cap à 60fps)`
      },
      {
        type: 'example',
        title: 'Solutions Network Lag',
        content: `Ta connexion ne suit pas :
1. Baisse le bitrate (6000 → 4500 kbps)
2. Passe en filaire (pas le WiFi !)
3. Ferme les téléchargements en cours
4. Teste un autre serveur d'ingestion
5. Contacte ton FAI si le problème persiste`
      },
      {
        type: 'tip',
        title: 'L\'outil miracle : OBS Log Analyzer',
        content: `OBS a un outil d'analyse de logs gratuit. Aide → Fichiers journaux → Téléverser. Il te dit exactement ce qui ne va pas et comment le corriger !`
      }
    ],
    keyTakeaways: [
      'Encoding lag = CPU/GPU surchargé',
      'Network lag = connexion insuffisante',
      'Le Log Analyzer diagnostic automatiquement',
      'Le filaire est toujours mieux que le WiFi'
    ],
    nextSteps: 'Dépannage maîtrisé ! Voyons le dual PC.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 25,
    sections: [
      {
        type: 'intro',
        content: `Un setup dual PC (un pour jouer, un pour streamer) est le graal des streamers. Zéro impact sur les performances gaming ! Cette leçon explique comment le configurer. 🖥️🖥️`
      },
      {
        type: 'concept',
        title: 'Pourquoi le dual PC ?',
        content: `Avantages du dual PC :`,
        items: [
          '🎮 PC Gaming - 100% dédié au jeu, aucun lag',
          '📺 PC Streaming - Gère OBS, chat, alertes',
          '🔄 NDI - Envoie la vidéo par réseau local',
          '💪 Encode en x264 slow = qualité maximale'
        ]
      },
      {
        type: 'steps',
        title: 'Configuration NDI',
        content: 'NDI envoie ta vidéo via le réseau local :',
        items: [
          '1. Installe "NDI Tools" sur les 2 PC (ndi.tv)',
          '2. Sur le PC Gaming : installe le plugin "obs-ndi"',
          '3. Dans OBS du PC Gaming : Outils → NDI Output Settings → Main Output',
          '4. Sur le PC Streaming : Sources → NDI Source',
          '5. Sélectionne le flux du PC Gaming'
        ]
      },
      {
        type: 'concept',
        title: 'Alternatives au NDI',
        content: `D'autres méthodes existent :`,
        items: [
          '📹 Carte de capture HDMI - Plus fiable, coûte 150-300€',
          '🔌 NDI - Gratuit, utilise le réseau',
          '🎮 NVIDIA Gamestream - Latence faible, moins flexible'
        ]
      },
      {
        type: 'tip',
        title: 'Réseau optimal pour NDI',
        content: `NDI nécessite une bonne bande passante locale. Idéalement :
- Les 2 PC en filaire (pas de WiFi)
- Câbles Cat 6 ou mieux
- Switch gigabit si pas direct`
      }
    ],
    keyTakeaways: [
      'Dual PC = performances gaming maximales',
      'NDI = gratuit, utilise le réseau local',
      'Carte de capture = alternative plus fiable',
      'Filaire gigabit obligatoire pour NDI'
    ],
    nextSteps: 'Setup avancé ! Récapitulons le cours.'
  },
  {
    courseSlug: 'obs-studio',
    lessonId: 26,
    sections: [
      {
        type: 'intro',
        content: `Félicitations, tu as terminé la masterclass OBS ! 🎉 Tu es maintenant capable de configurer OBS comme un pro. Voici un récap et les ressources pour aller plus loin.`
      },
      {
        type: 'steps',
        title: 'Ce que tu as appris',
        content: 'Récapitulatif du cours :',
        items: [
          '✅ Installation et interface OBS',
          '✅ Scènes et sources',
          '✅ Configuration webcam et capture de jeu',
          '✅ Audio : sources, mixeur, filtres',
          '✅ Filtres vidéo : couleurs, chroma key, masques',
          '✅ Transitions et Studio Mode',
          '✅ Encodage et optimisation',
          '✅ Plugins et dépannage',
          '✅ Setup dual PC avancé'
        ]
      },
      {
        type: 'checklist',
        title: 'Checklist de validation',
        content: 'Assure-toi de maîtriser ces points :',
        items: [
          'Je sais créer et organiser des scènes',
          'Ma webcam est bien configurée avec filtres vidéo',
          'Mon audio est propre (noise gate, compresseur)',
          'Je sais capturer mes jeux sans écran noir',
          'Mes transitions sont fluides',
          'Mon encodage est optimisé pour ma plateforme',
          'Je sais diagnostiquer les problèmes courants'
        ]
      },
      {
        type: 'tip',
        title: 'Ressources pour aller plus loin',
        content: `Continue à apprendre :
- r/obs sur Reddit - Communauté active
- Forum OBS (obsproject.com/forum) - Support officiel
- YouTube : EposVox, Gaming Careers - Tutos avancés
- Discord OBS - Aide en temps réel`
      },
      {
        type: 'quote',
        content: `"La technique est au service de la créativité. Maintenant que tu maîtrises OBS, concentre-toi sur ce qui compte vraiment : ton contenu et ta communauté." - L'équipe Stream Forge`
      },
      {
        type: 'quiz',
        title: 'Quiz Final OBS Studio',
        content: 'Teste tes connaissances acquises dans ce module :',
        questions: [
          {
            question: 'Quel encodeur est recommandé pour les cartes graphiques NVIDIA ?',
            options: ['x264', 'NVENC', 'AMF', 'QuickSync'],
            correctIndex: 1,
            explanation: 'NVENC utilise le GPU NVIDIA dédié pour l\'encodage, offrant d\'excellentes performances sans impacter le CPU.'
          },
          {
            question: 'Quel est le bitrate maximum autorisé par Twitch ?',
            options: ['3000 kbps', '4500 kbps', '6000 kbps', '8000 kbps'],
            correctIndex: 2,
            explanation: 'Twitch limite le bitrate à 6000 kbps. Au-delà, certains viewers ne pourront pas regarder ton stream.'
          },
          {
            question: 'Quel filtre audio supprime le bruit de fond ambiant ?',
            options: ['Noise Gate', 'Compressor', 'RNNoise', 'Limiter'],
            correctIndex: 2,
            explanation: 'RNNoise (Suppression de bruit) utilise l\'IA pour supprimer les bruits de fond tout en préservant ta voix.'
          },
          {
            question: 'Comment s\'appelle la fonctionnalité OBS qui te permet de préparer la prochaine scène avant de switch ?',
            options: ['Preview Mode', 'Studio Mode', 'Safe Mode', 'Edit Mode'],
            correctIndex: 1,
            explanation: 'Le Studio Mode affiche preview et program côte à côte pour préparer tes transitions proprement.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Tu maîtrises maintenant OBS Studio !',
      'Continue à pratiquer et expérimenter',
      'Rejoins la communauté OBS pour progresser',
      'Passe au Module 03 : Overlays & Design !'
    ],
    nextSteps: 'Tu as complété le Module 02 ! Continue avec le Module 03 : Overlays & Design Pro pour créer des visuels uniques.'
  },
  // ============================================
  // COURS 3: Overlays & Design Pro
  // ============================================
  {
    courseSlug: 'overlays-design',
    lessonId: 1,
    sections: [
      {
        type: 'intro',
        content: `Bienvenue dans le cours design ! 🎨 Tes overlays, alertes et visuels sont ta carte de visite. Un bon design te démarque instantanément de la masse. Prêt à créer des visuels qui impressionnent ?`
      },
      {
        type: 'concept',
        title: 'Les principes du design pour streaming',
        content: `Le design streaming a ses propres règles. L'objectif : être visible sans gêner.`,
        items: [
          '👁️ Lisibilité - Texte lisible même en petit',
          '⚖️ Équilibre - Pas trop chargé, pas trop vide',
          '🎯 Hiérarchie - Le plus important se voit en premier',
          '🎨 Cohérence - Même style partout',
          '🖥️ Adaptation - Fonctionne sur mobile et PC'
        ]
      },
      {
        type: 'warning',
        title: 'Erreur fatale : trop d\'éléments',
        content: `Le piège n°1 des débutants : surcharger l'écran. Ton overlay ne doit pas cacher le jeu ! Marge de sécurité : max 20% de l'écran occupé par des overlays.`
      },
      {
        type: 'tip',
        title: 'Inspiration',
        content: `Regarde les streams de tes créateurs préférés et analyse leurs choix design. Behance, Dribbble et Twitter (@StreamSupply, @Nerd_Or_Die) sont d'excellentes sources d'inspiration.`
      }
    ],
    keyTakeaways: [
      'Le design streaming doit être visible mais pas intrusif',
      'Maximum 20% de l\'écran en overlays',
      'La cohérence visuelle est cruciale',
      'Étudie les designs des pros'
    ],
    nextSteps: 'Principes compris ! Créons ta charte graphique.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 2,
    sections: [
      {
        type: 'intro',
        content: `Ta charte graphique définit ton identité visuelle. Couleurs, polices, style... Une fois définie, tu l'appliques PARTOUT pour être reconnaissable instantanément. 🎨`
      },
      {
        type: 'steps',
        title: 'Les éléments de ta charte',
        content: 'Définis chacun de ces points :',
        items: [
          '🎨 Couleur principale - Ta couleur signature',
          '🎨 Couleur secondaire - Complémentaire ou contraste',
          '✨ Couleur accent - Pour les highlights',
          '⬛ Couleur neutre - Pour les fonds (souvent noir/gris)',
          '✏️ Police titre - Expressive, unique',
          '📝 Police texte - Lisible, neutre',
          '💫 Style - Néon, minimaliste, cartoon, etc.'
        ]
      },
      {
        type: 'tip',
        title: 'Outils de palette gratuits',
        content: `Coolors.co génère des palettes harmonieuses. Adobe Color te propose des règles de couleur (complémentaire, triade...). Colormind.io utilise l'IA pour créer des palettes.`
      },
      {
        type: 'example',
        title: 'Charte type "Neon Gaming"',
        content: `Exemple de charte cohérente :
- Principal : #8B5CF6 (Violet électrique)
- Secondaire : #1A1A2E (Bleu nuit)
- Accent : #00F5FF (Cyan néon)
- Titre : Orbitron (futuriste)
- Texte : Inter (moderne lisible)
- Style : Cyberpunk, glow effects`
      },
      {
        type: 'quiz',
        title: 'Quiz Charte Graphique',
        content: 'Teste tes connaissances sur le branding :',
        questions: [
          {
            question: 'Combien de couleurs maximum sont recommandées pour une charte ?',
            options: ['1', '2', '3', '5+'],
            correctIndex: 2,
            explanation: '3 couleurs suffisent : principale, secondaire, accent. Plus = confusion visuelle.'
          },
          {
            question: 'Combien de polices différentes recommande-t-on ?',
            options: ['1', '2', '4', 'Autant que tu veux'],
            correctIndex: 1,
            explanation: '2 polices max : une pour les titres, une pour le texte. Plus = amateur.'
          },
          {
            question: 'Ta charte graphique doit être appliquée...',
            options: ['Seulement sur Twitch', 'Seulement sur les overlays', 'Partout sans exception', 'Uniquement sur les réseaux'],
            correctIndex: 2,
            explanation: 'La cohérence est clé ! Overlay, profil, réseaux... Ta marque doit être reconnaissable partout.'
          }
        ]
      }
    ],
    keyTakeaways: [
      '3 couleurs suffisent (principal, secondaire, accent)',
      '2 polices max (titre + texte)',
      'Définis ton style en 2-3 mots clés',
      'Applique ta charte partout sans exception'
    ],
    nextSteps: 'Charte prête ! Voyons les formats techniques.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 3,
    sections: [
      {
        type: 'intro',
        content: `Créer c'est bien, créer aux bonnes dimensions c'est mieux ! Cette leçon couvre tous les formats et résolutions que tu dois connaître. 📐`
      },
      {
        type: 'concept',
        title: 'Les résolutions importantes',
        content: `Voici les dimensions standards :`,
        items: [
          '📺 Stream : 1920x1080 (Full HD)',
          '📷 Webcam frame : 640x480 (4:3) ou 480x270 (16:9)',
          '🖼️ Panneau Twitch : 320x160 à 320x300',
          '👤 Avatar : 512x512 (carré)',
          '🎨 Bannière Twitch : 1200x480',
          '⚡ Emotes : 112x112, 56x56, 28x28'
        ]
      },
      {
        type: 'steps',
        title: 'Formats de fichiers',
        content: 'Quel format pour quel usage :',
        items: [
          '🖼️ PNG - Overlays avec transparence (éléments fixes)',
          '🎬 WEBM - Vidéos avec transparence (alertes animées)',
          '🎞️ GIF - Animations simples (évite si possible)',
          '📸 JPG - Images sans transparence (bannières)',
          '✏️ SVG - Logos scalables (vectoriel)'
        ]
      },
      {
        type: 'warning',
        title: 'La transparence',
        content: `Pour les overlays, tu DOIS exporter en PNG avec transparence. Si tu exportes en JPG, ton overlay aura un fond blanc/noir qui cachera ton jeu !`
      }
    ],
    keyTakeaways: [
      'Stream : 1920x1080',
      'PNG pour les éléments fixes transparents',
      'WEBM pour les animations transparentes',
      'Toujours vérifier la transparence avant export'
    ],
    nextSteps: 'Formats maîtrisés ! Découvrons Photoshop.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 4,
    sections: [
      {
        type: 'intro',
        content: `Photoshop est LE logiciel de référence pour le design gaming. Cette leçon te fait un tour complet de l'interface et des outils essentiels. 🖌️`
      },
      {
        type: 'concept',
        title: 'L\'interface Photoshop',
        content: `Les zones principales à connaître :`,
        items: [
          '🎨 Barre d\'outils (gauche) - Tous tes pinceaux et outils',
          '📊 Panneaux (droite) - Calques, couleurs, propriétés',
          '🖼️ Zone de travail (centre) - Ton canvas',
          '⚙️ Barre d\'options (haut) - Options de l\'outil actif',
          '📐 Règles - Ctrl+R pour les afficher'
        ]
      },
      {
        type: 'steps',
        title: 'Outils essentiels',
        content: 'Les 10 outils que tu utiliseras le plus :',
        items: [
          'V - Déplacement : bouger des éléments',
          'M - Sélection : sélectionner des zones',
          'L - Lasso : sélection libre',
          'T - Texte : ajouter du texte',
          'G - Dégradé/Pot de peinture',
          'U - Formes : rectangles, cercles, etc.',
          'B - Pinceau',
          'E - Gomme',
          'Z - Zoom',
          'Ctrl+T - Transformation libre'
        ]
      },
      {
        type: 'tip',
        title: 'Les calques, c\'est la vie',
        content: `TOUT doit être sur des calques séparés ! Un calque pour le fond, un pour le cadre, un pour le texte... Nomme tes calques et utilise des groupes. Tu me remercieras plus tard.`
      }
    ],
    keyTakeaways: [
      'Apprends les raccourcis clavier par cœur',
      'Un élément = un calque',
      'Nomme et groupe tes calques',
      'Ctrl+Z est ton meilleur ami'
    ],
    nextSteps: 'Interface maîtrisée ! Créons ton overlay webcam.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 5,
    sections: [
      {
        type: 'intro',
        content: `Ton premier projet concret : créer un cadre webcam professionnel ! C'est un élément simple qui aura un impact énorme sur le rendu de ton stream. 🖼️`
      },
      {
        type: 'steps',
        title: 'Création pas à pas',
        content: 'Suis ces étapes :',
        items: [
          '1. Nouveau document : 1920x1080, fond transparent',
          '2. Dessine un rectangle aux dimensions de ta webcam',
          '3. Ajoute un contour (stroke) de 4-8px avec ta couleur principale',
          '4. Applique un effet Glow si style néon',
          '5. Ajoute des coins décoratifs ou des éléments',
          '6. Place ton pseudo ou logo',
          '7. Exporte en PNG avec transparence'
        ]
      },
      {
        type: 'concept',
        title: 'Les styles de cadres populaires',
        content: `Inspiration pour ton style :`,
        items: [
          '⬜ Minimaliste - Simple bordure fine',
          '🌟 Néon - Bordure avec glow coloré',
          '🎮 Gaming - Coins anguleux, tech',
          '🌸 Kawaii - Coins arrondis, décos mignonnes',
          '🖼️ Vintage - Ornements classiques'
        ]
      },
      {
        type: 'tip',
        title: 'Taille du cadre',
        content: `Pour calculer la taille : mesure ta webcam dans OBS. Classiquement : 640x480 (4:3) ou 480x270 (16:9 petit). Fais ton cadre légèrement plus grand pour laisser de la marge.`
      }
    ],
    keyTakeaways: [
      'Commence simple, complique si besoin',
      'Le glow néon est très efficace',
      'Mesure ta webcam avant de designer',
      'Exporte TOUJOURS en PNG transparent'
    ],
    nextSteps: 'Webcam frame créé ! Passons aux lower thirds.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 6,
    sections: [
      {
        type: 'intro',
        content: `Les "lower thirds" sont ces barres d'info en bas de l'écran avec ton pseudo, tes réseaux, ou des messages. C'est un élément pro que tous les streamers devraient avoir ! 📊`
      },
      {
        type: 'concept',
        title: 'Anatomie d\'un lower third',
        content: `Un lower third contient généralement :`,
        items: [
          '📛 Ton pseudo/nom de chaîne',
          '🐦 Tes réseaux (@twitter, etc.)',
          '📅 Infos contextuelles (événement, sponsor...)',
          '🎨 Éléments décoratifs dans ton style'
        ]
      },
      {
        type: 'steps',
        title: 'Création dans Photoshop',
        content: 'Étapes de création :',
        items: [
          '1. Nouveau document 1920x1080 transparent',
          '2. Dessine un rectangle en bas (environ 400px de haut)',
          '3. Opacité du fond : 60-80% (semi-transparent)',
          '4. Ajoute ton texte : pseudo en grand, réseaux en petit',
          '5. Décore avec des lignes, formes, glow',
          '6. Assure-toi que ça ne couvre pas de zone importante',
          '7. Exporte en PNG'
        ]
      },
      {
        type: 'tip',
        title: 'Positionnement',
        content: `Place ton lower third en bas à gauche ou droite, pas au centre (ça cache l'action). Laisse de l'espace pour le chat ou le jeu. Hauteur max recommandée : 1/5 de l'écran.`
      }
    ],
    keyTakeaways: [
      'Lower third = barre d\'info en bas',
      'Semi-transparence pour ne pas trop cacher',
      'Évite le centre de l\'écran',
      'Inclus pseudo + réseaux au minimum'
    ],
    nextSteps: 'Lower third prêt ! Créons un overlay gaming complet.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 7,
    sections: [
      {
        type: 'intro',
        content: `L'overlay gaming complet intègre tous les éléments : cadre webcam, barre d'events, zone chat, lower third... C'est ton package visuel principal ! 🎮`
      },
      {
        type: 'concept',
        title: 'Structure d\'un overlay gaming',
        content: `Les zones typiques d'un overlay :`,
        items: [
          '📷 Webcam - Généralement en bas à droite ou gauche',
          '💬 Chat overlay - En haut à droite souvent',
          '🎉 Zone events - Pour les alertes follow/sub',
          '📊 Barres d\'info - Objectifs, sponsors, schedule',
          '🏆 Récents events - Derniers follows/subs'
        ]
      },
      {
        type: 'steps',
        title: 'Template de layout',
        content: 'Un layout éprouvé :',
        items: [
          '↗️ Coin haut droit : Chat overlay (300px largeur)',
          '↘️ Coin bas droit : Webcam (480x270)',
          '↙️ Coin bas gauche : Événements récents, social',
          '↖️ Coin haut gauche : Logo/Branding',
          '⬇️ Barre inférieure : Lower third si besoin'
        ]
      },
      {
        type: 'warning',
        title: 'Ne cache pas le jeu !',
        content: `Le centre de l'écran doit TOUJOURS être libre. C'est là que se passe l'action du jeu. Si ton overlay cache le centre, tu perds des viewers.`
      },
      {
        type: 'tip',
        title: 'Pense au 16:9',
        content: `Beaucoup de jeux utilisent du 16:9. Si tu joues en 4:3 ou 21:9, tu auras des bandes noires. Ton overlay peut remplir ces zones intelligemment.`
      }
    ],
    keyTakeaways: [
      'Le centre doit rester libre',
      'Webcam généralement en bas à droite',
      'Chat en haut à droite',
      'Utilise les bandes noires si le jeu en a'
    ],
    nextSteps: 'Overlay gaming créé ! Découvrons Figma.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 8,
    sections: [
      {
        type: 'intro',
        content: `Figma est une alternative GRATUITE et puissante à Photoshop. Ça tourne dans le navigateur, c'est collaboratif, et c'est devenu l'outil préféré de beaucoup de designers ! 🎨`
      },
      {
        type: 'concept',
        title: 'Pourquoi Figma ?',
        content: `Les avantages de Figma :`,
        items: [
          '💰 100% gratuit pour usage personnel',
          '☁️ Dans le navigateur, rien à installer',
          '🤝 Collaboratif en temps réel',
          '📦 Composants réutilisables',
          '🔌 Plugins pour tout',
          '📱 Fonctionne sur n\'importe quel OS'
        ]
      },
      {
        type: 'steps',
        title: 'Premiers pas',
        content: 'Comment démarrer :',
        items: [
          '1. Va sur figma.com et crée un compte gratuit',
          '2. Crée un nouveau fichier "Design file"',
          '3. Clique sur "Frame" (F) et choisis Custom 1920x1080',
          '4. Explore les outils à gauche',
          '5. Utilise les raccourcis (similaires à Photoshop)'
        ]
      },
      {
        type: 'tip',
        title: 'Raccourcis Figma',
        content: `Les raccourcis essentiels :
- V : Sélection
- F : Frame
- R : Rectangle
- T : Texte
- Ctrl+G : Grouper
- Ctrl+D : Dupliquer
- Shift+Ctrl+E : Exporter`
      }
    ],
    keyTakeaways: [
      'Figma est gratuit et dans le navigateur',
      'Interface similaire à Photoshop',
      'Parfait pour les overlays et UI',
      'Collaboratif = parfait pour les équipes'
    ],
    nextSteps: 'Figma pris en main ! Créons un overlay dedans.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 9,
    sections: [
      {
        type: 'intro',
        content: `Mettons en pratique Figma en créant un overlay complet. Tu verras que le workflow est fluide et efficient ! 🚀`
      },
      {
        type: 'steps',
        title: 'Création d\'overlay dans Figma',
        content: 'Étapes complètes :',
        items: [
          '1. Nouveau fichier → Frame 1920x1080',
          '2. Couleur de fond : Met transparent (damier)',
          '3. Dessine ton cadre webcam avec Rectangle (R)',
          '4. Ajoute un stroke coloré (panneau droit)',
          '5. Effects → Drop Shadow pour le glow',
          '6. Ajoute du texte (T) pour ton pseudo',
          '7. Groupe le tout (Ctrl+G)',
          '8. Exporte (Ctrl+Shift+E) en PNG 1x'
        ]
      },
      {
        type: 'concept',
        title: 'Les composants Figma',
        content: `La killer feature de Figma : les composants. Tu crées un élément une fois, tu le réutilises partout. Si tu le modifies, toutes les instances se mettent à jour.`
      },
      {
        type: 'tip',
        title: 'Plugins utiles',
        content: `Installe ces plugins Figma :
- Unsplash : Images gratuites
- Iconify : 100k+ icônes
- Stark : Vérifier le contraste
- Remove BG : Supprimer les fonds`
      }
    ],
    keyTakeaways: [
      'Frame 1920x1080 pour un overlay',
      'Fond transparent = damier visible',
      'Les composants évitent la duplication',
      'Exporte toujours en PNG 1x'
    ],
    nextSteps: 'Overlay Figma créé ! Voyons l\'export pour OBS.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 10,
    sections: [
      {
        type: 'intro',
        content: `Tu as créé ton overlay, maintenant il faut l'exporter correctement pour OBS. Un mauvais export = overlay inutilisable. Voyons les bonnes pratiques ! 📤`
      },
      {
        type: 'steps',
        title: 'Export Photoshop',
        content: 'Procédure d\'export :',
        items: [
          '1. Fichier → Exporter → Exportation rapide PNG',
          '2. OU Fichier → Enregistrer pour le web (Alt+Ctrl+Shift+S)',
          '3. Format : PNG-24',
          '4. Transparence : COCHÉE',
          '5. Taille : 100% (ne pas réduire)',
          '6. Enregistre dans un dossier dédié "Overlays"'
        ]
      },
      {
        type: 'steps',
        title: 'Export Figma',
        content: 'Procédure d\'export :',
        items: [
          '1. Sélectionne le frame ou groupe à exporter',
          '2. Dans le panneau droit : "Export" section',
          '3. Clique "+" pour ajouter un export',
          '4. Format : PNG, 1x',
          '5. Clique "Export" ou Ctrl+Shift+E'
        ]
      },
      {
        type: 'warning',
        title: 'Vérification de transparence',
        content: `Ouvre ton PNG exporté avec un visualiseur. Si tu vois un fond blanc/noir au lieu du damier de transparence, ton export a échoué. Recommence en vérifiant l'option transparence.`
      },
      {
        type: 'tip',
        title: 'Organisation des fichiers',
        content: `Crée une structure de dossiers claire :
/Overlays
  /Webcam
  /Alerts
  /Screens
  /Panels
Nomme tes fichiers clairement : "webcam_frame_v2.png"`
      }
    ],
    keyTakeaways: [
      'PNG-24 avec transparence activée',
      'Ne jamais réduire la taille à l\'export',
      'Vérifie la transparence après export',
      'Organise tes fichiers proprement'
    ],
    nextSteps: 'Export maîtrisé ! Créons un écran Starting Soon.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 11,
    sections: [
      {
        type: 'intro',
        content: `L'écran "Starting Soon" est la première chose que voient tes viewers. Autant faire bonne impression ! Cette leçon crée un écran d'attente professionnel avec countdown. ⏰`
      },
      {
        type: 'concept',
        title: 'Éléments d\'un Starting Soon',
        content: `Un bon écran d'attente contient :`,
        items: [
          '📺 Ton branding (logo, nom)',
          '⏰ Countdown timer (optionnel mais pro)',
          '📝 Message "Le stream commence bientôt"',
          '🎵 Indication "musique by..." si musique',
          '📱 Tes réseaux sociaux',
          '🎨 Animation ou mouvement (idéalement)'
        ]
      },
      {
        type: 'steps',
        title: 'Création statique',
        content: 'Version simple mais efficace :',
        items: [
          '1. Nouveau document 1920x1080',
          '2. Fond : ta couleur secondaire ou un dégradé',
          '3. Centre : Logo ou avatar en grand',
          '4. Sous le logo : "STARTING SOON" en gros',
          '5. Bas de l\'écran : réseaux sociaux',
          '6. Ajoute des éléments décoratifs (lignes, formes)',
          '7. Exporte en PNG'
        ]
      },
      {
        type: 'tip',
        title: 'Ajouter un countdown dans OBS',
        content: `Tu peux ajouter un timer avec une Browser Source + Streamlabs/StreamElements countdown widget. Ou utilise un GIF/vidéo countdown que tu trouves gratuit en ligne.`
      }
    ],
    keyTakeaways: [
      'Première impression = capitale',
      'Logo + message + réseaux minimum',
      'Le countdown est un plus',
      'Peux être animé plus tard'
    ],
    nextSteps: 'Starting créé ! Faisons le BRB.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 12,
    sections: [
      {
        type: 'intro',
        content: `L'écran BRB (Be Right Back) s'affiche pendant tes pauses. Il doit rassurer les viewers que tu reviens, et idéalement les divertir ! 🍵`
      },
      {
        type: 'concept',
        title: 'Éléments d\'un écran BRB',
        content: `Ce qu'il doit communiquer :`,
        items: [
          '⏸️ Message "Je reviens vite" ou "Pause"',
          '🕐 Timer optionnel (estimé)',
          '🎵 Indication musique pour patienter',
          '💬 Chat visible (pour que les gens discutent)',
          '🎮 GIF ou animation pour le fun'
        ]
      },
      {
        type: 'steps',
        title: 'Création de l\'écran BRB',
        content: 'Design type :',
        items: [
          '1. Document 1920x1080',
          '2. Fond similaire au Starting Soon (cohérence)',
          '3. Centre : GIF amusant ou avatar',
          '4. Message : "BRB - Je reviens vite !"',
          '5. Laisse une zone pour le chat overlay',
          '6. Ajoute un timer ou "Back in ~5 min"',
          '7. Exporte en PNG (le GIF sera séparé)'
        ]
      },
      {
        type: 'tip',
        title: 'GIFs animés',
        content: `Giphy et Tenor ont des GIFs libres. Cherche "brb stream" ou "waiting animated". En OBS, ajoute le GIF comme source Media ou image. Coche "Loop" pour qu'il tourne.`
      }
    ],
    keyTakeaways: [
      'Rassure que tu reviens',
      'Laisse le chat visible',
      'Un GIF/animation garde l\'attention',
      'Cohérent avec ton branding'
    ],
    nextSteps: 'BRB prêt ! Créons l\'écran Ending.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 13,
    sections: [
      {
        type: 'intro',
        content: `L'écran Ending clôture ton stream en beauté. C'est ta dernière chance de laisser une impression, de remercier et de rediriger vers un autre streamer ! 👋`
      },
      {
        type: 'concept',
        title: 'Objectifs de l\'écran Ending',
        content: `Ton ending doit :`,
        items: [
          '🙏 Remercier les viewers',
          '📅 Annoncer le prochain stream',
          '🔄 Préparer le raid/host',
          '📱 Rappeler tes réseaux sociaux',
          '👋 Dire au revoir avec style'
        ]
      },
      {
        type: 'steps',
        title: 'Création de l\'écran Ending',
        content: 'Structure recommandée :',
        items: [
          '1. Document 1920x1080',
          '2. Fond dans ton style habituel',
          '3. Message principal : "Merci d\'avoir regardé !"',
          '4. Sous-texte : "Next stream : [date]"',
          '5. Zone pour les crédits : top donos/subs',
          '6. Message "On raid [pseudo] dans 1 minute"',
          '7. Timer de raid optionnel'
        ]
      },
      {
        type: 'tip',
        title: 'Automatiser le raid',
        content: `Sur Twitch, tu peux configurer un auto-host pour que le raid se fasse automatiquement après un délai. Ça te laisse le temps de dire au revoir avant que les viewers partent.`
      }
    ],
    keyTakeaways: [
      'Remercie toujours tes viewers',
      'Annonce le prochain stream',
      'Prépare le raid pour garder l\'engagement',
      'Dernière impression = mémorable'
    ],
    nextSteps: 'Pack écrans complet ! Découvrons After Effects.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 14,
    sections: [
      {
        type: 'intro',
        content: `After Effects est le logiciel d'animation par excellence. C'est avec lui que tu crées des alertes animées, des intros, et des transitions qui en jettent ! ✨`
      },
      {
        type: 'concept',
        title: 'Interface After Effects',
        content: `Les zones principales :`,
        items: [
          '🎬 Timeline (bas) - Où tu animes dans le temps',
          '🖼️ Composition (centre) - Ton aperçu',
          '📁 Projet (gauche) - Tes fichiers importés',
          '⚙️ Effets (droite) - Effets et propriétés',
          '🎯 Keyframes - Points d\'animation clés'
        ]
      },
      {
        type: 'concept',
        title: 'Les bases de l\'animation',
        content: `L'animation fonctionne avec des keyframes :`,
        items: [
          '🔑 Keyframe = un état à un moment précis',
          '➡️ 2 keyframes = AE anime entre les deux',
          '📊 Position, Échelle, Rotation, Opacité = animables',
          '⏱️ La timeline gère le temps'
        ]
      },
      {
        type: 'tip',
        title: 'Raccourcis essentiels',
        content: `Raccourcis pour animator vite :
- P : Position
- S : Scale (échelle)
- R : Rotation
- T : Opacité (T pour Transparency)
- U : Affiche les keyframes
- Espace : Preview`
      }
    ],
    keyTakeaways: [
      'Keyframes = points clés d\'animation',
      'P, S, R, T = les 4 propriétés de base',
      'After Effects est complexe mais puissant',
      'Commence par des animations simples'
    ],
    nextSteps: 'Bases AE comprises ! Créons une alerte Follow.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 15,
    sections: [
      {
        type: 'intro',
        content: `Ta première alerte animée ! Quand quelqu'un te follow, une animation stylée apparaît à l'écran. C'est satisfaisant pour le viewer et te motive ! 🎉`
      },
      {
        type: 'steps',
        title: 'Création d\'une alerte Follow',
        content: 'Étapes dans After Effects :',
        items: [
          '1. Nouveau projet → Composition 1920x1080, 5 secondes, 30fps',
          '2. Importe ton design d\'alerte (fait en Photoshop)',
          '3. Anime l\'apparition : Scale de 0% à 100%',
          '4. Ajoute un easy ease (F9) pour le smooth',
          '5. Anime le texte : apparition lettre par lettre',
          '6. À la fin : anime la disparition (fade out)',
          '7. Exporte en WEBM avec transparence'
        ]
      },
      {
        type: 'concept',
        title: 'Structure d\'une alerte',
        content: `Une alerte se décompose en :`,
        items: [
          '⬆️ Intro (0.5s) - L\'alerte apparaît',
          '💫 Corps (3s) - Visible avec le message',
          '⬇️ Outro (0.5s) - L\'alerte disparaît'
        ]
      },
      {
        type: 'tip',
        title: 'Export WEBM dans After Effects',
        content: `File → Export → Add to Render Queue. Output Module : cherche des plugins comme "AfterCodecs" pour le WEBM avec alpha. Alternative : exporte en MOV avec ProRes 4444 puis convertis.`
      }
    ],
    keyTakeaways: [
      'Durée type : 4-6 secondes',
      'Easy ease rend les animations smooth',
      'WEBM = animation avec transparence pour OBS',
      'Intro + Corps + Outro'
    ],
    nextSteps: 'Alerte Follow animée ! Créons les autres.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 16,
    sections: [
      {
        type: 'intro',
        content: `Maintenant créons le pack complet : alertes Sub, Donation, et Raid. Chaque type mérite son animation unique tout en restant cohérent. 🎁`
      },
      {
        type: 'concept',
        title: 'Hiérarchie des alertes',
        content: `Les alertes n'ont pas toutes la même importance :`,
        items: [
          '🟢 Follow - Petit, discret (3-4 sec)',
          '🔵 Sub Tier 1 - Moyen, sympa (5 sec)',
          '💜 Sub Tier 2/3/Resub - Plus élaboré',
          '💎 Donation - Proportionnel au montant',
          '🔥 Raid - Gros impact, festif'
        ]
      },
      {
        type: 'steps',
        title: 'Variantes selon le type',
        content: 'Idées de différenciation :',
        items: [
          'Follow : Simple pop-up latéral',
          'Sub T1 : Animation centrale avec confettis',
          'Sub T3 : Animation élaborée avec particules',
          'Donation 5€ : Alerte normale',
          'Donation 50€+ : Version spéciale, longue',
          'Raid : Full screen takeover courte'
        ]
      },
      {
        type: 'tip',
        title: 'Cohérence visuelle',
        content: `Même si les alertes sont différentes, elles doivent partager : mêmes couleurs, même police, même style d'animation. C'est ce qui fait un pack professionnel.`
      }
    ],
    keyTakeaways: [
      'Hiérarchie : plus c\'est important, plus c\'est élaboré',
      'Cohérence dans le style malgré les variations',
      'Durées adaptées à l\'importance',
      'Teste le rendu dans OBS'
    ],
    nextSteps: 'Pack alertes créé ! Passons aux panneaux Twitch.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 17,
    sections: [
      {
        type: 'intro',
        content: `Les panneaux Twitch (Panels) sont les sections sous ton stream : About, Rules, Schedule... C'est ta page de présentation ! Rendons-la pro. 📋`
      },
      {
        type: 'concept',
        title: 'Les panneaux essentiels',
        content: `Panneaux à créer :`,
        items: [
          '👤 About Me - Qui tu es, ton contenu',
          '📏 Rules - Règles du chat',
          '📅 Schedule - Planning de stream',
          '🔗 Social - Tes réseaux',
          '💰 Donate (optionnel) - Lien donation',
          '💻 Setup (optionnel) - Ton matériel',
          '🎁 Sponsors (si applicable)'
        ]
      },
      {
        type: 'steps',
        title: 'Création des panneaux',
        content: 'Spécifications :',
        items: [
          '1. Dimensions : 320px de large (hauteur flexible)',
          '2. Conseil : 320x160 ou 320x200 pour des panneaux harmonieux',
          '3. Style cohérent entre tous les panneaux',
          '4. Texte lisible (16px minimum)',
          '5. Exporte chaque panneau séparément',
          '6. Upload sur Twitch → Dashboard → Extensions → Panels'
        ]
      },
      {
        type: 'tip',
        title: 'Panneau texte vs image',
        content: `Tu peux mettre juste du texte sous le panneau image. Donc ton panneau peut être juste un titre stylé "About Me" et le texte descriptif en dessous en texte Twitch normal.`
      }
    ],
    keyTakeaways: [
      'Largeur : 320px obligatoire',
      '5-7 panneaux suffisent',
      'Style cohérent = look pro',
      'Alterne image + texte pour la lisibilité'
    ],
    nextSteps: 'Panneaux créés ! Créons tes emotes.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 18,
    sections: [
      {
        type: 'intro',
        content: `Les emotes sont l'âme de ta communauté sur Twitch ! Ces petites images que tes viewers utilisent dans le chat. Créons des emotes uniques et expressives ! 😄`
      },
      {
        type: 'concept',
        title: 'Les tailles d\'emotes Twitch',
        content: `Twitch requiert 3 tailles :`,
        items: [
          '📏 112x112 pixels (grande)',
          '📐 56x56 pixels (moyenne)',
          '🔲 28x28 pixels (petite)',
          '⚠️ La petite doit rester lisible !'
        ]
      },
      {
        type: 'steps',
        title: 'Créer une emote',
        content: 'Process créatif :',
        items: [
          '1. Commence à 112x112 (travaille en grand)',
          '2. Lignes épaisses, couleurs contrastées',
          '3. Expressions exagérées (c\'est petit !)',
          '4. Teste en réduisant avant d\'exporter',
          '5. Exporte les 3 tailles',
          '6. Upload sur Twitch Affiliate/Partner'
        ]
      },
      {
        type: 'tip',
        title: 'Astuces pour la lisibilité',
        content: `À 28x28, tout est minuscule. Astuces :
- Contours épais (2-3px)
- Peu de détails
- Couleurs vives
- Expression claire
- Teste en zoom arrière pendant la création`
      },
      {
        type: 'example',
        title: 'Idées d\'emotes populaires',
        content: `Les classiques qui marchent :
- Ton avatar en différentes émotions
- Meme faces personalisées
- Inside jokes de ta communauté
- Réactions : PogChamp, sad, laugh, hype
- Ton logo stylisé`
      }
    ],
    keyTakeaways: [
      '3 tailles obligatoires : 28, 56, 112 px',
      'La plus petite doit rester lisible',
      'Lignes épaisses, couleurs vives',
      'Expressions exagérées'
    ],
    nextSteps: 'Emotes créées ! Finalisons avec bannière et avatar.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 19,
    sections: [
      {
        type: 'intro',
        content: `Ta bannière et ton avatar sont ta carte d'identité visuelle. C'est ce que les gens voient en premier sur ta page. Fais-les mémorables ! 🖼️`
      },
      {
        type: 'concept',
        title: 'Dimensions requises',
        content: `Spécifications Twitch :`,
        items: [
          '👤 Avatar/Photo de profil : 800x800 (carré)',
          '🖼️ Bannière : 1200x480 pixels',
          '📺 Vidéo Player Banner : 1920x1080 (optionnel)'
        ]
      },
      {
        type: 'steps',
        title: 'Création de la bannière',
        content: 'Guide de création :',
        items: [
          '1. Document Photoshop/Figma 1200x480',
          '2. Zone centrale : ton message principal',
          '3. Attention : le profil masque la partie gauche',
          '4. Évite le texte important à gauche',
          '5. Inclus : pseudo, schedule, ou ambiance visuelle',
          '6. Exporte en JPG haute qualité'
        ]
      },
      {
        type: 'tip',
        title: 'Avatar impactant',
        content: `Ton avatar doit être reconnaissable même en petit (coin d'un chat). Évite les détails trop fins. Un logo simple ou un visage cartoon expressif fonctionne mieux qu'une photo floue.`
      },
      {
        type: 'warning',
        title: 'Zone de safe area',
        content: `Sur la bannière, environ 200px à gauche sont masqués par ta photo de profil. Ne mets pas d'informations importantes dans cette zone !`
      }
    ],
    keyTakeaways: [
      'Bannière : 1200x480, texte à droite',
      'Avatar : 800x800, simple et reconnaissable',
      'Évite la zone gauche de la bannière',
      'Cohérent avec ta charte graphique'
    ],
    nextSteps: 'Identité visuelle complète ! Récapitulons.'
  },
  {
    courseSlug: 'overlays-design',
    lessonId: 20,
    sections: [
      {
        type: 'intro',
        content: `Félicitations, tu as terminé le cours Overlays & Design ! 🎉 Tu as maintenant toutes les compétences pour créer un branding professionnel pour ton stream.`
      },
      {
        type: 'steps',
        title: 'Ce que tu as appris',
        content: 'Récapitulatif complet :',
        items: [
          '✅ Principes du design streaming',
          '✅ Création de charte graphique',
          '✅ Photoshop et Figma',
          '✅ Overlays webcam, gaming, lower thirds',
          '✅ Écrans Starting, BRB, Ending',
          '✅ Animation dans After Effects',
          '✅ Alertes animées',
          '✅ Panneaux et emotes Twitch',
          '✅ Bannière et avatar'
        ]
      },
      {
        type: 'checklist',
        title: 'Ton pack visuel complet',
        content: 'Assure-toi d\'avoir créé :',
        items: [
          'Charte graphique définie',
          'Overlay webcam',
          'Overlay gaming complet',
          'Écrans Starting, BRB, Ending',
          'Pack alertes (Follow, Sub, Don, Raid)',
          'Pannaux Twitch (5-7 minimum)',
          'Emotes (si Affiliate/Partner)',
          'Bannière et avatar'
        ]
      },
      {
        type: 'tip',
        title: 'Ressources continues',
        content: `Continue d'apprendre :
- Dribbble/Behance pour l'inspiration
- @Nerd_Or_Die pour des templates
- Canva si tu veux du rapide
- Fiverr si tu veux commander`
      },
      {
        type: 'quote',
        content: `"Le design n'est pas juste ce à quoi ça ressemble. Le design, c'est comment ça fonctionne." - Steve Jobs. Applique ce principe : ton design doit servir ton stream, pas le surcharger.`
      },
      {
        type: 'quiz',
        title: 'Quiz Final Design',
        content: 'Valide tes connaissances design :',
        questions: [
          {
            question: 'Quelle est la résolution standard d\'un stream ?',
            options: ['1280x720', '1920x1080', '2560x1440', '3840x2160'],
            correctIndex: 1,
            explanation: '1920x1080 (Full HD) est le standard. Plus haut nécessite trop de bitrate pour Twitch.'
          },
          {
            question: 'Quel format de fichier utiliser pour un overlay avec transparence ?',
            options: ['JPG', 'PNG', 'GIF', 'BMP'],
            correctIndex: 1,
            explanation: 'PNG supporte la transparence alpha, essentielle pour les overlays. JPG ne supporte pas la transparence.'
          },
          {
            question: 'Quelle est la dimension recommandée pour les panneaux Twitch ?',
            options: ['100x50', '320xvariable', '1920x1080', '500x500'],
            correctIndex: 1,
            explanation: 'Les panneaux font 320px de large. La hauteur est flexible (160-300px recommandé).'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Tu as un pack visuel complet !',
      'La cohérence est ta force',
      'Continue à itérer et améliorer',
      'Passe au Module 04 : Alerts & Soundboard !'
    ],
    nextSteps: 'Tu as complété le Module 03 ! Continue avec le Module 04 : Alerts & Soundboard pour créer une expérience audio interactive.'
  },
  // ============================================
  // COURS 4: Alerts & Soundboard
  // ============================================
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 1,
    sections: [
      { type: 'intro', content: `Les alertes transforment chaque follow, sub et donation en moment de célébration ! Elles créent de l'engagement et motivent tes viewers à interagir. 🎉` },
      { type: 'concept', title: 'Pourquoi les alertes sont cruciales', content: `Les alertes servent à :`, items: ['🎊 Célébrer et remercier les supporters', '📢 Créer des moments mémorables', '💰 Encourager d\'autres à donner', '🎮 Rendre le stream plus dynamique'] },
      { type: 'tip', title: 'La règle d\'or', content: `Tes alertes doivent être visibles mais pas envahissantes. 3-5 secondes max pour les follows, 5-8 secondes pour les subs/dons.` }
    ],
    keyTakeaways: ['Les alertes créent de l\'engagement', 'Durée adaptée à l\'importance', 'Célèbre chaque supporter'],
    nextSteps: 'Voyons Streamlabs vs StreamElements !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 2,
    sections: [
      { type: 'intro', content: `Streamlabs et StreamElements sont les deux géants des alertes. Lequel choisir ? Comparons leurs forces et faiblesses. ⚔️` },
      { type: 'concept', title: 'Streamlabs', content: `Forces et faiblesses :`, items: ['✅ Interface intuitive', '✅ Intégration OBS native (SLOBS)', '✅ Marketplace d\'overlays', '❌ Version gratuite limitée', '❌ Plus lourd en ressources'] },
      { type: 'concept', title: 'StreamElements', content: `Forces et faiblesses :`, items: ['✅ 100% gratuit', '✅ Overlay Editor puissant', '✅ Bot intégré', '✅ Loyalty système', '❌ Courbe d\'apprentissage'] },
      { type: 'tip', title: 'Ma recommandation', content: `StreamElements pour les débutants (gratuit et complet). Streamlabs si tu veux du plug-and-play avec leur OBS.` }
    ],
    keyTakeaways: ['StreamElements = gratuit et complet', 'Streamlabs = plus simple mais freemium', 'Les deux font le job'],
    nextSteps: 'Configurons Streamlabs !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 3,
    sections: [
      { type: 'intro', content: `Configuration complète de Streamlabs, de la connexion à l'intégration OBS. Suis le guide ! 🔧` },
      { type: 'steps', title: 'Setup Streamlabs', content: 'Étapes :', items: ['1. Va sur streamlabs.com et connecte ton Twitch/YouTube', '2. Dashboard → Alert Box → Personnalise', '3. Copie le Widget URL', '4. Dans OBS : Source → Browser → Colle l\'URL', '5. Dimensions : 800x600 recommandé'] },
      { type: 'warning', title: 'Erreur courante', content: `N'oublie pas de cliquer "Save" après chaque modification ! Les changements ne s'appliquent pas automatiquement.` }
    ],
    keyTakeaways: ['Connecte ton compte streaming', 'Copie l\'URL Widget dans OBS', 'N\'oublie pas de sauvegarder'],
    nextSteps: 'Configurons StreamElements !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 4,
    sections: [
      { type: 'intro', content: `StreamElements offre plus de personnalisation gratuitement. Voyons comment le configurer ! 🎨` },
      { type: 'steps', title: 'Setup StreamElements', content: 'Étapes :', items: ['1. streamelements.com → Connecte ton compte', '2. My Overlays → Create Blank Overlay', '3. Add Widget → Alert Box', '4. Personnalise chaque type d\'alerte', '5. Copie l\'Overlay URL dans OBS Browser Source'] },
      { type: 'tip', title: 'L\'Overlay Editor', content: `StreamElements a un éditeur visuel puissant. Tu peux tout positionner en drag-and-drop et voir le résultat en temps réel.` }
    ],
    keyTakeaways: ['StreamElements = plus de contrôle', 'Overlay Editor très puissant', 'Tout est gratuit'],
    nextSteps: 'Personnalisons les alertes !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 5,
    sections: [
      { type: 'intro', content: `Sans coder, tu peux déjà créer des alertes uniques avec les options natives. Images, sons, animations... 🎬` },
      { type: 'steps', title: 'Personnalisation basique', content: 'Ce que tu peux modifier :', items: ['🖼️ Image/GIF de l\'alerte', '🔊 Son de notification', '⏱️ Durée d\'affichage', '✨ Animation d\'entrée/sortie', '🎨 Couleurs et police du texte', '📝 Message template'] },
      { type: 'example', title: 'Template personnalisé', content: `Exemple de message : "{name} vient de follow ! Bienvenue dans la commu ! 🎉" Les variables comme {name}, {amount} sont remplacées automatiquement.` }
    ],
    keyTakeaways: ['Images/GIFs/Sons personnalisables', 'Templates avec variables', 'Animations prédéfinies'],
    nextSteps: 'Passons au CSS custom !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 6,
    sections: [
      { type: 'intro', content: `Le CSS te permet de modifier l'apparence de tes alertes au pixel près. Même sans être développeur, les bases sont simples ! 💻` },
      { type: 'concept', title: 'CSS : les bases', content: `Le CSS modifie le style :`, items: ['color: #FF0000; → Couleur du texte', 'font-size: 24px; → Taille police', 'background: rgba(0,0,0,0.5); → Fond semi-transparent', 'border-radius: 10px; → Coins arrondis', 'text-shadow: 2px 2px #000; → Ombre texte'] },
      { type: 'example', title: 'CSS exemple', content: `.alert-message { color: #00FF00; font-size: 28px; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 10px #00FF00; }` }
    ],
    keyTakeaways: ['CSS = personnalisation avancée', 'Copie-colle des exemples pour commencer', 'Teste en preview'],
    nextSteps: 'Créons une alerte from scratch !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 7,
    sections: [
      { type: 'intro', content: `Créons une alerte 100% personnalisée en CSS. Tu vas voir, c'est satisfaisant ! ✨` },
      { type: 'steps', title: 'Alerte custom complète', content: 'Process :', items: ['1. Crée ton design en Photoshop/Figma', '2. Exporte en PNG transparent', '3. Upload comme image d\'alerte', '4. Ajoute du CSS pour le texte animé', '5. Choisis un son qui matche ton style', '6. Teste avec l\'outil de preview'] },
      { type: 'tip', title: 'Ressources CSS', content: `Codepen.io a des tonnes d'animations CSS prêtes à l'emploi. Cherche "alert animation CSS" et adapte le code.` }
    ],
    keyTakeaways: ['Design + CSS = alerte unique', 'Codepen pour l\'inspiration', 'Toujours tester avant le live'],
    nextSteps: 'Configurons les variations !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 8,
    sections: [
      { type: 'intro', content: `Les variations te permettent d'afficher des alertes différentes selon le montant du don ou le tier du sub. Plus impactant ! 💎` },
      { type: 'concept', title: 'Variations par montant', content: `Exemples de setup :`, items: ['1-4€ : Alerte standard', '5-19€ : Alerte améliorée + son spécial', '20-49€ : Animation élaborée + TTS', '50€+ : Full screen takeover !'] },
      { type: 'tip', title: 'Dans Streamlabs/SE', content: `Cherche "Variations" ou "Alert Variations" dans les paramètres. Tu définis des conditions (amount > 20) et l'alerte associée.` }
    ],
    keyTakeaways: ['Plus le montant est élevé, plus l\'alerte est spectaculaire', 'Motive les gros dons', 'Variations par tier de sub aussi'],
    nextSteps: 'Alertes vidéo WEBM !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 9,
    sections: [
      { type: 'intro', content: `Les alertes vidéo WEBM sont le niveau supérieur : animations fluides avec transparence. Très pro ! 🎬` },
      { type: 'concept', title: 'Pourquoi WEBM', content: `Avantages du format :`, items: ['✅ Transparence (comme PNG mais animé)', '✅ Taille de fichier réduite', '✅ Qualité excellente', '✅ Supporté par les navigateurs/OBS'] },
      { type: 'tip', title: 'Où trouver des WEBM', content: `Nerd Or Die, Own3d.tv, Fiverr proposent des packs. Tu peux aussi convertir tes After Effects en WEBM avec des plugins.` }
    ],
    keyTakeaways: ['WEBM = vidéo avec transparence', 'Plus pro que les GIFs', 'Packs disponibles en ligne'],
    nextSteps: 'Passons au Soundboard !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 10,
    sections: [
      { type: 'intro', content: `Un soundboard te permet de jouer des sons à la demande pendant ton stream. Réactions, memes, ambiance... Indispensable ! 🔊` },
      { type: 'concept', title: 'Qu\'est-ce qu\'un soundboard', content: `Un soundboard c'est :`, items: ['🎹 Des raccourcis pour jouer des sons', '😂 Réactions rapides (rire, sad, hype)', '🎵 Jingles et transitions', '🎮 Sons de jeu iconiques'] },
      { type: 'steps', title: 'Setup simple avec VoiceMeeter', content: 'Configuration :', items: ['1. Installe VoiceMeeter Banana (gratuit)', '2. Route ton micro + sons vers le même output', '3. Utilise un lecteur audio avec hotkeys', '4. OBS capture le mix final'] }
    ],
    keyTakeaways: ['Soundboard = sons à la demande', 'VoiceMeeter pour le routing', 'Hotkeys pour déclencher'],
    nextSteps: 'Soundpad le logiciel pro !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 11,
    sections: [
      { type: 'intro', content: `Soundpad est LE logiciel de soundboard utilisé par les pros. Interface simple, hotkeys puissantes, intégration parfaite. 🎛️` },
      { type: 'steps', title: 'Configuration Soundpad', content: 'Setup :', items: ['1. Achète Soundpad sur Steam (~5€)', '2. Configure le périphérique de sortie vers VoiceMeeter', '3. Importe tes sons (glisser-déposer)', '4. Assigne des hotkeys à chaque son', '5. Teste le volume pour qu\'il soit équilibré'] },
      { type: 'tip', title: 'Organisation', content: `Classe tes sons par catégorie : Réactions, Memes, Musique, Transitions. Tu les retrouveras plus vite en live.` }
    ],
    keyTakeaways: ['Soundpad sur Steam ~5€', 'Hotkeys = déclenchement instantané', 'Organise par catégories'],
    nextSteps: 'Channel Points rewards !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 12,
    sections: [
      { type: 'intro', content: `Les Channel Points de Twitch permettent à ton chat de déclencher des sons ! Interactivité maximale. 🎯` },
      { type: 'steps', title: 'Setup Channel Points Sounds', content: 'Configuration :', items: ['1. Twitch Dashboard → Channel Points → Rewards', '2. Crée une récompense "Jouer un son"', '3. Utilise StreamElements/Streamlabs pour lier le son', '4. Configure le coût en points', '5. Active la modération si besoin'] },
      { type: 'warning', title: 'Attention aux abus', content: `Mets un cooldown (temps entre 2 utilisations) pour éviter le spam. 60-120 secondes est raisonnable.` }
    ],
    keyTakeaways: ['Channel Points = sons déclenchés par le chat', 'Configure un cooldown', 'Modère si nécessaire'],
    nextSteps: 'Text-to-Speech !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 13,
    sections: [
      { type: 'intro', content: `Le TTS (Text-to-Speech) lit les messages de donation à voix haute. Hilarant et engageant ! 🗣️` },
      { type: 'steps', title: 'Activer le TTS', content: 'Configuration :', items: ['1. Streamlabs/StreamElements → Alert Box → Donations', '2. Active "Text to Speech"', '3. Choisis la voix (plusieurs disponibles)', '4. Définis le montant minimum pour TTS', '5. Configure les filtres de mots interdits !'] },
      { type: 'warning', title: 'Modération cruciale', content: `Les trolls VONT essayer de faire dire des choses inappropriées. Blackliste des mots, active le filtre, et garde un doigt sur le mute.` }
    ],
    keyTakeaways: ['TTS lit les donations à voix haute', 'Montant minimum recommandé', 'Modération obligatoire'],
    nextSteps: 'Intégration OBS finale !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 14,
    sections: [
      { type: 'intro', content: `Finalisons l'intégration dans OBS pour que tout fonctionne parfaitement ensemble. 🔧` },
      { type: 'steps', title: 'Checklist intégration OBS', content: 'Vérifie :', items: ['✅ Browser Source avec URL d\'alertes', '✅ Dimensions correctes (800x600 min)', '✅ Source au-dessus des autres calques', '✅ Audio routé correctement', '✅ Test de chaque type d\'alerte'] },
      { type: 'tip', title: 'Rafraîchir le cache', content: `Si une alerte ne s'affiche pas, clic droit sur la Browser Source → "Rafraîchir le cache". Ça résout 90% des problèmes.` }
    ],
    keyTakeaways: ['Browser Source pour les alertes', 'Teste TOUT avant le live', 'Rafraîchir cache si problème'],
    nextSteps: 'Dépannage des alertes !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 15,
    sections: [
      { type: 'intro', content: `Les alertes ne marchent pas ? Voici les solutions aux problèmes les plus courants. 🔧` },
      { type: 'steps', title: 'Problèmes fréquents', content: 'Solutions :', items: ['❌ Alerte n\'apparaît pas → Rafraîchis le cache', '❌ Pas de son → Vérifie que "Control audio via OBS" n\'est pas coché', '❌ Délai trop long → Vérifie ta connexion, réduis la qualité', '❌ Alerte coupée → Augmente les dimensions de la source', '❌ Test ne marche pas → Vérifie l\'URL, reconnecte le compte'] },
      { type: 'tip', title: 'Tester hors stream', content: `Utilise le bouton "Test" dans Streamlabs/SE avant de streamer. Tu verras si tout fonctionne sans avoir besoin de vrais follows/dons.` }
    ],
    keyTakeaways: ['Rafraîchir cache = solution magique', 'Teste avant chaque stream', 'Vérifie les dimensions et l\'audio'],
    nextSteps: 'Dernière leçon : les bots !'
  },
  {
    courseSlug: 'alerts-soundboard',
    lessonId: 16,
    sections: [
      { type: 'intro', content: `Les bots comme Fossabot ou StreamElements Bot peuvent déclencher des alertes custom via commandes chat. Bonus puissant ! 🤖` },
      { type: 'concept', title: 'Bots pour alertes custom', content: `Ce que les bots peuvent faire :`, items: ['!hype → Déclenche une animation hype', '!raid → Prépare un overlay de raid', '!sound nom → Joue un son du soundboard', '!sfx → Effets visuels custom'] },
      { type: 'tip', title: 'StreamElements Bot', content: `StreamElements a un bot intégré avec des commandes personnalisables. Tu peux même déclencher des overlays spécifiques via commandes mod.` },
      { type: 'quote', content: `"Tu as maintenant tout pour créer une expérience audio-visuelle immersive ! Tes viewers vont adorer interagir avec ton stream." - L'équipe Stream Forge` },
      { type: 'quiz', title: 'Quiz Final Alerts & Soundboard', content: 'Valide tes connaissances :', questions: [
        { question: 'Quelle est la différence principale entre Streamlabs et StreamElements ?', options: ['Streamlabs est gratuit', 'StreamElements offre plus de contrôle et est gratuit', 'Ils sont identiques', 'Streamlabs n\'a pas d\'alertes'], correctIndex: 1, explanation: 'StreamElements est 100% gratuit avec un éditeur overlay puissant. Streamlabs a des fonctionnalités premium payantes.' },
        { question: 'Pourquoi mettre un cooldown sur les Channel Points sons ?', options: ['Pour économiser les points', 'Pour éviter le spam', 'Pour améliorer la qualité audio', 'C\'est obligatoire par Twitch'], correctIndex: 1, explanation: 'Un cooldown de 60-120 secondes empêche les viewers de spammer le même son en boucle.' },
        { question: 'Que faire si une alerte ne s\'affiche pas dans OBS ?', options: ['Réinstaller OBS', 'Rafraîchir le cache de la Browser Source', 'Changer de compte Twitch', 'Attendre 24h'], correctIndex: 1, explanation: 'Clic droit sur Browser Source → Rafraîchir le cache résout 90% des problèmes d\'alertes.' }
      ]}
    ],
    keyTakeaways: ['Bots = automatisation puissante', 'Commandes custom pour les mods', 'Module 04 terminé !'],
    nextSteps: 'Tu as complété le Module 04 ! Continue avec le Module 05 : Multistream & Régie.'
  },
  // ============================================
  // COURS 5: Multistream & Régie
  // ============================================
  {
    courseSlug: 'multistream-regie',
    lessonId: 1,
    sections: [
      { type: 'intro', content: `Pourquoi te limiter à une seule plateforme ? Le multistream te permet de diffuser sur Twitch, YouTube, TikTok et plus simultanément ! 🌐` },
      { type: 'concept', title: 'Avantages du multistream', content: `Pourquoi multistreamer :`, items: ['📈 Toucher plus d\'audience', '🔄 Diversifier tes sources de revenus', '🛡️ Ne pas dépendre d\'une seule plateforme', '🎯 Tester quelle plateforme te convient'] },
      { type: 'warning', title: 'Le piège Twitch', content: `Les Affiliates Twitch ont une clause d'exclusivité de 24h. Tu ne peux pas multistream le MÊME contenu pendant le live. Mais tu peux streamer sur YouTube du contenu différent, ou attendre 24h.` }
    ],
    keyTakeaways: ['Multistream = plus de visibilité', 'Attention à l\'exclusivité Twitch Affiliate', 'Diversification importante'],
    nextSteps: 'Voyons les règles Twitch en détail !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 2,
    sections: [
      { type: 'intro', content: `Twitch a des règles spécifiques sur le simulcast. Voici ce qui est autorisé et ce qui ne l'est pas. ⚖️` },
      { type: 'concept', title: 'Règles pour Affiliates', content: `Ce que dit le contrat :`, items: ['❌ Pas de simulcast du même contenu live', '✅ Tu peux VOD sur YouTube après 24h', '✅ Tu peux faire du contenu différent ailleurs', '✅ TikTok Live d\'un autre appareil = OK'] },
      { type: 'concept', title: 'Règles pour Partners', content: `Plus strict :`, items: ['❌ Exclusivité totale pendant le live + 24h', '✅ Négociable selon ton contrat', '✅ Certains partners ont des exemptions'] },
      { type: 'tip', title: 'Astuce légale', content: `Tu peux faire un "Watch Party" YouTube Live qui regarde ton Twitch. Ce n'est pas du simulcast car c'est du contenu différent techniquement.` }
    ],
    keyTakeaways: ['Affiliates : 24h d\'exclusivité', 'Partners : contrat individuel', 'Le contenu différent est OK'],
    nextSteps: 'Configurons Restream.io !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 3,
    sections: [
      { type: 'intro', content: `Restream.io est LA solution de multistream la plus populaire. Un stream, plusieurs destinations. Simple et efficace ! 🔄` },
      { type: 'steps', title: 'Configuration Restream', content: 'Setup :', items: ['1. Crée un compte sur restream.io', '2. Connecte tes comptes (YouTube, Twitch, Facebook...)', '3. Récupère ta Stream Key Restream', '4. Dans OBS → Paramètres → Stream → Custom', '5. Colle le serveur et la clé Restream', '6. Stream ! Restream redistribue partout'] },
      { type: 'tip', title: 'Version gratuite', content: `Restream gratuit permet 2 destinations + watermark. La version payante (~16$/mois) enlève le watermark et ajoute des destinations.` }
    ],
    keyTakeaways: ['Restream redistribue ton stream', 'Gratuit avec limitations', 'Configuration simple'],
    nextSteps: 'Gérons le chat unifié !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 4,
    sections: [
      { type: 'intro', content: `Quand tu multistream, tu as plusieurs chats ! Restream Chat les unifie en un seul endroit. Plus besoin de jongler. 💬` },
      { type: 'steps', title: 'Chat unifié Restream', content: 'Configuration :', items: ['1. Restream Dashboard → Chat', '2. Ouvre le Restream Chat (app ou web)', '3. Tous les messages de toutes les plateformes arrivent ici', '4. Tu peux répondre et ça part vers la bonne plateforme', '5. Bonus : intégration OBS avec Browser Source'] },
      { type: 'tip', title: 'Afficher la source dans le chat', content: `Active l'icône de plateforme à côté des messages. Tes viewers verront d'où viennent les messages, ce qui encourage l'interaction cross-platform.` }
    ],
    keyTakeaways: ['Un chat pour toutes les plateformes', 'Réponses automatiquement routées', 'Affiche les icônes de plateforme'],
    nextSteps: 'Alternative : Owncast !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 5,
    sections: [
      { type: 'intro', content: `Owncast est une alternative open-source et self-hosted. Tu contrôles TOUT, sans dépendre d'un service tiers. 🔓` },
      { type: 'concept', title: 'Pourquoi Owncast', content: `Avantages :`, items: ['✅ 100% gratuit et open-source', '✅ Pas de watermark ni limitations', '✅ Ton propre serveur, tes règles', '✅ Pas de TOS restrictifs', '❌ Nécessite un serveur (VPS ~5$/mois)'] },
      { type: 'tip', title: 'Pour les tech-savvy', content: `Owncast nécessite des compétences techniques (Docker, serveur Linux). Si tu es à l'aise avec ça, c'est une solution puissante et libre.` }
    ],
    keyTakeaways: ['Open-source et gratuit', 'Nécessite un serveur', 'Pour les utilisateurs techniques'],
    nextSteps: 'Setup RTMP custom !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 6,
    sections: [
      { type: 'intro', content: `Pour les configs avancées, tu peux envoyer ton flux RTMP vers plusieurs destinations manuellement. Plus de contrôle ! ⚙️` },
      { type: 'concept', title: 'RTMP expliqué', content: `Le protocole RTMP :`, items: ['📡 C\'est le format de transmission live', '🔑 Chaque plateforme a son URL + clé', '🔄 Tu peux rediriger vers plusieurs URL', '⚙️ Tools : nginx-rtmp, OBS Multiple RTMP'] },
      { type: 'steps', title: 'OBS Multiple Output Plugin', content: 'Alternative simple :', items: ['1. Télécharge "obs-multi-rtmp" plugin', '2. Installe-le dans OBS', '3. Vue → Docks → Multiple RTMP', '4. Ajoute chaque destination avec son URL/Key', '5. Lance ton stream principal + les outputs RTMP'] }
    ],
    keyTakeaways: ['RTMP = protocole de streaming', 'Plugins OBS pour multi-output', 'Plus de contrôle manuel'],
    nextSteps: 'Multistream depuis OBS directement !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 7,
    sections: [
      { type: 'intro', content: `Avec le plugin OBS Multi-RTMP, tu peux multistreamer sans service externe. Tout reste sur ta machine ! 💻` },
      { type: 'steps', title: 'Configuration multi-RTMP', content: 'Setup :', items: ['1. Installe obs-multi-rtmp depuis GitHub', '2. Restart OBS', '3. Vue → Docks → Multi-output', '4. Clique "Add new target"', '5. Entre le RTMP URL et Stream Key de chaque plateforme', '6. Coche "Start when streaming" si souhaité'] },
      { type: 'warning', title: 'Attention ressources', content: `Chaque output encode séparément ! Si tu envoies vers 3 plateformes, tu utilises 3x les ressources. Vérifie que ton PC suit.` }
    ],
    keyTakeaways: ['Plugin gratuit et local', 'Pas de service tiers', 'Attention aux ressources PC'],
    nextSteps: 'Gestion des chats multi-plateformes !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 8,
    sections: [
      { type: 'intro', content: `Sans Restream Chat, comment gérer plusieurs chats ? Voici les solutions avec des bots et outils. 🤖` },
      { type: 'concept', title: 'Solutions chat multi-plateforme', content: `Options :`, items: ['💬 Restream Chat (déjà vu)', '🤖 Streamcord - Discord → Twitch', '🔄 Chatty - Client Twitch multicompte', '📱 Tablette/téléphone avec chaque chat ouvert'] },
      { type: 'tip', title: 'La solution simple', content: `Ouvre chaque chat dans un navigateur différent ou en onglets. Utilise un second écran dédié aux chats. C'est basique mais ça marche !` }
    ],
    keyTakeaways: ['Plusieurs solutions existent', 'Second écran recommandé', 'Restream Chat le plus simple'],
    nextSteps: 'Introduction à la régie broadcast !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 9,
    sections: [
      { type: 'intro', content: `La régie broadcast, c'est passer au niveau supérieur : plusieurs caméras, replays, transitions pro... Comme à la TV ! 📺` },
      { type: 'concept', title: 'Vocabulaire régie', content: `Termes à connaître :`, items: ['🎬 Preview - Ce que tu prépares', '📺 Program - Ce qui est live', '🔀 Cut - Changement instantané', '🌊 Fade - Transition en fondu', '🔄 Stinger - Transition animée', '📹 Iso - Flux d\'une caméra seule'] },
      { type: 'tip', title: 'Pourquoi c\'est cool', content: `Avec une vraie régie, tu peux faire des streams dignes de productions TV : interviews multi-caméras, tournois avec commentateurs, événements live...` }
    ],
    keyTakeaways: ['Vocabulaire pro : Preview/Program', 'Transitions variées', 'Productions TV-like possibles'],
    nextSteps: 'Setup multi-caméras !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 10,
    sections: [
      { type: 'intro', content: `Plusieurs angles de vue rendent ton stream plus dynamique. Voici comment configurer un setup multi-caméras. 📷📷` },
      { type: 'steps', title: 'Configuration multi-cam', content: 'Setup dans OBS :', items: ['1. Connecte toutes tes caméras (USB, capture card...)', '2. Crée une scène par angle', '3. Utilise le Studio Mode pour preview', '4. Hotkeys pour switch rapide entre scènes', '5. Ou : superpose les caméras dans une seule scène'] },
      { type: 'tip', title: 'NDI pour caméras réseau', content: `Avec NDI, tu peux utiliser des téléphones comme caméras supplémentaires via le réseau local. Apps : NDI Camera (iOS/Android).` }
    ],
    keyTakeaways: ['Une scène par angle', 'Studio Mode pour prévisualiser', 'NDI pour caméras sans fil'],
    nextSteps: 'Stream Deck comme régie !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 11,
    sections: [
      { type: 'intro', content: `Le Stream Deck est le périphérique ultime pour gérer une régie. Des boutons physiques pour tout contrôler ! 🎛️` },
      { type: 'concept', title: 'Stream Deck features', content: `Ce que tu peux faire :`, items: ['🎬 Changer de scène', '🔇 Mute/unmute sources', '🎵 Jouer des sons', '💡 Contrôler lumières Hue', '🐦 Poster sur Twitter', '📱 Lancer des apps'] },
      { type: 'tip', title: 'Stream Deck Mobile', content: `Pas de budget pour un Stream Deck ? L'app mobile fait pareil pour ~3€/mois ou 25€ à vie. Moins satisfaisant mais fonctionnel.` }
    ],
    keyTakeaways: ['Boutons physiques = réactivité', 'Intégration OBS native', 'Alternative mobile dispo'],
    nextSteps: 'Transitions et replays !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 12,
    sections: [
      { type: 'intro', content: `Les replays instantanés et transitions pro donnent un effet "production TV" à ton stream. Impressionnant ! 🎬` },
      { type: 'concept', title: 'Instant Replay dans OBS', content: `Comment ça marche :`, items: ['📼 OBS enregistre en buffer les X dernières secondes', '⏪ Tu déclenches le replay via hotkey', '🎬 Le clip joue automatiquement', '⚙️ Paramètres → Output → Replay Buffer'] },
      { type: 'steps', title: 'Activer le Replay Buffer', content: 'Config :', items: ['1. Paramètres → Output → Replay Buffer', '2. Active-le avec une durée (30-60 sec)', '3. Définis une hotkey pour "Save Replay"', '4. Crée une source VLC ou Media pour jouer le fichier', '5. Automatise avec des scripts si besoin'] }
    ],
    keyTakeaways: ['Replay Buffer intégré à OBS', 'Hotkey pour sauvegarder', 'Effet pro garanti'],
    nextSteps: 'Organiser un événement live !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 13,
    sections: [
      { type: 'intro', content: `Tournois, marathons caritatifs, événements communautaires... Voici comment organiser un stream événement comme un pro ! 🏆` },
      { type: 'steps', title: 'Checklist événement', content: 'Préparation :', items: ['📋 Définis le déroulé (rundown)', '👥 Coordonne avec les participants', '🎨 Prépare les overlays spéciaux', '🔧 Teste TOUT la veille', '📢 Communique le programme à l\'avance', '⏰ Prévois du buffer entre les segments'] },
      { type: 'tip', title: 'Le rundown', content: `Un rundown c'est le timing détaillé de l'événement : 14h00-14h15 Intro, 14h15-15h00 Match 1, etc. Partage-le avec toute l'équipe.` }
    ],
    keyTakeaways: ['Rundown = timing détaillé', 'Teste la veille', 'Buffer entre segments'],
    nextSteps: 'Gérer une équipe de régie !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 14,
    sections: [
      { type: 'intro', content: `Pour les gros événements, tu auras besoin d'une équipe. Régisseur, technicien, modérateur... Qui fait quoi ? 👥` },
      { type: 'concept', title: 'Rôles en régie', content: `L'équipe type :`, items: ['🎬 Régisseur - Décide quand switcher', '⚙️ Technicien OBS - Exécute les switches', '💬 Modérateur chat - Gère la communauté', '🎤 Co-host - Anime avec toi', '📊 Producteur - Vue d\'ensemble, timing'] },
      { type: 'tip', title: 'Communication', content: `Utilisez Discord en vocal privé pour vous coordonner. Le producteur annonce "Switch cam 2 dans 5...4...3...2...1...Go".` }
    ],
    keyTakeaways: ['Chaque rôle a sa fonction', 'Communication vocale essentielle', 'Le producteur coordonne'],
    nextSteps: 'Optimiser le débit !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 15,
    sections: [
      { type: 'intro', content: `Multistreamer consomme plus de bande passante. Voici comment optimiser pour ne pas saturer ta connexion. 📡` },
      { type: 'concept', title: 'Calcul de débit', content: `La règle :`, items: ['📊 Un stream 1080p60 = ~6-8 Mbps', '🔄 Multistream x3 = ~18-24 Mbps upload', '🛡️ Garde 20% de marge', '📈 Ton upload doit être STABLE'] },
      { type: 'tip', title: 'Réduire le bitrate', content: `Pour multistream, 4500-5000 kbps en 720p60 est souvent suffisant. Mieux vaut un stream stable qui moins beau qu'un stream 1080p qui lag.` }
    ],
    keyTakeaways: ['Calcule ton besoin total en upload', 'Garde une marge de 20%', '720p souvent suffisant en multistream'],
    nextSteps: 'Conclusion du module !'
  },
  {
    courseSlug: 'multistream-regie',
    lessonId: 16,
    sections: [
      { type: 'intro', content: `Tu as maintenant les compétences pour multistreamer et gérer une régie professionnelle ! Récapitulons. 🎉` },
      { type: 'steps', title: 'Ce que tu as appris', content: 'Résumé :', items: ['✅ Les règles de multistream par plateforme', '✅ Restream.io et alternatives', '✅ Gestion du chat multi-plateforme', '✅ Setup RTMP avancé', '✅ Vocabulaire et techniques de régie', '✅ Multi-caméras et replays', '✅ Organisation d\'événements'] },
      { type: 'quote', content: `"Tu es maintenant équipé pour des productions broadcast de qualité pro. Que ce soit pour toucher plus de monde ou organiser des événements, tu as les outils !" - L'équipe Stream Forge` },
      { type: 'quiz', title: 'Quiz Final Multistream & Régie', content: 'Teste tes connaissances :', questions: [
        { question: 'Combien de temps d\'exclusivité les Twitch Affiliates ont-ils ?', options: ['12h', '24h', '48h', 'Aucune'], correctIndex: 1, explanation: 'Les Affiliates ne peuvent pas simulcast le même contenu. Ils doivent attendre 24h avant de le publier ailleurs.' },
        { question: 'Quel service permet de multistreamer gratuitement vers 2 plateformes ?', options: ['OBS directement', 'Restream.io (gratuit avec watermark)', 'Twitch seulement', 'YouTube Studio'], correctIndex: 1, explanation: 'Restream.io gratuit permet 2 destinations avec un watermark. La version payante enlève le watermark.' },
        { question: 'Comment appelle-t-on la vue de ce qui est actuellement diffusé en régie ?', options: ['Preview', 'Program', 'Draft', 'Buffer'], correctIndex: 1, explanation: 'Program = ce qui est live. Preview = ce que tu prépares avant de switcher.' },
        { question: 'Quel est le bitrate recommandé pour un multistream stable ?', options: ['8000 kbps', '10000 kbps', '4500-5000 kbps en 720p', '2000 kbps'], correctIndex: 2, explanation: 'En multistream, 4500-5000 kbps en 720p60 offre un bon équilibre qualité/stabilité.' }
      ]}
    ],
    keyTakeaways: ['Multistream pour maximiser ta portée', 'Régie pour des productions pro', 'Module 05 terminé !'],
    nextSteps: 'Tu as complété le Module 05 ! Continue avec le Module 06 : Monétisation 360°.'
  },
  // ============================================
  // COURS 6: Monétisation 360°
  // ============================================
  {
    courseSlug: 'monetisation',
    lessonId: 1,
    sections: [
      { type: 'intro', content: `Le streaming peut devenir un vrai métier. Subs, bits, dons, sponsors, merch... Découvre TOUTES les sources de revenus possibles ! 💰` },
      { type: 'concept', title: 'Les sources de revenus', content: `Vue d'ensemble :`, items: ['💜 Subs Twitch / Membres YouTube', '💎 Bits / Super Chat', '💸 Donations directes', '🤝 Sponsors et marques', '🔗 Affiliation (Amazon, etc.)', '👕 Merchandising', '📺 YouTube AdSense', '☕ Patreon / Ko-fi'] },
      { type: 'tip', title: 'Diversifie !', content: `Ne dépends jamais d'une seule source. Les partenariats peuvent s'arrêter, les plateformes peuvent changer leurs règles. Diversifie tes revenus.` }
    ],
    keyTakeaways: ['Multiples sources possibles', 'Diversification essentielle', 'Traite-le comme un business'],
    nextSteps: 'Mindset business !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 2,
    sections: [
      { type: 'intro', content: `Le streaming comme hobby et le streaming comme business, ce n'est pas la même chose. Adopte le bon état d'esprit. 🧠` },
      { type: 'concept', title: 'Mindset professionnel', content: `Ce qui change :`, items: ['📊 Tracker ses revenus et dépenses', '📅 Régularité et planning', '🎯 Objectifs chiffrés', '📈 Analyse et amélioration continue', '🤝 Réseautage stratégique'] },
      { type: 'warning', title: 'Attention au burnout', content: `Traiter le streaming comme un business ne veut pas dire travailler 24/7. Équilibre vie pro/perso, prends des pauses, délègue si possible.` }
    ],
    keyTakeaways: ['Définis des objectifs chiffrés', 'Suis tes finances', 'Balance travail/vie'],
    nextSteps: 'Devenir Affiliate Twitch !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 3,
    sections: [
      { type: 'intro', content: `Le statut Affiliate est ta première étape vers la monétisation sur Twitch. Voici les conditions et comment les atteindre. 🎯` },
      { type: 'concept', title: 'Conditions Affiliate', content: `Tu dois avoir :`, items: ['📅 50 followers minimum', '⏱️ 500 minutes de stream (sur 30 jours)', '📺 7 jours uniques de diffusion', '👥 3 viewers moyens ou plus'] },
      { type: 'steps', title: 'Stratégie pour y arriver', content: 'Tips :', items: ['Streame régulièrement (même 2h/jour)', 'Partage sur tes réseaux sociaux', 'Networke avec d\'autres streamers', 'Sois dans des catégories de taille moyenne', 'Patience : c\'est un marathon !'] }
    ],
    keyTakeaways: ['50 followers + 500 min + 7 jours + 3 avg', 'La régularité est clé', 'Quelques semaines à quelques mois'],
    nextSteps: 'De Affiliate à Partner !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 4,
    sections: [
      { type: 'intro', content: `Le statut Partner débloque plus de revenus : plus d'emotes, meilleure part des subs, et le badge vérifié. La route est longue mais possible ! ⭐` },
      { type: 'concept', title: 'Conditions Partner', content: `Les critères officiels :`, items: ['📅 25 heures de stream sur 30 jours', '📺 12 jours de stream sur 30 jours', '👥 75 viewers moyens', '+ Évaluation qualitative par Twitch'] },
      { type: 'tip', title: 'Au-delà des chiffres', content: `Twitch regarde aussi ton engagement, ta communauté, ta régularité globale. Certains sont acceptés sous les critères, d'autres refusés au-dessus. La qualité compte.` }
    ],
    keyTakeaways: ['75 avg viewers = objectif principal', 'Qualité de la communauté compte', 'Peut prendre 1-3 ans'],
    nextSteps: 'Optimiser les subscriptions !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 5,
    sections: [
      { type: 'intro', content: `Les subs sont souvent ta première source de revenus. Voici comment maximiser les sub et la rétention. 💜` },
      { type: 'concept', title: 'Les tiers de sub', content: `3 niveaux sur Twitch :`, items: ['Tier 1 : 4.99€ → ~2.50€ pour toi (Affiliate)', 'Tier 2 : 9.99€ → ~5€ pour toi', 'Tier 3 : 24.99€ → ~12.50€ pour toi', 'Partners : peuvent négocier 70%'] },
      { type: 'steps', title: 'Maximiser les subs', content: 'Stratégies :', items: ['Remercie CHAQUE sub personnellement', 'Offre des emotes attractives par tier', 'Crée du contenu réservé aux subs', 'Rappelle les avantages régulièrement', 'Sub goal avec récompense collective'] },
      { type: 'quiz', title: 'Quiz Monétisation', content: 'Teste tes connaissances sur les subs :', questions: [
        { question: 'Quel pourcentage d\'un sub Tier 1 garde un Affiliate ?', options: ['30%', '50%', '70%', '90%'], correctIndex: 1, explanation: 'Les Affiliates gardent 50% (soit ~2.50€ sur 4.99€). Les Partners peuvent négocier jusqu\'à 70%.' },
        { question: 'Combien de viewers moyens faut-il pour devenir Partner ?', options: ['25', '50', '75', '100'], correctIndex: 2, explanation: 'Pour le Partner, il faut 75 viewers moyens sur 30 jours, plus d\'autres critères.' },
        { question: 'Quelles sont les conditions pour devenir Affiliate ?', options: ['100 followers + 1000 min', '50 followers + 500 min + 3 viewers moyens', '25 followers + 200 min', '200 followers uniquement'], correctIndex: 1, explanation: 'Affiliate = 50 followers, 500 min de stream, 7 jours de stream, et 3 viewers moyens sur 30 jours.' }
      ]}
    ],
    keyTakeaways: ['50% de base pour Affiliates', 'Les emotes motivent les upgrades', 'La reconnaissance personnelle fidélise'],
    nextSteps: 'Maximiser les Bits !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 6,
    sections: [
      { type: 'intro', content: `Les Bits sont la monnaie virtuelle Twitch. Les viewers les achètent et te les envoient avec des messages animés. 💎` },
      { type: 'concept', title: 'Comment fonctionnent les Bits', content: `Le système :`, items: ['100 bits = 1$ pour toi (1 centime/bit)', 'Les viewers paient plus cher (1.40$/100)', 'Cheers avec animations', 'Emotes animées selon le montant'] },
      { type: 'steps', title: 'Encourager les Bits', content: 'Méthodes :', items: ['Polls et Predictions payantes', 'Extensions avec Bits (jeux, challenges)', 'Sound alerts déclenchées par Bits', 'Bits leaderboard visible', 'Cheermotes custom (Partners)'] }
    ],
    keyTakeaways: ['1 bit = 1 centime pour toi', 'Extensions et polls pour engagement', 'Leaderboards motivent la compétition'],
    nextSteps: 'Configurer les donations !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 7,
    sections: [
      { type: 'intro', content: `Les donations passent directement de ton viewer à toi, sans commission de Twitch (mais PayPal/Stripe prennent leur part). 💸` },
      { type: 'steps', title: 'Configurer les donations', content: 'Setup :', items: ['1. Compte PayPal Business (gratuit)', '2. StreamElements/Streamlabs → Configure donations', '3. Ajoute un bouton/panneau donation sur ta page', '4. Configure les alertes', '5. Définis un minimum (1€ recommandé)'] },
      { type: 'warning', title: 'Attention chargebacks', content: `PayPal permet les chargebacks (remboursements). Un troll peut donner 100€ puis demander un remboursement. Solutions : StreamElements protection, délai avant retrait.` }
    ],
    keyTakeaways: ['PayPal/Stripe prennent ~3%', 'Protection contre chargebacks importante', 'Minimum pour éviter le spam'],
    nextSteps: 'Affiliation Amazon !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 8,
    sections: [
      { type: 'intro', content: `Le programme Amazon Associates te permet de gagner sur chaque achat fait via tes liens. Ton setup, tes recommandations... tout peut rapporter ! 🔗` },
      { type: 'steps', title: 'Devenir Amazon Associate', content: 'Setup :', items: ['1. Inscris-toi sur affiliate-program.amazon.fr', '2. Tu as 180 jours pour faire 3 ventes qualifiées', '3. Crée des liens vers ton matos recommandé', '4. Ajoute-les sur tes panels Twitch', '5. Mentionne-les occasionnellement en stream'] },
      { type: 'concept', title: 'Commissions', content: `Taux moyens :`, items: ['🎮 Gaming : 4-5%', '📷 Électronique : 3-4%', '👕 Mode : 7-10%', '📚 Livres : 4%'] }
    ],
    keyTakeaways: ['3-10% de commission selon les catégories', 'Créer une page setup avec liens', 'Cookie 24h = tu gagnes sur tout le panier'],
    nextSteps: 'Créer une page sponsor attractive !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 9,
    sections: [
      { type: 'intro', content: `Pour attirer des sponsors, tu as besoin d'un Media Kit professionnel. C'est ta carte de visite ! 📋` },
      { type: 'concept', title: 'Contenu du Media Kit', content: `Inclure :`, items: ['📊 Statistiques (viewers, followers, démographie)', '👤 Bio et ton style', '📸 Photos/screenshots de ton stream', '🎯 Ton audience cible', '💰 Tes tarifs (optionnel)', '📧 Contact pro'] },
      { type: 'tip', title: 'Design pro', content: `Utilise Canva pour créer un PDF élégant. 2-4 pages max. Mets tes meilleures stats en avant. Sois honnête sur tes chiffres.` }
    ],
    keyTakeaways: ['Media Kit = ta carte de visite', 'Stats + Bio + Contact', 'Design professionnel'],
    nextSteps: 'Trouver des sponsors !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 10,
    sections: [
      { type: 'intro', content: `Où trouver des sponsors pour les créateurs de contenu ? Plateformes, contacts directs, networking... 🔍` },
      { type: 'concept', title: 'Où chercher', content: `Sources de sponsors :`, items: ['🌐 Gamer Sensei, PowerSpike, Woopa', '📧 Contact direct (email marketing@marque.com)', '🤝 Networking à des events', '🐦 DM Twitter aux marques gaming', '💼 Agences de talents (si tu es gros)'] },
      { type: 'steps', title: 'L\'approche directe', content: 'Process :', items: ['1. Liste 20 marques que tu utilises vraiment', '2. Trouve le contact marketing', '3. Email personnalisé + Media Kit', '4. Propose une collab spécifique', '5. Relance une fois après 1 semaine'] }
    ],
    keyTakeaways: ['Plateformes + Contact direct', 'Cible des marques que tu aimes', 'Personnalise chaque approche'],
    nextSteps: 'Négocier avec un sponsor !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 11,
    sections: [
      { type: 'intro', content: `Un sponsor t'a répondu ! Comment négocier un bon deal sans te faire avoir ? 💼` },
      { type: 'concept', title: 'Types de deals', content: `Formats courants :`, items: ['💰 Paiement fixe (X€ pour 1 mois)', '📺 CPM (paiement par 1000 vues)', '🔗 Affiliation (% sur ventes)', '🎁 Produits gratuits uniquement', '🤝 Hybride (fixe + affiliation)'] },
      { type: 'warning', title: 'Red flags', content: `Méfie-toi de : demande de payer pour être sponsorisé, contrats trop exclusifs, marques inconnues, promesses irréalistes. En cas de doute, demande à la communauté streaming.` }
    ],
    keyTakeaways: ['Plusieurs formats de rémunération', 'Lis le contrat entièrement', 'Red flags = fuis'],
    nextSteps: 'Monétisation YouTube !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 12,
    sections: [
      { type: 'intro', content: `YouTube AdSense peut être une source de revenus passive. Tes VODs et clips continuent de générer de l'argent ! 📺` },
      { type: 'concept', title: 'Conditions monétisation YT', content: `Programme Partenaire YouTube :`, items: ['✅ 1000 abonnés', '✅ 4000h de watch time (12 mois)', 'OU 10M vues Shorts (90 jours)', '✅ Compte AdSense lié', '✅ Pas de strikes'] },
      { type: 'tip', title: 'Revenus typiques', content: `Le CPM varie énormément : 1-10€ pour 1000 vues selon la niche, le pays des viewers, la saison. Gaming = généralement 2-4€ CPM.` }
    ],
    keyTakeaways: ['1000 subs + 4000h watch time', 'Revenus passifs sur VODs', 'CPM gaming : 2-4€'],
    nextSteps: 'Super Chat et memberships YouTube !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 13,
    sections: [
      { type: 'intro', content: `YouTube a ses propres équivalents aux subs et bits : Memberships et Super Chat/Stickers. 💬` },
      { type: 'concept', title: 'Super Chat / Super Stickers', content: `Le système :`, items: ['💬 Messages payants en live', '💵 De 1€ à 500€', '⏱️ Message épinglé selon le montant', '💎 Super Stickers = stickers animés', 'YouTube prend 30%'] },
      { type: 'concept', title: 'Memberships', content: `L'équivalent des subs :`, items: ['👥 Abonnement mensuel', '🎨 Badges et emojis custom', '📺 Contenu réservé aux membres', 'YouTube prend 30%'] }
    ],
    keyTakeaways: ['YouTube prend 30% (vs 50% Twitch)', 'Super Chat peut aller jusqu\'à 500€', 'Moins développé que Twitch'],
    nextSteps: 'Patreon pour revenus récurrents !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 14,
    sections: [
      { type: 'intro', content: `Patreon crée une relation directe avec tes fans les plus fidèles. Revenus récurrents, contenu exclusif, vraie communauté. ☕` },
      { type: 'steps', title: 'Créer un Patreon efficace', content: 'Setup :', items: ['1. Crée un compte sur patreon.com', '2. Définis 3-4 tiers de prix', '3. Offre du contenu exclusif par tier', '4. Promeut régulièrement en stream', '5. Tiens tes promesses de contenu !'] },
      { type: 'concept', title: 'Idées de rewards', content: `Ce qui marche :`, items: ['🎬 Vlogs behind-the-scenes', '🎮 Parties privées', '💬 Discord privé', '🎨 Contenu early access', '📛 Nom dans les crédits'] }
    ],
    keyTakeaways: ['Revenus récurrents mensuels', 'Contenu exclusif nécessaire', 'Patreon prend 5-12%'],
    nextSteps: 'Créer du merch !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 15,
    sections: [
      { type: 'intro', content: `Le merchandising transforme ta marque en produits physiques. T-shirts, mugs, stickers... Tes fans portent ta marque ! 👕` },
      { type: 'concept', title: 'Options print-on-demand', content: `Plateformes sans stock :`, items: ['🖨️ Teespring/Spring', '🎨 Redbubble', '📦 Printful + Shopify', '🛍️ Merch by Amazon', 'Pas de stock, impression à la demande'] },
      { type: 'tip', title: 'Ce qui se vend', content: `T-shirts et hoodies sont les classiques. Mugs, stickers, mousepads aussi. Les designs simples avec ton logo/catchphrase marchent mieux que les designs complexes.` }
    ],
    keyTakeaways: ['Print-on-demand = 0 stock', 'Designs simples = meilleurs résultats', 'Intégration Twitch avec Spring'],
    nextSteps: 'Coaching et services !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 16,
    sections: [
      { type: 'intro', content: `Tu as des compétences ? Monétise-les ! Coaching, création de contenu, consulting... 🎓` },
      { type: 'concept', title: 'Services monétisables', content: `Ce que tu peux vendre :`, items: ['🎮 Coaching dans ton jeu', '🎨 Création d\'overlays/design', '📹 Montage vidéo', '📊 Consulting streaming', '🎤 Animation d\'événements'] },
      { type: 'tip', title: 'Tarification', content: `Regarde ce que font les autres à ton niveau. Commence modeste et augmente avec l'expérience. 20-50€/h pour du coaching gaming est standard.` }
    ],
    keyTakeaways: ['Monétise tes compétences', 'Tarifs selon le marché', 'Time-for-money = à doser'],
    nextSteps: 'Fiscalité des revenus !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 17,
    sections: [
      { type: 'intro', content: `Déclarer ses revenus streaming est OBLIGATOIRE. Micro-entreprise, impôts... Voici les bases en France. 📋` },
      { type: 'warning', title: 'ATTENTION', content: `Je ne suis pas comptable. Ces infos sont générales. Consulte un expert-comptable pour ta situation personnelle !` },
      { type: 'concept', title: 'En France', content: `Options courantes :`, items: ['🏢 Micro-entreprise = le plus simple', '📊 Déclaration des revenus Twitch/YT/dons', '💰 Charges sociales ~22%', '🧾 TVA selon le régime', 'Seuil micro-BNC : 77 700€/an'] },
      { type: 'tip', title: 'Conseil', content: `Dès que tu dépasses quelques centaines d'euros/mois, crée une micro-entreprise. C'est gratuit et ça te met en règle. Un comptable peut t'aider pour ~30€/mois.` }
    ],
    keyTakeaways: ['Déclarer est obligatoire', 'Micro-entreprise = simple', 'Consulte un comptable'],
    nextSteps: 'Créer ton plan de monétisation !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 18,
    sections: [
      { type: 'intro', content: `Chaque streamer a un profil différent. Crée ta propre stratégie de monétisation adaptée à TA situation. 📊` },
      { type: 'steps', title: 'Créer ton plan', content: 'Étapes :', items: ['1. Liste tes sources actuelles', '2. Estime le potentiel de chaque source', '3. Priorise 3-4 sources principales', '4. Définis des objectifs chiffrés', '5. Révise chaque trimestre'] },
      { type: 'example', title: 'Exemple de mix', content: `Mix typique pour un streamer intermédiaire :
- Subs/Bits : 40%
- Donations : 15%
- Sponsors : 25%
- YouTube : 15%
- Merch/Patreon : 5%` }
    ],
    keyTakeaways: ['Diversifie sur 3-4 sources', 'Objectifs chiffrés', 'Révise régulièrement'],
    nextSteps: 'Erreurs à éviter !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 19,
    sections: [
      { type: 'intro', content: `Des erreurs peuvent te coûter cher dans la monétisation. Apprends des erreurs des autres ! ⚠️` },
      { type: 'warning', title: 'Erreurs classiques', content: `Ce qu'il faut éviter :`, items: ['❌ Ne pas déclarer tes revenus', '❌ Accepter des sponsors douteux', '❌ Demander des donations de façon agressive', '❌ Promettre du contenu Patreon non livré', '❌ Dépendre d\'une seule source', '❌ Ignorer les chargebacks'] },
      { type: 'tip', title: 'Transparence', content: `Sois transparent avec ta communauté sur les sponsors. Ils comprennent que tu dois vivre. Mais s'ils se sentent manipulés, tu perds leur confiance.` }
    ],
    keyTakeaways: ['Transparence avec la communauté', 'Évite les sponsors douteux', 'Diversifie toujours'],
    nextSteps: 'Conclusion et vision long terme !'
  },
  {
    courseSlug: 'monetisation',
    lessonId: 20,
    sections: [
      { type: 'intro', content: `Tu as maintenant une vision complète de la monétisation streaming. Construis un business durable ! 🏆` },
      { type: 'steps', title: 'Ce que tu as appris', content: 'Résumé :', items: ['✅ Toutes les sources de revenus', '✅ De Affiliate à Partner', '✅ Subs, Bits, Donations', '✅ Sponsors et affiliation', '✅ YouTube, Patreon, Merch', '✅ Fiscalité de base', '✅ Plan de monétisation'] },
      { type: 'quote', content: `"La monétisation est un marathon, pas un sprint. Construis ta communauté d'abord, l'argent suivra. Les viewers sentent la sincérité." - L'équipe Stream Forge` },
      { type: 'quiz', title: 'Quiz Final Monétisation', content: 'Valide tes connaissances business :', questions: [
        { question: 'Combien garde un Affiliate sur un sub Tier 1 ?', options: ['30%', '50%', '70%', '100%'], correctIndex: 1, explanation: 'Les Affiliates gardent 50% (~2.50€ sur 4.99€). Les Partners peuvent négocier jusqu\'à 70%.' },
        { question: 'Quel est le risque principal des donations PayPal ?', options: ['Frais trop élevés', 'Chargebacks (remboursements)', 'Pas de notifications', 'Limite de montant'], correctIndex: 1, explanation: 'Les chargebacks permettent au donateur de demander un remboursement. Protection recommandée !' },
        { question: 'Qu\'est-ce qu\'un Media Kit ?', options: ['Un logiciel de montage', 'Ta carte de visite pro avec stats', 'Un pack d\'overlays', 'Un guide de modération'], correctIndex: 1, explanation: 'Le Media Kit contient tes stats, bio et contact pour convaincre les sponsors.' },
        { question: 'En France, à partir de quand faut-il déclarer ses revenus streaming ?', options: ['1000€/an', 'Premier euro', '500€/mois', 'Jamais si hobby'], correctIndex: 1, explanation: 'Tout revenu doit être déclaré dès le premier euro. La micro-entreprise est la solution la plus simple.' }
      ]}
    ],
    keyTakeaways: ['Communauté d\'abord, argent ensuite', 'Diversification est clé', 'Module 06 terminé !'],
    nextSteps: 'Tu as complété le Module 06 ! Continue avec le Module 07 : Growth Hacking Ultime.'
  },
  // ============================================
  // COURS 7: Growth Hacking Ultime
  // ============================================
  {
    courseSlug: 'growth-hacking',
    lessonId: 1,
    sections: [
      { type: 'intro', content: `Le growth hacking, c'est utiliser des stratégies intelligentes pour croître plus vite que la concurrence. Prêt à hacker ta croissance ? 🚀` },
      { type: 'concept', title: 'Mindset Growth', content: `L'état d'esprit :`, items: ['📊 Data-driven decisions', '🔄 Test → Mesure → Itère', '🎯 Focus sur le ROI', '⚡ Vitesse d\'exécution', '🧪 Expérimentation constante'] },
      { type: 'tip', title: 'La règle 80/20', content: `20% de tes actions génèrent 80% de tes résultats. Ta mission : identifier ces 20% et doubler dessus.` }
    ],
    keyTakeaways: ['Decisions basées sur les données', 'Teste constamment', 'Focus sur les actions à fort impact'],
    nextSteps: 'Comprendre l\'algo Twitch !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 2,
    sections: [
      { type: 'intro', content: `L'algorithme Twitch détermine qui apparaît en haut des catégories. Comprends-le, et tu seras plus visible ! 🎯` },
      { type: 'concept', title: 'Ce que Twitch favorise', content: `Facteurs de ranking :`, items: ['👥 Nombre de viewers (principal)', '📈 Velocity (croissance pendant le stream)', '📊 Engagement (chat activity)', '🕐 Durée de session (watch time)', '🏷️ Tags et métadonnées'] },
      { type: 'tip', title: 'Le problème du débutant', content: `Paradoxe : tu as besoin de viewers pour être visible, mais tu as besoin d'être visible pour avoir des viewers. Solution : raiding, réseaux sociaux, petites catégories.` }
    ],
    keyTakeaways: ['Viewers = facteur n°1', 'Velocity importante', 'Petites catégories pour débuter'],
    nextSteps: 'L\'algo YouTube !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 3,
    sections: [
      { type: 'intro', content: `YouTube fonctionne différemment : c'est le watch time et le CTR qui comptent, pas les vues directes. 📺` },
      { type: 'concept', title: 'Facteurs YouTube', content: `Ce qui compte :`, items: ['⏱️ Watch Time (temps regardé)', '📊 CTR (taux de clic sur thumbnail)', '📈 Retention (% de vidéo regardée)', '💬 Engagement (likes, comments)', '🔄 Fréquence de publication'] },
      { type: 'tip', title: 'Le secret', content: `Une vidéo avec 50% de rétention et 10% CTR surpassera une vidéo avec 1M de vues mais 20% de rétention et 2% CTR. L'algo favorise la qualité.` }
    ],
    keyTakeaways: ['Watch time > nombre de vues', 'CTR et rétention cruciaux', 'La qualité paie'],
    nextSteps: 'L\'algo TikTok !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 4,
    sections: [
      { type: 'intro', content: `TikTok est le roi de la viralité. Même un compte à 0 followers peut faire des millions de vues. Voici comment. 📱` },
      { type: 'concept', title: 'L\'algo TikTok', content: `Comment ça marche :`, items: ['🎬 Chaque vidéo testée sur ~200 personnes', '📊 Si bonne rétention → plus d\'exposition', '🔄 Pas de limite de portée', '⏱️ Les 3 premières secondes sont CRUCIALES', '🔁 Watch-through rate = rétention complète'] },
      { type: 'tip', title: 'Hook en 1 seconde', content: `TikTok récompense les vidéos qu'on regarde en entier. Ta première seconde doit capturer l'attention. Pattern interrupt, question choc, visuel surprenant.` }
    ],
    keyTakeaways: ['3 premières secondes = tout', 'Rétention complète récompensée', 'Viralité accessible à tous'],
    nextSteps: 'Choisir le bon contenu !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 5,
    sections: [
      { type: 'intro', content: `Tous les jeux/contenus n'offrent pas les mêmes opportunités de croissance. Stratégise ton choix ! 🎮` },
      { type: 'concept', title: 'Le ratio viewers/streamers', content: `La clé :`, items: ['📊 Vérifie combien de viewers dans la catégorie', '👤 Divise par le nombre de streamers', '🎯 Ratio élevé = opportunité', '⚠️ Trop gros = tu te noies', '⚠️ Trop petit = pas de viewers'] },
      { type: 'tip', title: 'Sweet spot', content: `Catégories entre 1000-5000 viewers total avec un ratio viewers/streamers > 5 sont idéales. Assez gros pour attirer, assez petit pour être visible.` }
    ],
    keyTakeaways: ['Ratio viewers/streamers important', '1000-5000 viewers = sweet spot', 'Évite les extrêmes'],
    nextSteps: 'Optimiser ton profil !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 6,
    sections: [
      { type: 'intro', content: `Ton profil est ta landing page. Optimise-le pour que les visiteurs deviennent des followers ! 🎨` },
      { type: 'steps', title: 'Optimisation profil', content: 'Checklist :', items: ['Titre accrocheur avec keywords', 'Tags pertinents et populaires', 'Bannière pro avec schedule', 'Panels clairs et complets', 'Bio courte mais impactante', 'Liens réseaux sociaux'] },
      { type: 'tip', title: 'Le titre parfait', content: `Format qui marche : "[Jeu] | [Ce que tu fais] | [Call to action]". Exemple : "Valorant | Road to Radiant | !coaching !discord".` }
    ],
    keyTakeaways: ['Titre avec keywords', 'Tags populaires et pertinents', 'Bio impactante'],
    nextSteps: 'L\'art du clip viral !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 7,
    sections: [
      { type: 'intro', content: `Les clips sont ton meilleur outil de croissance externe. Un bon clip peut t'apporter des milliers de followers ! 🎬` },
      { type: 'concept', title: 'Anatomie d\'un clip viral', content: `Les ingrédients :`, items: ['💥 Hook immédiat (0-2 sec)', '😂 Émotion forte (rire, surprise, hype)', '⏱️ Court (15-30 sec max)', '🎬 Fin claire ou cliffhanger', '📝 Contexte pas nécessaire'] },
      { type: 'tip', title: 'L\'émotion est reine', content: `Les clips qui performent déclenchent une émotion viscérale en 2 secondes. Tu dois faire rire, surprendre, ou impressionner IMMÉDIATEMENT.` }
    ],
    keyTakeaways: ['Hook en 2 secondes', 'Émotion forte = viralité', '15-30 secondes max'],
    nextSteps: 'Automatiser la création de clips !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 8,
    sections: [
      { type: 'intro', content: `Clipper manuellement, c'est long. Des outils automatisent la détection et l'édition. Gagne du temps ! ⚡` },
      { type: 'concept', title: 'Outils de clipping', content: `Options populaires :`, items: ['🤖 Eklipse.gg - IA détection de highlights', '🎬 Opus Clip - Pour YouTube', '📊 Twitch Strike - Stats de clips', '🔧 Clip-it - Commande chat', '🎮 Medal.tv - Clipping gaming'] },
      { type: 'tip', title: 'Workflow optimal', content: `Active le clipping par le chat (commande !clip). Configure un bot pour auto-télécharger les clips. Révise en batch après le stream. Publie les meilleurs.` }
    ],
    keyTakeaways: ['IA peut détecter les moments forts', 'Chat peut clipper pour toi', 'Batch editing pour efficacité'],
    nextSteps: 'Stratégie TikTok !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 9,
    sections: [
      { type: 'intro', content: `TikTok est la meilleure source de nouveaux viewers pour les streamers en 2024. Voici la stratégie complète ! 📱` },
      { type: 'steps', title: 'De 0 à 10k sur TikTok', content: 'La méthode :', items: ['1. Poste 1-3 clips/jour', '2. Format vertical 9:16', '3. Texte sur écran (sous-titres)', '4. Hook en 1 seconde', '5. Trending sounds quand pertinent', '6. Appel à action ("Live tous les soirs !")'] },
      { type: 'warning', title: 'Régularité', content: `TikTok récompense la régularité. Mieux vaut poster 1 vidéo/jour pendant 30 jours que 30 vidéos en 1 jour. L'algo aime la constance.` }
    ],
    keyTakeaways: ['1-3 posts par jour', 'Format vertical obligatoire', 'Constance > Volume'],
    nextSteps: 'Repurposing de contenu !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 10,
    sections: [
      { type: 'intro', content: `Un stream de 4h peut donner 10+ contenus pour les réseaux. C'est le repurposing : maximise chaque minute ! 🔄` },
      { type: 'concept', title: 'Un stream = 10 contenus', content: `Ce que tu peux extraire :`, items: ['📱 3-5 clips TikTok/Reels', '🎬 1 highlight YouTube (10-15 min)', '📺 1 VOD YouTube (entière)', '🐦 5+ tweets/posts', '📸 Screenshots pour Instagram', '🔊 Éventuellement un podcast'] },
      { type: 'tip', title: 'Batch processing', content: `Après chaque stream, passe 30 min à extraire tous les contenus. Planifie-les sur la semaine. Tu auras du contenu même les jours off.` }
    ],
    keyTakeaways: ['1 stream = 10+ contenus', 'Batch après chaque stream', 'Planifie à l\'avance'],
    nextSteps: 'Stratégie Twitter/X !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 11,
    sections: [
      { type: 'intro', content: `Twitter/X est le réseau où la communauté streaming se retrouve. Essentiel pour le networking ! 🐦` },
      { type: 'steps', title: 'Stratégie X', content: 'Les bonnes pratiques :', items: ['Tweet "Going Live" à chaque stream', 'Partage tes meilleurs clips', 'Engage avec d\'autres streamers', 'Participe aux trends gaming', 'Threads de valeur (tips, stories)', 'Utilise les hashtags pertinents'] },
      { type: 'tip', title: 'Engagement > Promo', content: `80% d'engagement avec la communauté, 20% de promo. Si tu ne fais que promouvoir, personne ne suivra. Construis des relations.` }
    ],
    keyTakeaways: ['80% engagement, 20% promo', 'Réseau streaming actif', 'Threads pour la valeur'],
    nextSteps: 'YouTube Shorts !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 12,
    sections: [
      { type: 'intro', content: `YouTube Shorts peut exploser ta chaîne YouTube. Même format que TikTok, audience différente ! 📺` },
      { type: 'concept', title: 'Shorts vs TikTok', content: `Différences :`, items: ['📱 Même format vertical', '⏱️ Max 60 secondes', '👥 Audience plus âgée sur YT', '📊 Moins de viralité mais plus de qualité', '🔗 Ramène vers ta chaîne YouTube'] },
      { type: 'tip', title: 'Cross-posting malin', content: `Poste le même clip sur TikTok, Shorts et Reels. Adapte légèrement le texte. 1 création = 3 plateformes couvertes.` }
    ],
    keyTakeaways: ['Cross-post TikTok → Shorts', 'Ramène vers ta chaîne YT', '1 vidéo = 3 plateformes'],
    nextSteps: 'Instagram Reels !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 13,
    sections: [
      { type: 'intro', content: `Instagram Reels complète ta stratégie court-format. Audience différente, mêmes clips ! 📸` },
      { type: 'concept', title: 'Reels pour gamers', content: `Spécificités :`, items: ['📸 Audience plus large (pas que gamers)', '🎵 Musique = important sur IG', '✨ Esthétique compte plus', '🔗 Bio link pour ton Twitch', '#️⃣ Hashtags cruciaux'] },
      { type: 'tip', title: 'Stories quotidiennes', content: `Au-delà des Reels, poste en Story chaque jour de stream. "Live dans 1h !", clips du jour, behind the scenes. Les Stories maintiennent l'engagement.` }
    ],
    keyTakeaways: ['Audience plus large que TikTok', 'Stories quotidiennes', 'Esthétique importante'],
    nextSteps: 'Discord pour la rétention !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 14,
    sections: [
      { type: 'intro', content: `Discord est ton outil de RÉTENTION. Les réseaux attirent, Discord garde. Ta communauté privée ! 💬` },
      { type: 'steps', title: 'Discord efficace', content: 'Setup optimal :', items: ['Salon annonces (notifications on)', 'Salon général pour discuter', 'Salon clips/memes', 'Voice chat pour jouer ensemble', 'Rôles pour les subs/VIPs', 'Bot pour auto-notifs de stream'] },
      { type: 'tip', title: 'Communauté active', content: `Un Discord mort est pire que pas de Discord. Sois présent quotidiennement, pose des questions, créé des events. Une communauté active attire.` }
    ],
    keyTakeaways: ['Discord = rétention', 'Sois présent quotidiennement', 'Rôles et récompenses'],
    nextSteps: 'Networking entre streamers !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 15,
    sections: [
      { type: 'intro', content: `Les streamers qui réussissent se connaissent tous. Le networking accélère ta croissance x10 ! 🤝` },
      { type: 'concept', title: 'Pourquoi networker', content: `Les avantages :`, items: ['🔄 Raids mutuels', '👥 Co-streams et collabs', '💡 Partage de tips', '🎯 Motivation et support', '📈 Exposition croisée'] },
      { type: 'steps', title: 'Comment networker', content: 'Approche :', items: ['Regarde et commente chez d\'autres', 'Joins leurs Discord', 'Propose de la valeur (pas juste "raid moi")', 'Sois authentique et régulier', 'Organise des events ensemble'] }
    ],
    keyTakeaways: ['Networking = croissance'], 
    nextSteps: 'Collaborations win-win !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 16,
    sections: [
      { type: 'intro', content: `Raids, co-streams, tournois... Les collaborations multiplient ta visibilité. Comment en organiser ? 🎮` },
      { type: 'concept', title: 'Types de collabs', content: `Formats possibles :`, items: ['🔄 Raid échange (tu me raid, je te raid)', '🎮 Co-stream gaming', '🎤 Podcast/Interview', '🏆 Tournoi communautaire', '💬 Guest sur un autre stream'] },
      { type: 'tip', title: 'Taille similaire', content: `Collabore avec des streamers de taille similaire (+/- 50%). Trop gros, ils n'ont pas d'intérêt. Trop petit, c'est du charity. L'équilibre est gagnant-gagnant.` }
    ],
    keyTakeaways: ['Collabs avec taille similaire', 'Échange de valeur égal', 'Plusieurs formats possibles'],
    nextSteps: 'Meilleurs horaires de stream !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 17,
    sections: [
      { type: 'intro', content: `L'heure de ton stream impacte ta visibilité. Les données montrent les meilleurs créneaux ! ⏰` },
      { type: 'concept', title: 'Horaires optimaux', content: `Données générales :`, items: ['📈 18h-22h = prime time (plus de viewers...)', '⚠️ ...mais aussi plus de streamers', '🌙 Late night (22h+) = moins de concurrence', '☀️ Matin = niche mais fidèle', '🌍 Ton fuseau horaire compte !'] },
      { type: 'tip', title: 'Teste et mesure', content: `Chaque audience est différente. Teste différents horaires sur 2-3 semaines. Compare ton avg viewers. Tu trouveras TON sweet spot.` }
    ],
    keyTakeaways: ['Prime time = plus de concurrence', 'Late night = moins de streamers', 'Teste TON horaire optimal'],
    nextSteps: 'Optimiser catégorie et tags !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 18,
    sections: [
      { type: 'intro', content: `Catégorie et tags déterminent où tu apparais dans Twitch. Optimise-les pour être trouvé ! 🏷️` },
      { type: 'steps', title: 'Optimisation tags', content: 'Bonnes pratiques :', items: ['Utilise TOUS les tags disponibles', 'Mélange populaires et niches', 'Langue appropriée (Français...)', 'Tags descriptifs de ton contenu', 'Change selon ce que tu fais'] },
      { type: 'tip', title: 'Catégorie dynamique', content: `Change de catégorie si tu changes de jeu. Une source majeure de découverte est les gens qui scrollent dans les catégories de jeux.` }
    ],
    keyTakeaways: ['Utilise tous les tags', 'Change catégorie si tu changes de jeu', 'Tags populaires + niches'],
    nextSteps: 'Analytics Twitch !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 19,
    sections: [
      { type: 'intro', content: `Les données disent la vérité. Twitch Analytics te montre ce qui marche et ce qui ne marche pas. 📊` },
      { type: 'concept', title: 'KPIs à suivre', content: `Métriques importantes :`, items: ['👥 Avg Viewers (santé générale)', '📈 Viewer Hours (watch time)', '💬 Chat Messages (engagement)', '➕ New Followers (croissance)', '🔄 Returning Viewers (fidélité)', '⏱️ Avg Watch Time (rétention)'] },
      { type: 'tip', title: 'Tendances > Valeurs absolues', content: `Ce qui compte ce n'est pas le chiffre absolu mais la TENDANCE. 50 viewers c'est moins bien que 100, mais si tu étais à 30 le mois dernier, tu progresses !` }
    ],
    keyTakeaways: ['Avg viewers = KPI principal', 'Tendances importantes', 'Check hebdomadaire'],
    nextSteps: 'YouTube Studio Analytics !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 20,
    sections: [
      { type: 'intro', content: `YouTube Studio donne des insights incroyables. CTR, rétention, sources de trafic... Mine d'or ! 📺` },
      { type: 'concept', title: 'Métriques YouTube', content: `À surveiller :`, items: ['📊 CTR (Click-Through Rate)', '📈 Rétention moyenne', '🔍 Sources de découverte', '👥 Audience (démographie)', '⏱️ Watch time par vidéo', '🔔 Notifications cliquées'] },
      { type: 'tip', title: 'Rétention curve', content: `Regarde la courbe de rétention de chaque vidéo. Où les gens partent ? C'est là que tu dois améliorer ton contenu.` }
    ],
    keyTakeaways: ['CTR et rétention = priorités', 'Courbe de rétention révélatrice', 'Adapte selon les données'],
    nextSteps: 'Outils externes !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 21,
    sections: [
      { type: 'intro', content: `Au-delà des analytics natifs, des outils tiers offrent plus d'insights. Découvre-les ! 🔧` },
      { type: 'concept', title: 'Outils utiles', content: `La stack de growth :`, items: ['📊 TwitchTracker - Stats détaillées', '📈 SullyGnome - Historique et trends', '🎮 Streams Charts - Comparaisons', '📱 Social Blade - Stats YouTube/TikTok', '🔍 VidIQ - SEO YouTube'] },
      { type: 'tip', title: 'Compare-toi à toi-même', content: `Ces outils permettent de te comparer aux autres, mais focalise-toi sur ta progression personnelle. Chaque canal a son contexte.` }
    ],
    keyTakeaways: ['TwitchTracker et SullyGnome pour Twitch', 'VidIQ pour YouTube', 'Focus sur ta progression'],
    nextSteps: 'A/B testing thumbnails !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 22,
    sections: [
      { type: 'intro', content: `Tes thumbnails sont cruciales pour le CTR YouTube. Teste différentes versions ! 🖼️` },
      { type: 'steps', title: 'A/B testing', content: 'Méthode :', items: ['Crée 2-3 versions de thumbnail', 'Utilise VidIQ ou TubeBuddy pour tester', 'Mesure le CTR sur 48-72h', 'Garde la version gagnante', 'Apprends et applique aux prochaines'] },
      { type: 'tip', title: 'Éléments à tester', content: `Teste : couleur de fond, expression faciale, texte (avec vs sans), zoom du sujet, contraste. Un changement peut doubler ton CTR.` }
    ],
    keyTakeaways: ['A/B testing améliore CTR', 'Teste un élément à la fois', 'Minimum 48h de données'],
    nextSteps: 'Paid promotion : utile ?'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 23,
    sections: [
      { type: 'intro', content: `Payer pour se promouvoir : bonne ou mauvaise idée ? Analysons objectivement. 💰` },
      { type: 'concept', title: 'Options payantes', content: `Ce qui existe :`, items: ['📺 Twitch Boost (officiel)', '🎬 YouTube Ads', '📱 TikTok Promote', '🐦 Twitter Ads', '⚠️ Faux followers (JAMAIS)'] },
      { type: 'warning', title: 'Conseil honnête', content: `La promotion payante marche SEULEMENT si tu as déjà un bon produit. Attirer des gens sur un stream moyen ne sert à rien. Investis d'abord dans ta qualité.` }
    ],
    keyTakeaways: ['Promotion payante = amplificateur', 'Qualité d\'abord', 'Jamais de faux followers'],
    nextSteps: 'Automation et outils !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 24,
    sections: [
      { type: 'intro', content: `L'automatisation te fait gagner des heures chaque semaine. Travaille plus intelligemment ! ⚡` },
      { type: 'concept', title: 'Ce qu\'on peut automatiser', content: `Tasks automatisables :`, items: ['📱 Notifications Going Live (IFTTT)', '📹 Export VOD vers YouTube', '🎬 Détection de clips (Eklipse)', '🐦 Posts programmés (Buffer, Later)', '📊 Rapports analytiques'] },
      { type: 'tip', title: 'ROI du temps', content: `Si un outil coûte 10€/mois mais te fait gagner 5h/mois, et que ton temps vaut plus que 2€/h, c'est rentable. Calcule le ROI.` }
    ],
    keyTakeaways: ['Automatise les tâches répétitives', 'Calcule le ROI', 'Temps = ressource précieuse'],
    nextSteps: 'Events et challenges !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 25,
    sections: [
      { type: 'intro', content: `Les events et challenges créent du buzz. Subathon, challenge 24h, marathon caritatif... Marque les esprits ! 🏆` },
      { type: 'concept', title: 'Types d\'events', content: `Idées qui marchent :`, items: ['⏰ Subathon (temps ajouté par sub)', '🌙 Stream 24h', '❤️ Marathon caritatif', '🏆 Tournoi communautaire', '🎯 Challenge personnel (objectif visible)'] },
      { type: 'tip', title: 'Préparation', content: `Un event mal préparé peut te faire perdre des viewers. Prévois tout : technique, contenu, breaks, équipe si besoin. Le timing aussi : annonce 1-2 semaines avant.` }
    ],
    keyTakeaways: ['Events créent du buzz', 'Préparation essentielle', 'Annonce en avance'],
    nextSteps: 'Gérer un bad buzz !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 26,
    sections: [
      { type: 'intro', content: `Tôt ou tard, tu feras face à une crise : drama, mauvais commentaires, erreur publique... Comment réagir ? 🚨` },
      { type: 'steps', title: 'Crisis management', content: 'Étapes :', items: ['1. Ne réagis PAS à chaud', '2. Évalue la gravité réelle', '3. Si ta faute : excuse sincère, rapide', '4. Si injuste : clarification factuelle', '5. Ne nourris pas les trolls', '6. Move on après avoir adressé'] },
      { type: 'warning', title: 'Le silence parfois', content: `Parfois, le mieux est de ne rien dire. Les petites polémiques meurent d'elles-mêmes. Donner de l'attention = amplifier.` }
    ],
    keyTakeaways: ['Jamais réagir à chaud', 'Excuse sincère si ta faute', 'Parfois, silence = meilleure option'],
    nextSteps: 'Plan de croissance 90 jours !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 27,
    sections: [
      { type: 'intro', content: `90 jours, c'est le temps idéal pour mesurer des vrais résultats. Créons ton plan personnalisé ! 📅` },
      { type: 'steps', title: 'Plan 90 jours', content: 'Structure :', items: ['Jours 1-30 : Audite et optimise tes bases', 'Jours 31-60 : Lance une stratégie short-form', 'Jours 61-90 : Networking et collabs', 'KPIs : +50% followers, +30% avg viewers', 'Check-in hebdomadaire'] },
      { type: 'tip', title: 'Ajuste en cours de route', content: `Le plan n'est pas gravé dans le marbre. Si quelque chose marche, double dessus. Si quelque chose échoue, pivote vite.` }
    ],
    keyTakeaways: ['90 jours = cycle complet', 'Phases progressives', 'Ajuste selon les résultats'],
    nextSteps: 'Conclusion du cours !'
  },
  {
    courseSlug: 'growth-hacking',
    lessonId: 28,
    sections: [
      { type: 'intro', content: `Félicitations ! Tu as maintenant toutes les techniques de growth hacking des top streamers. Le reste, c'est l'exécution ! 🏆` },
      { type: 'steps', title: 'Ce que tu as appris', content: 'Résumé complet :', items: ['✅ Fonctionnement des algorithmes', '✅ Création de contenu viral', '✅ Stratégies multi-plateformes', '✅ Analytics et données', '✅ Networking et collabs', '✅ Automation et outils', '✅ Gestion de crise', '✅ Plan de croissance'] },
      { type: 'quiz', title: 'Quiz Final Growth Hacking', content: 'Ultime test pour valider tes connaissances :', questions: [
        { question: 'Sur TikTok, dans les combien de secondes doit se trouver le hook ?', options: ['5 secondes', '3 secondes', '1 seconde', '10 secondes'], correctIndex: 2, explanation: 'Sur TikTok, la première seconde est cruciale. Tu dois accrocher immédiatement avant que le viewer ne swipe.' },
        { question: 'Quel pourcentage de ton activité devrait être du contenu hors-stream selon la règle 80/20 ?', options: ['20%', '50%', '70%', '80%'], correctIndex: 2, explanation: 'Le stream représente 30% du travail. Les 70% restants sont le networking, la création de clips, et les réseaux sociaux !' },
        { question: 'Quel est le facteur principal de visibilité sur Twitch ?', options: ['Les tags', 'Le nombre de viewers', 'Le titre', 'L\'ancienneté'], correctIndex: 1, explanation: 'Le nombre de viewers est le facteur n°1 de ranking sur Twitch. Plus tu as de viewers, plus tu es visible.' },
        { question: 'Sur YouTube, quelle métrique est plus importante que le nombre de vues ?', options: ['Les likes', 'Le watch time', 'Les commentaires', 'Les partages'], correctIndex: 1, explanation: 'Le watch time (temps de visionnage) est la métrique reine sur YouTube. L\'algo favorise les vidéos que les gens regardent longtemps.' }
      ]},
      { type: 'quote', content: `"La croissance n'est pas un sprint, c'est un marathon. Applique ces techniques avec régularité, ajuste selon tes résultats, et ta communauté grandira. On croit en toi ! 🚀" - L'équipe Stream Forge` }
    ],
    keyTakeaways: ['Tu as toutes les techniques', 'Exécution = clé', 'Marathon, pas sprint'],
    nextSteps: 'Tu as complété TOUS les modules de Stream Forge Academy ! Tu es maintenant un expert du streaming. Continue à apprendre, expérimenter, et surtout : stream ! 🎉'
  }
]

// Fonction pour récupérer le contenu d'une leçon
export function getLessonContent(courseSlug: string, lessonId: number): LessonContent | undefined {
  return LESSON_CONTENTS.find(
    content => content.courseSlug === courseSlug && content.lessonId === lessonId
  )
}

// Fonction pour vérifier si une leçon a du contenu
export function hasLessonContent(courseSlug: string, lessonId: number): boolean {
  return LESSON_CONTENTS.some(
    content => content.courseSlug === courseSlug && content.lessonId === lessonId
  )
}
