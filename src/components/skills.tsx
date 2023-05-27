import bg from "./bg.png"

export function Skills(){
    return(
        <div className="skills" id="skills">
            
            {/* <img src={bg} alt="background" className="bg" /> */}

            <p className="skills_h">Skills</p>
           
                <div className="skills_grid">
                    <div className="html"><p className="text_skills">HTML</p></div>
                    <p className="js">JavaScipt</p>
                    <p className="ts">TypeScript</p>
                    <p className="react">React</p>
                    <p className="css">CSS</p>
                    <p className="figma">Figma</p>
                </div>

        </div>

    )
}