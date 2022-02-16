import style from './Header.module.css'
import {Navbar} from "./navbar/Navbar";
import styleContainer from "../../common/styles/Container.module.css";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Navbar/>
            </div>
        </div>
    )
}