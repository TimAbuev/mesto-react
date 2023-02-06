import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: image,
    })
  }

  return (
    <PopupWithForm name="mesto" headerName="Новое место" btnName="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} children>
      <input value={name} onChange={handleChangeName} type="text" className="popup__input popup__input_type_name" name="name" minLength="2" maxLength="40" placeholder="Название"
        required id="input-name" />
      <span className="error input-name-error"></span>

      <input value={image} onChange={handleChangeImage} type="url" class="popup__input popup__input_type_card-src" name="link" placeholder="Ссылка на картинку"
        required id="input-link" />
      <span class="error input-link-error"></span>
    </PopupWithForm>
  )

}

export default AddPlacePopup;