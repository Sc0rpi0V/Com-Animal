import React from 'react';
import PDFFile from '../../pdf/CV_Valentin_BOURY.pdf';
import "./style/Download.css";

const DownloadButton = () => {
  const handleDownload = () => {
    // Remplacez le lien ci-dessous par le lien de téléchargement de votre CV
    const cvDownloadLink = PDFFile;
    window.open(cvDownloadLink, '_blank');
  };

  return (
    <div className="download">
        <p className="information_cv">
            Voici un aperçu de mon profil, avec mes différentes expériences et formations que j'ai pu suivre.
            N'hésitez pas à me contacter si vous souhaitez plus d'informations.
            <button onClick={handleDownload} className="download-button">
                Télécharger le CV
            </button>
        </p>
    </div>
  );
};

export default DownloadButton;
