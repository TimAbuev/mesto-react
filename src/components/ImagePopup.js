function ImagePopup(props) {
  return (  
    <div className={`popup popup-image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup-image__wrapper">
        <button className="popup__close-icon" type="button" onClick={props.close}></button>
        <img className="popup-image__image" alt="имя картинки" 
        src={`${props.card.link}`}
        />
        <p className="popup-image__caption">{props.card.name}</p>
      </div>
    </div>
  )

}
export default ImagePopup;