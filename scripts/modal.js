function openModal(modal) {
  modal.classList.add('card-modal_opened');
}

function closeModal(modal) {
  modal.classList.remove('card-modal_opened');
}

function closeModalByMouseClick(modal) {
  modal.addEventListener('mousedown', event => {
    if (event.target.classList.contains('card-modal')) {
      closeModal(modal);
    }
  })
}



export { openModal, closeModalByMouseClick };