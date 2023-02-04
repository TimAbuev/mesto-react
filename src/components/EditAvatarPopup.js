import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    
  }

  return (
    <PopupWithForm name="avatar" headerName="Обновить аватар" btnName="Создать" onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} children>
      <input ref={avatarRef} type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="60" required id="input-name" />
      <span className="error input-name-error"></span>
    </PopupWithForm>
  )

}

export default EditAvatarPopup;
