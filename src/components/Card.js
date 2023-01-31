import React from "react";
import { CardContext } from '../contexts/CardContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const cardContext = React.useContext(CardContext);
  const currentUserContext = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = cardContext.owner._id === currentUserContext._id;

  // Далее в разметке используем переменную для условного рендеринга
  


  function handleClick() {
    props.onCardClick(cardContext); //setPopupImageOpen(card)
    props.setSelectedCard(cardContext);
  }

  return (
    <div className="elements__card" >
      <button className="elements__button-wrapper" type="button" >
        <img alt="имя картинки" className="elements__image" src={`${cardContext.link}`} onClick={handleClick} />
      </button>
      {/* <button className=""></button> */}
      { isOwn && <button className='elements__trash' /> }
      <div className="elements__wrapper">
        <h2 className="elements__title">{cardContext.name}</h2>
        <div className="elements__like-wrapper">
          <button className="elements__like" type="button"></button>
          <p className="elements__counter">{cardContext.likes.length}</p>
        </div>
      </div>
    </div>
  )


}
export default Card;
