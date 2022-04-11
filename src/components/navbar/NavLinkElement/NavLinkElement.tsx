import style from './NavLinkElement.module.scss'
import {memo, useContext} from 'react';
import {Link} from 'react-scroll';
import {ThemeContext} from '../../../context';

type NavLinkElementPropsType = {
    title: string
    onClick: () => void
}

export const NavLinkElement = memo(({title, onClick}: NavLinkElementPropsType) => {
    const {lightMode} = useContext(ThemeContext)
    return (
        <li>
            <Link to={title}
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-10}
                  className={lightMode ? style.light : ''}
                  activeClass={style.activeLink}
                  onClick={onClick}>
                <span>{title}</span>
            </Link>
        </li>
    )
})
