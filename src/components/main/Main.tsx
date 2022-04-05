import style from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.welcome}>
                    <span>Hi There</span>
                    <h1>I am Roman Suschevskij</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    )
}