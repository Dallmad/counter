import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Buttons/Button";
import {ScoreBoard} from './components/scoreboard/scoreBoard'


function App() {
    let [counter, setCounter] = useState(0)
    const scoreMax = 5;
    const scoreMin = 0;
    const clickIncrement = () => {
        setCounter(counter < scoreMax ? ++counter : counter = scoreMax)
    }
    const clickReset = () => {
        setCounter(counter = scoreMin)
    }

    return (
        <div>
            <div className='app'>
                <div>
                    <ScoreBoard
                        counter={counter}
                        scoreMax={scoreMax}
                    />
                </div>
                <div className='button'>
                    <Button
                        disable={counter === scoreMax}
                        name='Inc'
                        callBack={clickIncrement}
                    />
                    <Button
                        disable={counter === scoreMin}
                        name='Reset'
                        callBack={clickReset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
