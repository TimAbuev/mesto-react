import api from '../utils/Api.js';
import React from 'react';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getProfile()
      .then(function (res) {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })

  }, []);

  React.useEffect(() => {

    api.getCards()
      .then(function (res) {
        setCards(res);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
  }, []);

  return (

    <main className="page__main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}>
            <div className="profile__pencil"></div>
          </div>

          <div className="profile__wrapper">
            <div className="profile__wrapper-extra">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__busy">{userDescription}</p>
          </div>
        </div>

        <button className="profile__button" type="button" onClick={props.onAddPlace}></button>

      </section>

      <section className="elements">
        {
          cards.map((card) => {
            return <Card setSelectedCard={props.setSelectedCard} onCardClick={props.onCardClick} card={card} close={props.close} key={card._id} />
          })
        }
      </section>
    </main>
  );
}

export default Main;