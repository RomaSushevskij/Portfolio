import style from './SnackBar.module.scss';
import {memo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

type SnackBarPropsType = {
    type?: "success" | "error";
    children: any
}

export const SnackBar = memo(({type="success", children}: SnackBarPropsType) => {
    const isError = type === "error"
    const finalClassName = isError ? `${style.snackBarContainer} ${style.error}` : style.snackBarContainer;
    return <div className={style.snackBarWrapper}>
        <div className={finalClassName}>
            <FontAwesomeIcon icon={isError ? faTriangleExclamation : faEnvelopeCircleCheck}/> {children}
        </div>

    </div>
})