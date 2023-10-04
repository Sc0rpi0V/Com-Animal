import React, { useState, useEffect } from 'react';
import './style/CardRecette.css';
import { useTranslation } from "react-i18next";

const CardRecette = ({ title, description, tempsPreparation, tempsCuisson, onDelete, onEdit }) => {
  const { t } = useTranslation();

  return (
    <div className="recetteCard">
      <h2>{title}</h2>
      <p className='description'>{description}</p>
      <p>{t('preparationTime')} : {tempsPreparation} minutes</p>
      <p>{t('cookingTime')} : {tempsCuisson} minutes</p>
      <button className ="btn-card" onClick={onDelete}>{t('delete')}</button>
      <button className ="btn-card" onClick={onEdit}>{t('toUpdate')}</button>
    </div>
  );
}

const RecetteCard = () => {

  const { t } = useTranslation();

  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    tempsPreparation: '',
    tempsCuisson: '',
  });
  const [editingCardIndex, setEditingCardIndex] = useState(null);

  useEffect(() => {
    const storedRecettes = localStorage.getItem('recettes');
    if (storedRecettes) {
      setCards(JSON.parse(storedRecettes));
    }
  }, []);

  const addCard = () => {
    if (newCard.title && newCard.description) {
      const updatedCards = [...cards];
      if (editingCardIndex !== null) {
        updatedCards[editingCardIndex] = newCard;
      } else {
        updatedCards.push(newCard);
      }
      setCards(updatedCards);
      setNewCard({
        title: '',
        description: '',
        tempsPreparation: '',
        tempsCuisson: '',
      });
      setEditingCardIndex(null);
      localStorage.setItem('recettes', JSON.stringify(updatedCards));
    }
  };

  const deleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    localStorage.setItem('recettes', JSON.stringify(updatedCards));

    if (index === editingCardIndex) {
      setEditingCardIndex(null);
    }
  };

  useEffect(() => {
    if (editingCardIndex !== null) {
      const cardToEdit = cards[editingCardIndex];
      setNewCard({ ...cardToEdit });
    }
  }, [editingCardIndex, cards]);

  return (
    <div className="recette">
      <h1>{t('cookingRecipe')}</h1>
      <div className="cards">
        {cards.map((carte, index) => (
          <CardRecette
            key={index}
            title={carte.title}
            description={carte.description}
            tempsPreparation={carte.tempsPreparation}
            tempsCuisson={carte.tempsCuisson}
            onDelete={() => deleteCard(index)}
            onEdit={() => setEditingCardIndex(index)}
          />
        ))}
      </div>
      <div className="form">
        { editingCardIndex !== null ? (
          <>
            <input
              type="text"
              placeholder="Title"
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={newCard.description}
              onChange={(e) =>
                setNewCard({ ...newCard, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder= {t('preparationTime')}
              value={newCard.tempsPreparation}
              onChange={(e) =>
                setNewCard({ ...newCard, tempsPreparation: parseInt(e.target.value) })
              }
            />
            <input
              type="number"
              placeholder= {t('cookingTime')}
              value={newCard.tempsCuisson}
              onChange={(e) =>
                setNewCard({ ...newCard, tempsCuisson: parseInt(e.target.value) })
              }
            />
            <button className ="btn-card" onClick={addCard}>
              {editingCardIndex !== null ? t('toUpdate') : t('add')}
            </button>
            {editingCardIndex !== null && (
              <button className ="btn-card" onClick={() => setEditingCardIndex(null)}>{t('cancel')}</button>
            )}
          </>
        ) : (
          <button className ="btn-card" onClick={() => setEditingCardIndex(cards.length)}>{t('addRecipe')}</button>
        )}
      </div>
    </div>
  );
};

export default RecetteCard;
