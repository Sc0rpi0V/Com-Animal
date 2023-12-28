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
        descriptionFirst: 'Je suis une personne qui aime prendre soins des autres et ceux depuis toute petite . cela s’est révélé par le fait que je sois devenue infirmière . J\'ai toujours apprécié la compagnie des animaux et j’ai toujours eu un lien spécial avec ceux qui ont partagés ma vie .',
        seeMore: 'En savoir plus',
        whatido: 'Que fais-je ?',
        descriptionSecond: 'Grâce à un processus appris , je me connecte à l\'animal grâce à une photo ou l\'on voit son visage , la connaissance de son prénom ainsi que de son âge . Avant tout je recherche son approbation pour débuter la communication. ',
        
        //Footer
        madeby: 'Réalisé par',

        //AboutMe
        aboutMe: 'À Propos de Moi',
        story: 'Une Histoire d\'amour des animaux et de bien être.',
        passionateCom: 'Je m\'appelle Valentine , je suis âgée de 26 ans . Je suis une personne qui aime prendre soins des autres et ceux depuis toute petite . Cela s\'est révélé par le fait que je sois devenue infirmière . J\'ai toujours apprécié la compagnie des animaux et j’ai toujours eu un lien spécial avec ceux qui ont partagés ma vie . ',
        passionateCom2 : 'Actuellement gardienne de deux chats Bagheera et Boobie , ils ont toujours su se faire comprendre d\'une certaine manière mais j\'ai découvert la possibilité de rentrer en contact avec eux et de pouvoir ainsi mieux les comprendre. ',
        passionateCom3: 'La formation s\'est présenté à moi et je l\'ai saisie . J\'ai beaucoup appris et j’apprends encore car ce n’est pas terminé . Mais aujourd\'hui ,  j\'ai la possibilité de pouvoir partager mon apprentissage et d\'aider tout un chacun à comprendre ceux qui partagent notre quotidien.',
        passionateCom4: 'Un peu d\'indulgence, je suis toujours en apprentissage.',
        myServices: 'Mes Services',
        
        //Choice
        calendar: 'Mon Calendrier',
        seeMyExercices: 'Voir mes Exercices',

        //Navigation
        exercice: 'Exercices',
        home: 'Accueil' ,
        about: 'A Propos',

        //SignUp
        createAccount: 'Créer un compte',
        name: 'Nom',
        firstName: 'Prénom',
        mail: 'Adresse Mail',
        address: 'Adresse',
        city: 'Ville',
        state: 'Pays',
        zipCode: 'Code Postal',
        age: 'Age',
        login: 'Connexion',
        phoneNumber: 'Téléphone',
        password: 'Mot de passe',
        confirmPassword: 'Confirmation du mot de passe',
        register: 'S\'inscrire',
        haveAccount: 'Vous avez un compte ?',
        fillAllFields: 'Veuillez remplir tous les champs.',
        passwordsDoNotMatch: 'Les mots de passe ne correspondent pas.',
        passwordRequirements: 'Le mot de passe doit contenir au moins 9 caractères, 1 majuscule, 1 minuscule et 1 caractère spécial.',
        numericZipCode: 'Le code postal doit contenir uniquement des caractères numériques.',
        numericPhoneNumber: 'Le numéro de téléphone doit contenir uniquement des caractères numériques.',

        //Account
        connexionInformation: 'Information de connexion',
        dateCreationAccount: 'Date de création du compte',
        dateLastConnexionAccount: 'Date de dernière connexion',
        recentActivity: 'Actiivité Récente',

        //Profile
        myProfil: 'Mon Profil',
        lastName: 'Nom de Famille',
        save: 'Sauvegarder',
        reset: 'Réinitialiser',
        cancel: 'Annuler',

        //Menu
        changePassword: 'Changement de mot de passe',
        changeAddress: 'Changement d\'adresse',
        myFormations: 'Mes Formations',
        dashboard: 'Tableau de Bord',

        //ResetPassword
        passwordConfirm: 'Confirmation du mot de passe',
        savePassword: 'Sauvegarder votre mot de passe',
        resetPassword: 'Réinitialiser votre mot de passe',
        passwordNotDifferent: 'Le nouveau mot de passe doit être différente de l\'acien',
        
        //AboutCom
        animalComTitle: 'La Communication Animale',
        firstpAnimalCom: 'La communication animale est un domaine fascinant qui englobe les différents moyens par lesquels les animaux interagissent et échangent des informations entre eux. Cette forme de communication peut revêtir de nombreuses facettes et varier considérablement d\'une espèce à l\'autre.',
        secondpAnimalCom: 'Les animaux communiquent pour diverses raisons, notamment la sélection de partenaires sexuels, la défense du territoire, la coordination sociale, les signaux d\'alarme et l\'établissement de hiérarchies sociales. La manière dont la communication est utilisée varie considérablement d\'une espèce à l\'autre.',
        thirdpAnimalCom: 'La communication animale peut être très complexe, avec certaines espèces ayant des systèmes de communication sophistiqués. Cette évolution a conduit à une grande diversité de systèmes de communication parmi les espèces animales.',
        fourthpAnimalCom: 'En résumé, la communication animale est un domaine vaste et diversifié qui englobe une multitude de moyens par lesquels les animaux échangent des informations pour survivre, se reproduire et coopérer au sein de leur environnement. Elle représente un aspect fascinant de la biologie et de l\'éthologie animale.',
        
        //Preparation
        titlePreparation: 'Préparation à la Communication Animale',
        subtitlePreparation: 'Comment apprendre la communication animale ?',
        firstpPreparation: 'Vous savez peut-être que tout le monde peut communiquer intuitivement avec les animaux? Si, si promis ce n\'est pas une légende. Cela demande un peu d\'entrainement mais pas plus que pour apprendre à faire du vélo. La communication animale est une communication non verbale, qui passe par nos sens de perception. ',
        secondpPreparation: 'Ainsi nous recevons une information soit en entendant, en voyant ou en ressentant dans notre corps, comme dans un rêve éveillé. Cependant, il est peu courant de communiquer ainsi avec un animal sans s\'entrainer et développer des outils que je nommerais de fondamentaux. Je vous propose de découvrir les 5 étapes clés pour apprendre à communiquer avec un animal.',
        btn1Preparation: 'L\'Ancrage',
        btn2Preparation: 'L\'Ouverture du Coeur',
        btn3Preparation: 'La Relaxation',
        btn4Preparation: 'La Connexion',
        btn5Preparation: 'Les échanges Sensorielles',

        //Anchoring
        titleAnchoring: 'La première étape: l\'Ancrage',
        subtitleAnchoring: 'Vous allez vous dire "ça commence bien! Je comprends déjà rien!".',
        firstpAnchoring: 'Pas de panique. C\'est juste un terme un peu ésotérique très simple à comprendre. Il reprend la base de tout apprentissage, quelqu\'il soit: le besoin de SECURITE.  Pour apprendre de nouvelles choses, pour s\'ouvrir à de nouvelles pratiques, il est nécessaire de se sentir suffisamment en confiance avec soi, avec l\'autre,  avec son environnement pour oser sortir de sa zone de confort et pour être disponible à de nouvelles informations.',
        secondpAnchoring: 'Donc, la première étape c\'est d\'être en confiance et en sécurité. Qu\'en pensez-vous? L\'ancrage est lié avec notre chackra racine, le siège de la peur. C\'est aussi le chakra de "base", le socle. Ce chakra parle aussi de nos racines, nos origines. Donc la première chose à faire c\'est observer de quoi je peux avoir peur et s\'en défaire. Pas en niant cette peur mais au contraire en l\'observant, en lui donnant la possibilité de s\'exprimer, en écoutant de quoi elle parle et en la laissant partir.',
        thirdpAnchoring: 'Je vous propose quelques exercices simples et efficaces pour vous aider a renforcer votre ancrage à un instant t.',
        firstListAnchoring: 'Vous pouvez fermer vos yeux et visualiser des racines qui partent de vos pieds vers le sol, vous renforcez cette visualisation en observer les détails de ces racines, en les visualisant entrain de se démultiplier, de grandir et en mettant une attention particulière sur une racine pivot qui s\'enfonce en profondeur dans le sol ou en observant les connexions entre vos racines et celles des personnes qui sont à coté de vous ou des arbres et des plantes à proximité.',
        secondListAnchoring: 'Vous pouvez mettre votre attention sur le bas de votre ventre, y déposer vos mains pour encore plus d\'intensité dans l\'exercice, et imaginer que vous descendez votre "conscience" ou votre cerveaux, par un tunnel, un ascenseur, un escalier ou par l\'attraction terrestre, jusque dans le bas de votre ventre. Et vous pouvez compléter cet exercice par un test de force musculaire avant et juste apres l\'avoir fait par exemple en tentant de pousser un objet difficile à déplacer et observer la différence de force avant et après l\'ancrage. C\'est souvent très parlant...',
        thirdListAnchoring: 'Vous pouvez aussi simplement aller en forêt et poser l\'intention que les arbres vous aides à vous ancrer, faire du sport ou des activités physiques tel que le yoga, le tai-chi, des arts martiaux....',
        fourthpAnchoring: 'Sachez que si vous ressentez que malgré tout cela vous ressentez que vous avez du mal a être présent-e dans votre corps et dans votre vie en général, il est judicieux de se faire accompagner pour libérer les blocages.',
        
        //OpenHearth
        titleOpenHearth: 'La deuxième étape: l\'Ouverture du coeur.',
        firstpOpenHearth: 'Quelques exercices pour vous permettre de ressentir l\'ouverture du coeur et l\'énergie d\'amour.',
        secondpOpenHearth: 'Voici une musique à écouter :',
        thirdpOpenHearth: 'Demandez à une personne que vous connaissez de faire cet exercice avec vous: asseyez-vous face à face, assez proche pour pouvoir vous toucher et respirez profondément. Ensuite, posez l\'intention de transmettre tout votre amour à l\'autre au travers de votre respiration. Vous pouvez imaginer une "énergie", des coeurs, une lumière qui part de votre coeur et qui va jusqu\'au coeur de votre compagne/compagnon lors de votre expiration.',
        fourthpOpenHearth: 'Variante: faire traverser l\'énergie par vos bras, vos mains jusque dans les mains de votre partenaire. Faites un débriefing des sensations de chacun-e et ensuite inversez les rôles. Vous pouvez aussi mettre une musique inspirante pendant l\'exercice.',
        fifthpOpenHearth: 'Mettez-vous en état de relaxation grâce à de la musique, un accompagnement ou simplement par la respiration et posez votre attention sur votre chackra du couer ou votre coeur physique et respirer profondément pendant plusieurs minutes en observant ce que vous ressentez, ce qu\'il se passe en vous. Accueillez les images, les sensations, les odeurs, les sons....',
        
        //Relaxation
        titleRelaxation: 'La troisième étape: la relaxation',
        firstpRelaxation: 'Vous vous en serez douté, pour capter une information qui reste subtile, il est nécessaire d\'être détendu-e et relaxé-e. C\'est ce qui est appelé l\'état modifié de conscience "alpha". Dans cet état d\'être, vos pensées sont moins présentes, votre respiration plus lente, votre corps détendu et vos émotions au calme. ',
        secondpRelaxation: 'Des méditations, des exercices de respiration, du yoga, de la sophrologie,.... sont des outils qui peuvent être interessants pour cela. Et le nec plus ultra, c\'est que tout ce que vous mettrez en pratique dans ce sens vous aidera dans votre quotidien à vivre avec sérénité et loin des tensions de notre société.',
        
        //Spirit
        titleSpirit: 'La quatrième étape: la connexion',
        subtitleSpirit: 'Vous voila enfin prêt à vous connecter à un animal! Voilà génial mais comment fait-on maintenant?',
        firstpSpirit: 'Et bien avant tout je vous invite à poser une intention claire et au présent: "je suis connectée avec (le nom de l\'animal)", à répéter 3 fois. Soit vous connaissez l\'animal soit il sera nécessaire d\'avoir une photo de lui et de pouvoir ainsi la regarder avant, voir pendant la connexion. ',
        secondpSpirit: 'Vous pouvez aussi le faire avec l\'animal à coté de vous. Sachez que dans ce dernier cas, ses mouvements, voir le fait qu\'il puisse partir, peuvent être des éléments perturbateurs. La photo, elle, est normalement totalement immobile!',
        thirdpSpirit: 'Ensuite, il existe diverses petites astuces, des "trucs", qui vont vous aider à capter l\'animal, à le ressentir, à l\'entendre. Ces petits trucs vont dépendre de votre mode de fonctionnement sensoriel (suivant si vous fonctionnez plutôt de manière visuelle, auditive, kinesthésique). ',
        fourthpSpirit: 'Je vous propose une manière de vous "connecter". S\'il cela ne fonctionne pas, ne vous inquiétez pas, c\'est simplement que, soit votre préparation n\'est pas suffisante, soit que ce n\'est pas la bonne manière pour vous...',
        fifthpSpirit: 'Vous pouvez, en fermant vos yeux, inspirer l\'image de la photo jusque dans votre coeur, puis visualiser l\'animal. Ensuite observez ce que vous ressentez dans votre corps, vos émotions, voyez la manière dont l\'animal s\'est présenté, sa façon de bouger, l\'environnement dans lequel il se présente à vous,...., écoutez, sentez. Chaque infime "information" à son importance..',
        
        //Sensory
        titleSensory: 'La cinquième et dernière étape: les échanges sensorielles',
        subtitleSensory: 'Comme exprimé juste au dessus, vous voilà paré pour pouvoir échanger avec l\'animal (peut-être le vôtre?).',
        firstpSensory: 'Plus vous prenez l\'habitude de ressentir votre corps, d\'écouter ou de regarder de manière consciente (en y prêtant attention) dans votre quotidien, et plus vous allez affuter vos perceptions et pouvoir ressentir les différences lorsque vous vous connectez à un animal.',
        secondpSensory: 'Lorsque la connexion est établie, vous pouvez choisir de laisser venir à vous les sensations, et/ou d\'orienter l\'échange en posant des questions et en attendant de voir ce qu\'il se passe en vous. Je vous souhaite des belles expérimentations, de belles découvertes vers ce monde de l\'invisible et pourtant tellement présent dans notre monde physique.',
        thirdpSensory: 'Les informations en communication animale peuvent-être vérifiées par le propriétaire de l\'animal en question. C\'est bien toutes les corrélations qui ont pu exister qui permettent aujourd\'hui à tant de personnes de découvrir et de faire appel à la communication animale.',
        
        //Foundation
        titleFirstFormation: 'Introduction à la Communication Animale',
        subtitleFirstFormation: 'Section 1 : Le Fondement de la Communication Animale',
        subtitleFirstPart: '1.1 Définition de la Communication Animale',
        firstpFirstFormation: 'Plongez dans l\'univers fascinant de la communication animale en explorant ses bases et son rôle crucial dans la création de liens profonds entre les humains et les animaux.',
        secondpFirstFormation: 'Découvrez la communication animale en tant que méthode extraordinaire pour comprendre les besoins, les émotions et les pensées des animaux.',
        thirdpFirstFormation: 'Explorez les différentes formes de communication animale, notamment la riche palette de signaux non verbaux qui transcendent les barrières linguistiques.',
        secondsubtitleFirstPart: '1.2 Compréhension des Principes Télépathiques',
        fourthpFirstFormation: 'Plongez-vous dans le monde mystérieux des principes télépathiques qui sous-tendent la communication animale, vous permettant de transcender les limites des sens physiques conventionnels.',
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
        
        //Meidation
        titleSecondFormation: 'Méditation de Connexion',
        subtitleSecondFormation: 'Pratique de la Méditation de Connexion',
        subtitleFirstPartSecondFormation: 'Section 1 : Explication des bienfaits de la méditation',
        firstpSecondFormation: 'La méditation de connexion offre de nombreux bienfaits pour établir une communication profonde avec les animaux.',
        secondpSecondFormation: 'Apaisement de l\'esprit et réduction du stress, créant un espace propice à la réception télépathique.',
        thirdpSecondFormation: 'Développement de la concentration et de l\'intuition, des compétences essentielles pour la communication animale.',
        secondsubtitleFirstPartSecondFormation: 'Section 2 : Instructions détaillées pour la méditation de connexion',
        fourthpSecondFormation: 'Avant de commencer la méditation, assurez-vous d\'être dans un endroit calme et confortable.',
        fifthpSecondFormation: 'Asseyez-vous en position confortable, fermez les yeux et commencez à respirer profondément pour vous détendre.',
        sixthpSecondFormation: 'Imaginez une lumière blanche ou dorée entourant votre être, créant une barrière d\'énergie positive.',
        seventhpSecondFormation: 'Visualisez un lien télépathique se formant entre vous et l\'animal que vous souhaitez contacter.',
        eighthpSecondformation: 'Reste ouvert et réceptif aux impressions, images, ou sensations qui pourraient émerger.',
        subtitleSecondFormation2: 'Exercice pratique : Méditation de connexion avec un animal choisi',
        ninthpSecondFormation: 'Choisissez un animal avec lequel vous souhaitez établir une connexion. Visualisez cet animal pendant la méditation et essayez d\'entrer en communication silencieuse avec lui.',
        tenthpSecondFormation: 'Prenez note des impressions, des émotions ou des images qui se présentent pendant la méditation.',
        eleventhpSecondFormation: 'Après la méditation, réfléchissez sur votre expérience et notez toute information pertinente que vous avez reçue.',

        //Silent
        titleThirdFormation: 'Photo Silencieuse',
        subtitleThirdFormation: 'La Puissance de la Visualisation',
        subtitleFirstPartThirdFormation: 'Section 1 : La Visualisation en tant qu\'Outil de Communication',
        firstpThirdFormation: 'Explorez les pouvoirs fascinants de la visualisation en tant qu\'outil de communication intuitive, dévoilant un langage visuel riche et profond.',
        secondpThirdFormation: 'Identifiez les avantages uniques de la visualisation dans le contexte captivant de la communication animale.',
        secondsubtitleFirstPartThirdFormation: 'Section 2 : Explication du Concept de la Photo Silencieuse',
        thirdpThirdFormation: 'Plongez dans le monde évocateur de la photo silencieuse, définissant cette méthode intrigante comme un moyen de transmettre des informations au-delà des frontières des mots.',
        fourthpThirdFormation: 'Découvrez des exemples concrets illustrant comment la photo silencieuse peut être appliquée de manière puissante dans diverses situations.',
        subtitleThirdFormation2: 'Exercice pratique : Méditation de connexion avec un animal choisi',
        fifthpThirdFormation: 'Vivez une expérience immersive en choisissant une photo d\'un animal et pratiquez l\'art subtil de la communication silencieuse, établissant une connexion profonde à travers l\'image.',
        sixthpThirdFormation: 'Prenez des notes sur vos impressions et expériences uniques après cet exercice, explorant ainsi les nuances captivantes de la communication visuelle avec nos compagnons animaux.',

        //Conversation
        titleFourthFormation: 'Conversation Écrite',
        subtitleFourthFormation: 'Établir une Communication Écrite',
        subtitleFirstPartFourthFormation: 'Section 1 : Introduction à la Communication par l\'Écrit',
        firstpFourthFormation: 'Plongez dans le monde captivant de la communication animale à travers l\'écriture, explorant une dimension où les mots deviennent des ponts entre les humains et les animaux.',
        secondpFourthFormation: 'Engagez-vous dans une discussion approfondie sur la clarté et la précision nécessaires pour que la communication écrite soit une passerelle authentique.',
        secondsubtitleFirstPartFourthFormation: 'Section 2 : Guide Étape par Étape pour la Conversation Écrite avec un Animal',
        thirdpFourthFormation: 'Découvrez un guide détaillé, étape par étape, pour initier et maintenir une communication écrite profonde avec nos amis à fourrure et à plumes.',
        fourthpFourthFormation: 'Recevez des conseils pratiques sur la manière de rester ouvert et réceptif aux réponses intuitives qui émergent au fil de l\'écriture, élargissant ainsi votre connexion.',
        thirdsubtitleFirstPartFourthFormation: 'Exercice Pratique : Poser des Questions et Recevoir des Réponses Intuitives par Écrit.',
        fifthpFourthFormation: 'Participez à un exercice stimulant en posant des questions à un animal et en notant les réponses intuitives qui se manifestent pendant le processus d\'écriture.',
        sixthpFourthFormation: 'Partagez vos expériences uniques avec le groupe après l\'exercice, créant une communauté d\'apprentissage où chacun peut bénéficier des perspectives variées.',

        //Empathic
        titleFifthFormation: 'Observation Empathique',
        subtitleFifthFormation: 'Développer l\'Empathie envers les Animaux',
        subtitleFirstPartFifthFormation: 'Section 1 : L\'Observation Attentive du Comportement Animal',
        firstpFifthFormation: 'Plongez dans la profondeur de la communication animale en reconnaissant l\'importance cruciale de l\'observation attentive du comportement animal.',
        secondpFifthFormation: 'Engagez-vous dans des discussions enrichissantes sur la façon dont le comportement animal peut être une forme subtile, mais puissante, de communication.',
        thirdpFifthFormation: 'Explorez les signes subtils qui révèlent les émotions des animaux, dévoilant ainsi un langage non verbal riche et complexe.',
        secondsubtitleFirstPartFifthFormation: 'Section 2 : Techniques pour Développer l\'Empathie envers les Animaux',
        fourthpFifthFormation: 'Plongez dans l\'art de développer une connexion empathique plus profonde avec les animaux en apprenant des techniques éprouvées.',
        fifthpFifthFormation: 'Explorez des méthodes fascinantes pour entrer en résonance émotionnelle avec les animaux, renforçant ainsi votre capacité à comprendre et à partager leurs émotions.',
        sixthpFifthFormation: 'Découvrez la relation intime entre l\'empathie et la communication animale, élargissant ainsi votre compréhension de la communication interespèces.',
        thirdsubtitleFirstPartFifthFormation: 'Exercice Pratique : Observer un Animal et Ressentir ses Émotions.',
        seventhpFifthFormation: 'Choisissez un compagnon animal et engagez-vous dans l\'observation attentive de son comportement. Explorez la profondeur de vos sensations en essayant de ressentir ses émotions et partagez vos observations au sein du groupe.',
        eighthpFifthFormation: 'Stimulez des conversations animées en discutant des expériences variées au sein du groupe, créant ainsi une communauté d\'apprentissage partageant une passion commune pour la compréhension empathique des animaux.',

        //Walking
        titleSixthFormation: 'Marche Consciente',
        subtitleSixthFormation: 'La Connexion à travers l\'Activité Physique',
        subtitleFirstPartSixthFormation: 'Section 1 : Avantages de la Marche Consciente avec un Animal',
        firstpSixthFormation: 'Comprendre les avantages de la marche consciente en tant qu\'outil de connexion avec les animaux.',
        secondpSixthFormation: 'Discussion sur la manière dont l\'activité physique peut renforcer la communication.',
        thirdpSixthFormation: 'Exploration des bienfaits pour le bien-être mental et émotionnel.',
        secondsubtitleFirstPartSixthFormation: 'Section 2 : Guide pour une Marche Consciente avec un Animal',
        fourthpSixthFormation: 'Fournir des directives détaillées pour une marche consciente réussie.',
        fifthpSixthFormation: 'Étapes pour préparer mentalement et émotionnellement la marche.',
        sixthpSixthFormation: 'Techniques pour maintenir une connexion silencieuse pendant l\'activité.',
        thirdsubtitleFirstPartSixthFormation: 'Exercice pratique : Établir une connexion silencieuse pendant une promenade',
        seventhpSixthFormation: 'Prenez une marche consciente avec un animal. Concentrez-vous sur la connexion silencieuse et partagez vos expériences.',
        eighthpSixthFormation: 'Discutez des différents aspects de la marche consciente au sein du groupe.',

        //Pratical
        titleSeventhFormation: 'Application Pratique',
        subtitleSeventhFormation: 'Mise en Pratique Globale',
        subtitleFirstPartSeventhFormation: 'Section 1 : Récapitulation des Techniques Enseignées',
        firstpSeventhFormation: 'Plongez dans une révision captivante des techniques enseignées au fil des modules, consolidant ainsi les compétences acquises jusqu\'à présent.',
        secondpSeventhFormation: 'Élaborez un résumé enrichi des compétences clés développées, formant la base solide de votre parcours de communication animale.',
        thirdpSeventhFormation: 'Revoyez les différentes méthodes de communication animale, explorant les nuances subtiles qui les rendent uniques et puissantes.',
        secondsubtitleFirstPartSeventhFormation: 'Section 2 : Encouragement à Appliquer les Méthodes dans la Vie Quotidienne',
        fourthpSeventhFormation: 'Inspirez les participants à intégrer la magie de la communication animale dans leur vie quotidienne, transformant ainsi leur relation avec le monde animal qui les entoure.',
        fifthpSeventhFormation: 'Engagez-vous dans des discussions stimulantes sur la manière d\'appliquer ces compétences dans diverses situations, des moments simples aux défis plus complexes de la vie quotidienne.',
        sixthpSeventhFormation: 'Encouragez une pratique régulière, offrant des conseils pratiques pour renforcer continuellement leurs capacités de communication animale.',
        thirdsubtitleFirstPartSeventhFormation: 'Partage d\'Expériences et de Résultats',
        seventhpSeventhFormation: 'Créez un espace chaleureux et encourageant pour que les participants partagent leurs expériences et leurs succès, formant ainsi une communauté vibrante de communicateurs animaux.',
        eighthpSeventhFormation: 'Écoutez des anecdotes inspirantes liées à l\'application des techniques, créant ainsi une source d\'inspiration pour tous les participants.',
        ninthpSeventhFormation: 'Facilitez des discussions riches sur les défis rencontrés et les leçons apprises, favorisant ainsi une croissance continue au sein de la communauté.',

        //Ethics
        titleEighthFormation: 'Éthique et Respect',
        subtitleEighthFormation: 'Respect envers les Animaux et Éthique',
        subtitleFirstPartEighthFormation: 'Section 1 : Discussions sur l\'Importance du Respect envers les Animaux',
        firstpEighthFormation: 'Plongez dans une réflexion profonde sur l\'importance fondamentale du respect envers les animaux dans le contexte de la communication, établissant ainsi des bases solides pour des relations respectueuses.',
        secondpEighthFormation: 'Explorez les multiples facettes du respect envers les animaux, allant au-delà des gestes courants pour embrasser une compréhension profonde de leurs besoins et de leur dignité.',
        thirdpEighthFormation: 'Engagez-vous dans des discussions riches sur la responsabilité envers nos amis animaux, nourrissant ainsi une approche éthique et bienveillante de la communication interespèces.',
        secondsubtitleFirstPartEighthFormation: 'Section 2 : Considérations Éthiques dans la Communication Animale',
        fourthpEighthFormation: 'Sensibilisez-vous aux nuances délicates des considérations éthiques spécifiques à la communication animale, naviguant avec soin dans les défis moraux et les dilemmes éthiques qui peuvent émerger.',
        fifthpEighthFormation: 'Explorez des dilemmes éthiques courants, encourageant ainsi une réflexion approfondie sur la manière dont nous interagissons avec nos compagnons animaux.',
        sixthpEighthFormation: 'Développez une compréhension éthique personnelle solide, créant ainsi une base pour des interactions respectueuses et alignées avec vos valeurs.',

        //Tools
        titleNinthFormation: 'Ressources et Outils',
        subtitleNinthFormation: 'Ressources pour Approfondir la Communication Animale',
        subtitleFirstPartNinthFormation: 'Section 1 : Livres, Vidéos et Autres Ressources Recommandées',
        firstpNinthFormation: 'Ouvrez la porte à un monde de connaissances avec des ressources soigneusement sélectionnées pour approfondir la compréhension de la communication animale.',
        secondpNinthFormation: 'Explorez des recommandations de livres captivants, de vidéos inspirantes et d\'autres supports qui enrichiront votre parcours.',
        thirdpNinthFormation: 'Élargissez votre perspective en explorant diverses sources, permettant ainsi une exploration holistique de la communication interespèces.',
        secondsubtitleFirstPartNinthFormation: 'Section 2 : Outils Supplémentaires pour Renforcer la Connexion',
        fourthpNinthFormation: 'Découvrez des outils et accessoires spécialement conçus pour soutenir et amplifier la communication animale, ajoutant une dimension pratique et tangible à votre parcours.',
        fifthpNinthFormation: 'Examinez l\'utilisation de cristaux, de cartes d\'oracle et d\'autres outils dans la communication animale, explorant ainsi des méthodes riches et variées.',
        sixthpNinthFormation: 'Recevez des conseils pratiques sur la manière d\'incorporer ces outils dans votre pratique quotidienne, créant ainsi une expérience de communication animale plus immersive.',

        //Conclusion
        titleTenthFormation: 'Conclusion',
        subtitleTenthFormation: 'Intégration et Continuité',
        subtitleFirstPartTenthFormation: 'Section 1 : Récapitulation des Compétences Acquises',
        firstpTenthFormation: 'Plongez dans une récapitulation éclairante des compétences acquises tout au long de cette aventure enrichissante de communication animale.',
        secondpTenthFormation: 'Revoyez les principaux concepts et compétences, consolidant ainsi votre compréhension profonde de la communication interespèces.',
        thirdpTenthFormation: 'Partagez vos histoires de réussite et de progrès personnels, célébrant ainsi les moments clés de votre parcours unique.',
        secondsubtitleFirstPartTenthFormation: 'Section 2 : Encouragement à Continuer le Développement de la Communication Animale',
        fourthpTenthFormation: 'Sentez le vent de motivation souffler fort, vous incitant à continuer votre parcours de développement personnel et à approfondir votre connexion avec le monde animal.',
        fifthpTenthFormation: 'Recevez des conseils pratiques pour maintenir une pratique régulière, nourrissant ainsi votre croissance continue en communication animale.',
        sixthpTenthFormation: 'Lancez-vous dans l\'exploration de sujets plus avancés, défiant ainsi vos limites et stimulant une croissance intellectuelle soutenue.',
        thirdsubtitleFirstPartTenthFormation: 'Perspectives pour l\'Avenir',
        seventhpTenthFormation: 'Explorez les horizons fascinants qui s\'ouvrent devant vous, offrant une vision inspirante de l\'avenir de la communication animale et de ses innombrables possibilités.',
        eighthpTenthFormation: 'Participez à des discussions dynamiques sur les tendances émergentes dans le domaine, restant ainsi à la pointe de l\'évolution de la communication interespèces.',
        ninthpTenthFormation: 'Plongez dans l\'exploration de nouvelles approches et technologies, ouvrant ainsi la porte à des découvertes passionnantes et à des avancées significatives.',

        //Ecommerce
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

        //Cookies
        cookies: 'Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur le site, vous acceptez notre utilisation des cookies.',
        agreeCookies: 'J\'accepte',

        informationCV: 'Voici un aperçu de mon profil, avec mes différentes expériences et formations que j\'ai pu suivre. N\'hésitez pas à me contacter si vous souhaitez plus d\'informations.',
        
        //ContactMe
        labelName: 'Indiquez votre nom',
        labelFirstName: 'Indiquez votre prénom',
        labelMail: 'Indiquez votre adresse mail',
        labelMessage: 'Indiquez votre message',
        sendMessage: 'Envoyez votre message',
      }  
    } ,
    en: { 
      translation: {
        //Header
        headerProject: 'Welcome on ',
        headerTogether: 'AnimalCom !',
        headerAnimCom: 'Trainer and Advisor in Animal Communication',
        aboutCom: 'About Communication',
        training: 'My Lessons',
        contactMe: 'Contact Me',

        //Description
        description: 'Description',
        whoami: 'Who am I ?',
        descriptionFirst: 'I am a person who loves taking care of others and those since I was little. This was revealed by the fact that I became a nurse. I have always enjoyed the company of animals and have always had a special bond with those who have shared my life.',
        seeMore: 'See More',
        whatido: 'What i do ?',
        descriptionSecond:'Thanks to a learned process, I connect to the animal through a photo where we see its face, knowing its first name and its age. Above all, I seek his approval to begin communication.',

        //Footer
        madeby: 'Made by',

        //AboutMe
        aboutMe: 'About Me',
        story: 'A Story of Travail Acharné and of Persuasion',
        passionateCom: 'My name is Valentine, I am 26 years old. I am a person who loves taking care of others and those since I was little. This was revealed by the fact that I became a nurse. I have always enjoyed the company of animals and have always had a special bond with those who have shared my life.',
        passionateCom2: 'Currently guardian of two cats Bagheera and Boobie, they have always been able to make themselves understood in a certain way but I discovered the possibility of getting in touch with them and thus being able to understand them better.',
        passionateCom3: 'The training presented itself to me and I took it. I learned a lot and I\'m still learning because it\'s not over. But today, I have the opportunity to share my learning and help everyone understand those who share our daily lives.',
        passionateCom4: 'A little indulgence, I\'m still learning.',
        myServices: 'My Services',

        //Choice
        calendar: 'My Calendar',
        seeMyExercices: 'See My Exercices',

        //Navigation
        exercice: 'Exercices',
        home: 'Home',
        about: 'About',

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
        haveAccount: 'Do you have an Account ?',
        fillAllFields: 'Please complete all fields.',
        passwordsDoNotMatch: 'Passwords do not match.',
        passwordRequirements: 'The password must contain at least 9 characters, 1 uppercase letter, 1 lowercase letter and 1 special character.',
        numericZipCode: 'The postal code must contain only numeric characters.',
        numericPhoneNumber: 'The phone number must contain only numeric characters.',

        //Account
        connexionInformation: 'Login Information',
        dateCreationAccount: 'Account creation date',
        dateLastConnexionAccount: 'Account last connexion',
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
        myFormations: 'My Formations',
        dashboard: 'Dashboard',

        //ResetPassword
        passwordConfirm: 'Password Confirmation',
        resetPassword: 'Reset Your Password',
        savePassword: 'Save Your Password',
        passwordNotDifferent: 'The new password must be different from the old one',

        //AboutCom
        animalComTitle: 'Animal Communication',
        firstpAnimalCom: 'Animal communication is a fascinating field that encompasses the different means by which animals interact and exchange information with each other. This form of communication can take on many facets and vary considerably from one species to another.',
        secondpAniamlCom: 'Animals communicate for a variety of reasons, including selection of sexual partners, territorial defense, social coordination, warning signals and the establishment of social hierarchies. The way communication is used varies greatly from one species to another.',
        thirdpAnimalCom: 'Animal communication can be very complex, with some species having systems of sophisticated communication. This evolution has led to a great diversity of systems of communication among animal species.',
        fourthpAnimalCom: 'In summary, animal communication is a broad and diverse field that encompasses a multitude of means by which animals exchange information to survive, reproduce, and cooperate within their environments. It represents a fascinating aspect of animal biology and ethology.',
        
        //Preparation
        titlePreparation: 'Preparation for Animal Communication',
        subtitlePreparation: 'How to learn animal communication?',
        firstpPreparation: 'Maybe you know that everyone can communicate intuitively with animals? Yes, if promised it\'s not a legend. It takes a little practice, but no more than learning to ride a bike. Animal communication is non-verbal communication, which passes through our senses of perception.',
        secondpPreparation: 'So we receive information either by hearing, seeing or feeling in our body, as in a waking dream. However, it is unusual to communicate in this way with an animal without training and developing tools that I would call fundamental. I suggest you discover the 5 key steps to learning to communicate with an animal.',
        btn1Preparation: 'Anchorage',
        btn2Preparation: 'The Opening of the Heart',
        btn3Preparation: 'Relaxation',
        btn4Preparation: 'The connection',
        btn5Preparation: 'Sensory exchanges',
        
        //Anchoring
        titleAnchoring: 'The first step: Anchoring',
        subtitleAnchoring: 'You\'ll say to yourself "that\'s a good start! I don\'t understand anything yet!".',
        firstpAnchoring: 'Do not panic. It\'s just a somewhat esoteric term that\'s very easy to understand. It takes up the basis of all learning, whatever it may be: the need for SAFETY. To learn new things, to open up to new practices, it is necessary to feel sufficiently confident with yourself, with others, with your environment to dare to leave your comfort zone and to be available to new information.',
        secondpAnchoring: 'So the first step is to be confident and secure. What do you think? Grounding is linked with our root chackra, the seat of fear. It is also the “base” chakra, the base. This chakra also speaks of our roots, our origins. So the first thing to do is observe what I might be afraid of and get rid of it. Not by denying this fear but on the contrary by observing it, giving it the opportunity to express itself, listening to what it is talking about and letting it go.',
        thirdpAnchoring: 'I offer you some simple and effective exercises to help you strengthen your anchoring at any given t moment.',
        firstListAnchoring: 'You can close your eyes and visualize roots extending from your feet towards the ground, you reinforce this visualization by observing the details of these roots, visualizing them multiplying, growing and paying particular attention to a tap root that goes deep into the ground or by observing the connections between your roots and those of the people next to you or the trees and plants nearby.',
        secondListAnchoring: 'You can put your attention on your lower stomach, place your hands there for even more intensity in the exercise, and imagine that you are descending your "consciousness" or your brain, through a tunnel, an elevator, a staircase or by the earth\'s attraction, down to the bottom of your stomach. And you can complete this exercise with a muscle strength test before and just after doing it for example when trying to push an object that is difficult to move and observe the difference in force before and after anchoring. It\'s often very telling...',
        thirdListAnchoring: 'You can also simply go to the forest and set the intention that the trees will help you ground yourself, do sports or physical activities such as yoga, tai chi, martial arts, etc.',
        fourthpAnchoring: 'Know that if you feel that despite all this you feel that you have difficulty being present in your body and in your life in general, it is wise to seek support to release the blockages.',
        
        //OpenHearth
        titleOpenHearth: 'The second stage: Opening the heart.',
        firstpOpenHearth: 'Some exercises to allow you to feel the opening of the heart and the energy of love.',
        secondpOpenHearth: 'Here is some music to listen to:',
        thirdpOpenHearth: 'Ask someone you know to do this exercise with you: sit face to face, close enough to touch, and breathe deeply. Then, set the intention to transmit all your love to the other person through your breathing. You can imagine an "energy", hearts, a light which starts from your heart and which goes to the heart of your partner when you exhale.',
        fourthpOpenHearth: 'Variation: pass the energy through your arms, your hands into the hands of your partner. Debrief everyone\'s feelings and then reverse roles. You can also play inspiring music while exercising.',
        fifthpOpenHearth: 'Put yourself in a state of relaxation through music, accompaniment or simply through breathing and place your attention on your heart chakra or your physical heart and breathe deeply for several minutes observing what you feel, what it is happening inside you. Welcome the images, the sensations, the smells, the sounds....',
        
        //Relaxation
        titleRelaxation: 'The third stage: relaxation',
        firstpRelaxation: 'As you will have suspected, to capture information that remains subtle, it is necessary to be relaxed and relaxed. This is what is called the “alpha” altered state of consciousness. In this state of being, your thoughts are less present, your breathing slower, your body relaxed and your emotions calm.',
        secondpRelaxation: 'Meditations, breathing exercises, yoga, sophrology, etc. are tools that can be useful for this. And the ultimate is that everything you put into practice in this direction will help you in your daily life to live with serenity and far from the tensions of our society.',
        
        //Spirit
        titleSpirit: 'The fourth step: connection',
        subtitleSpirit: 'You are finally ready to connect with an animal! That’s great, but what do we do now?',
        firstpSpirit: 'Well, first of all, I invite you to set a clear intention in the present tense: “I am connected with (the name of the animal)”, to repeat 3 times. Either you know the animal or it will be necessary to have a photo of it and to be able to look at it before or even during the connection.',
        secondpSpirit: 'You can also do it with the animal next to you. Be aware that in the latter case, his movements, or even the fact that he may leave, can be disruptive elements. The photo is normally completely still!',
        thirdpSpirit: 'Then, there are various little tips, “tricks”, which will help you capture the animal, feel it, hear it. These little tips will depend on your sensory mode of functioning (depending on whether you operate more visually, auditorily, kinesthetically).',
        fourthpSpirit: 'I offer you a way to “connect”. If it doesn\'t work, don\'t worry, it\'s just that either your preparation is not sufficient, or it\'s not the right way for you...',
        fifthpSpirit: 'You can, by closing your eyes, breathe the image of the photo into your heart, then visualize the animal. Then observe what you feel in your body, your emotions, see the way in which the animal presented itself, its way of moving, the environment in which it presents itself to you, etc., listen, feel. Every tiny bit of “information” has its importance..',
        
        //Sensory
        titleSensory: 'The fifth and final step: sensory exchanges',
        subtitleSensory: 'As expressed just above, you are now ready to be able to interact with the animal (perhaps yours?).',
        firstpSensory: 'The more you get into the habit of feeling your body, listening or looking consciously (paying attention to it) in your daily life, the more you will sharpen your perceptions and be able to feel the differences when you connect to an animal.',
        secondpSensory: 'When the connection is established, you can choose to let the sensations come to you, and/or guide the exchange by asking questions and waiting to see what happens within you. I wish you great experiments, great discoveries towards this world of the invisible and yet so present in our physical world.',
        thirdpSensory: 'Animal communication information can be verified by the owner of the animal in question. It is indeed all the correlations that may have existed that allow so many people today to discover and use animal communication.',
        
        //Foundation
        titleFirstFormation: 'Introduction to Animal Communication',
        subtitleFirstFormation: 'Section 1: The Foundation of Animal Communication',
        subtitleFirstPart: '1.1 Definition of Animal Communication',
        firstpFirstFormation: 'Dive into the fascinating world of animal communication by exploring its foundations and its crucial role in creating deep bonds between humans and animals.',
        secondpFirstFormation: 'Discover animal communication as an extraordinary method to understand the needs, emotions, and thoughts of animals.',
        thirdpFirstFormation: 'Explore the various forms of animal communication, including the rich array of non-verbal signals that transcend linguistic barriers.',
        secondsubtitleFirstPart: '1.2 Understanding Telepathic Principles',
        fourthpFirstFormation: 'Immerse yourself in the mysterious world of telepathic principles that underlie animal communication, allowing you to transcend the limits of conventional physical senses.',
        fifthpFirstFormation: 'Understand telepathic principles as a means of transmitting information beyond traditional methods, opening the door to a deeper connection.',
        sixthpFirstFormation: 'Explore the dimensions of intuition and empathic reception, key skills for establishing subtle communication with sensitive beings.',
        subtitleFirstFormation2: 'Section 2: Ethics and Respect in Animal Communication',
        subtitleSecondPart: '2.1 Ethics of Animal Communication',
        seventhpFirstFormation: 'Raise awareness of the ethical nuances of animal communication, guiding participants towards responsible and respectful practice.',
        eighthpFirstformation: 'Explore the ethical responsibility that accompanies communication with animals, emphasizing the importance of each interaction.',
        ninthpFirstFormation: 'Highlight the crucial importance of respect for the will and integrity of the animal, laying the foundation for authentic and ethical communication.',
        subtitleThirdPart: '2.2 Respect for Animals',
        tenthpFirstFormation: 'Deepen your understanding of the importance of respect for animals in the context of animal communication, thereby creating harmonious relationships.',
        eleventhpFirstFormation: 'Explore the unique nature of each animal individual, discovering the richness and diversity of animal personalities.',
        twelfthpFirstFormation: 'Engage in in-depth discussions on how to recognize and respect the individual boundaries of animals, fostering a deep and respectful understanding.',

        //Meditation
        titleSecondFormation: 'Connection Meditation',
        subtitleSecondFormation: 'Practice of Connection Meditation',
        subtitleFirstPartSecondFormation: 'Section 1: Explanation of the Benefits of Meditation',
        firstpSecondFormation: 'Connection meditation offers numerous benefits for establishing deep communication with animals.',
        secondpSecondFormation: 'Mind calming and stress reduction, creating a conducive space for telepathic reception.',
        thirdpSecondFormation: 'Development of concentration and intuition, essential skills for animal communication.',
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

        //Ecommerce
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

        //Cookies
        cookies: 'This site uses cookies to improve your experience. Continuing to navigate on the site, you accept our use of cookies.',
        agreeCookies: 'I agree',

        informationCV: 'Here is an overview of my profile, with my different experiences and training that I have been able to follow. Do not hesitate to contact me if you want more information.',

        //ContactMe
        labelName: 'Indicate your name',
        labelFirstName: 'Indicate your first name',
        labelMail: 'Indicate your email address',
        labelMessage: 'Indicate your message',
        sendMessage: 'Send your message',
      }
    }
  } ,
  lng: 'fr',
  fallbackLng: 'fr'
});

export default i18next;
