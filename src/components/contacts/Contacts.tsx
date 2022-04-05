import style from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}