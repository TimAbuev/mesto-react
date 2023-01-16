import React from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handlePopupImgCloseBtnClick() {
    setSelectedCard(!selectedCard);
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && handleEditProfileClick();
    isAddPlacePopupOpen && handleAddPlaceClick();
    isEditAvatarPopupOpen && handleEditAvatarClick();
    selectedCard && handlePopupImgCloseBtnClick();
  }

  return (

    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={setSelectedCard} />
          <Footer />
          <PopupWithForm name="profile" children="Редактировать профиль" btnName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            {/* <input />
            <input /> */}
          </PopupWithForm>
          <PopupWithForm name="mesto" children="Новое место" btnName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
            <input />
          </PopupWithForm>
          <ImagePopup close={closeAllPopups} card={selectedCard} />
          <PopupWithForm name="are-you-sure" children="Вы уверены?" btnName="Да" />
          <PopupWithForm name="avatar" children="Обновить аватар" btnName="Создать" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >

          </PopupWithForm>
        </div>

      </div>
    </div>
  );
}

export default App;
