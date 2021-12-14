import React from 'react'

const BoardSquare = ({id, text, isClicked, turn}) => {
    const style = {
        backgroundColor: "#353535",
        height: 150,
        width: 150,
        margin: 10,
    }

    return (
        <div
            onClick={() => {turn(id)}}
            style={style}
        >
            <h1 className="square-text">{text}</h1>
        </div>
    )
}

export default BoardSquare
