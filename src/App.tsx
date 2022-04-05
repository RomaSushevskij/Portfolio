import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {HireMe} from "./components/hireMe/HireMe";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
