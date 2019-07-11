import React from 'react';

let isLegal = true;

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h1>{1 + 1}</h1>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()*50}</p>
    </div>


//export default () => 
//  <div>
//  <h1>Primeiro componente (Arrow)!</h1>
//</div>

//export default function (){
//    return <h1>Primeiro componente!</h1>
//}

//function primeiro() {
//    return <h1>Primeiro componente!</h1>
//}

//export default primeiro;

