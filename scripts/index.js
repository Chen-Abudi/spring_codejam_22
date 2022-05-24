import { initialCards } from './constants.js';
import { Card } from './Card.js';
import { closeModalByMouseClick } from './modal.js';

const cardModal = document.querySelector('.card-modal');
closeModalByMouseClick(cardModal);

(function() { 
  const cardsContainer = document.querySelector('.projects__cards');
  initialCards.forEach((card) => {
    const cardElement = new Card(card, '#card');
    const newCard = cardElement.generateCard();
    cardsContainer.append(newCard);
  });
})();