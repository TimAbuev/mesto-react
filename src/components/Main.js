import Api from '../utils/Api.js'
import React from 'react';

function Main(props) {
  const [userName, setuserName] = React.useState();
  const [userDescription , setuserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();

  React.useEffect(() => {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-54/users/me`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        authorization: "697a4384-2695-44b9-a2ae-a1b7f71813d5"
      },
      body: JSON.stringify()
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject({ message: "Ошибка на стороне сервера", res })
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log('ошибка', err);
      })
      return () => {
        console.log('test for return of UseEffect'+ Api._url);
      };
   
    }, []);

  return (
    
    <main className="page__main">
      <section className="profile">
        {/* <Api/> */}
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}>
            <div className="profile__pencil"></div>
          </div>

          <div className="profile__wrapper">
            <div className="profile__wrapper-extra">
              <h1 className="profile__name"></h1>
              <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__busy"></p>
          </div>
        </div>

        <button className="profile__button" type="button"onClick={props.onAddPlace}></button>

      </section>

      <section className="elements">

      </section>
    </main>
  );
}

export default Main;