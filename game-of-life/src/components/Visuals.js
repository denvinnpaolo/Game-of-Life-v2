import React from 'react'

const Visuals = props => {
    console.log(props.states)

    // if(props.states.length < 1000){
    //     return <h1>loading...</h1>
    
    // } else {
    //     // return(for(let i = 0; i < 100000; i++){
        return props.states.map(state => {
            return state.map(generation => {
                return generation.map((innerState, i) => {
                    if(((i+1) % props.generation.length) !== 0){
                        if(innerState === 1){
                            return <button className = 'black'>{innerState}</button>
                        } else {
                            return <button className = 'white'>{innerState}</button>
                        }
                    } 
                    else {
                        if(innerState === 1){
                            return <span><button className = 'black'>{innerState}</button><br/></span>
                        } else {
                            return <span><button className = 'white'>{innerState}</button><br/></span>
                        } 
                    }
                })
            })}
        )
    // }
    // }
}

export default Visuals