import portfolio1 from "./img/portfolio1.png"
import arrow from "./img/arrow.png"
import tennis_pro from "./img/tennis_pro.png"
import pineapple from "./img/pineapple.png"

export function Projects(){
    return(
        <div className="projects">
            <p className="projecth1"> Projects </p>
                <a href="https://marjachok.github.io/portfolio.github.io/" className="a_project" target="_blank">
                    <div className="project1">
                        <img src={portfolio1} alt="portfolio1" className="project_img"></img>
                        <div className="project_text">
                            <p className="project_h2"> First portfolio<img src={arrow} alt="arrow" className="arrow"></img></p>
                            <p className="project_p">This is my first portfolio. One of the first webpage that I made</p>
                            <div className="project_skills">
                                <p className="html2">HTML</p>
                                <p className="css2">CSS</p>
                                <p className="ts2">TS</p>
                                <p className="react2">React</p>
                                <p className="figma2">Figma</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://marjachok.github.io/pineapple/" className="a_project" target="_blank">
                    <div className="project1">
                        <img src={pineapple} alt="penniapple" className="project_img"></img>
                        <div className="project_text">
                            <p className="project_h2"> Pineapple landing page<img src={arrow} alt="arrow" className="arrow"></img></p>
                            <p className="project_p">Web page for subscription to newsletter and discount for pineapple glasses </p>
                            <div className="project_skills">
                                <p className="html2">HTML</p>
                                <p className="css2">CSS</p>
                                <p className="ts2">TS</p>
                                <p className="react2">React</p>
                                <p className="figma2">Figma</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://marjachok.github.io/teniss_pro/" className="a_project" target="_blank">
                    <div className="project1">
                        <img src={tennis_pro} alt="tennis_pro" className="project_img"></img>
                        <div className="project_text">
                            <p className="project_h2"> Tennis course webpage<img src={arrow} alt="arrow" className="arrow"></img></p>
                            <p className="project_p">Landing page about tennis courses </p>
                            <div className="project_skills">
                                <p className="html2">HTML</p>
                                <p className="css2">CSS</p>
                                <p className="ts2">TS</p>
                                <p className="react2">React</p>
                                <p className="figma2">Figma</p>
                            </div>
                        </div>
                    </div>
                </a>
        </div>
    )
}