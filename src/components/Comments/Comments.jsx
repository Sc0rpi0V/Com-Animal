import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CommentForm = () => {
  const [commentData, setCommentData] = useState({
    firstName: '',
    lastName: '',
    content_comments: '',
    date: ''
  });

  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);

  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection('Comments').onSnapshot((snapshot) => {
      const commentsData = [];
      snapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [db]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleEdit = (commentId) => {
    // Récupérez les données du commentaire à modifier depuis Firebase
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    
    setCommentData({
      firstName: commentToEdit.firstName,
      lastName: commentToEdit.lastName,
      content_comments: commentToEdit.text,
      date: commentToEdit.date
    });

    setEditingCommentId(commentId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingCommentId) {
      try {
        await db.collection('Comments').doc(editingCommentId).update({
          firstName: commentData.firstName,
          lastName: commentData.lastName,
          text: commentData.content_comments,
          date: commentData.date,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setEditingCommentId(null);
        setCommentData({
          firstName: '',
          lastName: '',
          content_comments: '',
          date: ''
        });
      } catch (error) {
        console.error('Erreur lors de la mise à jour du commentaire :', error);
      }
    } else {
      try {
        await db.collection('Comments').add({
          firstName: commentData.firstName,
          lastName: commentData.lastName,
          text: commentData.content_comments,
          date: commentData.date,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setCommentData({
          firstName: '',
          lastName: '',
          content_comments: '',
          date: ''
        });
      } catch (error) {
        console.error('Erreur lors de l\'ajout du commentaire :', error);
      }
    }
  };

  return (
    <div>
      {/* Affichez les commentaires existants ici, avec un bouton "Modifier" pour chaque commentaire */}
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => handleEdit(comment.id)}>Modifier</button>
        </div>
      ))}

      <h2>Ajouter un commentaire</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={commentData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={commentData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content_comments">Commentaire:</label>
          <textarea
            id="content_comments"
            name="content_comments"
            rows="4"
            cols="50"
            placeholder="Écrivez votre commentaire ici"
            value={commentData.content_comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Date du commentaire:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={commentData.date}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">{editingCommentId ? 'Modifier le commentaire' : 'Ajouter le commentaire'}</button>
      </form>
    </div>
  );
};

export default CommentForm;