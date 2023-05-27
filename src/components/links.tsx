import linked from "./linked_in.png";
import gh from "./github.png";
import email from "./email.png";

export function Links(){
    return(
        <div className="links">
            <a href="https://www.linkedin.com/in/maris-locs-52a01a232/" className="linked"><img src={linked} alt="linked" /></a>

            <a href="https://github.com/Marjachok" className="gh">"<img src={gh} alt="gh" /></a> 

            < a href="mailto:marislocs007@gmail.com" className="email"><img src={email} alt="email" /></a>
        </div>
    )
}