// import SmallerSquare from "./SmallerSquare";
import React from 'react';
import './Square.css';

export function Square(props) {
    const symbol = props.symbol;
    
    // const [state, setState] = useState(props.symbol);
    let borderColor = 'whiteBackground';
    if (symbol === '1') {
        borderColor = 'blackBackground';
    }


    return (<div onClick={() => {
        const x = props.x;
        const y = props.y;
        const boardState = props.boardState;
        if (symbol === '0') {
            boardState[x][y] = '1';
        } else {
            boardState[x][y] = '0';
        }
        props.onClick([...boardState]);

        }
    } id="square" class={borderColor}>
        {symbol}
    </div>);
}



