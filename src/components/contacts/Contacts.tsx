import style from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {InputField} from '../../common/components/InputField/InputField';
import {TextareaField} from '../../common/components/TextareaField/TextareaField';
import {Button} from '../../common/components/Button/Button';
import {Title} from '../../common/components/Title/Title';
import {ContactInfoBlock} from './ContactInfoBlock/ContactInfoBlock';
import {ContactsDataType} from '../../App';
import {EmailIcon, PhoneIcon, TelegramIcon} from './ContactInfoBlock/ContactInfoBlockIcons/ContactInfoBlockIcons';
import {FormEvent, memo, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

type ContactsPropsType = {
    contactsData: ContactsDataType
}

export enum ContactBlockType {
    phone = 'Phone',
    email = 'Email',
    telegram = 'Telegram'
}

export const Contacts = memo(({contactsData}: ContactsPropsType) => {
    const [inputNameValue, setinputNameValue] = useState('')
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [isFetching, setIsFetching] = useState(false)


    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        setIsFetching(true);
        e.preventDefault();
        emailjs.sendForm('service_t7jspjt',
            'template_gkemg9c',
            formRef.current as string | HTMLFormElement,
            'hipGVCdjdCQ17duay')
            .then((result) => {
                setinputNameValue('')
                setInputEmailValue('')
                setTextareaValue('')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsFetching(false)
            })

    };

    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.contactsTitle}>
                    <Title titleText={'contact me'}/>
                </div>
                <div className={style.formAndContactBlock}>
                    <form className={style.contactsForm}
                          onSubmit={sendEmail}
                          ref={formRef}>
                        <InputField label={'Enter your name*'}
                                    id={'contact_form_name'}
                                    value={inputNameValue}
                                    onChange={setinputNameValue}
                                    name={'name'}/>
                        <InputField label={'Enter your email*'}
                                    id={'contact_form_email'}
                                    value={inputEmailValue}
                                    onChange={setInputEmailValue}
                                    name={'email'}/>
                        <TextareaField label={'Enter your Message*'}
                                       id={'contact_form_message'}
                                       name={'message'}
                                       value={textareaValue}
                                       onChange={setTextareaValue}>
                        </TextareaField>
                        <Button title={'Send mail'}
                                type={"submit"}
                                disabled={isFetching}/>
                    </form>
                    <div className={style.contactsInfoBlock}>
                        <ContactInfoBlock title={ContactBlockType.phone}
                                          contactsData={contactsData.phone}
                                          icon={<PhoneIcon/>}/>
                        <ContactInfoBlock title={ContactBlockType.email}
                                          contactsData={contactsData.email}
                                          icon={<EmailIcon/>}/>
                        <ContactInfoBlock title={ContactBlockType.telegram}
                                          contactsData={contactsData.telegram}
                                          icon={<TelegramIcon/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
})