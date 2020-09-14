import React, { useState, useEffect } from 'react'


const Visuals = props => {
    return props.currentCell.map((row, i)=> {
        return row.map((innerState, j) => {
            if(((j+1) % row.length) !== 0){
                if(innerState === 1){
                    return <button onClick={()=> {props.toggleState(i, innerState, j)}}className = 'black'>{innerState}</button>
                } else {
                    return <button onClick={()=> {props.toggleState(i, innerState, j)}} className = 'white'>{innerState}</button>
                }
            } 
            else {
                if(innerState === 1){
                    return <span><button onClick={()=> {props.toggleState(i, innerState, j)}} className = 'black'>{innerState}</button><br/></span>
                } else {
                    return <span><button onClick={()=> {props.toggleState(i, innerState, j)}} className = 'white'>{innerState}</button><br/></span>
                } 
            }
        })
    })
}

export default Visuals