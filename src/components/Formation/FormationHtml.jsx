import React from "react";

const FormationHtml = () => {

    return (
        <>
            <h1>Formation sur les Bases HTML</h1>

            <h1>Module 1 : Introduction à HTML</h1>
            <p><strong>Objectif :</strong> Comprendre les bases d'HTML et son rôle dans la création de pages Web.</p>
            <h2>1.1 Qu'est-ce qu'HTML ?</h2>
            <p>HTML signifie HyperText Markup Language.</p>
            <p>C'est un langage de balisage utilisé pour structurer le contenu d'une page Web.</p>
            <h2>1.2 La structure de base d'une page HTML</h2>
            <p><code>&lt;!DOCTYPE html&gt;</code> : Indique la version d'HTML utilisée.</p>
            <p><code>&lt;html&gt;</code> : Balise racine de la page.</p>
            <p><code>&lt;head&gt;</code> : Contient les informations sur la page (titre, méta-données, liens vers des feuilles de style).</p>
            <p><code>&lt;body&gt;</code> : Contient le contenu principal de la page (texte, images, liens).</p>

            <h1>Module 2 : Balises de texte</h1>
            <p><strong>Objectif :</strong> Apprendre à formater le texte dans une page HTML.</p>
            <h2>2.1 Les titres (Headings)</h2>
            <p><code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> : Les balises de titres, <code>&lt;h1&gt;</code> étant le plus grand et <code>&lt;h6&gt;</code> le plus petit.</p>
            <h2>2.2 Paragraphes</h2>
            <p><code>&lt;p&gt;</code> : Utilisé pour créer des paragraphes de texte.</p>
            <h2>2.3 Texte en gras et en italique</h2>
            <p><code>&lt;strong&gt;</code> : Pour le texte en gras.</p>
            <p><code>&lt;em&gt;</code> : Pour le texte en italique.</p>

            <h1>Module 3 : Liens et images</h1>
            <p><strong>Objectif :</strong> Apprendre à ajouter des liens et des images à une page Web.</p>
            <h2>3.1 Liens hypertextes</h2>
            <p><code>&lt;a href="URL"&gt;Texte du lien&lt;/a&gt;</code> : Crée un lien hypertexte vers une autre page Web.</p>
            <h2>3.2 Images</h2>
            <p><code>&lt;img src="URL de l'image" alt="Texte alternatif"&gt;</code> : Insère une image sur la page.</p>

            <h1>Module 4 : Listes et tableaux</h1>
            <p><strong>Objectif :</strong> Apprendre à créer des listes et des tableaux.</p>
            <h2>4.1 Listes non ordonnées</h2>
            <p><code>&lt;ul&gt;</code> : Crée une liste non ordonnée.</p>
            <p><code>&lt;li&gt;</code> : Élément de liste.</p>
            <h2>4.2 Listes ordonnées</h2>
            <p><code>&lt;ol&gt;</code> : Crée une liste ordonnée.</p>
            <h2>4.3 Tableaux</h2>
            <p><code>&lt;table&gt;</code> : Crée un tableau.</p>
            <p><code>&lt;tr&gt;</code> : Crée une ligne dans le tableau.</p>
            <p><code>&lt;td&gt;</code> : Crée une cellule de données.</p>

            <h1>Module 5 : Formulaires</h1>
            <p><strong>Objectif :</strong> Comprendre comment créer des formulaires HTML.</p>
            <h2>5.1 Formulaire de base</h2>
            <p><code>&lt;form&gt;</code> : Crée un formulaire.</p>
            <p><code>&lt;input type="text"&gt;</code> : Champ de texte.</p>
            <h2>5.2 Bouton de soumission</h2>
            <p><code>&lt;input type="submit" value="Soumettre"&gt;</code> : Bouton pour soumettre le formulaire.</p>

            <h1>Module 6 : Validation et commentaires</h1>
            <p><strong>Objectif :</strong> Apprendre à valider une page HTML et à ajouter des commentaires.</p>
            <h2>6.1 Validation HTML</h2>
            <p>Utilisez des outils en ligne pour valider votre code HTML.</p>
            <h2>6.2 Commentaires</h2>
            <p><code>&lt;!-- Votre commentaire ici --&gt;</code> : Ajoutez des commentaires dans votre code HTML.</p>

            <h1>Module 7 : Feuilles de style CSS (en option)</h1>
            <p><strong>Objectif :</strong> Introduction aux CSS pour la mise en page et la présentation.</p>
            <h2>7.1 Lien vers une feuille de style externe</h2>
            <p><code>&lt;link rel="stylesheet" href="style.css"&gt;</code> : Liez une feuille de style externe à votre page HTML.</p>
            <h2>7.2 Balises de style intégré</h2>
            <p><code>&lt;style&gt;</code> : Ajoutez du style directement dans votre fichier HTML.</p>

            <p>Cette formation couvre les bases essentielles d'HTML. Pour devenir un développeur Web compétent, vous devrez également apprendre CSS (Cascading Style Sheets) pour la mise en page et JavaScript pour l'interactivité. Bonne chance dans votre parcours de développement Web !</p>
        </>
    );
}

export default FormationHtml;