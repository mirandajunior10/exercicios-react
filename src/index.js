import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
//import CompA, { CompB as B} from './componentes/DoisComponentes';
//import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Família';
import Membro from './componentes/Membro';
const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="André"/>
            <Membro nome="Mariana"/>
        </Familia>
        <FamiliaSilva/>
        {/*<MultiElementos/>*/}
        {/*<CompA valor = "Olá, eu sou A!"/>
        <B valor = "B na área!"/>*/}
        {/*<PrimeiroComponente valor="Bom dia"/>*/}
    </div>
, elemento);
