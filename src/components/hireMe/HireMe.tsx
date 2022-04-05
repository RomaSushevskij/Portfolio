import style from './HireMe.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <h3 className={style.title}>I'm considering remote work options</h3>
                <a href="#" className={style.buttonOffer}>Hire me</a>
            </div>
        </div>
    )
}