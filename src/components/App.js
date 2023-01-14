import React from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';
import Card from './Card';

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
    isEditProfilePopupOpen && handleEditProfileClick();
    isAddPlacePopupOpen && handleAddPlaceClick();
    isEditAvatarPopupOpen && handleEditAvatarClick();
  }

  // function handleEscClose(evt) {
  //   evt.preventDefault();
  //   if (evt.key === 'Escape') {
  //     console.log('esc close');
  //   }
  // }

  return (

    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          {/* <Card /> */}
          <Footer />
          <PopupWithForm name="profile" children="Редактировать профиль" header="Сохранить" isOpen={isEditProfilePopupOpen && 'popup_opened'} onClose={closeAllPopups} />
          <PopupWithForm name="mesto" children="Новое место" header="Создать" isOpen={isAddPlacePopupOpen && 'popup_opened'} onClose={closeAllPopups} />
          <ImagePopup />
          <PopupWithForm name="are-you-sure" children="Вы уверены?" header="Да" />
          <PopupWithForm name="avatar" children="Обновить аватар" header="Создать" isOpen={isEditAvatarPopupOpen && 'popup_opened'} onClose={closeAllPopups} />
        </div>

      </div>
    </div>
  );
}

export default App;
