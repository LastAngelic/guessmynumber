import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            message: "",
            random: generareRandomNumber(100)
        }
    }
    render() {
        return (
            <div className="game">
                <input
                type="number"

                />

                <button>Probar</button>
                <p>Texto</p>
            </div>
        );
    }
}

export default Game;

function generareRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min + min));
}