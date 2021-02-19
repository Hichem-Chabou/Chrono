import React, { useState, useEffect } from 'react';
import './Main.css';
import calcTimer from '../../Helper/CalcTimer';
import Controls from '../Controls/Controls';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        let timerArray: Array<number|string> = calcTimer(timeInSeconds);
        setTimerArray(timerArray);
    }, [timeInSeconds]);

    return (
        <main>
            <section className="container">
            <p className="timer-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[2]}</p>  
            </section>
            <Controls setTimeInSeconds =  {setTimeInSeconds} />
        </main>

          
    )
};

export default Main;