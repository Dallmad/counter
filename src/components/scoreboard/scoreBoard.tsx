import React from "react";
import s from './ScoreBoard.module.css'

type ScoreBoardType = {
    counter: number
    scoreMax: number
}

export const ScoreBoard = (props: ScoreBoardType) => {
    return (
        <div className={s.score}>
            <div className={props.counter === props.scoreMax ? s.scoreMax : ''}>
                {props.counter}
            </div>
        </div>
    )
}