const CardGallery = ({ link }) => {

  return (
    <div className="card-gallery">
        <div className="card-gallery-background" style={{ backgroundImage: `url("${link.backgroundImage}")` }}></div>
    </div>
  )
}

export default CardGallery;