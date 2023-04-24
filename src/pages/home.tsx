import React from 'react';
import '../App.css';
import { Header } from '../components/header';
import { Text } from '../components/text';
import { Links } from '../components/links';
import {Routes, Route , Link } from "react-router-dom";



function Home() {
  return (
    <div className="App">

        < Header/>

        < Text/>

        < Links/>
    </div>
  );
}

export default Home;