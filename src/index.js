import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import CompA, { CompB as B} from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Família';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador';
import Hook from './componentes/Hook';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
       <Hook/>
        {/* <ComponenteClasse valor="Sou um componente de classe"/> */}
        {/* <Pai/> */}


      {/* <ComponenteComFuncao/>       */}
      
        {/* <Familia sobrenome="Pereira">
            <Membro nome="André"/>
            <Membro nome="Mariana"/>
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/*<MultiElementos/>*/}
        {/*<CompA valor = "Olá, eu sou A!"/>
        <B valor = "B na área!"/>*/}
        {/*<PrimeiroComponente valor="Bom dia"/>*/}
    </div>
, elemento);
