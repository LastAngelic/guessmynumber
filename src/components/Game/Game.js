import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generareRandomNumber(100)
        }
    }

    handleOnChange = e => {
        //const value = e.target.value}

        const {target: {value}} = e;
        
        console.log(value);

        if(value.trim() >= 0) {
            this.setState({number: value});
        }
    }

    handleOnClick = () => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);

        console.log(random);

        const text = calculateText(number, random);

        this.setState({message: text});
    }

    render() {
        //console.log(this.state.random)
        return (
            <div className="game">
                <input
                type = "number"
                value = {this.state.number}
                onChange = {this.handleOnChange}
                />

                <button onClick={this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;

function generareRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min + min));
}

function calculateText(number, random) {
    if(number=== random) {
        return "Felicidades has acertado!"
    }

    if(number > random){
        return "Tu numero es mayor"
    }

    if(number < random){
        return "Tu numero es menor"
    }
}