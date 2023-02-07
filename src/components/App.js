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
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isPopupImageOpen, setPopupImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCards()
      .then(function (res) {
        setCards(res);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }, []);

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
      .then(function (res) {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.postCard(data)
      .then(function (res) {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
      .then(function (res) {
        setCurrentUser(res)
        closeAllPopups();
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  function handleCardLike(card) {

    // Снова проверяем, есть ли уже лайк на этой карточке (поставленный нами)
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((nc) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
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
              setSelectedCard={setSelectedCard} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards} />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <ImagePopup close={closeAllPopups} isOpen={isPopupImageOpen}
              selectedCard={selectedCard} />
            <PopupWithForm name="are-you-sure" headerName="Вы уверены?" btnName="Да" />
            <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
