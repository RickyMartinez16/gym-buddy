import React, {useEffect} from 'react';

export default function Arms(){
    useEffect(async () => {
        const exercises = await fetch("http://localhost:3000/arms")
        console.log(exercises)
    })

    return (
        <div>
            <h1>Arms page</h1>
        </div>
    )
}