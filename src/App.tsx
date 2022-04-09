import React, {ReactComponentElement, ReactNode, useCallback, useState} from 'react';
import './App.css';
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
import avatarLogo from './assets/avatar/avatar.jpg'
import {
    AxiosIcon,
    CSSIcon, GITIcon,
    HTMLIcon, JestIcon, JSIcon,
    ReactIcon,
    ReduxIcon, StorybookIcon,
    TSIcon
} from './common/components/TechnologyIcons/TechnologyIcons';
import {NavBar} from './components/navbar/Navbar';

export type ProjectType = {
    id: string
    title: string
    description: string
    style: { backgroundImage: string }
}
export type SkillType = {
    id: string
    title: string
    description: string
    icon: ReactNode
}
export type ContactsDataType = {
    phone: string[]
    email: string[]
    telegram: string[]
}
export type AvatarSettingsType = {
    backgroundImage: string
    borderColor: string
    width: string
    height: string
}

function App() {
    const [pageBlur, setPageBlur] = useState(false)
    const onChangePageBlurValue = useCallback((isBlur:boolean) => {
        setPageBlur(isBlur)
    },[])
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
    const skillsData:SkillType[] = [
        {
            id: v1(),
            title: 'HTML',
            description: 'HTML is a standardized document markup language for viewing web pages in a browser.',
            icon: <HTMLIcon/>
        },
        {
            id: v1(),
            title: 'CSS',
            description: 'CSS is a formal language for describing the appearance of a document written using a markup language',
            icon: <CSSIcon/>
        },
        {
            id: v1(),
            title: 'JavaScript',
            description: 'JS is a programming language that adds interactivity to your website',
            icon: <JSIcon/>
        },
        {
            id: v1(),
            title: 'TypeScript',
            description: 'TS extends JS by adding types',
            icon: <TSIcon/>
        },
        {
            id: v1(),
            title: 'React',
            description: 'A JavaScript library for building user interfaces',
            icon: <ReactIcon/>
        },
        {
            id: v1(),
            title: 'Redux',
            description: 'A Predictable State Container for JS Apps',
            icon: <ReduxIcon/>
        },
        {
            id: v1(),
            title: 'Axios',
            description: 'Axios is a promise based HTTP client for the browser and Node.js',
            icon: <AxiosIcon/>
        },
        {
            id: v1(),
            title: 'Unit test / Jest',
            description: 'TDD -  correct the error before the millions of your nerve cells die',
            icon: <JestIcon/>
        },
        {
            id: v1(),
            title: 'Storybook',
            description: 'It streamlines UI development, testing, and documentation',
            icon: <StorybookIcon/>
        },
        {
            id: v1(),
            title: 'GIT',
            description: 'Where the world builds software',
            icon: <GITIcon/>
        },
    ]
    const contactsData: ContactsDataType = {
        phone: ['+375 (29) 184-00-07'],
        email: ['roma.sushevskij@yandex.ru', 'roma.sushevskij@gmail.com'],
        telegram: ['@roman_sushevskij']
    }
    const avatarSettings: AvatarSettingsType = {
        backgroundImage: `url(${avatarLogo})`,
        borderColor: '#2E344E',
        width: '250px',
        height: '250px',
    }
    const avatarNavBarSettings: AvatarSettingsType = {
        backgroundImage: `url(${avatarLogo})`,
        borderColor: '#2E344E',
        width: '150px',
        height: '150px',
    }
    const linkPaths:string[] = ['home', 'skills', 'projects', 'contacts']
    return (
        <div className={'wrapper'}>
            {pageBlur && <div className={'bgcBlur'}></div>}
            <div className={'bglines'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavBar avatarNavBarSettings={avatarNavBarSettings}
                    linkPaths={linkPaths}
                    onActivateNavBar={onChangePageBlurValue}/>
            <Main avatarSettings={avatarSettings}/>
            <Skills skillsData={skillsData}/>
            <Projects projectsData={projectsData}/>
            <HireMe/>
            <Contacts contactsData={contactsData}/>
            <Footer/>
        </div>
    );
}

export default App;
