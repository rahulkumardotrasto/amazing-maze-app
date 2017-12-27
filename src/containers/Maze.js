import React, {Component} from 'react'
import {Stage} from 'react-konva'
import Board from '../styled/Board'
import Squares from '../styled/Squares'

class Maze extends Component {



  state = {
    rows: 4,
    gameState: new Array(15).fill(false),
    ownMark: 'p',
    otherMark: 'p',
    count: 1,
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows


    let coordinates = []
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit,y*unit])
      }
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }


  move = (moveIndex, mark) => {
    this.setState((prevState,props) => {
      let {
        gameState,
        yourTurn,
        count,
        gameOver,
        winner
      } = prevState
      yourTurn = false
      count++
      gameState.splice(moveIndex, 1, mark)
      console.log(gameState[0])
      let foundWin = this.winChecker(moveIndex)
      let c= count-1
      if (foundWin) {
        winner = gameState[foundWin[0]]
        alert("Total moves to save the princess:"+ c)
      }
      if (foundWin || !gameState.includes(false) ) {
        gameOver = true
      }
      if (!yourTurn && !gameOver) {
        this.makeAiMove(gameState, moveIndex)
      }
      return {
        gameState,
        yourTurn,
        count,
        gameOver,
        win: foundWin || false,
        winner
      }
    })
  }

  winChecker = (index) => {
    if(index === 0)
     return  true                     

  }


  makeAiMove = (gameState, index) => {
    let otherMark = this.state.otherMark
    let openSquares = []
  console.log(index)
      if (index === 0) {
        openSquares.push(1,4)
      }
else if (index === 1){
 openSquares.push(0,2,5)
    }
else if (index === 2){
 openSquares.push(1,6,3)
    }

else if (index === 3){
 openSquares.push(2,6,7)
    }

else if (index === 4){
 openSquares.push(0,5,8)
    }
else if (index === 5){
 openSquares.push(1,4,6,9)
    }
else if (index === 6){
 openSquares.push(2,5,7,10)
    }
else if (index === 7){
 openSquares.push(3,6,11)
    }

else if (index === 8){
 openSquares.push(4,9,12)
    } 
else if (index === 9){
 openSquares.push(5,8,10,13)
    }
else if (index === 10){
 openSquares.push(6,9,11,14)
    }
else if (index === 11){
 openSquares.push(7,10,15)
    }
else if (index === 12){
 openSquares.push(8,9,13)
    }
else if (index === 13){
 openSquares.push(9,12,14)
    }
else if (index === 14){
 openSquares.push(10,13,15)
    }

else if( index === 15){
 openSquares.push(10,11,14)
   }


let num= this.random(0,openSquares.length)
    let aiMove = openSquares[num]
    console.log(openSquares)
    setTimeout(()=>{
      this.move(aiMove,otherMark)
    }, 500)
  }

  random = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }

 
  render(){
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state
    return (
      <div>
        <Stage
          height={size}
          width={size}
        >
          <Board
            unit={unit}
            size={size}
            rows={rows}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
        }
      </div>
    )
  }
}

export default Maze
