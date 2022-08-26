import style from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {InputField} from '../../common/components/InputField/InputField';
import {TextareaField} from '../../common/components/TextareaField/TextareaField';
import {Button} from '../../common/components/Button/Button';
import {Title} from '../../common/components/Title/Title';
import {ContactInfoBlock} from './ContactInfoBlock/ContactInfoBlock';
import {ContactsDataType} from '../../App';
import {EmailIcon, PhoneIcon, TelegramIcon} from './ContactInfoBlock/ContactInfoBlockIcons/ContactInfoBlockIcons';
import {FormEvent, memo, useEffect, useRef, useState} from 'react';
//import emailjs from '@emailjs/browser';
import {contactsApi} from "../../api/contactsApi";
import {SnackBar} from "../../common/components/SnackBar/SnackBar";

type ContactsPropsType = {
    contactsData: ContactsDataType
}

export enum ContactBlockType {
    phone = 'Phone',
    email = 'Email',
    telegram = 'Telegram'
}

const MESSAGE_FOR_INVALID_FORM = "Please fill in all the fields";

export const Contacts = memo(({contactsData}: ContactsPropsType) => {

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [notification, setNotification] = useState("")
    const [isValidForm, setIsValidForm] = useState(false)
    const snackBarType = isValidForm ? "success" : "error"

    const formRef = useRef<HTMLFormElement>(null);

    // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    //     setIsFetching(true);
    //     e.preventDefault();
    //     emailjs.sendForm('service_t7jspjt',
    //         'template_gkemg9c',
    //         formRef.current as string | HTMLFormElement,
    //         'hipGVCdjdCQ17duay')
    //         .then((result) => {
    //             setInputNameValue('')
    //             setInputEmailValue('')
    //             setTextareaValue('')
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         })
    //         .finally(() => {
    //             setIsFetching(false)
    //         })
    // };

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {try {
            setIsFetching(true);
            e.preventDefault();
            if (isValidForm) {
                const result = await contactsApi.sendMessage({
                    name: inputNameValue,
                    email: inputEmailValue,
                    message: textareaValue
                })
                setNotification(result)
                setTimeout(() => {
                    setIsValidForm(false)
                    setInputNameValue('')
                    setInputEmailValue('')
                    setTextareaValue('')
                }, 3000)
                return
            }
            setNotification(MESSAGE_FOR_INVALID_FORM);

        } catch (e) {
            console.log(e)
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        if (inputNameValue.trim() && inputEmailValue.trim() && textareaValue.trim()) {
            setIsValidForm(true);
            return
        }
        setIsValidForm(false)
    }, [inputNameValue, inputEmailValue, textareaValue]);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        if (notification) {
            timeoutId = setTimeout(() => {
                setNotification('')
            }, 3000)

        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [notification]);

    return (
        <div className={style.contactsBlock} id={'contacts'}>
            {notification && <SnackBar type={snackBarType && snackBarType}>{notification}</SnackBar>}
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
                                    onChange={setInputNameValue}
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