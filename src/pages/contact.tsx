import { Header } from '../components/header';
import React from 'react';
import '../App.css';
import { Contact } from '../components/contact';


function Contact_Page(){
    return(
        <div className="App">
            < Header/>
            <h1>Contact</h1>
            < Contact/>
        </div>
    )
}
export default Contact_Page;