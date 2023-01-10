import '../index.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {

  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup-avatar');
    console.log(popupAvatar);
    popupAvatar.classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    const popupProfile = document.querySelector('.popup-profile');
    console.log(popupProfile);
    popupProfile.classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    const popupMesto = document.querySelector('.popup-mesto');
    console.log(popupMesto);
    popupMesto.classList.add('popup_opened');
  }

  return (

    <div className="App">
      <div className="root">
        <Header />
        <div className="page">
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
          <Footer />
          <PopupWithForm name="profile" children="Редактировать профиль" header="Сохранить" />
          <PopupWithForm name="mesto" children="Новое место" header="Создать" />
          <ImagePopup />
          <PopupWithForm name="are-you-sure" children="Вы уверены?" header="Да" />
          <PopupWithForm name="avatar" children="Обновить аватар" header="Создать" />

          {/* <div className="popup popup-mesto">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <form className="popup__form popup__form_type_form-mesto" name="form-mesto" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <input type="text" className="popup__input popup__input_type_card-name" name="name" placeholder="Название"
              required minLength="2" maxLength="30" id="input-place" />
            <span className="error input-place-error"></span>
            <input type="url" className="popup__input popup__input_type_card-src" name="link" placeholder="Ссылка на картинку"
              required id="input-link" />
            <span className="error input-link-error"></span>
            <button disabled className="popup__save popup__save_invalid" type="submit">Создать</button>
          </form>
        </div>
      </div> */}

          {/* <div className="popup popup-are-you-sure">
        <div className="popup__container popup__container_type_are-you-sure">
          <button className="popup__close-icon" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__save popup-are-you-sure__button" type="submit">Да</button>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup__container popup__container_type_are-you-sure ">
          <button className="popup__close-icon" type="button"></button>
          <form className="popup__form popup__form_type_form-avatar" name="form-avatar" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input type="url" className="popup__input popup__input_type_avatar-src" name="avatar"
              placeholder="Ссылка на картинку" required id="input-link-avatar" />
            <span className="error input-link-avatar-error"></span>
            <button disabled className="popup__save popup__save_invalid" type="submit">Создать</button>
          </form>
        </div>
      </div> */}

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
