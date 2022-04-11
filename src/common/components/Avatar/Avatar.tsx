import styleModule from './Avatar.module.scss'
import {AvatarSettingsType} from '../../../App';
import {memo} from 'react';

type AvatarPropsType = {
    style: AvatarSettingsType
}

export const Avatar = memo(({style}: AvatarPropsType) => {
    return (
        <div style={style} className={styleModule.avatarWrapper}></div>
    )
})