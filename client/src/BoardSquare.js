import React from 'react'

const BoardSquare = ({id, text, isClicked, turn}) => {
    const style = {
        backgroundColor: "green",
        height: "50px",
        width: "50px",
        margin: "10px"
    }

    return (
        <div 
            style={style}
            onClick={() => {turn(id)}}
        >
            {text}
        </div>
    )
}

export default BoardSquare
