import style from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {useContext} from 'react';
import {ThemeContext} from '../../context';

export const Footer = () => {
    const {lightMode} = useContext(ThemeContext)
    return (

        <div className={lightMode ?
            `${style.footerBlock} ${style.light}` :
            style.footerBlock }>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.fullName}>Roman Suschevskij</h3>
                <span className={style.rights}>2022 © All rights reserved</span>
            </div>
        </div>
    )
}