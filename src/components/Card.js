import React from "react";
import { CardContext } from '../contexts/CardContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const cardContext = React.useContext(CardContext);
  const currentUserContext = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = cardContext.owner._id === currentUserContext._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = cardContext.likes.some(i => i._id === currentUserContext._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__like ${isLiked && 'elements__like_active'}`
  );

  function handleClick() {
    props.onCardClick(cardContext); //setPopupImageOpen(card)
    props.setSelectedCard(cardContext);
  }

  function handleLikeClick () {
    props.onCardLike(cardContext);
  }

  return (
    <div className="elements__card" >
      <button className="elements__button-wrapper" type="button" >
        <img alt="имя картинки" className="elements__image" src={`${cardContext.link}`} onClick={handleClick} />
      </button>
      {isOwn && <button className='elements__trash' />}
      <div className="elements__wrapper">
        <h2 className="elements__title">{cardContext.name}</h2>
        <div className="elements__like-wrapper">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="elements__counter">{cardContext.likes.length}</p>
        </div>
      </div>
    </div>
  )


}
export default Card;
