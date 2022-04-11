import style from './Button.module.scss'
import {memo} from 'react';

type ButtonPropsType = {
    title: string
    type?: string
}

export const Button = memo(({title}: ButtonPropsType) => {
    return (
        <button className={style.buttonOffer} type={"submit"}>{title}</button>
    )
})