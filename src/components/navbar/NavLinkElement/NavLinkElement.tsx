import style from './NavLinkElement.module.scss'
import {useState} from 'react';
import {Link} from 'react-scroll';

type NavLinkElementPropsType = {
    title: string
    onClick:()=>void
}

export const NavLinkElement = ({title,onClick}: NavLinkElementPropsType) => {

    return (
        <li>
            <Link to={title}
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-10}
                  activeClass={style.activeLink}
                  onClick={onClick}>
                <span>{title}</span>
            </Link>
        </li>
    )
}
