import React, { useState, useEffect } from 'react';

export default props => {
    const [contador, setContador] = useState(0);
    const [status, setStatus] = useState('Par');
    
    useEffect(() =>{
        contador % 2 === 0 ? setStatus('Par') : setStatus('Ímpar')
    })


    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
            <h1>{status}</h1>
        </div>
    )

}