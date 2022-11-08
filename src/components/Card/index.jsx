const Card = ({ link }) => {

    return (
        <a href={link.name} className="card-home">
            <div className="card-home-background" style={{ backgroundImage: `url("${link.backgroundImage}")` }}></div>
            <div className="card-home-content">
                <p>{link.subTitle}</p>
                <h3>{link.title}</h3>
            </div>
        </a>
    )
}

export default Card;