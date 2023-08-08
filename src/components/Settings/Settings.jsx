import React, { useState } from 'react';
import "./style/Settings.css";

const Settings = () => {
  const [cacheCleared, setCacheCleared] = useState(
    localStorage.getItem('cacheCleared') === 'true'
  );

  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page par défaut
    if (cacheCleared || isCheckedA || isCheckedB) {
      localStorage.setItem('cacheCleared', 'true');
      setCacheCleared(true);

      if (isCheckedB) {
        // Mettre à jour les CSP ici
        const cspHeader = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src *; font-src 'self';";

        const existingCSP = document.querySelector("meta[http-equiv='Content-Security-Policy']");
        if (!existingCSP) {
          const newCSP = document.createElement('meta');
          newCSP.httpEquiv = 'Content-Security-Policy';
          newCSP.content = cspHeader;
          document.head.appendChild(newCSP);
        } else {
          if (!existingCSP.content.includes("'self'") || !existingCSP.content.includes("'unsafe-inline'")) {
            existingCSP.content += " 'self' 'unsafe-inline';";
          }
        }
      }
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'cacheCleared':
        setCacheCleared(checked);
        break;
      case 'addCSP':
        setIsCheckedB(checked);
        break;
      default:
        break;
    }
  };

  const isButtonDisabled = !(cacheCleared || isCheckedA || isCheckedB);

  return (
    <div className="settings">
      <div className="cache-settings">
        <form onSubmit={handleSubmit}>
          <p>
            En cliquant sur "Confirmer", vous acceptez de vider le cache du site, ce qui peut améliorer les performances. Cochez la case pour confirmer et cliquez sur "Valider".
          </p>
          <label>
            <input
              type="checkbox"
              name="cacheCleared"
              checked={cacheCleared}
              onChange={handleCheckboxChange}
            />
            J'ai compris et je confirme.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="addCSP"
              checked={isCheckedB}
              onChange={handleCheckboxChange}
            />
            Ajouter les CSP
          </label>
          <button type="submit" disabled={isButtonDisabled}>
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
