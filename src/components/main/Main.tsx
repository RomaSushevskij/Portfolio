import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.photo}></div>
                <div className={style.welcome}>
                    <h1>Hi, I am <span className={style.colorTheme}>Roman Suschevskij</span></h1>
                    <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
                        website more & more interactive with web animations.</p>
                </div>
            </div>
        </div>
    )
}