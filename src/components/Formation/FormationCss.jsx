import React from "react";

const FormationCSS = () => {

    return (
        <>
            <h1>Formation sur les Bases HTML</h1>
            
            <h2>Module 1 : Introduction à CSS</h2>
            <h3>1.1 Qu'est-ce que CSS ?</h3>
            <p>CSS (Cascading Style Sheets) est un langage de feuilles de style utilisé pour définir la présentation et la mise en forme des éléments HTML d'une page web. Il permet de contrôler la couleur, la police, la taille, la disposition et d'autres aspects de la mise en page.</p>

            <h3>1.2 Intégration de CSS dans HTML</h3>
            <p>Pour utiliser CSS, vous devez intégrer des règles CSS dans votre document HTML. Vous pouvez le faire en utilisant les balises &lt;style&gt; ou en liant un fichier CSS externe avec la balise &lt;link&gt;.</p>

            <p>Exemple de balises &#60;style&#62; dans l'en-tête HTML</p>
            <pre>
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                &lt;head&gt;
                    &lt;style&gt;
                        &#47;* Vos règles CSS vont ici *&#47;
                    &lt;/style&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    Votre contenu HTML 
                &lt;/body&gt;
                &lt;/html&gt;
            </pre>

            <p>Exemple de liaison d'un fichier CSS externe </p>
            <pre>
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                &lt;head&gt;
                    &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    Votre contenu HTML 
                &lt;/body&gt;
                &lt;/html&gt;
            </pre>

            <h2>Module 2 : Sélecteurs CSS</h2>

            <h3>2.1 Sélection d'éléments</h3>
            <p>Les sélecteurs CSS vous permettent de cibler des éléments HTML spécifiques pour leur appliquer des styles. Voici quelques exemples de sélecteurs :</p>
            <ul>
                <li>Sélectionner par balise : &lt;code&gt;p &#123; propriété: valeur; &#125;&lt;/code&gt;</li>
                <li>Sélectionner par classe : &lt;code&gt;.maClasse &#123; propriété: valeur; &#125;&lt;/code&gt;</li>
                <li>Sélectionner par ID : &lt;code&gt;#monID &#123; propriété: valeur; &#125;&lt;/code&gt;</li>
            </ul>

            <h3>2.2 Propriétés et valeurs CSS</h3>
            <p>Les propriétés CSS déterminent ce que vous souhaitez styler, tandis que les valeurs définissent comment vous souhaitez le styler. Par exemple :</p>
            <pre>
                &lt;code&gt;
                    p &#123;
                        color: blue; &#47;* Propriété: Couleur du texte *&#47;
                        font-size: 16px; &#47;* Propriété: Taille de police *&#47;
                        margin: 10px; &#47;* Propriété: Marge extérieure *&#47;
                        padding: 5px; &#47;* Propriété: Remplissage intérieur *&#47;
                    &#125;
                &lt;/code&gt;
            </pre>

            <h2>Module 3 : Box Model</h2>

            <h3>3.1 Box Model</h3>
            <p>Le modèle de boîte CSS définit la manière dont les éléments HTML sont rendus dans la mise en page. Il se compose de la marge, de la bordure, du remplissage et du contenu.</p>
            <pre>
                &lt;code&gt;
                    .maClasse &#123;
                        margin: 10px; &#47;* Marge extérieure *&#47;
                        border: 1px solid black; &#47;* Bordure *&#47;
                        padding: 5px; &#47;* Remplissage intérieur *&#47;
                        width: 200px; &#47;* Largeur *&#47;
                        height: 100px; &#47;* Hauteur *&#47;
                    &#125;
                &lt;/code&gt;
            </pre>

            <h2>Module 4 : Positionnement</h2>

            <h3>4.1 Positionnement</h3>
            <p>CSS vous permet de contrôler la position des éléments. Les propriétés couramment utilisées sont &lt;code&gt;position&lt;/code&gt;, &lt;code&gt;top&lt;/code&gt;, &lt;code&gt;left&lt;/code&gt;, &lt;code&gt;right&lt;/code&gt; et &lt;code&gt;bottom&lt;/code&gt;.</p>
            <pre>
                &lt;code&gt;
                    .maClasse &#123;
                        position: relative; &#47;* Position relative *&#47;
                        top: 10px; &#47;* Déplacer vers le haut de 10 pixels *&#47;
                        left: 20px; &#47;* Déplacer vers la gauche de 20 pixels *&#47;
                    &#125;
                &lt;/code&gt;
            </pre>

            <h2>Module 5 : Flexbox (Boîte flexible)</h2>

            <h3>5.1 Flexbox</h3>
            <p>Flexbox est un modèle de disposition qui facilite la création de mises en page complexes en alignant et en distribuant les éléments de manière dynamique dans un conteneur. Pour utiliser Flexbox, définissez le conteneur comme un conteneur flex avec &lt;code&gt;display: flex;&lt;/code&gt; et utilisez les propriétés appropriées pour aligner les éléments.</p>
            <pre>
                &lt;code&gt;
                    .conteneur-flex &#123;
                        display: flex;
                        justify-content: center; &#47;* Alignement horizontal au centre *&#47;
                        align-items: center; &#47;* Alignement vertical au centre *&#47;
                    &#125;
                &lt;/code&gt;
            </pre>

            <p>Ceci conclut notre formation sur les bases de CSS. Vous pouvez maintenant commencer à styliser vos pages web en utilisant CSS pour rendre votre contenu plus attrayant et fonctionnel. N'oubliez pas de pratiquer régulièrement pour devenir un expert en CSS !</p>
        </>
    );
}

export default FormationCSS;
