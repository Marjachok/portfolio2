import React from 'react';
import '../App.css';
import { Header } from '../components/header';
import { Text } from '../components/text';
import { Links } from '../components/links';
import {Routes, Route , Link } from "react-router-dom";
import { About } from '../components/about';
import { Skills } from '../components/skills';


function Home() {
  return (
    <div className="App">

        < Header/>

        < Text/>

        < Links/>

        < About />

        < Skills/>
    </div>
  );
}

export default Home;