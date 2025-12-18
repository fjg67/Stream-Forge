# 📹 Scripts Vidéo - Cours 02 : OBS Studio Masterclass

Ces scripts sont prêts à être copiés dans des outils comme Fliki.ai, HeyGen, ou Synthesia.

---

## Leçon 1 : Installation et premier lancement d'OBS (5 min)

Bienvenue dans cette masterclass OBS Studio ! Tu vas devenir un expert.

OBS Studio est gratuit et open source. C'est le logiciel utilisé par 90% des streamers professionnels.

Pour l'installer, va sur obsproject.com et clique sur le bouton de téléchargement correspondant à ton système.

L'installation est simple : suivant, suivant, terminer. Rien de compliqué.

Au premier lancement, OBS te propose un assistant de configuration automatique. Sélectionne "Optimiser pour le streaming".

L'assistant va tester ton système et ta connexion pour trouver les meilleurs réglages. Laisse-le faire !

Une fois terminé, tu arrives sur l'interface principale. C'est peut-être intimidant au début, mais on va tout voir ensemble.

---

## Leçon 2 : Tour complet de l'interface (8 min)

Prenons le temps de comprendre chaque zone de l'interface OBS.

En haut, tu as le menu classique : Fichier, Édition, Vue, Outils, etc. On y reviendra pour des fonctions avancées.

Au centre, c'est la zone de prévisualisation. Tu y vois exactement ce que ton stream affiche.

En bas à gauche, tu as les Scènes. Une scène est un ensemble de sources. Par exemple : scène Gaming, scène Just Chatting, scène Pause.

Juste à côté, les Sources. Ce sont les éléments visuels : ta webcam, ton jeu, une image, du texte...

Le Mixeur audio te permet de contrôler le volume de chaque source sonore. Micro, sons du jeu, musique...

Les Transitions gèrent le passage d'une scène à l'autre. Fondu, coupure, slide...

Et à droite, les boutons de contrôle : Démarrer le stream, Démarrer l'enregistrement, Mode Studio.

Tu vas rapidement t'y retrouver, promis !

---

## Leçon 3 : Créer ta première scène (6 min)

Créons ta première scène ensemble !

Clique sur le plus dans la zone Scènes. Nomme-la "Gaming" par exemple.

Une scène vide apparaît. Maintenant, il faut ajouter des sources pour afficher quelque chose.

L'ordre des sources est important ! La source en haut de la liste apparaît devant les autres.

Typiquement, tu veux : le jeu en fond, puis un overlay, puis ta webcam par-dessus.

Tu peux dupliquer des scènes. Clic droit, Dupliquer. Pratique pour créer des variantes !

Renomme tes scènes de manière claire. "Intro", "Gaming", "Pause", "Fin"... Tu t'y retrouveras facilement.

---

## Leçon 4 : Les différents types de sources (10 min)

OBS propose de nombreux types de sources. Voyons les plus utilisées.

Capture de fenêtre : capture une fenêtre spécifique. Parfait pour Discord ou un navigateur.

Capture d'écran : capture tout l'écran. Attention au multi-écran, choisis le bon !

Capture de jeu : la meilleure option pour capturer un jeu. Plus performante.

Périphérique de capture vidéo : c'est ta webcam. Tu peux en ajouter plusieurs.

Source audio : ajoute un micro ou des sons spécifiques.

Image : affiche une image fixe. Parfait pour les overlays et logos.

Source navigateur : affiche une page web. Utilisée pour les alertes et widgets.

Source média : pour les vidéos et animations.

Texte : affiche du texte personnalisable.

Chaque source peut être redimensionnée et déplacée avec la souris. Facile !

---

## Leçon 5 : Ajouter et configurer ta webcam (7 min)

Ajoutons ta webcam à OBS.

Clique sur le plus dans Sources, puis Périphérique de capture vidéo.

Donne un nom à ta source, par exemple "Webcam principale".

Dans la liste déroulante, sélectionne ta webcam.

Résolution : choisis la plus haute disponible. 1080p si ta webcam le supporte.

Fréquence d'images : 30 fps suffit généralement. 60 fps si tu as la puissance.

Redimensionne la webcam en la tirant par les coins. Maintiens Shift pour garder les proportions.

Place-la où tu veux. En bas à gauche ou à droite sont les positions classiques.

Tu peux ajouter un cadre autour avec une source image par-dessus. Ça fait plus pro !

---

## Leçon 6 : Capture de jeu - La méthode parfaite (8 min)

La capture de jeu est souvent source de problèmes. Voici la bonne méthode.

Ajoute une nouvelle source "Capture de jeu".

Mode : Capturer une fenêtre spécifique. C'est le plus fiable.

Lance ton jeu en arrière-plan, puis sélectionne-le dans la liste.

Si le jeu n'apparaît pas, coche "Mode de capture SLI/Crossfire".

Écran noir ? Lance OBS en mode administrateur. Clic droit, Exécuter en tant qu'administrateur.

Pour les jeux anti-cheat stricts, la capture de fenêtre peut mieux marcher que la capture de jeu.

Astuce : désactive le mode jeu de Windows dans les paramètres pour éviter les conflits.

Teste toujours avant de lancer ton stream. Un écran noir en live, c'est la galère !

---

## Leçon 7 : Sources audio - Micro et desktop (7 min)

Configurons ton audio correctement dans OBS.

Par défaut, OBS capture le son de ton bureau et de ton micro. Vérifie dans Paramètres puis Audio.

Audio du bureau : sélectionne ta sortie audio principale. C'est le son du jeu, de la musique, etc.

Micro/Auxiliaire : sélectionne ton microphone.

Dans le mixeur en bas, tu vois les niveaux en temps réel.

Ton micro devrait osciller entre moins 20 et moins 10 dB quand tu parles normalement.

Le son du bureau doit être plus bas que ta voix. Les viewers veulent t'entendre, pas juste le jeu !

Règle d'or : ta voix doit toujours dominer. Baisse le jeu si nécessaire.

---

## Leçon 8 : Le mixeur audio avancé (6 min)

Le mixeur OBS cache des options puissantes. Clique sur la roue dentée à côté d'une source.

Propriétés audio avancées te donne accès à encore plus de réglages.

Le monitoring te permet d'écouter une source dans ton casque sans l'envoyer au stream, ou les deux.

La synchronisation corrige les décalages audio/vidéo. Ajoute quelques millisecondes si ta voix est en avance.

Tu peux aussi définir des pistes séparées. Piste 1 pour le stream, piste 2 pour l'enregistrement avec juste ta voix, etc.

Chaque source audio peut être mutée indépendamment. Pratique pendant les pauses !

---

## Leçon 9 : Filtres audio - Noise Gate (5 min)

Le Noise Gate élimine les bruits de fond quand tu ne parles pas.

Clic droit sur ton micro dans le mixeur, puis Filtres.

Ajoute un filtre "Noise Gate".

Seuil d'ouverture : le niveau à partir duquel le micro s'active. Environ moins 26 dB.

Seuil de fermeture : le niveau sous lequel le micro coupe. Environ moins 32 dB.

Test en parlant et en restant silencieux. Le micro doit couper pendant les silences.

Ajuste les seuils jusqu'à trouver l'équilibre parfait. Pas de coupures en pleine phrase !

---

## Leçon 10 : Filtres audio - Compresseur (5 min)

Le compresseur équilibre les volumes. Plus de sauts entre chuchotements et cris !

Ajoute un filtre "Compresseur" après le Noise Gate.

Ratio : commence à 4:1. Ça signifie que les sons forts seront réduits de 4 fois.

Threshold : le seuil à partir duquel la compression s'applique. Environ moins 18 dB.

Attack : vitesse de réaction. 3 à 6 millisecondes pour la voix.

Release : temps de retour à la normale. 50 à 100 millisecondes.

Output Gain : compense la perte de volume causée par la compression. Augmente de 3 à 6 dB.

Ton audio sera beaucoup plus professionnel après ça !

---

## Leçon 11 : Filtres audio - Noise Suppression et EQ (6 min)

Finissons la chaîne audio avec la suppression de bruit et l'égalisation.

La Suppression de bruit utilise l'IA pour éliminer les bruits de fond. Ajoute ce filtre !

Il y a deux méthodes : RNNoise qui est léger, et NVIDIA Noise Removal si tu as une carte NVIDIA RTX.

NVIDIA est plus puissant mais demande du GPU. RNNoise suffit pour la plupart des cas.

Pour l'égaliseur, ajoute un filtre VST si tu veux aller plus loin. ReaEQ est gratuit et puissant.

Booste légèrement les médiums autour de 2 à 4 kHz pour plus de clarté vocale.

Coupe les basses sous 80 Hz, elles ne servent à rien pour la voix et ajoutent du bruit.

Ordre des filtres : Noise Gate, puis Noise Suppression, puis Compresseur, puis EQ.

---

## Leçon 12 : Filtres vidéo - Correction couleurs (8 min)

Améliorons l'image de ta webcam avec les filtres.

Clic droit sur ta source webcam, puis Filtres.

Ajoute "Correction colorimétrique" pour les ajustements de base.

Gamma : contrôle la luminosité des tons moyens. Augmente légèrement si l'image est sombre.

Contraste : augmente pour une image plus punchy. Attention à ne pas trop pousser.

Saturation : booste les couleurs. Un léger boost rend l'image plus vivante.

Tu peux aussi appliquer une LUT ! C'est un fichier qui applique un look colorimétrique cinématographique.

Télécharge des LUTs gratuites et ajoute le filtre "Appliquer une LUT". L'effet peut être spectaculaire.

---

## Leçon 13 : Filtres vidéo - Chroma Key / Fond vert (7 min)

Le fond vert te permet de supprimer ton arrière-plan.

Installe un écran vert derrière toi. Tissu, papier, ou panneau rigide.

L'éclairage est crucial ! Éclaire le fond uniformément pour éviter les ombres.

Ajoute le filtre "Chroma Key" sur ta webcam.

Type de couleur : vert ou bleu selon ton fond.

Similarité : augmente jusqu'à ce que le fond disparaisse. Attention à ne pas trop monter.

Lissage et réduction des bords : ajuste pour éviter les contours verts autour de toi.

L'opacité gère les zones semi-transparentes comme les cheveux.

Pas de fond vert ? Le filtre "Suppression de l'arrière-plan" utilise l'IA et marche sans écran !

---

## Leçon 14 : Filtres vidéo - Masques et cropping (5 min)

Les masques cachent des parties de ta webcam pour des effets créatifs.

Le filtre "Image Mask/Blend" applique un masque à ta source.

Crée un masque en noir et blanc dans Photoshop. Le blanc est visible, le noir est caché.

Type de mélange : Alpha Mask pour la transparence.

Tu peux créer des formes de webcam uniques : cercle, hexagone, cadre personnalisé !

Le crop par transformation est plus simple. Maintiens Alt en tirant les bords de ta source.

Ça coupe les parties non désirées. Pratique pour cacher le bord d'un bureau en désordre !

---

## Leçon 15 : Créer plusieurs scènes (6 min)

Un stream pro a plusieurs scènes. Voyons les indispensables.

Scène Intro : un écran de démarrage avec compte à rebours. Les viewers arrivent et attendent.

Scène Gaming : ton overlay principal avec webcam et jeu.

Scène Just Chatting : pas de jeu, webcam plus grande pour discuter.

Scène Pause ou BRB : Be Right Back. Affiche un message pendant ton absence.

Scène Fin : remerciements et redirection vers un autre stream ou vidéo.

Tu peux imbriquer des scènes ! Ajoute une scène comme source dans une autre scène.

Exemple : ta webcam avec ses filtres dans une scène dédiée, puis ajoute cette scène partout où tu veux ta webcam.

---

## Leçon 16 : Transitions entre scènes (5 min)

Le passage entre scènes peut être stylé avec les transitions.

Par défaut, OBS propose Couper et Fondu.

Fondu : transition douce. Durée de 300 à 500 millisecondes est agréable.

Couper : changement instantané. Parfois préférable pour du contenu dynamique.

Télécharge des transitions Stinger pour un effet pro ! Ce sont des vidéos avec transparence.

Ajoute la transition dans les paramètres de transition. Pointe vers le fichier vidéo.

Point de transition : le moment exact où la scène change pendant l'animation.

Le Mode Studio est parfait pour préparer tes changements de scène avant de les envoyer au live.

---

## Leçon 17 : Studio Mode - Switcher comme un pro (4 min)

Le Mode Studio transforme OBS en régie professionnelle.

Active-le avec le bouton en bas à droite.

Maintenant tu as deux zones : Aperçu à gauche, Programme à droite.

L'aperçu montre la scène que tu prépares. Le programme montre ce qui est diffusé.

Tu peux modifier ta scène suivante tranquillement avant de la passer en live.

Le bouton Transition envoie l'aperçu vers le programme avec la transition choisie.

C'est comme être dans une vraie régie télé ! Tu maîtrises totalement le flux du stream.

---

## Leçon 18 : Paramètres d'encodage - Théorie (8 min)

Comprendre l'encodage est essentiel pour un stream de qualité.

L'encodeur compresse ta vidéo avant de l'envoyer. Sans compression, ce serait impossible à transmettre.

Bitrate : la quantité de données par seconde. Plus c'est haut, meilleure est la qualité, mais ça demande plus de bande passante.

Pour du 720p à 30 fps : 2500 à 4000 kbps. Pour du 1080p à 60 fps : 6000 à 8000 kbps.

Preset : le niveau d'effort de l'encodeur. Slower est mieux mais demande plus de puissance.

Rate Control : CBR pour le stream, c'est constant et prévisible. VBR pour les enregistrements.

Keyframe Interval : laisse sur 2 secondes, c'est requis par Twitch.

Ces réglages dans Paramètres, puis Sortie, puis mode Avancé.

---

## Leçon 19 : x264 vs NVENC vs AMF vs QuickSync (10 min)

Quel encodeur choisir ? Voyons les options.

x264 : l'encodeur CPU. Excellente qualité mais utilise ton processeur. Bon si tu as un CPU puissant.

NVENC : l'encodeur GPU de NVIDIA. Qualité quasi identique au x264 sans charger le CPU. Le meilleur choix si tu as une carte NVIDIA récente.

AMF : l'encodeur GPU d'AMD. Moins bon que NVENC mais s'améliore. Libère ton CPU.

QuickSync : l'encodeur intégré aux processeurs Intel. Qualité correcte, option de secours.

Mon conseil : si tu as une NVIDIA GTX série 16 ou mieux, utilise NVENC. Sinon, x264 avec un preset moyen.

Pour vérifier : lance un stream test et regarde l'utilisation CPU et GPU dans le gestionnaire de tâches.

---

## Leçon 20 : Optimiser pour Twitch (6 min)

Voici les meilleurs réglages pour Twitch.

Serveur : laisse OBS choisir automatiquement ou sélectionne le serveur le plus proche.

Bitrate : max 6000 kbps si tu n'es pas Partner. Au-delà, Twitch limite.

Résolution : 1920x1080 ou 1280x720 selon ta puissance.

FPS : 60 pour les jeux rapides, 30 suffit pour du Just Chatting.

Encodeur : NVENC si disponible, sinon x264 avec preset "faster" ou "veryfast".

Profil : Main ou High.

Va dans Paramètres, Stream, et connecte ton compte Twitch pour la configuration automatique.

Fais toujours un test de stream ! Twitch Inspector te montre la qualité en temps réel.

---

## Leçon 21 : Optimiser pour YouTube (5 min)

YouTube a des différences avec Twitch.

Bitrate : YouTube accepte jusqu'à 51 000 kbps ! Mais 8000 à 12000 suffit pour du 1080p60.

Clé de stream : récupère-la dans YouTube Studio, section Go Live.

YouTube recommande un keyframe de 2 secondes aussi.

L'avantage de YouTube : le replay automatique. Ton live devient une vidéo permanente.

Active "Enregistrement automatique" dans les paramètres de stream YouTube.

Tu peux aussi configurer des premieres programmées pour créer l'attente.

YouTube permet le 4K et même le 8K si ton matériel suit et que tu as la bande passante.

---

## Leçon 22 : Raccourcis clavier essentiels (5 min)

Les raccourcis clavier te font gagner un temps fou.

Va dans Paramètres, puis Raccourcis.

Associe des touches à chaque scène. F1 pour Intro, F2 pour Gaming, F3 pour Pause, etc.

Raccourci pour muter/démuter ton micro. Essentiel pour les pauses toilettes !

Raccourci pour démarrer/arrêter le stream. Pratique mais attention aux fausses manips.

Tu peux utiliser des Stream Decks ou des applications mobiles pour des raccourcis physiques.

Les numpad sont parfaits pour les raccourcis car ils sont peu utilisés ailleurs.

Conseil : imprime ou affiche tes raccourcis à côté de ton écran le temps de les mémoriser.

---

## Leçon 23 : Les plugins indispensables (10 min)

Passons aux plugins qui vont transformer ton OBS.

Move Transition : permets des animations de déplacement pour tes sources. Effets pros garantis.

StreamFX : pack de filtres avancés. Flou, shaders, transformations 3D.

Source Copy : copie tes sources et scènes entre profils. Super pratique.

Advanced Scene Switcher : change de scène automatiquement selon des conditions. Le jeu s'ouvre, la scène change !

Vertical : recadre ton stream en vertical pour TikTok ou Shorts.

OBSWebSocket : contrôle OBS depuis d'autres applications. Base pour beaucoup d'intégrations.

Installe ces plugins depuis le site d'OBS ou depuis GitHub selon les instructions de chacun.

---

## Leçon 24 : Dépannage - Résoudre les problèmes courants (8 min)

Les problèmes arrivent. Voici comment les résoudre.

Frames perdues encodage : ton encodeur n'arrive pas à suivre. Baisse le bitrate ou utilise un preset plus rapide.

Frames perdues réseau : problème de connexion. Vérifie ta connexion ou baisse le bitrate.

Écran noir en capture de jeu : lance OBS en administrateur, ou utilise capture de fenêtre.

Audio désynchronisé : ajoute un délai dans les propriétés audio avancées.

OBS qui crash : mets à jour tes drivers graphiques et OBS.

Utilisation CPU à 100% : réduis la résolution, le FPS, ou passe sur NVENC.

Le log OBS est ton ami ! Outils, puis Log Files, puis Upload. Analyse sur le site d'OBS.

---

## Leçon 25 : OBS sur 2 PC - Le setup NDI (6 min)

Le dual PC setup est le graal du streaming sans compromis.

Un PC joue, l'autre encode et stream. Aucun impact sur les performances du jeu.

NDI permet de transmettre la vidéo par le réseau local.

Installe OBS NDI sur les deux PC. Gratuit et simple.

Sur le PC de jeu : ajoute une sortie NDI dans les outils OBS.

Sur le PC de stream : crée une source NDI qui capture le flux du PC de jeu.

Utilise un câble Ethernet direct ou un switch gigabit. Le Wi-Fi introduit de la latence.

C'est un setup avancé mais la qualité est incomparable. À considérer si tu deviens sérieux !

---

## Leçon 26 : Conclusion et ressources (3 min)

Bravo ! Tu maîtrises maintenant OBS Studio.

Tu as appris l'interface, les sources, les filtres, l'encodage et les plugins essentiels.

N'hésite pas à expérimenter. OBS est un outil puissant avec des possibilités infinies.

Consulte le subreddit OBS et le forum officiel pour des conseils et de l'aide.

Sauvegarde tes profils et collections de scènes ! Fichier, Export. Un crash peut tout faire perdre.

Dans le prochain module, on attaque les overlays et le design. On va rendre ton stream magnifique !

Merci d'avoir suivi cette masterclass, et à très vite !

---

## 💡 Comment utiliser ces scripts

1. **Copie** le texte d'une leçon
2. **Colle** dans Fliki.ai, HeyGen ou Synthesia
3. **Ajoute** des captures d'écran d'OBS
4. **Génère** et uploade sur YouTube
