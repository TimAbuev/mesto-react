import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  //Выставляем в поля текущие значения
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="profile" headerName="Редактировать профиль" btnName="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} children>
      <input type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40"
        required id="input-name" onChange={handleChangeName} value={name} />
      <span className="error input-name-error"></span>
      <input type="text" className="popup__input popup__input_type_job" name="job" minLength="2" maxLength="200"
        required id="input-job" onChange={handleChangeDescription} value={description} />
      <span className="error input-job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;