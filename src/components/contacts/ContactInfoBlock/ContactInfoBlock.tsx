import style from './ContactInfoBlock.module.scss'
import {useContext} from 'react';
import {ThemeContext} from '../../../context';

type ContactInfoBlockPropsType = {
    title: string
    icon?: any
    contactsData: string[]
}

export const ContactInfoBlock = ({
                                     title,
                                     icon,
                                     contactsData,
                                 }: ContactInfoBlockPropsType) => {
    const contactItems = contactsData.map((c, i) => <p key={c + i}>{c}</p>)
    const {lightMode} = useContext(ThemeContext)
    return (

        <div className={lightMode ?
            `${style.contactInfoBlock} ${style.light}` :
            style.contactInfoBlock}>
                <span className={style.contactInfoBlockIcon}>
                    {icon}
                </span>
            <div className={style.contactInfoBlockContent}>
                <h6>{title}</h6>
                {contactItems}
            </div>

        </div>
    )
}

