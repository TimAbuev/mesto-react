import React from "react";

function Card(props) {
  return (
    <div className="elements__card">
      <button className="elements__button-wrapper" type="button" style={{ backgroundImage: `url(${props.avatar})` }}>

      </button>
      <button className="elements__trash"></button>
      <div className="elements__wrapper">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-wrapper">
          <button className="elements__like" type="button"></button>
          <p className="elements__counter">{props.likes}</p>
        </div>
      </div>
    </div>
  )


}
export default Card;


