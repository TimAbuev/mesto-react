import React from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function closeAllPopups() {
    console.log('test');
    const openedPopup = document.querySelector('.popup_opened');
    openedPopup.classList.remove('popup_opened');
  }


  return (

    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          <Footer />
          <PopupWithForm name="profile" children="Редактировать профиль" header="Сохранить" isOpen={isEditProfilePopupOpen && 'popup_opened'} onClose={closeAllPopups}/>
          <PopupWithForm name="mesto" children="Новое место" header="Создать" isOpen={isAddPlacePopupOpen && 'popup_opened'} onClose={closeAllPopups}/>
          <ImagePopup />
          <PopupWithForm name="are-you-sure" children="Вы уверены?" header="Да" />
          <PopupWithForm name="avatar" children="Обновить аватар" header="Создать" isOpen={isEditAvatarPopupOpen && 'popup_opened'} onClose={closeAllPopups}/>
        </div>
        <template className="template-card">
          <div className="elements__card">
            <button className="elements__button-wrapper" type="button">
              <img alt="имя картинки вставлять" className="elements__image" />
            </button>
            <button className="elements__trash"></button>
            <div className="elements__wrapper">
              <h2 className="elements__title"></h2>
              <div className="elements__like-wrapper">
                <button className="elements__like" type="button"></button>
                <p className="elements__counter">0</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}

export default App;
