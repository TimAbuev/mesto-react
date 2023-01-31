import api from '../utils/Api.js';
import React from 'react';
import Card from './Card.js';
import { CurrentUserContext} from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';

function Main(props) {
  const currentUserContext = React.useContext(CurrentUserContext);
  // const newContext = React.useContext(NewContext);
  const [cards, setCards] = React.useState([]);

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
            style={{ backgroundImage: `url(${currentUserContext.avatar})` }}>
            <div className="profile__pencil"></div>
          </div>

          <div className="profile__wrapper">
            <div className="profile__wrapper-extra">
              <h1 className="profile__name">{currentUserContext.name}</h1>
              <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__busy">{currentUserContext.about}</p>
          </div>
        </div>

        <button className="profile__button" type="button" onClick={props.onAddPlace}></button>

      </section>

      <section className="elements">
        {
          cards.map((card) => {
            return <CardContext.Provider value={card} key={card._id}>
                     <Card setSelectedCard={props.setSelectedCard} onCardClick={props.onCardClick} card={card} close={props.close} key={card._id} />      
                   </CardContext.Provider>    
          })
        }
      </section>
    </main>
  );
}

export default Main;