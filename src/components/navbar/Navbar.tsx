import style from './Navbar.module.scss'
import {Avatar} from '../../common/components/Avatar/Avatar';
import {AvatarSettingsType} from '../../App';
import {Toggle} from './Toggle/Toggle';
import {NavLinkElement} from './NavLinkElement/NavLinkElement';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context';

type NavBarPropsType = {
    avatarNavBarSettings: AvatarSettingsType
    linkPaths: string[]
    onActivateNavBar: (isBlur: boolean) => void
}

export const NavBar = ({
                           avatarNavBarSettings
                           , linkPaths,
                           onActivateNavBar
                       }: NavBarPropsType) => {
    const {lightMode} = useContext(ThemeContext)
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>{
        if(editMode) {
            onActivateNavBar(true)
        } else {
            onActivateNavBar(false)
        }
    },[editMode])
    const onChangeEditMode = () => {
        setEditMode(!editMode)
    }
    const links = linkPaths.map((l, i) => {
        return (
            <NavLinkElement key={l + i} title={l} onClick={onChangeEditMode}/>
        )
    })
    return (
        <nav className={editMode ? `${style.navBarWrapper} ${style.active}` : style.navBarWrapper}>
            <Toggle setToggle={onChangeEditMode} editMode={editMode}/>
            <div className={style.navBarInner}>
                <div className={style.navBarImage}>
                    <Avatar style={avatarNavBarSettings}/>
                </div>
                <ul className={style.navBarMenu}>
                    {links}
                </ul>
                <p>2022 © All rights reserved</p>
            </div>
        </nav>
    )
}
