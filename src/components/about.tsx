import photo from "./photo.png"

export function About(){
    return(
        <div className="about">
            <p className="about_me">About me</p>
            <ul>
            <li>19 years old</li>
            <li>Living in Riga, Latvia</li>
            <li>Studding in University of Latvia e-business management </li>
            <li>My hobby is music writing</li>
            </ul>
            <img src={photo} alt="photox" className="photo"/>
          
        </div>

    )
}