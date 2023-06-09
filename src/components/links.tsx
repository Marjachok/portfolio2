import linked from "./img/linked_in.png";
import gh from "./img/github.png";
import email from "./img/email.png";

export function Links(){
    return(
        <div className="links">
            <a href="https://www.linkedin.com/in/m%C4%81ris-locs-52a01a232/" className="linked"><img src={linked} alt="linked"/></a>

            <a href="https://github.com/Marjachok" className="gh"><img src={gh} alt="gh" /></a> 

            < a href="mailto:marislocs007@gmail.com" className="email"><img src={email} alt="email" /></a>
        </div>
    )
}
