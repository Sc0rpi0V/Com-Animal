import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({ 
  resources: {
    fr: { 
      translation: {
        //Header 
        headerProject: 'Bienvenue sur ',
        headerTogether: 'AnimalCom !',
        headerAnimCom: 'Formatrice et Conseillère en Communication Animale',
        aboutCom: 'À Propos de la Communication',
        training: 'Mes Formations',
        contactMe: 'Me Contacter',

        //Description
        description: 'Description',
        whoami: 'Qui suis-je ?',
        descriptionFirst: 'Je suis une personne qui aime prendre soin des autres et cela depuis toute petite. Cela s’est révélé par le fait que je sois devenue infirmière. J\'ai toujours apprécié la compagnie des animaux et j’ai toujours eu un lien spécial avec ceux qui ont partagé ma vie.',
        seeMore: 'En savoir plus',
        whatido: 'Que fais-je ?',
        descriptionSecond: 'Grâce à un processus appris, je me connecte à l\'animal grâce à une photo où l\'on voit son visage, la connaissance de son prénom ainsi que de son âge. Avant tout, je recherche son approbation pour débuter la communication.',
                
        //Footer
        madeby: 'Réalisé par',

        //AboutMe
        aboutMe: 'À Propos de Moi',
        story: 'Une Histoire d\'amour des animaux et du bien-être.',
        passionateCom: 'Je m\'appelle Valentine, j\'ai 26 ans. Je suis une personne qui aime prendre soin des autres depuis toute petite. Cela s\'est révélé par le fait que je sois devenue infirmière. J\'ai toujours apprécié la compagnie des animaux et j’ai toujours eu un lien spécial avec ceux qui ont partagé ma vie.',
        passionateCom2: 'Actuellement gardienne de deux chats, Bagheera et Boobie, ils ont toujours su se faire comprendre d\'une certaine manière, mais j\'ai découvert la possibilité de rentrer en contact avec eux et de pouvoir ainsi mieux les comprendre.',
        passionateCom3: 'La formation s\'est présentée à moi et je l\'ai saisie. J\'ai beaucoup appris et j’apprends encore car ce n’est pas terminé. Mais aujourd\'hui, j\'ai la possibilité de pouvoir partager mon apprentissage et d\'aider tout un chacun à comprendre ceux qui partagent notre quotidien.',
        passionateCom4: 'Un peu d\'indulgence, je suis toujours en apprentissage.',
        myServices: 'Mes Services',
        titleFirstService: 'Communication Individuelle',
        titleSecondService: 'Ateliers de Communication',
        titleThirdService: 'Communication à Distance',
        firstService: 'Plongez dans le monde fascinant de la communication animale avec notre service de consultation individuelle. Je possède une connexion profonde avec le royaume animal, ce qui me permet de faciliter la communication entre vous et votre compagnon à quatre pattes. Lors de ces sessions personnalisées, j\'utilise mes compétences intuitives pour comprendre les besoins, les émotions et les pensées de votre animal. Que vous cherchiez à résoudre des comportements indésirables, à comprendre des problèmes de santé non diagnostiqués ou simplement à renforcer votre lien avec votre animal, nos consultations individuelles sont conçues pour vous offrir des insights uniques. J\'établirai une connexion télépathique avec votre animal, vous permettant ainsi de mieux comprendre ses sentiments, ses préoccupations et de favoriser une relation harmonieuse.',
        secondService: 'Participez à nos ateliers de communication animale en groupe et découvrez la magie de la connexion interspécifique. Nos sessions de groupe, dirigées par moi-même, sont conçues pour rassembler des amoureux des animaux partageant la même passion. Ces ateliers offrent une expérience enrichissante où vous pouvez apprendre les bases de la communication animale, partager vos expériences et interagir avec d\'autres propriétaires d\'animaux. Au cours de ces ateliers, je guiderai le groupe à travers des exercices pratiques et des techniques de communication qui vous permettront d\'approfondir votre compréhension mutuelle avec les animaux. Que vous soyez novice ou que vous ayez déjà des connaissances en communication animale, ces ateliers sont adaptés à tous les niveaux et vous aideront à élargir vos horizons.',
        thirdService: 'La distance n\'est plus un obstacle pour entrer en communication profonde avec votre animal de compagnie grâce à nos services de communication animale à distance. Que vous soyez éloigné géographiquement ou que vous préfériez le confort de votre foyer, nos sessions à distance dirigées par moi-même vous offrent une opportunité unique de connecter avec votre animal, peu importe où vous vous trouvez. À travers des appels vidéo ou des séances écrites, j\'établis une connexion télépathique avec votre animal pour comprendre ses besoins, ses souhaits et ses émotions. Cette option pratique est idéale pour les personnes qui ont des horaires chargés ou qui vivent dans des régions éloignées. Offrez à votre animal de compagnie le cadeau de la communication, peu importe la distance qui vous sépare.',
                
        //Work
        myWork: 'Mon Travail',
        titleFirstWork: 'Méditation et Centrage',
        subtitleFirstPartFirstWork: '1. Préparation de l\'esprit',
        firstPartFirstWork: 'Avant d\'entrer en communication avec un animal, le communicateur commence par préparer son esprit. La méditation offre une transition entre le quotidien trépidant et le travail délicat d\'établir une connexion profonde avec les animaux. Dans un environnement calme et serein, le communicateur crée un espace propice à l\'harmonie intérieure. En libérant les tensions physiques et en apaisant le tumulte mental, la méditation crée un terrain fertile pour une communication télépathique claire et précise.',
        subtitleSecondPartFirstWork: '2. Choix de l\'environnement',
        secondPartFirstWork: 'Le communicateur choisit soigneusement l\'endroit où il médite, privilégiant des lieux paisibles en plein air ou des espaces intérieurs calmes. L\'environnement influence directement la qualité de la méditation, car un lieu empreint de sérénité favorise une connexion plus profonde avec la nature et les énergies environnantes.',
        subtitleThirdPartFirstWork: '3. Techniques de Respiration',
        thirdPartFirstWork: 'Se concentrer sur la respiration est une pratique fondamentale. Le communicateur utilise des techniques de respiration consciente pour calmer le rythme cardiaque, apaiser l\'esprit et éliminer les distractions extérieures. En synchronisant la respiration avec la présence mentale, le communicateur crée un état de pleine conscience, établissant ainsi une base solide pour la communication animale.',
        subtitleFourthPartFirstWork: '4. Réception des Énergies et des Messages Télépathiques',
        fourthPartFirstWork: 'La méditation fonctionne comme une passerelle vers la réception des énergies et des messages télépathiques des animaux. En atteignant un état de présence profonde, le communicateur devient réceptif aux impressions subtiles émanant des êtres vivants qui l\'entourent. Cette réceptivité accrue facilite le passage naturel vers la connexion télépathique avec les animaux.',
        titleSecondWork: 'Établir une Connexion Télépathique',
        subtitleFirstPartSecondWork: '1. Centrage Préalable',
        firstPartSecondWork: 'Avant d\'entamer le processus de connexion télépathique, le communicateur s\'engage dans une phase préalable de centrage. Cela garantit qu\'il est mentalement et émotionnellement préparé, éliminant toute interférence externe qui pourrait perturber la réception des signaux télépathiques. Le centrage contribue à créer un état propice à l\'établissement d\'une liaison énergétique profonde.',
        subtitleSecondPartSecondWork: '2. Création d\'un Canal Clair ',
        secondPartSecondWork: 'La visualisation de la liaison énergétique n\'est pas simplement symbolique, mais elle crée un véritable canal d\'échange entre le communicateur et l\'animal. Ce canal agit comme un moyen de transmission pour les impressions, les émotions, les images mentales, et même les pensées télépathiques. Un canal clair favorise une communication sans entrave, permettant au communicateur de percevoir les aspects subtils de l\'expérience intérieure de l\'animal.',
        subtitleThirdPartSecondWork: '3. Réception Multisensorielle',
        thirdPartSecondWork: 'À travers cette connexion télépathique, le communicateur reçoit des informations de manière multisensorielle. Des images mentales, des émotions, des impressions sensorielles, voire des pensées directes peuvent être perçues. Cette réception holistique contribue à une compréhension approfondie de l\'expérience intérieure de l\'animal, transcendant les barrières du langage verbal.',
        titleThirdWork : 'Pose de Questions et Interprétation des Réponses',
        subtitleFirstPartThirdWork: '1. État Post-Connexion',
        firstPartThirdWork: 'Une fois que la connexion télépathique est établie, le communicateur entre dans un état de réceptivité accrue, prêt à recevoir les réponses de l\'animal. Cet état post-connexion est essentiel pour garantir une transmission claire et précise des questions et des réponses, transcendant les barrières du langage verbal.',
        subtitleSecondPartThirdWork: '2. Formulation de Questions Précises',
        secondPartThirdWork: 'Le communicateur pose des questions précises à l\'animal, généralement formulées mentalement. Ces questions sont conçues pour obtenir des informations spécifiques sur les pensées, les émotions, ou les expériences de l\'animal. La précision des questions est cruciale pour recevoir des réponses claires et significatives.',
        subtitleThirdPartThirdWork: '3. Manifestation des Réponses',
        thirdPartThirdWork: 'Les réponses de l\'animal peuvent se manifester de diverses manières : images mentales, sensations physiques, émotions ressenties, ou même mots télépathiques. Chaque modalité de réponse contribue à la richesse de l\'information échangée entre le communicateur et l\'animal, offrant une perspective holistique sur l\'état intérieur de l\'animal.',
        subtitleFourthPartThirdWork: '4. Exemple d\'Interprétation',
        fourthPartThirdWork: 'Par exemple, si l\'animal transmet une image de lui-même jouant dans l\'herbe, le communicateur peut interpréter cela comme un signe de contentement ou de joie. De même, une sensation de malaise peut être interprétée comme un indicateur de problème de santé. L\'interprétation va au-delà de la signification littérale, impliquant une connexion profonde avec les expériences émotionnelles de l\'animal.',
        titleFourthWork: 'Facilitation de la Compréhension',
        subtitleFirstPartFourthWork: '1. Collecte d\'Informations Significatives',
        firstPartFourthWork: 'Le communicateur recueille des informations significatives pendant la communication avec l\'animal. Ces données peuvent inclure des détails sur les émotions, les besoins, les préoccupations ou les expériences de l\'animal. La sensibilité du communicateur lui permet de capter des nuances subtiles qui peuvent échapper à l\'observation conventionnelle.',
        subtitleSecondPartFourthWork: '2. Traduction en Langage Humain',
        secondPartFourthWork: 'Une fois les informations collectées, le communicateur entreprend la tâche complexe de traduire ces données en langage humain compréhensible. Cette traduction va au-delà de la simple transmission de faits bruts ; elle implique la contextualisation des besoins émotionnels de l\'animal, l\'explication de comportements spécifiques et la création d\'un pont de compréhension entre l\'humain et l\'animal.',
        subtitleThirdPartFourthWork: '3. Partage des Besoins Émotionnels',
        thirdPartFourthWork: 'Le communicateur agit comme un canal de communication entre l\'animal et son propriétaire, partageant les besoins émotionnels de l\'animal d\'une manière accessible. Il peut expliquer comment répondre à ces besoins, favorisant ainsi une compréhension plus profonde de la vie émotionnelle de l\'animal.',
        subtitleFourthPartFourthWork: '4. Conseils pour Améliorer la Relation',
        fourthPartFourthWork: 'En plus d\'expliquer les besoins émotionnels et les comportements spécifiques, le communicateur offre des conseils pratiques pour améliorer la relation entre l\'humain et l\'animal. Ces conseils peuvent concerner des ajustements dans l\'environnement de l\'animal, des changements dans les routines quotidiennes, ou des approches spécifiques pour répondre aux besoins particuliers de l\'animal.',

        //Choice
        calendar: 'Mon Calendrier',
        seeMyExercises: 'Voir mes Exercices',

        // Navigation
        exercice: 'Exercices',
        home: 'Accueil',
        about: 'À Propos',
        myAccount: 'Mon Compte',

        // SignUp
        createAccount: 'Créer un compte',
        name: 'Nom',
        firstName: 'Prénom',
        mail: 'Adresse Mail',
        address: 'Adresse',
        city: 'Ville',
        state: 'Pays',
        zipCode: 'Code Postal',
        age: 'Âge',
        login: 'Connexion',
        phoneNumber: 'Téléphone',
        password: 'Mot de passe',
        confirmPassword: 'Confirmation du mot de passe',
        register: "S'inscrire",
        haveAccount: 'Vous avez un compte ?',
        fillAllFields: 'Veuillez remplir tous les champs.',
        passwordsDoNotMatch: 'Les mots de passe ne correspondent pas.',
        passwordRequirements: 'Le mot de passe doit contenir au moins 9 caractères, 1 majuscule, 1 minuscule et 1 caractère spécial.',
        numericZipCode: 'Le code postal doit contenir uniquement des caractères numériques.',
        numericPhoneNumber: 'Le numéro de téléphone doit contenir uniquement des caractères numériques.',

        // Account
        connexionInformation: 'Informations de connexion',
        dateCreationAccount: 'Date de création du compte',
        dateLastConnexionAccount: 'Date de dernière connexion',
        recentActivity: 'Activité récente',

        // Profile
        myProfil: 'Mon Profil',
        lastName: 'Nom de Famille',
        save: 'Sauvegarder',
        reset: 'Réinitialiser',
        cancel: 'Annuler',

        // Menu
        changePassword: 'Changement de mot de passe',
        changeAddress: 'Changement d\'adresse',
        myFormations: 'Mes Formations',
        dashboard: 'Tableau de Bord',

        // ResetPassword
        passwordConfirm: 'Confirmation du mot de passe',
        savePassword: 'Sauvegarder votre mot de passe',
        resetPassword: 'Réinitialiser votre mot de passe',
        passwordNotDifferent: 'Le nouveau mot de passe doit être différent de l\'ancien',
        
        // AboutCom
        animalComTitle: 'La Communication Animale',
        firstpAnimalCom: 'La communication animale est un domaine fascinant qui englobe les différents moyens par lesquels les animaux interagissent et échangent des informations entre eux. Cette forme de communication peut revêtir de nombreuses facettes et varier considérablement d\'une espèce à l\'autre.',
        secondpAnimalCom: 'Les animaux communiquent pour diverses raisons, notamment la sélection de partenaires sexuels, la défense du territoire, la coordination sociale, les signaux d\'alarme et l\'établissement de hiérarchies sociales. La manière dont la communication est utilisée varie considérablement d\'une espèce à l\'autre.',
        thirdpAnimalCom: 'La communication animale peut être très complexe, certaines espèces ayant des systèmes de communication sophistiqués. Cette évolution a conduit à une grande diversité de systèmes de communication parmi les espèces animales.',
        fourthpAnimalCom: 'En résumé, la communication animale est un domaine vaste et diversifié qui englobe une multitude de moyens par lesquels les animaux échangent des informations pour survivre, se reproduire et coopérer au sein de leur environnement. Elle représente un aspect fascinant de la biologie et de l\'éthologie animale.',

        // Preparation
        titlePreparation: 'Préparation à la Communication Animale',
        subtitlePreparation: 'Comment apprendre la communication animale ?',
        firstpPreparation: 'Vous savez peut-être que tout le monde peut communiquer intuitivement avec les animaux ? Oui, promis, ce n\'est pas une légende. Cela demande un peu d\'entraînement, mais pas plus que pour apprendre à faire du vélo. La communication animale est une communication non verbale, qui passe par nos sens de perception.',
        secondpPreparation: 'Ainsi, nous recevons une information soit en entendant, en voyant, ou en ressentant dans notre corps, comme dans un rêve éveillé. Cependant, il est peu courant de communiquer ainsi avec un animal sans s\'entraîner et développer des outils que je nommerais fondamentaux. Je vous propose de découvrir les 5 étapes clés pour apprendre à communiquer avec un animal.',
        btn1Preparation: 'L\'Ancrage',
        btn2Preparation: 'L\'Ouverture du Cœur',
        btn3Preparation: 'La Relaxation',
        btn4Preparation: 'La Connexion',
        btn5Preparation: 'Les Échanges Sensoriels',

        // Anchoring
        titleAnchoring: 'La première étape: l\'Ancrage',
        subtitleAnchoring: 'Vous allez vous dire "ça commence bien! Je comprends déjà rien!".',
        firstpAnchoring: 'Pas de panique. C\'est juste un terme un peu ésotérique très simple à comprendre. Il reprend la base de tout apprentissage, quelle que soit la discipline : le besoin de SÉCURITÉ. Pour apprendre de nouvelles choses, pour s\'ouvrir à de nouvelles pratiques, il est nécessaire de se sentir suffisamment en confiance avec soi, avec l\'autre, avec son environnement pour oser sortir de sa zone de confort et être disponible à de nouvelles informations.',
        secondpAnchoring: 'Donc, la première étape c\'est d\'être en confiance et en sécurité. Qu\'en pensez-vous ? L\'ancrage est lié à notre chakra racine, le siège de la peur. C\'est aussi le chakra de "base", le socle. Ce chakra parle aussi de nos racines, nos origines. Donc, la première chose à faire c\'est observer de quoi je peux avoir peur et s\'en défaire. Pas en niant cette peur, mais au contraire en l\'observant, en lui donnant la possibilité de s\'exprimer, en écoutant de quoi elle parle et en la laissant partir.',
        thirdpAnchoring: 'Je vous propose quelques exercices simples et efficaces pour vous aider à renforcer votre ancrage à un instant donné.',
        firstListAnchoring: 'Fermez les yeux et visualisez des racines qui partent de vos pieds vers le sol. Renforcez cette visualisation en observant les détails de ces racines, en les visualisant en train de se démultiplier et de grandir, en mettant une attention particulière sur une racine pivot qui s\'enfonce en profondeur dans le sol ou en observant les connexions entre vos racines et celles des personnes qui sont à côté de vous, des arbres et des plantes à proximité.',
        secondListAnchoring: 'Mettez votre attention sur le bas de votre ventre, déposez vos mains pour intensifier l\'exercice, et imaginez que vous descendez votre "conscience" ou votre cerveau par un tunnel, un ascenseur, un escalier, ou par l\'attraction terrestre, jusqu\'au bas de votre ventre. Complétez cet exercice par un test de force musculaire avant et après en essayant de pousser un objet difficile à déplacer, et observez la différence de force avant et après l\'ancrage. C\'est souvent très parlant...',
        thirdListAnchoring: 'Allez simplement en forêt et posez l\'intention que les arbres vous aident à vous ancrer. Faites du sport ou des activités physiques comme le yoga, le tai-chi, des arts martiaux...',

        // OpenHearth
        titleOpenHearth: 'La deuxième étape: l\'Ouverture du Cœur',
        firstpOpenHearth: 'Quelques exercices pour vous permettre de ressentir l\'ouverture du cœur et l\'énergie d\'amour.',
        secondpOpenHearth: 'Voici une musique à écouter :',
        musicOpenHearth: 'Fréquence de l\'Amour, fréquence miraculeuse',
        thirdpOpenHearth: 'Demandez à une personne que vous connaissez de faire cet exercice avec vous : asseyez-vous face à face, assez proche pour pouvoir vous toucher, et respirez profondément. Ensuite, posez l\'intention de transmettre tout votre amour à l\'autre à travers votre respiration. Vous pouvez imaginer une "énergie", des cœurs, une lumière qui part de votre cœur et qui va jusqu\'au cœur de votre compagnon ou compagne lors de votre expiration.',
        fourthpOpenHearth: 'Variante : faites traverser l\'énergie par vos bras, vos mains jusqu\'aux mains de votre partenaire. Faites un débriefing des sensations de chacun et inversez ensuite les rôles. Vous pouvez aussi mettre une musique inspirante pendant l\'exercice.',
        fifthpOpenHearth: 'Mettez-vous en état de relaxation grâce à de la musique, un accompagnement, ou simplement par la respiration. Posez votre attention sur votre chakra du cœur ou votre cœur physique, et respirez profondément pendant plusieurs minutes en observant ce que vous ressentez, ce qu\'il se passe en vous. Accueillez les images, les sensations, les odeurs, les sons...',

        // Relaxation
        titleRelaxation: 'La troisième étape: la relaxation',
        subtitleRelaxation: 'Qu\'est-ce que l\'état Alpha ?',
        firstpRelaxation: 'Comme vous vous en doutiez, pour capter des informations subtiles, il est nécessaire d\'être détendu et relaxé. Cela correspond à l\'état modifié de conscience "alpha". Dans cet état, vos pensées sont moins présentes, votre respiration est plus lente, votre corps est détendu, et vos émotions sont calmes.',
        secondpRelaxation: 'Des méditations, des exercices de respiration, du yoga, de la sophrologie, entre autres, sont des outils intéressants à cet effet. De plus, tout ce que vous pratiquez dans ce sens contribuera à vivre avec sérénité au quotidien, loin des tensions de notre société moderne.',
        thirdpRelaxation: 'Cet état particulier de conscience se caractérise par une diminution de l\'activité mentale, une respiration plus lente, une détente corporelle accrue, et un calme émotionnel. Lorsque vous êtes dans cet état, vos pensées sont moins envahissantes, votre respiration devient plus profonde et régulière, votre corps se relâche, et vos émotions sont apaisées.',
        fourthpRelaxation: 'Il est à noter que les bienfaits de ces pratiques ne se limitent pas à la communication animale. En effet, tout ce que vous intégrez dans votre vie quotidienne pour favoriser la détente et la relaxation contribuera à vivre avec plus de sérénité et à éloigner les tensions liées aux défis de la société moderne.',

        // Spirit
        titleSpirit: 'La quatrième étape: la connexion',
        subtitleSpirit: 'Vous voilà enfin prêt à vous connecter à un animal ! Génial, mais comment fait-on maintenant ?',
        firstpSpirit: 'Avant tout, je vous invite à poser une intention claire et au présent : "je suis connecté avec (le nom de l\'animal)", à répéter 3 fois. Que vous connaissiez l\'animal ou non, il est nécessaire d\'avoir une photo de lui à regarder avant ou pendant la connexion.',
        secondpSpirit: 'Vous pouvez également le faire avec l\'animal à côté de vous. Cependant, ses mouvements, voire le fait qu\'il puisse partir, peuvent être perturbateurs. Une photo, elle, est normalement totalement immobile !',
        thirdpSpirit: 'Ensuite, diverses astuces et "trucs" vont vous aider à capter l\'animal, le ressentir, l\'entendre. Ces petites astuces dépendent de votre mode de fonctionnement sensoriel (visuel, auditif, kinesthésique).',
        fourthpSpirit: 'Je vous propose une méthode de "connexion". Si cela ne fonctionne pas, ne vous inquiétez pas, c\'est simplement soit que votre préparation n\'est pas suffisante, soit que ce n\'est pas la bonne méthode pour vous...',
        fifthpSpirit: 'Fermez les yeux, inspirez l\'image de la photo jusqu\'à votre cœur, puis visualisez l\'animal. Observez ce que vous ressentez dans votre corps, vos émotions, voyez comment l\'animal se présente, sa façon de bouger, l\'environnement dans lequel il se trouve... écoutez, sentez. Chaque infime "information" a son importance...',

        // Sensory
        titleSensory: 'La cinquième et dernière étape: les échanges sensoriels',
        subtitleSensory: 'Comme expliqué ci-dessus, vous êtes maintenant prêt à échanger avec l\'animal (peut-être le vôtre ?).',
        firstpSensory: 'Plus vous prenez l\'habitude de ressentir votre corps, d\'écouter ou de regarder consciemment (en y prêtant attention) au quotidien, plus vous affinerez vos perceptions pour ressentir les différences lorsque vous vous connectez à un animal.',
        secondpSensory: 'Une fois la connexion établie, vous pouvez choisir de laisser venir les sensations et/ou d\'orienter l\'échange en posant des questions, en attendant de voir ce qu\'il se passe en vous. Je vous souhaite de belles expérimentations et de belles découvertes dans ce monde invisible mais pourtant très présent dans notre monde physique.',
        thirdpSensory: 'Les informations en communication animale peuvent être vérifiées par le propriétaire de l\'animal en question. Toutes les corrélations existantes permettent aujourd\'hui à de nombreuses personnes de découvrir et de faire appel à la communication animale.',

        // Foundation
        titleFirstFormation: 'Introduction à la Communication Animale',
        subtitleFirstFormation: 'Section 1 : Les Fondements de la Communication Animale',
        subtitleFirstPart: '1.1 Définition de la Communication Animale',
        firstpFirstFormation: 'Explorez l\'univers fascinant de la communication animale en examinant ses bases et son rôle crucial dans la création de liens profonds entre les humains et les animaux.',
        secondpFirstFormation: 'Découvrez la communication animale comme une méthode extraordinaire pour comprendre les besoins, les émotions et les pensées des animaux.',
        thirdpFirstFormation: 'Explorez les différentes formes de communication animale, notamment la riche palette de signaux non verbaux qui transcendent les barrières linguistiques.',
        secondsubtitleFirstPart: '1.2 Compréhension des Principes Télépathiques',
        fourthpFirstFormation: 'Plongez dans le monde mystérieux des principes télépathiques qui sous-tendent la communication animale, vous permettant de transcender les limites des sens physiques conventionnels.',
        fifthpFirstFormation: 'Comprenez les principes télépathiques comme une voie de transmission d\'informations au-delà des moyens traditionnels, ouvrant la porte à une connexion plus profonde.',
        sixthpFirstFormation: 'Explorez les dimensions de l\'intuition et de la réception empathique, des compétences clés pour établir une communication subtile avec les êtres sensibles.',
        subtitleFirstFormation2: 'Section 2 : Éthique et Respect en Communication Animale',
        subtitleSecondPart: '2.1 Éthique de la Communication Animale',
        seventhpFirstFormation: 'Sensibilisez-vous aux nuances éthiques de la communication animale, guidant les participants vers une pratique responsable et respectueuse.',
        eighthpFirstformation: 'Explorez la responsabilité éthique qui accompagne la communication avec les animaux, soulignant l\'importance de chaque interaction.',
        ninthpFirstFormation: 'Mettez en lumière l\'importance cruciale du respect envers la volonté et l\'intégrité de l\'animal, jetant les bases d\'une communication authentique et éthique.',
        subtitleThirdPart: '2.2 Respect envers les Animaux',
        tenthpFirstFormation: 'Approfondissez votre compréhension de l\'importance du respect envers les animaux dans le contexte de la communication animale, créant ainsi des relations harmonieuses.',
        eleventhpFirstFormation: 'Explorez la nature unique de chaque individu animal, découvrant la richesse et la diversité des personnalités animales.',
        twelfthpFirstFormation: 'Engagez-vous dans des discussions approfondies sur la manière de reconnaître et de respecter les limites individuelles des animaux, favorisant ainsi une compréhension profonde et respectueuse.',
          
        // Meditation
        titleSecondFormation: 'Méditation de Connexion',
        subtitleSecondFormation: 'Pratique de la Méditation de Connexion',
        subtitleFirstPartSecondFormation: 'Section 1 : Explication des bienfaits de la méditation',
        firstpSecondFormation: 'La méditation de connexion offre de nombreux bienfaits pour établir une communication profonde avec les animaux.',
        secondpSecondFormation: 'Apaisement de l\'esprit et réduction du stress, créant un espace propice à la réception télépathique.',
        thirdpSecondFormation: 'Développement de la concentration et de l\'intuition, des compétences essentielles pour la communication animale.',
        subtitleSecondFormation2: 'Section 2 : Instructions détaillées pour la méditation de connexion',
        fourthpSecondFormation: 'Avant de commencer la méditation, assurez-vous d\'être dans un endroit calme et confortable.',
        fifthpSecondFormation: 'Asseyez-vous en position confortable, fermez les yeux et commencez à respirer profondément pour vous détendre.',
        sixthpSecondFormation: 'Imaginez une lumière blanche ou dorée entourant votre être, créant une barrière d\'énergie positive.',
        seventhpSecondFormation: 'Visualisez un lien télépathique se formant entre vous et l\'animal que vous souhaitez contacter.',
        eighthpSecondformation: 'Restez ouvert et réceptif aux impressions, images, ou sensations qui pourraient émerger.',
        subtitleSecondFormation3: 'Exercice pratique : Méditation de connexion avec un animal choisi',
        ninthpSecondFormation: 'Choisissez un animal avec lequel vous souhaitez établir une connexion. Visualisez cet animal pendant la méditation et essayez d\'entrer en communication silencieuse avec lui.',
        tenthpSecondFormation: 'Prenez note des impressions, des émotions ou des images qui se présentent pendant la méditation.',
        eleventhpSecondFormation: 'Après la méditation, réfléchissez sur votre expérience et notez toute information pertinente que vous avez reçue.',

        // Silent
        titleThirdFormation: 'Photo Silencieuse',
        subtitleThirdFormation: 'La Puissance de la Visualisation',
        subtitleFirstPartThirdFormation: 'Section 1 : La Visualisation en tant qu\'Outil de Communication',
        firstpThirdFormation: 'Explorez les pouvoirs fascinants de la visualisation en tant qu\'outil de communication intuitive, dévoilant un langage visuel riche et profond.',
        secondpThirdFormation: 'Identifiez les avantages uniques de la visualisation dans le contexte captivant de la communication animale.',
        subtitleThirdFormation2: 'Section 2 : Explication du Concept de la Photo Silencieuse',
        thirdpThirdFormation: 'Plongez dans le monde évocateur de la photo silencieuse, définissant cette méthode intrigante comme un moyen de transmettre des informations au-delà des frontières des mots.',
        fourthpThirdFormation: 'Découvrez des exemples concrets illustrant comment la photo silencieuse peut être appliquée de manière puissante dans diverses situations.',
        subtitleThirdFormation3: 'Exercice pratique : Méditation de connexion avec un animal choisi',
        fifthpThirdFormation: 'Vivez une expérience immersive en choisissant une photo d\'un animal et pratiquez l\'art subtil de la communication silencieuse, établissant une connexion profonde à travers l\'image.',
        sixthpThirdFormation: 'Prenez des notes sur vos impressions et expériences uniques après cet exercice, explorant ainsi les nuances captivantes de la communication visuelle avec nos compagnons animaux.',

        // Conversation
        titleFourthFormation: 'Conversation Écrite',
        subtitleFourthFormation: 'Établir une Communication Écrite',
        subtitleFirstPartFourthFormation: 'Section 1 : Introduction à la Communication par l\'Écrit',
        firstpFourthFormation: 'Plongez dans le monde captivant de la communication animale à travers l\'écriture, explorant une dimension où les mots deviennent des ponts entre les humains et les animaux.',
        secondpFourthFormation: 'Engagez-vous dans une discussion approfondie sur la clarté et la précision nécessaires pour que la communication écrite soit une passerelle authentique.',
        subtitleSecondPartFourthFormation: 'Section 2 : Guide Étape par Étape pour la Conversation Écrite avec un Animal',
        thirdpFourthFormation: 'Découvrez un guide détaillé, étape par étape, pour initier et maintenir une communication écrite profonde avec nos amis à fourrure et à plumes.',
        fourthpFourthFormation: 'Recevez des conseils pratiques sur la manière de rester ouvert et réceptif aux réponses intuitives qui émergent au fil de l\'écriture, élargissant ainsi votre connexion.',
        subtitleThirdPartFourthFormation: 'Exercice Pratique : Poser des Questions et Recevoir des Réponses Intuitives par Écrit',
        fifthpFourthFormation: 'Participez à un exercice stimulant en posant des questions à un animal et en notant les réponses intuitives qui se manifestent pendant le processus d\'écriture.',
        sixthpFourthFormation: 'Partagez vos expériences uniques avec le groupe après l\'exercice, créant une communauté d\'apprentissage où chacun peut bénéficier des perspectives variées.',

        // Empathic
        titleFifthFormation: 'Observation Empathique',
        subtitleFifthFormation: 'Développer l\'Empathie envers les Animaux',
        subtitleFirstPartFifthFormation: 'Section 1 : L\'Observation Attentive du Comportement Animal',
        firstpFifthFormation: 'Explorez la profondeur de la communication animale en reconnaissant l\'importance cruciale de l\'observation attentive du comportement animal.',
        secondpFifthFormation: 'Engagez-vous dans des discussions enrichissantes sur la façon dont le comportement animal peut être une forme subtile, mais puissante, de communication.',
        thirdpFifthFormation: 'Explorez les signes subtils qui révèlent les émotions des animaux, dévoilant ainsi un langage non verbal riche et complexe.',
        subtitleSecondPartFifthFormation: 'Section 2 : Techniques pour Développer l\'Empathie envers les Animaux',
        fourthpFifthFormation: 'Plongez dans l\'art de développer une connexion empathique plus profonde avec les animaux en apprenant des techniques éprouvées.',
        fifthpFifthFormation: 'Explorez des méthodes fascinantes pour entrer en résonance émotionnelle avec les animaux, renforçant ainsi votre capacité à comprendre et à partager leurs émotions.',
        sixthpFifthFormation: 'Découvrez la relation intime entre l\'empathie et la communication animale, élargissant ainsi votre compréhension de la communication interespèces.',
        subtitleThirdPartFifthFormation: 'Exercice Pratique : Observer un Animal et Ressentir ses Émotions.',
        seventhpFifthFormation: 'Choisissez un compagnon animal et engagez-vous dans l\'observation attentive de son comportement. Explorez la profondeur de vos sensations en essayant de ressentir ses émotions et partagez vos observations au sein du groupe.',
        eighthpFifthFormation: 'Stimulez des conversations animées en discutant des expériences variées au sein du groupe, créant ainsi une communauté d\'apprentissage partageant une passion commune pour la compréhension empathique des animaux.',

        // Walking
        titleSixthFormation: 'Marche Consciente',
        subtitleSixthFormation: 'La Connexion à travers l\'Activité Physique',
        subtitleFirstPartSixthFormation: 'Section 1 : Avantages de la Marche Consciente avec un Animal',
        firstpSixthFormation: 'Comprenez les avantages de la marche consciente en tant qu\'outil de connexion avec les animaux.',
        secondpSixthFormation: 'Discussion sur la manière dont l\'activité physique peut renforcer la communication.',
        thirdpSixthFormation: 'Exploration des bienfaits pour le bien-être mental et émotionnel.',
        subtitleSecondPartSixthFormation: 'Section 2 : Guide pour une Marche Consciente avec un Animal',
        fourthpSixthFormation: 'Fournissez des directives détaillées pour une marche consciente réussie.',
        fifthpSixthFormation: 'Étapes pour préparer mentalement et émotionnellement la marche.',
        sixthpSixthFormation: 'Techniques pour maintenir une connexion silencieuse pendant l\'activité.',
        subtitleThirdPartSixthFormation: 'Exercice pratique : Établir une connexion silencieuse pendant une promenade',
        seventhpSixthFormation: 'Prenez une marche consciente avec un animal. Concentrez-vous sur la connexion silencieuse et partagez vos expériences.',
        eighthpSixthFormation: 'Discutez des différents aspects de la marche consciente au sein du groupe.',

        // Practical
        titleSeventhFormation: 'Application Pratique',
        subtitleSeventhFormation: 'Mise en Pratique Globale',
        subtitleFirstPartSeventhFormation: 'Section 1 : Récapitulation des Techniques Enseignées',
        firstpSeventhFormation: 'Plongez dans une révision captivante des techniques enseignées au fil des modules, consolidant ainsi les compétences acquises jusqu\'à présent.',
        secondpSeventhFormation: 'Élaborez un résumé enrichi des compétences clés développées, formant la base solide de votre parcours de communication animale.',
        thirdpSeventhFormation: 'Revoyez les différentes méthodes de communication animale, explorant les nuances subtiles qui les rendent uniques et puissantes.',
        subtitleSecondPartSeventhFormation: 'Section 2 : Encouragement à Appliquer les Méthodes dans la Vie Quotidienne',
        fourthpSeventhFormation: 'Inspirez les participants à intégrer la magie de la communication animale dans leur vie quotidienne, transformant ainsi leur relation avec le monde animal qui les entoure.',
        fifthpSeventhFormation: 'Engagez-vous dans des discussions stimulantes sur la manière d\'appliquer ces compétences dans diverses situations, des moments simples aux défis plus complexes de la vie quotidienne.',
        sixthpSeventhFormation: 'Encouragez une pratique régulière, offrant des conseils pratiques pour renforcer continuellement leurs capacités de communication animale.',
        subtitleThirdPartSeventhFormation: 'Partage d\'Expériences et de Résultats',
        seventhpSeventhFormation: 'Créez un espace chaleureux et encourageant pour que les participants partagent leurs expériences et leurs succès, formant ainsi une communauté vibrante de communicateurs animaux.',
        eighthpSeventhFormation: 'Écoutez des anecdotes inspirantes liées à l\'application des techniques, créant ainsi une source d\'inspiration pour tous les participants.',
        ninthpSeventhFormation: 'Facilitez des discussions riches sur les défis rencontrés et les leçons apprises, favorisant ainsi une croissance continue au sein de la communauté.',

        // Ethics
        titleEighthFormation: 'Éthique et Respect',
        subtitleEighthFormation: 'Respect envers les Animaux et Éthique',
        subtitleFirstPartEighthFormation: 'Section 1 : Discussions sur l\'Importance du Respect envers les Animaux',
        firstpEighthFormation: 'Plongez dans une réflexion profonde sur l\'importance fondamentale du respect envers les animaux dans le contexte de la communication, établissant ainsi des bases solides pour des relations respectueuses.',
        secondpEighthFormation: 'Explorez les multiples facettes du respect envers les animaux, allant au-delà des gestes courants pour embrasser une compréhension profonde de leurs besoins et de leur dignité.',
        thirdpEighthFormation: 'Engagez-vous dans des discussions riches sur la responsabilité envers nos amis animaux, nourrissant ainsi une approche éthique et bienveillante de la communication interespèces.',
        subtitleSecondPartEighthFormation: 'Section 2 : Considérations Éthiques dans la Communication Animale',
        fourthpEighthFormation: 'Sensibilisez-vous aux nuances délicates des considérations éthiques spécifiques à la communication animale, naviguant avec soin dans les défis moraux et les dilemmes éthiques qui peuvent émerger.',
        fifthpEighthFormation: 'Explorez des dilemmes éthiques courants, encourageant ainsi une réflexion approfondie sur la manière dont nous interagissons avec nos compagnons animaux.',
        sixthpEighthFormation: 'Développez une compréhension éthique personnelle solide, créant ainsi une base pour des interactions respectueuses et alignées avec vos valeurs.',

        // Tools
        titleNinthFormation: 'Ressources et Outils',
        subtitleNinthFormation: 'Ressources pour Approfondir la Communication Animale',
        subtitleFirstPartNinthFormation: 'Section 1 : Livres, Vidéos et Autres Ressources Recommandées',
        firstpNinthFormation: 'Ouvrez la porte à un monde de connaissances avec des ressources soigneusement sélectionnées pour approfondir la compréhension de la communication animale.',
        secondpNinthFormation: 'Explorez des recommandations de livres captivants, de vidéos inspirantes et d\'autres supports qui enrichiront votre parcours.',
        thirdpNinthFormation: 'Élargissez votre perspective en explorant diverses sources, permettant ainsi une exploration holistique de la communication interespèces.',
        subtitleSecondPartNinthFormation: 'Section 2 : Outils Supplémentaires pour Renforcer la Connexion',
        fourthpNinthFormation: 'Découvrez des outils et accessoires spécialement conçus pour soutenir et amplifier la communication animale, ajoutant une dimension pratique et tangible à votre parcours.',
        fifthpNinthFormation: 'Examinez l\'utilisation de cristaux, de cartes d\'oracle et d\'autres outils dans la communication animale, explorant ainsi des méthodes riches et variées.',
        sixthpNinthFormation: 'Recevez des conseils pratiques sur la manière d\'incorporer ces outils dans votre pratique quotidienne, créant ainsi une expérience de communication animale plus immersive.',

        // Conclusion
        titleTenthFormation: 'Conclusion',
        subtitleTenthFormation: 'Intégration et Continuité',
        subtitleFirstPartTenthFormation: 'Section 1 : Récapitulation des Compétences Acquises',
        firstpTenthFormation: 'Plongez dans une récapitulation éclairante des compétences acquises tout au long de cette aventure enrichissante de communication animale.',
        secondpTenthFormation: 'Revoyez les principaux concepts et compétences, consolidant ainsi votre compréhension profonde de la communication interespèces.',
        thirdpTenthFormation: 'Partagez vos histoires de réussite et de progrès personnels, célébrant ainsi les moments clés de votre parcours unique.',
        subtitleSecondPartTenthFormation: 'Section 2 : Encouragement à Continuer le Développement de la Communication Animale',
        fourthpTenthFormation: 'Sentez le vent de motivation souffler fort, vous incitant à continuer votre parcours de développement personnel et à approfondir votre connexion avec le monde animal.',
        fifthpTenthFormation: 'Recevez des conseils pratiques pour maintenir une pratique régulière, nourrissant ainsi votre croissance continue en communication animale.',
        sixthpTenthFormation: 'Lancez-vous dans l\'exploration de sujets plus avancés, défiant ainsi vos limites et stimulant une croissance intellectuelle soutenue.',
        subtitleThirdPartTenthFormation: 'Perspectives pour l\'Avenir',
        seventhpTenthFormation: 'Explorez les horizons fascinants qui s\'ouvrent devant vous, offrant une vision inspirante de l\'avenir de la communication animale et de ses innombrables possibilités.',
        eighthpTenthFormation: 'Participez à des discussions dynamiques sur les tendances émergentes dans le domaine, restant ainsi à la pointe de l\'évolution de la communication interespèces.',
        ninthpTenthFormation: 'Plongez dans l\'exploration de nouvelles approches et technologies, ouvrant ainsi la porte à des découvertes passionnantes et à des avancées significatives.',

        // E-commerce
        formationsEcommerce: 'Formations',
        difficulty: 'Difficulté :',
        addToCart: 'Ajouter au panier',
        price: 'Quarante euros seulement',
        basketSummary: 'Récapitulatif de mon panier',
        delete: 'Supprimer',
        cards: [
          {
            name: 'Introduction',
            description: 'Le Fondement de la Communication Animale',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Méditation de Connexion',
            description: 'Pratique de la Méditation de Connexion',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Photo Silencieuse',
            description: 'La Puissance de la Visualisation',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Conversation Écrite',
            description: 'Établir une Communication Écrite',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Observation Empathique',
            description: 'Développer l\'Empathie envers les Animaux',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Marche Consciente',
            description: 'La Connexion à travers l\'Activité Physique',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Application Pratique',
            description: 'Mise en Pratique Globale',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Éthique et Respect',
            description: 'Respect envers les Animaux et Éthique',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Ressources et Outils',
            description: 'Ressources pour Approfondir la Communication Animale',
            duration: 'Durée : 3H00',
          },
          {
            name: 'Conclusion',
            description: 'Intégration et Continuité',
            duration: 'Durée : 3H00',
          },
        ],
        cart: 'Panier',
        priceCart: 'Prix',
        buy: 'Acheter',
        trainingInformation: 'Informations de la formation',

        // Cookies
        cookies: 'Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur le site, vous acceptez notre utilisation des cookies.',
        agreeCookies: 'J\'accepte',

        informationCV: 'Voici un aperçu de mon profil, avec mes différentes expériences et formations que j\'ai pu suivre. N\'hésitez pas à me contacter si vous souhaitez plus d\'informations.',

        // ContactMe
        labelName: 'Indiquez votre nom',
        labelFirstName: 'Indiquez votre prénom',
        labelMail: 'Indiquez votre adresse mail',
        labelMessage: 'Indiquez votre message',
        sendMessage: 'Envoyez votre message',
      }  
    },
    en: { 
      translation: {
        // Header
        headerProject: 'Welcome to',
        headerTogether: 'AnimalCom!',
        headerAnimCom: 'Trainer and Advisor in Animal Communication',
        aboutCom: 'About Communication',
        training: 'My Lessons',
        contactMe: 'Contact Me',

        // Description
        description: 'Description',
        whoami: 'Who am I?',
        descriptionFirst: 'I am someone who has always loved taking care of others since childhood. This passion led me to become a nurse. I have always enjoyed the company of animals and have formed special bonds with those who have shared my life.',
        seeMore: 'See More',
        whatido: 'What I do?',
        descriptionSecond: 'Through a learned process, I connect with animals using a photo that shows their face, along with their first name and age. Above all, I seek their approval to initiate communication.',

        // Footer
        madeby: 'Made by',

        // AboutMe
        aboutMe: 'About Me',
        story: 'A Story of Hard Work and Conviction',
        passionateCom: 'My name is Valentine, and I am 26 years old. I have always loved taking care of others since childhood, leading me to become a nurse. I have always enjoyed the companionship of animals and formed special bonds with those who have shared my life.',
        passionateCom2: 'Currently the guardian of two cats, Bagheera and Boobie, they have always been able to communicate with me in a unique way. I discovered the possibility of connecting with them to better understand their needs.',
        passionateCom3: 'The training opportunity presented itself, and I seized it. I have learned a lot and continue to learn because it\'s an ongoing journey. Today, I have the opportunity to share my knowledge and help others understand the animals that share our daily lives.',
        passionateCom4: 'Please bear with me as I am still learning.',
        myServices: 'My Services',
        titleFirstService: 'Individual Communication',
        titleSecondService: 'Communication Workshops',
        titleThirdService: 'Distance Communication',
        firstService: 'Immerse yourself in the fascinating world of animal communication with our individual consultation service. I have a deep connection with the animal kingdom, enabling me to facilitate communication between you and your four-legged companion. During these personalized sessions, I use intuitive skills to understand the needs, emotions, and thoughts of your animal. Whether you want to address undesirable behaviors, understand undiagnosed health issues, or simply strengthen your bond with your animal, our individual consultations provide unique insights. I will establish a telepathic connection with your animal, allowing you to better understand its feelings, concerns, and foster a harmonious relationship.',
        secondService: 'Join our group animal communication workshops and discover the magic of interspecies connection. Led by me, these group sessions bring together animal lovers who share the same passion. These workshops offer a rewarding experience where you can learn the basics of animal communication, share your experiences, and interact with other pet owners. During these workshops, I will guide the group through practical exercises and communication techniques that will deepen your mutual understanding with animals. Whether you are a beginner or already have knowledge of animal communication, these workshops are suitable for all levels and will help broaden your horizons.',
        thirdService: 'Distance is no longer a barrier to deep communication with your pet through our remote animal communication services. Whether you are geographically distant or prefer the comfort of your home, our remote sessions, led by me, offer you a unique opportunity to connect with your animal, regardless of your location. Through video calls or written sessions, I establish a telepathic connection with your animal to understand its needs, wishes, and emotions. This convenient option is ideal for people with busy schedules or those living in remote areas. Give your pet the gift of communication, regardless of the distance between you.',

        //Work
        myWork: 'My Work',
        titleFirstWork: 'Meditation and Centering',
        subtitleFirstPartFirstWork: '1. Mind Preparation',
        firstPartFirstWork: 'Before engaging in communication with an animal, the communicator starts by preparing their mind. Meditation serves as a transition from the busy daily routine to the delicate work of establishing a deep connection with animals. In a calm and serene environment, the communicator creates a space conducive to inner harmony. By releasing physical tensions and calming mental turmoil, meditation creates fertile ground for clear and precise telepathic communication.',
        subtitleSecondPartFirstWork: '2. Choice of Environment',
        secondPartFirstWork: 'The communicator carefully selects the place for meditation, favoring peaceful outdoor locations or quiet indoor spaces. The environment directly influences the quality of meditation, as a place imbued with serenity promotes a deeper connection with nature and surrounding energies.',
        subtitleThirdPartFirstWork: '3. Breathing Techniques',
        thirdPartFirstWork: 'Focusing on breathing is a fundamental practice. The communicator uses conscious breathing techniques to calm the heart rate, soothe the mind, and eliminate external distractions. By synchronizing breathing with mental presence, the communicator creates a state of mindfulness, establishing a solid foundation for animal communication.',
        subtitleFourthPartFirstWork: '4. Reception of Energies and Telepathic Messages',
        fourthPartFirstWork: 'Meditation serves as a gateway to receiving energies and telepathic messages from animals. By reaching a state of deep presence, the communicator becomes receptive to subtle impressions emanating from living beings around them. This heightened receptivity facilitates a natural transition to telepathic connection with animals.',
        titleSecondWork: 'Establishing a Telepathic Connection',
        subtitleFirstPartSecondWork: '1. Preliminary Centering',
        firstPartSecondWork: 'Before initiating the telepathic connection process, the communicator engages in a preliminary centering phase. This ensures they are mentally and emotionally prepared, eliminating external interference that could disrupt the reception of telepathic signals. Centering contributes to creating a conducive state for establishing a deep energetic connection.',
        subtitleSecondPartSecondWork: '2. Creation of a Clear Channel',
        secondPartSecondWork: 'The visualization of the energetic link is not merely symbolic; it creates a genuine channel of exchange between the communicator and the animal. This channel serves as a means of transmission for impressions, emotions, mental images, and even telepathic thoughts. A clear channel facilitates unimpeded communication, allowing the communicator to perceive the subtle aspects of the animal\'s inner experience.',
        subtitleThirdPartSecondWork: '3. Multisensory Reception',
        thirdPartSecondWork: 'Through this telepathic connection, the communicator receives information in a multisensory manner. Mental images, emotions, sensory impressions, and even direct thoughts can be perceived. This holistic reception contributes to a profound understanding of the animal\'s inner experience, transcending the barriers of verbal language.',
        titleThirdWork: 'Questioning and Interpretation of Responses',
        subtitleFirstPartThirdWork: '1. Post-Connection State',
        firstPartThirdWork: 'Once the telepathic connection is established, the communicator enters a state of heightened receptivity, ready to receive the animal\'s responses. This post-connection state is crucial to ensure a clear and precise transmission of questions and answers, transcending the barriers of verbal language.',
        subtitleSecondPartThirdWork: '2. Formulation of Precise Questions',
        secondPartThirdWork: 'The communicator poses precise questions to the animal, usually formulated mentally. These questions are designed to obtain specific information about the thoughts, emotions, or experiences of the animal. The precision of questions is crucial for receiving clear and meaningful responses.',
        subtitleThirdPartThirdWork: '3. Manifestation of Responses',
        thirdPartThirdWork: 'The animal\'s responses can manifest in various ways: mental images, physical sensations, felt emotions, or even telepathic words. Each modality of response contributes to the richness of the information exchanged between the communicator and the animal, offering a holistic perspective on the animal\'s inner state.',
        subtitleFourthPartThirdWork: '4. Example of Interpretation',
        fourthPartThirdWork: 'For example, if the animal transmits an image of itself playing in the grass, the communicator may interpret this as a sign of contentment or joy. Similarly, a feeling of discomfort may be interpreted as an indicator of a health issue. Interpretation goes beyond literal meaning, involving a deep connection with the animal\'s emotional experiences.',
        titleFourthWork: 'Facilitation of Understanding',
        subtitleFirstPartFourthWork: '1. Collection of Meaningful Information',
        firstPartFourthWork: 'The communicator collects meaningful information during communication with the animal. This data may include details about the emotions, needs, concerns, or experiences of the animal. The communicator\'s sensitivity allows them to capture subtle nuances that may escape conventional observation.',
        subtitleSecondPartFourthWork: '2. Translation into Human Language',
        secondPartFourthWork: 'Once the information is collected, the communicator undertakes the complex task of translating this data into understandable human language. This translation goes beyond the simple transmission of raw facts; it involves contextualizing the emotional needs of the animal, explaining specific behaviors, and creating a bridge of understanding between human and animal.',
        subtitleThirdPartFourthWork: '3. Sharing Emotional Needs',
        thirdPartFourthWork: 'The communicator acts as a communication channel between the animal and its owner, sharing the emotional needs of the animal in an accessible manner. They can explain how to address these needs, thus fostering a deeper understanding of the emotional life of the animal.',
        subtitleFourthPartFourthWork: '4. Advice for Improving the Relationship',
        fourthPartFourthWork: 'In addition to explaining emotional needs and specific behaviors, the communicator offers practical advice for improving the relationship between human and animal. This advice may involve adjustments in the animal\'s environment, changes in daily routines, or specific approaches to meet the unique needs of the animal.',
        
        //Choice
        calendar: 'My Calendar',
        seeMyExercices: 'See My Exercises',

        //Navigation
        exercice: 'Exercises',
        home: 'Home',
        about: 'About',
        myAccount: 'My Account',

        //SignUp
        createAccount: 'Create an Account',
        name: 'Name',
        firstName: 'First Name',
        mail: 'Email Address',
        address: 'Address',
        city: 'City',
        state: 'State',
        zipCode: 'Zip Code',
        age: 'Age',
        login: 'Login',
        phoneNumber: 'Phone Number',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        register: 'Register',
        haveAccount: 'Do you already have an Account?',
        fillAllFields: 'Please complete all fields.',
        passwordsDoNotMatch: 'Passwords do not match.',
        passwordRequirements: 'The password must contain at least 9 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character.',
        numericZipCode: 'The postal code must contain only numeric characters.',
        numericPhoneNumber: 'The phone number must contain only numeric characters.',

        //Account
        connexionInformation: 'Login Information',
        dateCreationAccount: 'Account creation date',
        dateLastConnexionAccount: 'Account last login',
        recentActivityAccount: 'Recent Activity',

        //Profile
        myProfil: 'My Profile',
        lastName: 'Last Name',
        save: 'Save',
        reset: 'Reset',
        cancel: 'Cancel',

        //Menu
        changeAddress: 'Change Address',
        changePassword: 'Change Password',
        myFormations: 'My Trainings',
        dashboard: 'Dashboard',

        //ResetPassword
        passwordConfirm: 'Password Confirmation',
        resetPassword: 'Reset Your Password',
        savePassword: 'Save Your Password',
        passwordNotDifferent: 'The new password must be different from the old one',        

        //AboutCom
        animalComTitle: 'Animal Communication',
        firstpAnimalCom: 'Animal communication is a fascinating field that encompasses the different ways animals interact and exchange information with each other. This form of communication can take on many facets and vary considerably from one species to another.',
        secondpAniamlCom: 'Animals communicate for various reasons, including selecting sexual partners, defending territory, coordinating socially, signaling warnings, and establishing social hierarchies. The way communication is used varies greatly from one species to another.',
        thirdpAnimalCom: 'Animal communication can be very complex, with some species having sophisticated communication systems. This evolution has led to a great diversity of communication systems among animal species.',
        fourthpAnimalCom: 'In summary, animal communication is a broad and diverse field that encompasses a multitude of means by which animals exchange information to survive, reproduce, and cooperate within their environments. It represents a fascinating aspect of animal biology and ethology.',
        
        //Preparation
        titlePreparation: 'Preparation for Animal Communication',
        subtitlePreparation: 'How to learn animal communication?',
        firstpPreparation: 'Did you know that everyone can communicate intuitively with animals? Yes, it\'s not a legend. It takes a little practice, but no more than learning to ride a bike. Animal communication is non-verbal communication, which passes through our senses of perception.',
        secondpPreparation: 'So we receive information either by hearing, seeing, or feeling in our body, as in a waking dream. However, it is unusual to communicate in this way with an animal without training and developing tools that I would call fundamental. I suggest you discover the 5 key steps to learning to communicate with an animal.',
        btn1Preparation: 'Grounding',
        btn2Preparation: 'The Opening of the Heart',
        btn3Preparation: 'Relaxation',
        btn4Preparation: 'The connection',
        btn5Preparation: 'Sensory exchanges',
        
        //Anchoring
        titleAnchoring: 'The first step: Anchoring',
        subtitleAnchoring: 'You might say, "That\'s a good start! I don\'t understand anything yet!".',
        firstpAnchoring: 'Do not panic. It\'s just a somewhat esoteric term that\'s very easy to understand. It takes up the basis of all learning, whatever it may be: the need for SAFETY. To learn new things, to open up to new practices, it is necessary to feel sufficiently confident with yourself, with others, with your environment to dare to leave your comfort zone and be available for new information.',
        secondpAnchoring: 'So the first step is to be confident and secure. What do you think? Grounding is linked to our root chakra, the seat of fear. It is also the “base” chakra, the base. This chakra also speaks of our roots, our origins. So the first thing to do is observe what I might be afraid of and let it go. Not by denying this fear but, on the contrary, by observing it, giving it the opportunity to express itself, listening to what it is talking about, and letting it go.',
        thirdpAnchoring: 'I offer you some simple and effective exercises to help you strengthen your anchoring at any given moment.',
        firstListAnchoring: 'Close your eyes and visualize roots extending from your feet towards the ground. Reinforce this visualization by observing the details of these roots, visualizing them multiplying, growing, and paying particular attention to a tap root that goes deep into the ground. Observe the connections between your roots and those of the people next to you or the trees and plants nearby.',
        secondListAnchoring: 'Put your attention on your lower stomach, place your hands there for even more intensity in the exercise, and imagine that you are descending your "consciousness" or your brain through a tunnel, an elevator, a staircase, or by the earth\'s attraction, down to the bottom of your stomach. Complete this exercise with a muscle strength test before and just after doing it, for example when trying to push an object that is difficult to move, and observe the difference in force before and after anchoring. It\'s often very telling...',
        thirdListAnchoring: 'Go to the forest and set the intention that the trees will help you ground yourself. Engage in sports or physical activities such as yoga, tai chi, martial arts, etc.',
        fourthpAnchoring: 'Know that if you feel that despite all this you have difficulty being present in your body and in your life in general, it is wise to seek support to release the blockages.',

        //OpenHearth
        titleOpenHearth: 'The Second Stage: Opening the Heart',
        firstpOpenHearth: 'Here are some exercises to help you feel the opening of the heart and the energy of love.',
        secondpOpenHearth: 'Listen to this music for an enhanced experience:',
        musicOpenHearth: 'Frequency of Love, Miraculous Frequency',
        thirdpOpenHearth: 'Invite someone you know to join you in this exercise: sit face to face, close enough to touch, and breathe deeply. Set the intention to transmit all your love to the other person through your breath. Envision an "energy," hearts, or a light starting from your heart and reaching your partner\'s heart as you exhale.',
        fourthpOpenHearth: 'Variation: pass the energy through your arms and hands into your partner\'s hands. Discuss everyone\'s feelings, then switch roles. You can enhance the exercise by playing inspiring music.',
        fifthpOpenHearth: 'Induce a state of relaxation through music, guided meditation, or simply through focused breathing. Place your attention on your heart chakra or physical heart and breathe deeply for several minutes, observing the sensations and images that arise within you.',

        //Relaxation
        titleRelaxation: 'The Third Stage: Relaxation',
        subtitleRelaxation: 'Understanding the Alpha State',
        firstpRelaxation: 'To capture subtle information, it is crucial to be in a relaxed state, often referred to as the “alpha” altered state of consciousness. This state involves reduced mental activity, slower breathing, bodily relaxation, and emotional calmness.',
        secondpRelaxation: 'Practices such as meditation, breathing exercises, yoga, and sophrology can facilitate this state. The benefits extend beyond animal communication, promoting overall serenity and resilience against the stresses of modern life.',
        thirdpRelaxation: 'Being in this state involves decreased mental intrusiveness, deepened and regular breathing, bodily relaxation, and emotional calmness. Integrating relaxation practices into your daily life contributes to living with serenity.',
        fourthpRelaxation: 'The advantages of these practices extend beyond animal communication, fostering a serene life amidst the challenges of modern society.',
        
        //Spirit
        titleSpirit: 'The Fourth Step: Connection',
        subtitleSpirit: 'Now that you\'re ready to connect with an animal, what\'s next?',
        firstpSpirit: 'Start by setting a clear intention in the present tense: “I am connected with (the name of the animal),” repeating it three times. Whether you know the animal or have a photo, focus on it before or during the connection.',
        secondpSpirit: 'You can also practice with the animal present, but be aware that its movements may be distracting. A photo, being still, is usually a better option.',
        thirdpSpirit: 'Explore various tips and tricks that align with your sensory preferences (visual, auditory, kinesthetic). These nuances can enhance your ability to capture the essence of the animal.',
        fourthpSpirit: 'I suggest a method for connection. If it doesn\'t work immediately, don\'t worry; it might be due to insufficient preparation or the need to find the right approach for you.',
        fifthpSpirit: 'With your eyes closed, breathe the image of the animal into your heart. Visualize the animal and observe sensations in your body, emotions, its movements, and surroundings. Every bit of information matters.',
        
        //Sensory
        titleSensory: 'The Fifth and Final Step: Sensory Exchanges',
        subtitleSensory: 'As mentioned earlier, you are now prepared to interact with the animal, perhaps your own.',
        firstpSensory: 'The more you cultivate the habit of consciously feeling your body and paying attention to your senses in daily life, the sharper your perceptions will become. This heightened awareness will allow you to feel the nuances when connecting with an animal.',
        secondpSensory: 'Once the connection is established, you have the option to let sensations come to you or guide the exchange by asking questions and observing your inner responses. I wish you enriching experiences and discoveries in this world that is invisible yet profoundly present in our physical reality.',
        thirdpSensory: 'Information obtained through animal communication can be validated by the animal owner. The correlations that may exist enable many people to discover and utilize the power of animal communication.',
        
        //Foundation
        titleFirstFormation: 'Introduction to Animal Communication',
        subtitleFirstFormation: 'Section 1: The Foundation of Animal Communication',
        subtitleFirstPart: '1.1 Definition of Animal Communication',
        firstpFirstFormation: 'Embark on a journey into the captivating realm of animal communication, exploring its foundations and its pivotal role in establishing profound connections between humans and animals.',
        secondpFirstFormation: 'Discover animal communication as an extraordinary method for understanding the needs, emotions, and thoughts of animals.',
        thirdpFirstFormation: 'Explore the diverse forms of animal communication, including the rich array of non-verbal signals that transcend linguistic barriers.',
        secondsubtitleFirstPart: '1.2 Understanding Telepathic Principles',
        fourthpFirstFormation: 'Immerse yourself in the mysterious world of telepathic principles that underlie animal communication, enabling you to transcend the limits of conventional physical senses.',
        fifthpFirstFormation: 'Comprehend telepathic principles as a means of transmitting information beyond traditional methods, opening the door to a deeper connection.',
        sixthpFirstFormation: 'Explore the dimensions of intuition and empathic reception, essential skills for establishing subtle communication with sensitive beings.',
        subtitleFirstFormation2: 'Section 2: Ethics and Respect in Animal Communication',
        subtitleSecondPart: '2.1 Ethics of Animal Communication',
        seventhpFirstFormation: 'Raise awareness of the ethical nuances of animal communication, guiding participants towards responsible and respectful practice.',
        eighthpFirstformation: 'Explore the ethical responsibility that accompanies communication with animals, emphasizing the importance of each interaction.',
        ninthpFirstFormation: 'Highlight the crucial importance of respecting the will and integrity of the animal, laying the foundation for authentic and ethical communication.',
        subtitleThirdPart: '2.2 Respect for Animals',
        tenthpFirstFormation: 'Deepen your understanding of the significance of respect for animals in the context of animal communication, fostering harmonious relationships.',
        eleventhpFirstFormation: 'Explore the unique nature of each animal individual, discovering the richness and diversity of animal personalities.',
        twelfthpFirstFormation: 'Engage in in-depth discussions on how to recognize and respect the individual boundaries of animals, fostering a deep and respectful understanding.',

        //Meditation
        titleSecondFormation: 'Connection Meditation',
        subtitleSecondFormation: 'Practice of Connection Meditation',
        subtitleFirstPartSecondFormation: 'Section 1: Explanation of the Benefits of Meditation',
        firstpSecondFormation: 'Connection meditation offers numerous benefits for establishing deep communication with animals.',
        secondpSecondFormation: 'It calms the mind and reduces stress, creating a conducive space for telepathic reception.',
        thirdpSecondFormation: 'It develops concentration and intuition, essential skills for animal communication.',
        secondsubtitleFirstPartSecondFormation: 'Section 2: Detailed Instructions for Connection Meditation',
        fourthpSecondFormation: 'Before starting the meditation, ensure you are in a quiet and comfortable place.',
        fifthpSecondFormation: 'Sit in a comfortable position, close your eyes, and begin to breathe deeply to relax.',
        sixthpSecondFormation: 'Imagine a white or golden light surrounding your being, creating a barrier of positive energy.',
        seventhpSecondFormation: 'Visualize a telepathic connection forming between you and the animal you wish to contact.',
        eighthpSecondformation: 'Remain open and receptive to impressions, images, or sensations that may emerge.',
        subtitleSecondFormation2: 'Practical Exercise: Connection Meditation with a Chosen Animal',
        ninthpSecondFormation: 'Choose an animal with which you want to establish a connection. Visualize this animal during meditation and try to engage in silent communication with it.',
        tenthpSecondFormation: 'Take note of the impressions, emotions, or images that arise during meditation.',
        eleventhpSecondFormation: 'After the meditation, reflect on your experience and note any relevant information you received.',

        //Silent
        titleThirdFormation: 'Silent Photo',
        subtitleThirdFormation: 'The Power of Visualization',
        subtitleFirstPartThirdFormation: 'Section 1: Visualization as a Tool of Communication',
        firstpThirdFormation: 'Explore the fascinating powers of visualization as an intuitive communication tool, unveiling a rich and profound visual language.',
        secondpThirdFormation: 'Identify the unique advantages of visualization in the captivating context of animal communication.',
        secondsubtitleFirstPartThirdFormation: 'Section 2: Explanation of the Concept of Silent Photo',
        thirdpThirdFormation: 'Immerse yourself in the evocative world of the silent photo, defining this intriguing method as a means of conveying information beyond the boundaries of words.',
        fourthpThirdFormation: 'Discover concrete examples illustrating how the silent photo can be applied powerfully in various situations.',
        subtitleThirdFormation2: 'Practical Exercise: Connection Meditation with a Chosen Animal',
        fifthpThirdFormation: 'Immerse yourself in an interactive experience by choosing a photo of an animal and practicing the subtle art of silent communication, establishing a deep connection through the image.',
        sixthpThirdFormation: 'Take notes on your impressions and unique experiences after this exercise, thus exploring the captivating nuances of visual communication with our animal companions.',

        //Conversation
        titleFourthFormation: 'Written Conversation',
        subtitleFourthFormation: 'Establishing Written Communication',
        subtitleFirstPartFourthFormation: 'Section 1: Introduction to Written Communication',
        firstpFourthFormation: 'Immerse yourself in the captivating world of animal communication through writing, exploring a dimension where words become bridges between humans and animals.',
        secondpFourthFormation: 'Engage in an in-depth discussion on the clarity and precision necessary for written communication to be an authentic gateway.',
        secondsubtitleFirstPartFourthFormation: 'Section 2: Step-by-Step Guide for Written Conversation with an Animal',
        thirdpFourthFormation: 'Discover a detailed, step-by-step guide to initiate and maintain deep written communication with our furry and feathered friends.',
        fourthpFourthFormation: 'Receive practical advice on how to stay open and receptive to intuitive responses that emerge during writing, thereby expanding your connection.',
        thirdsubtitleFirstPartFourthFormation: 'Practical Exercise: Asking Questions and Receiving Intuitive Answers in Writing',
        fifthpFourthFormation: 'Participate in a stimulating exercise by asking questions to an animal and noting the intuitive responses that manifest during the writing process.',
        sixthpFourthFormation: 'Share your unique experiences with the group after the exercise, creating a learning community where everyone can benefit from diverse perspectives.',
        
        //Empathic
        titleFifthFormation: 'Empathic Observation',
        subtitleFifthFormation: 'Developing Empathy towards Animals',
        subtitleFirstPartFifthFormation: 'Section 1: Attentive Observation of Animal Behavior',
        firstpFifthFormation: 'Dive into the depth of animal communication by recognizing the crucial importance of attentive observation of animal behavior.',
        secondpFifthFormation: 'Engage in enriching discussions on how animal behavior can be a subtle yet powerful form of communication.',
        thirdpFifthFormation: 'Explore the subtle signs that reveal the emotions of animals, unveiling a rich and complex non-verbal language.',
        secondsubtitleFirstPartFifthFormation: 'Section 2: Techniques for Developing Empathy towards Animals',
        fourthpFifthFormation: 'Immerse yourself in the art of developing a deeper empathic connection with animals by learning proven techniques.',
        fifthpFifthFormation: 'Explore fascinating methods to resonate emotionally with animals, thus enhancing your ability to understand and share their emotions.',
        sixthpFifthFormation: 'Discover the intimate relationship between empathy and animal communication, expanding your understanding of interspecies communication.',
        thirdsubtitleFirstPartFifthFormation: 'Practical Exercise: Observing an Animal and Sensing its Emotions',
        seventhpFifthFormation: 'Choose an animal companion and engage in attentive observation of its behavior. Explore the depth of your sensations, trying to sense its emotions, and share your observations within the group.',
        eighthpFifthformation: 'Stimulate lively conversations by discussing varied experiences within the group, thus creating a learning community sharing a common passion for empathetic understanding of animals.',
        
        //Walking
        titleSixthFormation: 'Conscious Walking',
        subtitleSixthFormation: 'Connection through Physical Activity',
        subtitleFirstPartSixthFormation: 'Section 1: Benefits of Conscious Walking with an Animal',
        firstpSixthFormation: 'Understand the benefits of conscious walking as a tool for connection with animals.',
        secondpSixthFormation: 'Discussion on how physical activity can enhance communication.',
        thirdpSixthFormation: 'Exploration of mental and emotional well-being benefits.',
        secondsubtitleFirstPartSixthFormation: 'Section 2: Guide for Conscious Walking with an Animal',
        fourthpSixthFormation: 'Provide detailed guidelines for a successful conscious walk.',
        fifthpSixthFormation: 'Steps to mentally and emotionally prepare for the walk.',
        sixthpSixthFormation: 'Techniques to maintain a silent connection during the activity.',
        thirdsubtitleFirstPartSixthFormation: 'Practical Exercise: Establishing a Silent Connection during a Walk',
        seventhpSixthFormation: 'Take a conscious walk with an animal. Focus on the silent connection and share your experiences.',
        eighthpSixthformation: 'Discuss different aspects of conscious walking within the group.',

        //Pratical
        titleSeventhFormation: 'Practical Application',
        subtitleSeventhFormation: 'Comprehensive Implementation',
        subtitleFirstPartSeventhFormation: 'Section 1: Recapitulation of Taught Techniques',
        firstpSeventhFormation: 'Immerse yourself in a captivating review of the techniques taught throughout the modules, thus consolidating the skills acquired so far.',
        secondpSeventhFormation: 'Develop an enriched summary of the key skills developed, forming the solid foundation of your journey in animal communication.',
        thirdpSeventhFormation: 'Review the various methods of animal communication, exploring the subtle nuances that make them unique and powerful.',
        secondsubtitleFirstPartSeventhFormation: 'Section 2: Encouragement to Apply Methods in Daily Life',
        fourthpSeventhFormation: 'Inspire participants to integrate the magic of animal communication into their daily lives, thus transforming their relationship with the animal world around them.',
        fifthpSeventhFormation: 'Engage in stimulating discussions on how to apply these skills in various situations, from simple moments to the more complex challenges of daily life.',
        sixthpSeventhFormation: 'Encourage regular practice, offering practical advice to continually strengthen their abilities in animal communication.',
        thirdsubtitleFirstPartSeventhFormation: 'Sharing Experiences and Results',
        seventhpSeventhFormation: 'Create a warm and encouraging space for participants to share their experiences and successes, thus forming a vibrant community of animal communicators.',
        eighthpSeventhFormation: 'Listen to inspiring anecdotes related to the application of techniques, creating a source of inspiration for all participants.',
        ninthpSeventhFormation: 'Facilitate rich discussions on challenges faced and lessons learned, fostering continuous growth within the community.',

        //Ethics
        titleEighthFormation: 'Ethics and Respect',
        subtitleEighthFormation: 'Respect for Animals and Ethics',
        subtitleFirstPartEighthFormation: 'Section 1: Discussions on the Importance of Respect for Animals',
        firstpEighthFormation: 'Delve into a profound reflection on the fundamental importance of respect for animals in the context of communication, thus establishing a solid foundation for respectful relationships.',
        secondpEighthFormation: 'Explore the multiple facets of respect for animals, going beyond common gestures to embrace a deep understanding of their needs and dignity.',
        thirdpEighthFormation: 'Engage in rich discussions on responsibility towards our animal friends, thus nurturing an ethical and compassionate approach to interspecies communication.',
        secondsubtitleFirstPartEighthFormation: 'Section 2: Ethical Considerations in Animal Communication',
        fourthpEighthFormation: 'Raise awareness of the delicate nuances of ethical considerations specific to animal communication, navigating carefully through moral challenges and ethical dilemmas that may arise.',
        fifthpEighthFormation: 'Explore common ethical dilemmas, encouraging thoughtful reflection on how we interact with our animal companions.',
        sixthpEighthFormation: 'Develop a strong personal ethical understanding, thereby creating a foundation for respectful interactions aligned with your values.',        
        
        //Tools
        titleNinthFormation: 'Resources and Tools',
        subtitleNinthFormation: 'Resources to Deepen Animal Communication',
        subtitleFirstPartNinthFormation: 'Section 1: Recommended Books, Videos, and Other Resources',
        firstpNinthFormation: 'Open the door to a world of knowledge with carefully selected resources to deepen your understanding of animal communication.',
        secondpNinthFormation: 'Explore recommendations for captivating books, inspiring videos, and other materials that will enrich your journey.',
        thirdpNinthFormation: 'Broaden your perspective by exploring various sources, allowing for a holistic exploration of interspecies communication.',
        secondsubtitleFirstPartNinthFormation: 'Section 2: Additional Tools to Strengthen Connection',
        fourthpNinthFormation: 'Discover tools and accessories specially designed to support and amplify animal communication, adding a practical and tangible dimension to your journey.',
        fifthpNinthFormation: 'Examine the use of crystals, oracle cards, and other tools in animal communication, exploring rich and varied methods.',
        sixthpNinthFormation: 'Receive practical tips on how to incorporate these tools into your daily practice, creating a more immersive animal communication experience.',
        
        //Conclusion
        titleTenthFormation: 'Conclusion',
        subtitleTenthFormation: 'Integration and Continuity',
        subtitleFirstPartTenthFormation: 'Section 1: Recapitulation of Acquired Skills',
        firstpTenthFormation: 'Immerse yourself in an enlightening recapitulation of the skills acquired throughout this enriching journey of animal communication.',
        secondpTenthFormation: 'Review key concepts and skills, thus consolidating your deep understanding of interspecies communication.',
        thirdpTenthFormation: 'Share your success stories and personal progress, celebrating the key moments of your unique journey.',
        secondsubtitleFirstPartTenthFormation: 'Section 2: Encouragement to Continue the Development of Animal Communication',
        fourthpTenthFormation: 'Feel the strong breeze of motivation, urging you to continue your journey of personal development and deepen your connection with the animal world.',
        fifthpTenthFormation: 'Receive practical tips to maintain a regular practice, thus nurturing your continuous growth in animal communication.',
        sixthpTenthFormation: 'Embark on the exploration of more advanced topics, challenging your limits and stimulating sustained intellectual growth.',
        thirdsubtitleFirstPartTenthFormation: 'Perspectives for the Future',
        seventhpTenthFormation: 'Explore the fascinating horizons opening up before you, offering an inspiring vision of the future of animal communication and its countless possibilities.',
        eighthpTenthFormation: 'Participate in dynamic discussions on emerging trends in the field, staying at the forefront of the evolution of interspecies communication.',
        ninthpTenthFormation: 'Dive into the exploration of new approaches and technologies, thus opening the door to exciting discoveries and significant advancements.',

        // E-commerce
        formationsEcommerce: 'Formations',
        difficulty: "Difficulty:",
        addToCart: "Add to Cart",
        price: 'Only forty euros',
        basketSummary: 'Summary of my basket',
        delete: 'Delete',
        cards: [
          {
            name: "Introduction",
            description: "The Foundation of Animal Communication",
            duration: "Duration: 3 hours"
          },
          {
            name: "Connection Meditation",
            description: "Practice of Connection Meditation",
            duration: "Duration: 3 hours"
          },
          {
            name: "Silent Photo",
            description: "The Power of Visualization",
            duration: "Duration: 3 hours"
          },
          {
            name: "Written Conversation",
            description: "Establishing a Written Communication",
            duration: "Duration: 3 hours"
          },
          {
            name: "Empathetic Observation",
            description: "Developing Empathy towards Animals",
            duration: "Duration: 3 hours"
          },
          {
            name: "Conscious Walking",
            description: "Connection through Physical Activity",
            duration: "Duration: 3 hours"
          },
          {
            name: "Practical Application",
            description: "Global Practical Implementation",
            duration: "Duration: 3 hours"
          },
          {
            name: "Ethics and Respect",
            description: "Respect for Animals and Ethics",
            duration: "Duration: 3 hours"
          },
          {
            name: "Resources and Tools",
            description: "Resources for Deepening Animal Communication",
            duration: "Duration: 3 hours"
          },
          {
            name: "Conclusion",
            description: "Integration and Continuity",
            duration: "Duration: 3 hours"
          }
        ],
        cart: 'Cart',
        priceCart: 'Price',
        buy: 'Buy',
        trainingInformation: 'Training Information',

        // Cookies
        cookies: 'This site uses cookies to improve your experience. Continuing to navigate on the site, you accept our use of cookies.',
        agreeCookies: 'I agree',

        informationCV: 'Here is an overview of my profile, with my different experiences and training that I have been able to follow. Do not hesitate to contact me if you want more information.',

        // Contact Me
        labelName: 'Indicate your name',
        labelFirstName: 'Indicate your first name',
        labelMail: 'Indicate your email address',
        labelMessage: 'Indicate your message',
        sendMessage: 'Send your message',
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr'
});

export default i18next;
