import style from './Particle.module.scss'
import Particles from "react-tsparticles";
import {memo} from 'react';

type OptionsDartType = {}
type OptionsLightType = {}
type ParticlePropsType = {
    lightMode: boolean
}

export const Particle = memo(({lightMode}: ParticlePropsType) => {
    const paramConfig = {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: false,
                },
            },
            color: {
                value: "#ffffff",
            },
            opacity: {
                value: 0.1,
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    speed: 4,
                    size_min: 0.3,
                },
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
            },
        },
    } as OptionsDartType;


    const paramConfigLight = {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: false,
                },
            },
            color: {
                value: "#000000",
            },
            opacity: {
                value: 0.1,
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    speed: 4,
                    size_min: 0.3,
                },
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
            },
        },
    };
    return (
        <Particles className={style.particle}
                   options={lightMode ? paramConfigLight : paramConfig}
        />
    );
})
