import React, { useState } from 'react'

const Input = () => {
    const [IV, setIV] = useState({
        'ColRowSize' : 10
    });

    const HandleChange = e => {
        // e.persist();
        setIV({
            ...setIV,
            [e.target.name] : e.target.value
        })

        console.log(IV)
    }



    return ()
}

export default Input