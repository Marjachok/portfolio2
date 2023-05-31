import photo from "./img/photo.png"

export function About(){
    return(
        <div className="about" id="about">
            <p className="about_me">About me</p>
            <ul>
            <li><span className="front">❃</span>19 years old</li>
            <li><span className="front">❃</span>Living in Riga, Latvia</li>
            <li><span className="front">❃</span>Studying in University of Latvia e-business management </li>
            <li><span className="front">❃</span>My hobby is music writing</li>
            </ul>
            <img src={photo} alt="photox" className="photo"/>
          
        </div>

    )
}