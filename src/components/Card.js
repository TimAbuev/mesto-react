import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUserContext = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUserContext._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUserContext._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__like ${isLiked && 'elements__like_active'}`
  );

  function handleClick() {
    props.onCardClick(props.card); //setPopupImageOpen(card)
    props.setSelectedCard(props.card);
  }

  function handleLikeClick () {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="elements__card" >
      <button className="elements__button-wrapper" type="button" >
        <img alt="имя картинки" className="elements__image" src={`${props.card.link}`} onClick={handleClick} />
      </button>
      {isOwn && <button className='elements__trash' onClick={handleDeleteClick} />}
      <div className="elements__wrapper">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-wrapper">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="elements__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )


}
export default Card;
