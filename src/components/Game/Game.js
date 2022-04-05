import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
import './Game.css';

let tries = 0;

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            arr: [],
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

        this.state.arr.push(number);

        const text = calculateText(number, random, this.state.arr.length);

        this.setState({message: text});
        
    }

    render() {
        //console.log(this.state.random)
        return (
            <div className="game">
                <h1>ADIVINA EL NUMERO</h1>
                <input
                type = "number"
                value = {this.state.number}
                onChange = {this.handleOnChange}
                />

                <button onClick={this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>

                <p>{this.state.arr + " "}</p>

            </div>
        );
    }
}

export default Game;

function generareRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min + min));
}

function calculateText(number, random, tries) {

    if(number === random) {
        return "Felicidades has acertado!" + " tardaste " + tries + " intentos en atinarle"
    }

    if(number > random){
        tries++;
        return number + " es mayor"
    }

    if(number < random){
        tries++;
        return number + " es menor"
    }
}