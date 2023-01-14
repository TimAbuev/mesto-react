import api from '../utils/Api.js';
import React from 'react';
import Card from './Card.js';

function Main(props) {
  const [userName, setuserName] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();

  React.useEffect(() => {
    api.getProfile()
      .then(function (res) {
        setuserName(res.name);
        setuserDescription(res.about);
        setuserAvatar(res.avatar);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })

  }, [userName, userDescription]);

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    
    api.getCards()
      .then(function (res) {
        console.log(res);
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
          cards.map((card, index) => {
            return <Card name={card.name} avatar={card.link} likes={card.likes.length} key={index} />
          })
        }
      </section>
    </main>
  );
}

export default Main;