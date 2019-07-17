import React from 'react'

export default class Contador extends React.Component {
    state = {
        numero: this.props.numero
    }    

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        //this.state.numero++;
        
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
        //this.state.numero--;
    }

    alterarNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
            </div>
        )
    }

}

//Solução 01  - Bind
// constructor(props) {
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

//Solução 02 - Função Arrow no onClick
/* <button onClick={() => this.maisUm()}>Inc</button> */

// //Solução 03 - Função arrow
// maisUm = () => {
//     //this.props.numero++;
//     console.log(this);
// }