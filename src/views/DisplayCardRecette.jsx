import React from "react";
import RecetteCard from "../components/CardRecette/CardRectte";
import './style/DisplayCardRecette.css';
import { useTranslation } from "react-i18next";

const DisplayCardRecette = () => {
    
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('displayRecipes')}</h1>
            <RecetteCard />
        </>
    );
}

export default DisplayCardRecette;