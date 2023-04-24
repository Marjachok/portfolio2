import { Projects } from '../components/projects';
import { Header } from '../components/header';
import React from 'react';
import '../App.css';


function Project_page(){
    return(
        <div className="App">
            < Header/>
            <h1>Projects</h1>
            < Projects/>
        </div>
    )
}
export default Project_page;
