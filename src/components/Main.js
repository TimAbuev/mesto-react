function Main() {
  return (
    <main className="page__main">
      <section className="profile">
        <div className="profile__info">

          <div className="profile__avatar">
            <div className="profile__pencil"></div>
          </div>

          <div className="profile__wrapper">
            <div className="profile__wrapper-extra">
              <h1 className="profile__name"></h1>
              <button className="profile__button-edit" type="button"></button>
            </div>
            <p className="profile__busy"></p>
          </div>
        </div>
        <button className="profile__button" type="button"></button>
      </section>
      <section className="elements">

      </section>
    </main>
  );
}

export default Main;