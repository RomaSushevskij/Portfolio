import React, {ReactNode, useCallback, useMemo, useState} from 'react';
import './App.scss';
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
import flashCardsProjectLogo from './assets/projectsLogo/flashCards.png';
import {v1} from 'uuid';
import avatarLogo from './assets/avatar/avatar.jpg'
import {
    AxiosIcon,
    CSSIcon,
    GITIcon,
    HTMLIcon,
    JestIcon,
    JSIcon,
    MUIIcon,
    PostmanIcon,
    ReactIcon,
    ReduxIcon, SASSIcon,
    StorybookIcon,
    TSIcon
} from './common/components/TechnologyIcons/TechnologyIcons';
import {NavBar} from './components/navbar/Navbar';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {LightMode} from './components/LightMode/LightMode';
import {ThemeContext} from './context';

export type ProjectType = {
    id: string
    title: string
    description: string
    style: { backgroundImage: string }
    demoLink: string
    codeLink: string
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
    const onChangePageBlurValue = useCallback((isBlur: boolean) => {
        setPageBlur(isBlur)
    }, [])
    const [lightMode, setLightMode] = useState(false);
    const onChangeLightModeHandler = useCallback(() => {
        setLightMode(!lightMode)
    }, [lightMode])
    const projectsData: ProjectType[] = [
        {
            id: v1(),
            title: 'Learning cards',
            description: 'Application for testing and improving knowledge through an algorithm that provides repetition and study of the most difficult topics and questions. It is possible to create your own cards and group them into packs on a specific topic. There is the possibility of searching, sorting cards and packs.',
            style: {backgroundImage: `url(${flashCardsProjectLogo})`},
            demoLink: 'https://msseleznev.github.io/friday-app/#/packs',
            codeLink: 'https://github.com/RomaSushevskij/learning-cards'
        },
        {
            id: v1(),
            title: 'Social network',
            description: 'Mini-version of Social network. It is possible to write messages to another users, add posts, and search for new friends.',
            style: {backgroundImage: `url(${socialNetworkProjectLogo})`},
            demoLink: 'https://romasushevskij.github.io/social_network',
            codeLink: 'https://github.com/RomaSushevskij/social_network'
        },
        {
            id: v1(),
            title: 'To do list',
            description: 'Simple todo list with storage of data on remote server. Technology stack: React, Redux (Redux-thunk), REST API, Storybook, Unit and snapshot tests',
            style: {backgroundImage: `url(${toDoListProjectLogo})`},
            demoLink: 'https://romasushevskij.github.io/TO-DO-LIST',
            codeLink: 'https://github.com/RomaSushevskij/TO-DO-LIST',
        },
        {
            id: v1(),
            title: 'Movie Database',
            description: 'Simple movie collection app built with React and the OMDBAPI. Technology stack: TypeScript, React, Redux, Redux Thunk and more',
            style: {backgroundImage: `url(${movieDatabaseProjectLogo})`},
            demoLink: 'https://romasushevskij.github.io/MovieDatabase',
            codeLink: 'https://github.com/RomaSushevskij/MovieDatabase'
        },
        {
            id: v1(),
            title: 'Counter',
            description: 'This project - just simple counter with settings start value and end value. I used in this project React, Redux, clean CSS, React-router-dom and more',
            style: {backgroundImage: `url(${counterProjectLogo})`},
            demoLink: 'https://romasushevskij.github.io/counter/',
            codeLink: 'https://github.com/RomaSushevskij/counter',
        },

    ]
    const skillsData: SkillType[] = [
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
            title: 'SASS',
            description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
            icon: <SASSIcon/>
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
        {
            id: v1(),
            title: 'Material UI',
            description: 'Comprehensive suite of UI tools to help ship new features faster',
            icon: <MUIIcon/>
        },
        {
            id: v1(),
            title: 'Postman',
            description: 'API platform for building and using APIs simplifies each step of the API lifecycle and streamlines collaboration',
            icon: <PostmanIcon/>
        },
    ]
    const contactsData: ContactsDataType = {
        phone: ['+375291840007'],
        email: ['roma.sushevskij@yandex.ru', 'roma.sushevskij@gmail.com'],
        telegram: ['@roman_sushevskij']
    }
    const avatarSettings: AvatarSettingsType = useMemo(() => {
        return {
            backgroundImage: `url(${avatarLogo})`,
            borderColor: `${lightMode ? '#CBCED8' : '#2E344E'}`,
            width: '250px',
            height: '250px',
        }
    }, [lightMode, avatarLogo])
    const avatarNavBarSettings: AvatarSettingsType = useMemo(() => {
        return {
            backgroundImage: `url(${avatarLogo})`,
            borderColor: `${lightMode ? '#CBCED8' : '#2E344E'}`,
            width: '150px',
            height: '150px',
        }
    }, [lightMode, avatarLogo])
    const linkPaths: string[] = useMemo(() => {
        return ['home', 'skills', 'projects', 'contacts']
    }, [])
    const socialIconsData: { name: IconProp, href: string }[] = [
        {
            name: faLinkedin,
            href: 'https://www.linkedin.com/in/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD-%D1%81%D1%83%D1%89%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-a32b97211/'
        },
        {name: faTelegram, href: 'https://t.me/roman_sushevskij'},
        {name: faGithub, href: 'https://github.com/RomaSushevskij'},
    ]
    return (
        <ThemeContext.Provider value={{lightMode}}>
            <LightMode changeLightMode={onChangeLightModeHandler}/>
            <div className={lightMode ? 'wrapper light' : 'wrapper'}>
                {pageBlur && <div className={'bgcBlur'}></div>}
                <div className={lightMode ? 'bglines light' : 'bglines'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <NavBar avatarNavBarSettings={avatarNavBarSettings}
                        linkPaths={linkPaths}
                        onActivateNavBar={onChangePageBlurValue}/>
                <Main avatarSettings={avatarSettings}
                      socialIconsData={socialIconsData}/>
                <Skills skillsData={skillsData}/>
                <Projects projectsData={projectsData}/>
                <HireMe/>
                <Contacts contactsData={contactsData}/>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
