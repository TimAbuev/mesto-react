function ImagePopup(props) {
  return (
    <div className={`popup popup-image ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-image__wrapper">
        <button className="popup__close-icon" type="button" onClick={props.close}></button>
        <img className="popup-image__image" alt={props.selectedCard.name}
          src={`${props.selectedCard.link}`}
        />
        <p className="popup-image__caption">
          {props.selectedCard.name}
        </p>
      </div>
    </div>
  )

}
export default ImagePopup;