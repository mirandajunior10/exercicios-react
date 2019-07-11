import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
//import CompA, { CompB as B} from './componentes/DoisComponentes';
//import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <FamiliaSilva />

        {/*<MultiElementos/>*/}
        {/*<CompA valor = "Olá, eu sou A!"/>
        <B valor = "B na área!"/>*/}
        {/*<PrimeiroComponente valor="Bom dia"/>*/}
    </div>
, elemento);
