import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formSettings, selectors, config} from "../utils/constants.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithAreYouSure from "../components/PopupWithAreYouSure.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

const popupImage = document.querySelector(selectors.popupImage);
const popopImageImage = document.querySelector(selectors.popopImageImage);
const caption = document.querySelector(selectors.caption);
const buttonPlus = document.querySelector(selectors.buttonPlus);
const cardsContainer = document.querySelector(selectors.cardsContainer);
const profileJob = document.querySelector(selectors.profileJob);
const profileName = document.querySelector(selectors.profileName);
const popupProfile = document.querySelector(selectors.popupProfile);
const formFromPopupMesto = document.querySelector(selectors.formFromPopupMesto);
const formFromPopupProfile = document.querySelector(selectors.formFromPopupProfile);
const popupMesto = document.querySelector(selectors.popupMesto);
const buttonEdit = document.querySelector(selectors.buttonEdit);
const avatar = document.querySelector(selectors.avatar);
const popupAreYouSure = document.querySelector(selectors.popupAreYouSure);
const popupAreYouSureButton = document.querySelector(selectors.popupAreYouSureButton);
const popupAvatar = document.querySelector(selectors.popupAvatar);
const formFromPopupAvatar = document.querySelector(selectors.formFromPopupAvatar);
const profilePencil = document.querySelector(selectors.profilePencil);

const formFromPopupMestoInstance = new FormValidator(formSettings, formFromPopupMesto);
formFromPopupMestoInstance.enableValidation();
const formFromPopupProfileInstance = new FormValidator(formSettings, formFromPopupProfile);
formFromPopupProfileInstance.enableValidation();
const formFrompopupAvatarInstance = new FormValidator(formSettings, formFromPopupAvatar);
formFrompopupAvatarInstance.enableValidation();
const popupWithImageInstance = new PopupWithImage(popupImage, selectors, caption, popopImageImage);
popupWithImageInstance.setEventListeners();
const popupMestoInstance = new PopupWithForm(popupMesto, selectors, addCard);
popupMestoInstance.setEventListeners();
popupMestoInstance.setSubmitEvent();
const userInfoInstance = new UserInfo(profileName, profileJob, avatar);
const popupProfileInstance = new PopupWithForm(popupProfile, selectors, addUserInfo);
popupProfileInstance.setEventListeners();
popupProfileInstance.setSubmitEvent();
const popupAreYouSureInstance = new PopupWithAreYouSure(popupAreYouSure, selectors, popupAreYouSureButton);
popupAreYouSureInstance.setEventListeners();
const popupAvatarInstance = new PopupWithForm(popupAvatar, selectors, changeAvatar);
popupAvatarInstance.setEventListeners();
popupAvatarInstance.setSubmitEvent();
const api = new Api();

const sectionInstance = new Section({
  renderer: (item) => {
    sectionInstance.addItem(createCard(item));
  }
}, cardsContainer);

let userId;

Promise.all([api.getProfile(), api.getCards()])
  .then(function([userData, cards]) {
    userInfoInstance.setUserAvatar(userData);
    userInfoInstance.setUserInfo(userData);
    userId = userData._id;

    sectionInstance.renderItems(cards);
  })
  .catch(function (err) {
    console.log('ошибка', err);
  })

function changeAvatar(data) {
  popupAvatarInstance.renderLoading(true);
  api.postAvatar({ avatar: data.avatar })
  .then(function(res) {
    userInfoInstance.setUserAvatar(res);
    popupAvatarInstance.close();
  })
  .catch(function (err) {
    console.log('ошибка', err);
  })
  .finally(function() {
    popupAvatarInstance.renderLoading(false);
  })
}

function addUserInfo(data) {
  popupProfileInstance.renderLoading(true);
  api.editInfo({ name: data.name, about: data.job })
    .then(function (res) {
      userInfoInstance.setUserInfo(res);
      popupProfileInstance.close();
    })
    .catch(function (err) {
      console.log('ошибка', err);
    })
    .finally(function() {
      popupProfileInstance.renderLoading(false);
    })
}

function addCard(data) {
  popupMestoInstance.renderLoading(true);
  api.postCard({ name: data.name, link: data.link })
    .then(function (res) {
      sectionInstance.addItem(createCard(res));
      popupMestoInstance.close();
    })
    .catch(function (err) {
      console.log('ошибка', err);
    })
    .finally(function() {
      popupMestoInstance.renderLoading(false);
    })
}

function createCard() {
  const card = new Card(
    {
      handleClickTrash: (id) => {
        popupAreYouSureInstance.open();
        popupAreYouSureInstance.handleClickYes(() => {
          api.deleteCard(id)
          .then(function () {
            card.removeElement();
            popupAreYouSureInstance.close();
          })
          .catch(function (err) {
            console.log('ошибка', err);
          })
        })
        
      },
      handleCardClick: (name, link) => {
        popupWithImageInstance.open(name, link);
      },
      handleClickLike: (idCard) => {

        if(card.isLiked()) {
          api.deleteLike(idCard)
          .then(function (res) {
            card.setLike(res.likes);
          })
          .catch(function (err) {
            console.log('ошибка', err);
          })
        } else {
          api.addLike(idCard)
          .then(function (res) {
            card.setLike(res.likes);
          })
          .catch(function (err) {
            console.log('ошибка', err);
          })
        }
      },
      userId: userId
    },
    data, '.template-card', selectors
  );
  return card.generate();
}

function addEventListeners() {

  buttonPlus.addEventListener('click', () => {
    formFromPopupMestoInstance.clearError();
    formFromPopupMestoInstance.disabledSubmitButton();
    popupMestoInstance.open();
  });

  buttonEdit.addEventListener('click', function() {
    formFromPopupProfileInstance.clearError();
    const currentUserInfo = userInfoInstance.getUserInfo();
    popupProfileInstance.setInputValues(currentUserInfo);
    popupProfileInstance.open();
  });

  avatar.addEventListener('click', function() {
    formFrompopupAvatarInstance.clearError();
    formFrompopupAvatarInstance.disabledSubmitButton();
    popupAvatarInstance.open();
  });

  avatar.addEventListener('mouseenter', function() {
    profilePencil.style.visibility = 'visible';
  });
  avatar.addEventListener('mouseleave', function() {
    profilePencil.style.visibility = 'hidden';
  });

} //End of addEventListeners()

addEventListeners();