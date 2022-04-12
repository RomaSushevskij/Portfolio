import style from './HireMe.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Note} from "./Note/Note";
import {Button} from '../../common/components/Button/Button';
import {Link} from 'react-scroll';

export const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <Note innerText={'I\'m considering remote work options'}/>
                <Link to={'contacts'}
                      spy={true}
                      smooth={true}
                      duration={700}
                      offset={-10}>
                    <Button title={'Hire me'}/>
                </Link>
            </div>
        </div>
    )
}
