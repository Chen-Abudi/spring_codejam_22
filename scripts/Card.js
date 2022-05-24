import { openModal } from './modal.js';

const cardModal = document.querySelector('.card-modal');

class Card {
  constructor(card, templateSelector) {
    this._name = card.name;
    this._content = card.content;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
  }

  _handleMouseOver() {
    const cardTitle = this._cardElement.querySelector('.card__title');
    cardTitle.textContent = this._cardElement.querySelector('.card__hidden-text').textContent;
  }

  _handleMouseOut() {
    const cardTitle = this._cardElement.querySelector('.card__title');
    cardTitle.textContent = this._name;
  }

  _handleMouseClick() {
    cardModal.querySelector('.card-modal__title').textContent = this._name;
    cardModal.querySelector('.card-modal__description').textContent = this._content;
    openModal(cardModal);
  }

  _setEventListeners() {
    this._cardElement.addEventListener('mouseout', () => this._handleMouseOut());
    this._cardElement.addEventListener('mouseover', () => this._handleMouseOver());
    this._cardElement.addEventListener('click', () => this._handleMouseClick());
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
};

export { Card };