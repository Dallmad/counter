import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Buttons/Button";
import {ScoreBoard} from './components/scoreboard/scoreBoard'
import {Input} from "./components/input/input";
import {SettingsForm} from "./components/settingsForm/settingsForm";


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
        <div className='app'>
            <div className='app__inner'>
                <SettingsForm setCounter={setCounter} />
            </div>
            <div className='app__inner'>
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
