import style from './HireMe.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Note} from "./Note/Note";

export const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <Note innerText={'I\'m considering remote work options'}/>
                <a href="#" className={style.buttonOffer}>Hire me</a>
            </div>
        </div>
    )
}
