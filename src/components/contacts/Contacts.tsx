import style from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {InputField} from '../../common/components/InputField/InputField';
import {TextareaField} from '../../common/components/TextareaField/TextareaField';
import {Button} from '../../common/components/Button/Button';
import {Title} from '../../common/components/Title/Title';
import {ContactInfoBlock} from './ContactInfoBlock/ContactInfoBlock';
import {ContactsDataType} from '../../App';
import {EmailIcon, PhoneIcon, TelegramIcon} from './ContactInfoBlock/ContactInfoBlockIcons/ContactInfoBlockIcons';

type ContactsPropsType = {
    contactsData: ContactsDataType
}
export const Contacts = ({contactsData}: ContactsPropsType) => {
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.contactsTitle}>
                    <Title titleText={'contact me'}/>
                </div>
                <div className={style.formAndContactBlock}>
                    <form className={style.contactsForm}>
                        <InputField label={'Enter your name*'}
                                    id={'contact_form_name'}/>
                        <InputField label={'Enter your email*'}
                                    id={'contact_form_email'}/>
                        <TextareaField label={'Enter your Message*'}
                                       id={'contact_form_message'}></TextareaField>
                        <Button title={'Send mail'}/>
                    </form>
                    <div className={style.contactsInfoBlock}>
                        <ContactInfoBlock title={'Phone'}
                                          contactsData={contactsData.phone}
                                          icon={<PhoneIcon/>}/>
                        <ContactInfoBlock title={'Email'}
                                          contactsData={contactsData.email}
                                          icon={<EmailIcon/>}/>
                        <ContactInfoBlock title={'Telegram'}
                                          contactsData={contactsData.telegram}
                                          icon={<TelegramIcon/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}