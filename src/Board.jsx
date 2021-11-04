import React, { useState } from 'react';
import { Square } from "./Square"
import './Board.css'

export default function Board() {
    const [boardState, setBoard] = useState([
        ['0','0'],
        ['0','0']
    ])

    let myCount = 0

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<Square symbol={boardState[i][j]} onClick={setBoard} boardState={boardState} x={i} y={j}/>))
            if (boardState[i][j] === '1') {
                myCount += 1
            }
        }
    }

    return (
        <div>
            <div>
                <h1 id="title">Count: {myCount}</h1>
                <div id="board">
                    {boardComponent}
                </div>
            </div>
        </div>
    )
}