import style from './ContactInfoBlock.module.scss'
import {PhoneIcon} from './ContactInfoBlockIcons/ContactInfoBlockIcons';
import {ContactsDataType} from '../../../App';

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
    return (
        <div className={style.contactInfoBlock}>
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

