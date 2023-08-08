import React from 'react';
import PDFFile from '../../pdf/CV_Valentin_BOURY.pdf';
import "./style/Download.css";
import { useTranslation } from "react-i18next";

const DownloadButton = () => {
  const handleDownload = () => {
    // Remplacez le lien ci-dessous par le lien de téléchargement de votre CV
    const cvDownloadLink = PDFFile;
    window.open(cvDownloadLink, '_blank');
  };

  const { t } = useTranslation();

  return (
    <div className="download">
        <p className="information_cv">{t('informationCV')}
            <button onClick={handleDownload} className="download-button">{t('downloadCV')}</button>
        </p>
    </div>
  );
};

export default DownloadButton;
