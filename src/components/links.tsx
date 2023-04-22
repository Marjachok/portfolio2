import linked from "./linked_in.png";
import gh from "./github.png";
import email from "./email.png";

export function Links(){
    return(
        <div className="links">
            <img src={linked} alt="linked" className="linked"/>

            <img src={gh} alt="gh" className="gh"/>

            <img src={email} alt="email" className="email"/>
        </div>
    )
}