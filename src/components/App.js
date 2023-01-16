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
          <PopupWithForm name="profile" headerName="Редактировать профиль" btnName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children>
              <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40"
                required id="input-name" />
              <span className="error input-name-error"></span>
              <input type="text" className="popup__input popup__input_type_job" name="job" minLength="2" maxLength="200"
                required id="input-job" />
              <span className="error input-job-error"></span>        
          </PopupWithForm>

          <PopupWithForm name="mesto" headerName="Новое место" btnName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children>
            <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40" required id="input-name" />
            <span className="error input-name-error"></span>
          </PopupWithForm>
          <ImagePopup close={closeAllPopups} card={selectedCard} />
          <PopupWithForm name="are-you-sure" headerName="Вы уверены?" btnName="Да" />

          <PopupWithForm name="avatar" headerName="Обновить аватар" btnName="Создать" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children>
            <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40" required id="input-name" />
            <span className="error input-name-error"></span>
          </PopupWithForm>
        </div>

      </div>
    </div>
  );
}

export default App;
