import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {HireMe} from "./components/hireMe/HireMe";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

import socialNetworkProjectLogo from '../src/assets/projectsLogo/socialNetwork.jpg';
import toDoListProjectLogo from './assets/projectsLogo/todolist_1.jpg';
import counterProjectLogo from './assets/projectsLogo/counter.png';
import movieDatabaseProjectLogo from './assets/projectsLogo/movieDataBase.png';
import {v1} from 'uuid';

export type ProjectType = {
    id: string
    title: string
    description: string
    style: { backgroundImage: string }
}

function App() {
    const projectsData: ProjectType[] = [
        {
            id: v1(),
            title: 'Social network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur dolorum iste nemo sint? Nam!',
            style: {backgroundImage: `url(${socialNetworkProjectLogo})`}
        },
        {
            id: v1(),
            title: 'To do list',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus!',
            style: {backgroundImage: `url(${toDoListProjectLogo})`}
        },
        {
            id: v1(),
            title: 'Movie Database',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, repellendus!',
            style: {backgroundImage: `url(${movieDatabaseProjectLogo})`}
        },
        {
            id: v1(),
            title: 'Counter',
            description: 'Lorem ipsum dolor sit amet...',
            style: {backgroundImage: `url(${counterProjectLogo})`}
        },

    ]
    return (
        <div className={'wrapper'}>
            <div className={'bglines'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects projectsData={projectsData}/>
            <HireMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
