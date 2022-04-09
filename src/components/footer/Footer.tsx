import style from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.fullName}>Roman Suschevskij</h3>
                <span className={style.rights}>2022 © All rights reserved</span>
            </div>
        </div>
    )
}