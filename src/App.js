import './index.css';
import logo from './images/Mesto.svg';

function App() {
  return (

<div className="App">

  <div className="root">
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
    </header>

    <div className="page">
      <main className="page__main">
        <section className="profile">
          <div className="profile__info">

            <div className="profile__avatar">
              <div className="profile__pencil"></div>
            </div>

            <div className="profile__wrapper">
              <div className="profile__wrapper-extra">
                <h1 className="profile__name"></h1>
                <button className="profile__button-edit" type="button"></button>
              </div>
              <p className="profile__busy"></p>
            </div>
          </div>
          <button className="profile__button" type="button"></button>
        </section>
        <section className="elements">

        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>

      <div className="popup popup-profile">
        <div className="popup__container">
          <button className="popup__close-icon" type="button"></button>
          <form className="popup__form popup__form_type_form-profile" name="form-edit-profile" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40"
              required id="input-name" />
            <span className="error input-name-error"></span>
            <input type="text" className="popup__input popup__input_type_job" name="job" minLength="2" maxLength="200"
              required id="input-job" />
            <span className="error input-job-error"></span>
            <button className="popup__save" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup-mesto">
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
      </div>
      <div className="popup popup-image">
        <div className="popup-image__wrapper">
          <button className="popup__close-icon" type="button"></button>
          <img className="popup-image__image" alt="имя картинки вставлять" />
          <p className="popup-image__caption"></p>
        </div>
      </div>
      <div className="popup popup-are-you-sure">
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
      </div>
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
