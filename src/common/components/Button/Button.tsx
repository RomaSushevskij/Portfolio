import style from './Button.module.scss'

type ButtonPropsType = {
    title:string
}

export const Button = ({title}: ButtonPropsType) => {
    return (

            <a href="#" className={style.buttonOffer}>{title}</a>

    )
}