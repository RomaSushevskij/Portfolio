import style from './ContactInfoBlock.module.scss'
import {memo, useContext} from 'react';
import {ThemeContext} from '../../../context';
import {ContactBlockType} from '../Contacts';

type ContactInfoBlockPropsType = {
    title: string
    icon?: any
    contactsData: string[]
}

export const ContactInfoBlock = memo(({
                                          title,
                                          icon,
                                          contactsData,
                                      }: ContactInfoBlockPropsType) => {
    const contactItems = contactsData.map((c, i) => {
        let contact;
        if (title === ContactBlockType.phone) {
            contact = `${c.slice(0, 4)} (${c.slice(4, 6)}) ${c.slice(6, 9)}-${c.slice(9, 11)}-${c.slice(11, 13)}`
        }
        if (title === ContactBlockType.telegram) {
            contact = `https://t.me/${c.slice(1)}`
        }
        return (
            <p key={c + i}>{title === ContactBlockType.phone ?
                <a href={`tel:${c}`} target={'_blank'}>{contact}</a> :
                title === ContactBlockType.email ?
                    <a href={`mailto:${c}`} target={'_blank'}>{c}</a> :
                    <a href={`${contact}`} target={'_blank'}>{c}</a>}</p>
        )
    })
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
})

