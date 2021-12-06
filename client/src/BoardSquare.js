import React from 'react'

const BoardSquare = ({id, text, isClicked, turn}) => {
    return (
        <div className="board-square"
            onClick={() => {turn(id)}}
        >
            {text}
        </div>
    )
}

export default BoardSquare
