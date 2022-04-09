import style from './HireMe.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Note} from "./Note/Note";
import {Button} from '../../common/components/Button/Button';

export const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <Note innerText={'I\'m considering remote work options'}/>
                <Button title={'Hire me'}/>
            </div>
        </div>
    )
}
