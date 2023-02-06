function PopupWithForm(props) {

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
        <form className="popup__form popup__form_type_form-profile" name={`form-${props.name}`} onSubmit={props.onSubmit} noValidate>
          <h2 className="popup__title">{props.headerName}</h2>
          {props.children}
          <button className="popup__save" type="submit">{props.btnName}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;