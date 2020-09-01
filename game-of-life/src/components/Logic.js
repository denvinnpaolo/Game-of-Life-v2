import React, { useState, useEffect, useReducer } from 'react';
import NextGen from './NextGen.js'
import Visuals from './Visuals.js'



const Logic = () => {

    const cols = 20;
    const rows = cols;
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [states, setStates] = useState();
    const [counter, setCounter] = useState(0)



    const make2DArray = () => {
        let twoDimArray = new Array(cols);
        for(let i = 0; i < twoDimArray.length; i++){
            twoDimArray[i] = new Array(rows)
        }
        //fills Two Dimensional Array with 0's and 1's
        for(let i = 0; i < twoDimArray.length; i++){
            for( let j = 0; j < rows; j++){
                twoDimArray[i][j] = Math.floor(Math.random() * 2);
            }
        }
        return twoDimArray
    }
    let initialValue = make2DArray()

    const [ currentCell, setCurrentCell ] = useState(initialValue)


    useEffect(() => {
        let next = NextGen(currentCell, cols, rows, counter)

        setCounter(next.counter)
        setCurrentCell(next.next)

        setStates({...states,
           [counter] : currentCell
        })

    });

    const toggleGrid = e => {
        e.stopPropagation();
    };

    if(!states){
        return <h1>loading..</h1>
    } else if(states.length < 1000){
        return <h1>loading...</h1>
    
    } else if(states.length === 1000) {
        return(
            <div className= 'gol-bg'>
                <div>
                    <button onClick={toggleGrid}>Start/Stop</button>
                    {/* <button onClick={resetState}>Reset</button> */}
                </div>
                <Visuals currentCell={currentCell} states = {states} i={counter} />
            </div>
        )
    }
};

export default Logic;