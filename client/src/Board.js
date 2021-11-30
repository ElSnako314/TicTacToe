import {useState} from 'react';

function Board() {
    const turn = () => {

    }

    const checkwin = () => {

    }

    return(
        <style>
            .board {
                display: grid;
                grid-template-columns: auto auto auto;
            }
            .board-square {
                border: 1px
            }
        </style>
        <div class='board'>
            <div class='board-square'>1</div>
            <div class='board-square'>2</div>
            <div class='board-square'>3</div>
            <div class='board-square'>4</div>
            <div class='board-square'>5</div>
            <div class='board-square'>6</div>
            <div class='board-square'>7</div>
            <div class='board-square'>8</div>
            <div class='board-square'>9</div>
        </div>
    )
}

export default Board