import React, { useState, useEffect } from 'react';
import NextGen from './NextGen.js';
import Visuals from './Visuals.js';
import useInterval from '../util/useInterval.js';



const Logic = props => {

    const [cols, setCols] = useState({
        cols : 10
    })
    const [counter, setCounter] = useState(0)
    const [playPause, setPlayPause] = useState(false)



    const make2DArray = (column, row) => {

        let twoDimArray = new Array(isNaN(column)? 0 : column);

        for(let i = 0; i < twoDimArray.length; i++){
            twoDimArray[i] = new Array(isNaN(row)? 0 : row)
        }
        //fills Two Dimensional Array with 0's and 1's
        for(let i = 0; i < twoDimArray.length; i++){
            for( let j = 0; j < row; j++){
                twoDimArray[i][j] = Math.floor(Math.random() * 2);
            }
        }
        return twoDimArray
    }
    let initialValue = make2DArray(cols.cols, cols.cols)

    const [currentCell, setCurrentCell] = useState(initialValue)
    const [states, setStates] = useState({[counter]:initialValue});

    useEffect(()=> {
        setCurrentCell(make2DArray(cols.cols, cols.cols))
    }, [cols])



    useInterval(() => {
        setStates({
            ...states,
            [counter]:currentCell
        })

        let next = NextGen(currentCell, cols.cols, cols.cols, counter)

        setCounter(next.counter)
        setCurrentCell(next.next)

    }, playPause? 100 : null);


    const toggleGrid = e => {
        setPlayPause(!playPause)
    };

    const togglePrev = e => {
        if(counter < 1){
            alert("The Previous Generation is not available")
        } else {
            setCounter(counter - 1)
            setCurrentCell(states[counter-1])
        }
    };

    const toggleNext = e => {
        if(states[counter + 1]){
            setCounter(counter + 1);
            setCurrentCell(states[counter + 1]);
        } else {
            alert("The Next Generation is not available");

        }
    }

    const toggleState = (rowIndex, state, stateIndex) => {
        let cState = [...currentCell]

        if(state === 0){
            cState[rowIndex][stateIndex] = 1
        } else  if(state === 1){
            cState[rowIndex][stateIndex] = 0
        }
          
        setCurrentCell(cState)
    }

    const handleSizeChange = e => {
        let colrow = e.target.value
        setCols({
            cols : parseInt(isNaN(colrow)? 0: colrow)
        })
    }

    const resetState = e => {
        setCurrentCell(make2DArray(cols.cols, cols.cols))
        setCounter(0)
    }

    return(
        <div className= 'gol-bg'>
            <div>
                <input
                    name = "colsRows"  
                    onChange={handleSizeChange}
                    placeholder = "Column and Row Size"
                    value={isNaN(cols.cols)? 0 : cols.cols}
                />
                <button onClick={toggleGrid}>Start/Stop</button>
                <button onClick={togglePrev}>Previous</button>
                <button onClick={toggleNext}>Next</button>
                <button onClick={resetState}>Reset</button>

            </div>
            <Visuals currentCell={currentCell} toggleState = {toggleState}/>
            <h1>Cell State: {counter}</h1>
        </div>
    )
};

export default Logic;