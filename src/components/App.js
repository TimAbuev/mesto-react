import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api'
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isPopupImageOpen, setPopupImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser , setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getProfile()
      .then(function (res) {
        setCurrentUser(res)
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })

  }, []);

  function handleEditAvatarClick() {
    setAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handlePopupImgClick() {
    setPopupImageOpen(!isPopupImageOpen);
  }

  function closeAllPopups() {
    isEditProfilePopupOpen && handleEditProfileClick();
    isAddPlacePopupOpen && handleAddPlaceClick();
    isEditAvatarPopupOpen && handleEditAvatarClick();
    isPopupImageOpen && handlePopupImgClick();
  }

  function handleUpdateUser(data) {
    api.editInfo(data)
    .then(function(res) {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(function (err) {
      console.log('ошибка', err);
    })
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handlePopupImgClick}
           setSelectedCard={setSelectedCard}/>
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
          <PopupWithForm name="mesto" headerName="Новое место" btnName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children>
            <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40" required id="input-name" />
            <span className="error input-name-error"></span>
          </PopupWithForm>
          <ImagePopup close={closeAllPopups} isOpen={isPopupImageOpen}
            selectedCard={selectedCard}
          />
          <PopupWithForm name="are-you-sure" headerName="Вы уверены?" btnName="Да" />

          <PopupWithForm name="avatar" headerName="Обновить аватар" btnName="Создать" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children>
            <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40" required id="input-name" />
            <span className="error input-name-error"></span>
          </PopupWithForm>
        </div>

      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
