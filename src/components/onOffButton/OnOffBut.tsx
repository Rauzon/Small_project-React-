import React, {useState} from "react";
import style from './onOff.module.css'

export function OnOffBut(props: any) {

    let [on, setOn] = useState(true)

    const onButton = (on) ? style.active_div : style.nonActive_div
    const offButton = (!on) ? style.active_div : style.nonActive_div
    const switchIndicate = (on) ? style.active_div : style.nonActive_div

    return (
        <div className={style.button__content}>
            <div className={`${style.button__content_on} ${onButton}`}   onClick={() => {setOn(!on)}}>
                <span>ON</span>
            </div>
            <div className={`${style.button__content_off} ${offButton}`} onClick={() => {setOn(!on)}}>
                <span>OFF</span>
            </div>
            <div className={`${style.button__content_switch} ${switchIndicate}`}>
            </div>
        </div>
    );
}