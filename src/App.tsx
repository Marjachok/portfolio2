import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Text } from './components/text';
import bg from "./bg_2.png";
import { Links } from './components/links';
import {Routes, Route , Link } from "react-router-dom";
import { Projects } from './components/projects';



function App() {
  return (
    <div className="App">
        {/* <img src={bg} alt="bg" className="bg"/> */}

        < Header/>

        < Text/>

        < Links/>
    </div>
  );
}

export default App;
