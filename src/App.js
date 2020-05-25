import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './player.js';


const weapons = ["rock", "paper", "scissors"];

class App extends React.Component {
    state = {
      PlayerOne: weapons[0],
      PlayerTwo: weapons[0],
      winner: ""
    }

    startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        PlayerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 80);
  };

  selectWinner = () => {
    const { PlayerOne, PlayerTwo } = this.state;

    if (PlayerOne === PlayerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (PlayerOne === "rock" && PlayerTwo === "scissors") ||
      (PlayerOne === "scissors" && PlayerTwo === "paper") ||
      (PlayerOne === "paper" && PlayerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  selectWeapon = weapon => {
    this.setState({
      PlayerOne: weapon,
      winner: ""
    });
  };

  render(){
    const {PlayerOne,PlayerTwo,winner} = this.state;
    return (
    <>
      <h1 className="header">Rock Paper Scissors</h1>
      <div>
        <Player weapons={PlayerOne}/>
        <Player weapons={PlayerTwo}/>
      </div>
      <div>
        <button className="weaponBtn" onClick={() => this.selectWeapon("rock")}>
          rock
        </button>
        <button className="weaponBtn" onClick={() => this.selectWeapon("paper")}>
          paper
        </button>
        <button className="weaponBtn" onClick={() =>  {this.selectWeapon("scissors")}}>
          scissor
        </button>
      </div>
      <div className="winner">{winner ? this.selectWinner() : null}</div>

      <button type="button" onClick={this.startGame}>Start</button>
    </>
  );
  }
}

export default App;
