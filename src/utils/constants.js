export const formSettings = {
  forms: '.popup__form',
  button: '.popup__save',
  inputError: 'popup__input_type_error',
  invalidButtonClass: 'popup__save_invalid',
  spanError: '.error',
  input: '.popup__input',
};

export const config = {
  url: 'https://mesto.nomoreparties.co',
  headers: {
    "content-type": "application/json",
    authorization: "697a4384-2695-44b9-a2ae-a1b7f71813d5"
  }
}

export const selectors = {
  popups: '.popup',
  popupProfile: '.popup-profile',
  popupMesto: '.popup-mesto',
  popupImage: '.popup-image',
  buttonsClose: 'popup__close-icon',
  buttonEdit: '.profile__button-edit',
  formFromPopupProfile: '.popup__form_type_form-profile',
  inputName: '.popup__input_type_card-name',
  inputLink: '.popup__input_type_card-src',
  cardsContainer: '.elements',
  buttonPlus: '.profile__button',
  template: '.template-card',
  divElementsCard: '.elements__card',
  elementsTitle: '.elements__title',
  elementsImage: '.elements__image',
  trashButton: '.elements__trash',
  wrapperButton: '.elements__button-wrapper',
  popopImageImage: '.popup-image__image',
  caption: '.popup-image__caption',
  like: '.elements__like',
  profileName: '.profile__name',
  profileJob: '.profile__busy',
  popupProfileInputName: '.popup__input_type_name',
  popupProfileInputJob: '.popup__input_type_job',
  openedPopup: 'popup_opened',
  activePopup: '.popup_opened',
  likeActive: 'elements__like_active',
  formFromPopupMesto: '.popup__form_type_form-mesto',
  buttonSubmit: '.popup__save',
  invalidButtonClass: 'popup__save_invalid',
  avatar: '.profile__avatar',
  counter: '.elements__counter',
  popupAreYouSureButton: '.popup-are-you-sure__button',
  popupAreYouSure: '.popup-are-you-sure',
  popupAvatar: '.popup-avatar',
  formFromPopupAvatar: '.popup__form_type_form-avatar',
  profilePencil: '.profile__pencil'
}
