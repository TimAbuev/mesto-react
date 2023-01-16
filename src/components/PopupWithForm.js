function PopupWithForm(props) {

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
        <form className="popup__form popup__form_type_form-profile" name={`form-${props.name}`} noValidate>
          <h2 className="popup__title">{props.children}</h2>
          


          <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40"
            required id="input-name" />
          <span className="error input-name-error"></span>
          <input type="text" className="popup__input popup__input_type_job" name="job" minLength="2" maxLength="200"
            required id="input-job" />
          <span className="error input-job-error"></span>
          <button className="popup__save" type="submit">{props.btnName}</button>

        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;