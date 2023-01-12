import React from "react";

class Api extends React.Component {
  constructor(props) {
    props._url = 'https://mesto.nomoreparties.co';
    props._headers = {
      "content-type": "application/json",
      authorization: "697a4384-2695-44b9-a2ae-a1b7f71813d5"
    };
  }

}
export default Api;


// class Api {
//   constructor() {
//     this._url = 'https://mesto.nomoreparties.co';
//     this._headers = {
//       "content-type": "application/json",
//       authorization: "697a4384-2695-44b9-a2ae-a1b7f71813d5"
//     };
//   }
//   getCards() {
//     return fetch(`${this._url}/v1/cohort-54/cards`, { headers: this._headers })
//       .then(this.#onResponse);
//   }
//   getProfile() {
//     return fetch(`${this._url}/v1/cohort-54/users/me`, { headers: this._headers })
//       .then(this.#onResponse);
//   }
//   editInfo(data) {
//     return fetch(`${this._url}/v1/cohort-54/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify(data)
//     })
//       .then(this.#onResponse);
//   }
//   postCard(data) {
//     return fetch(`${this._url}/v1/cohort-54/cards`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify(data)
//     })
//       .then(this.#onResponse);
//   }
//   deleteCard(id) {
//     return fetch(`${this._url}/v1/cohort-54/cards/${id}`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//       .then(this.#onResponse);
//   }
//   addLike(id) {
//     return fetch(`${this._url}/v1/cohort-54/cards/${id}/likes`, {
//       method: 'PUT',
//       headers: this._headers
//     })
//       .then(this.#onResponse);
//   }
//   deleteLike(id) {
//     return fetch(`${this._url}/v1/cohort-54/cards/${id}/likes`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//       .then(this.#onResponse);
//   }


// }