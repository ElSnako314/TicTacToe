import BoardSquare from './BoardSquare.js'
import {useState} from 'react';

function Board() {
    const [boardBoxes, setBoardBoxes] = useState([
        {
            id: 1,
            text: "",
            isClicked: false
        },
        {
            id: 2,
            text: "",
            isClicked: false
        },
        {
            id: 3,
            text: "",
            isClicked: false
        },
        {
            id: 4,
            text: "",
            isClicked: false
        },
        {
            id: 5,
            text: "",
            isClicked: false
        },
        {
            id: 6,
            text: "",
            isClicked: false
        },
        {
            id: 7,
            text: "",
            isClicked: false
        },
        {
            id: 8,
            text: "",
            isClicked: false
        },
        {
            id: 9,
            text: "",
            isClicked: false
        },
    ])
    const [boardText, setBoardText] = useState("")
    const [boardClicked, setBoardClicked] = useState(false)
    
    const turn = (id) => {
        const index = boardBoxes.findIndex( (boardBox) => boardBox.id == id)
        if (!boardBoxes[index].isClicked) boardBoxes[index].text = "X"
        boardBoxes[index].isClicked = true
        setBoardBoxes([...boardBoxes])
    }

    const checkwin = () => {

    }

    return(
        <div class="board-square">
            {boardBoxes.map((boardBox) => 
                <BoardSquare
                    id={boardBox.id}
                    text={boardBox.text}
                    isClicked={boardBox.isClicked}
                    turn={turn}
                />
            )}
        </div>
    )
}

export default Board