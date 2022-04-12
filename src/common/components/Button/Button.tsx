import style from './Button.module.scss'
import {memo} from 'react';
import {Preloader} from '../Preloader/Preloader';

type ButtonPropsType = {
    title: string
    type?: string
    disabled?: boolean
}

export const Button = memo(({title, disabled}: ButtonPropsType) => {
    return (
        <button className={style.buttonOffer}
                type={"submit"}
                disabled={disabled}>
            {disabled ? <Preloader size={'20px'} color={'#ffffff'}/> : title}
        </button>
    )
})