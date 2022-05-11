import BoardSquare from './BoardSquare.js'
import {useState, useEffect} from 'react';

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

    const [isX, setIsX] = useState(true)
    const [players, setPlayers] = useState("")

    useEffect(() => {
        fetch('/newgame')
            .then(res => res.json())
            .then(data => {
                players[0] = data
                setPlayers()
            })
        // var player1 = document.getElementById('player1')
        // player1.textContent = "Hello"
        console.log(players)
        console.log("HI IS THIS WORKING??")
    },[])

    function setUpGame() {
        fetch("/newgame")
            .then(setplayers(res))
    }

    const turn = (id) => {
        const index = boardBoxes.findIndex( (boardBox) => boardBox.id === id)
        if (!boardBoxes[index].isClicked) {
            boardBoxes[index].text = (isX ? "X" : "O")
            boardBoxes[index].isClicked = true
            setIsX(!isX)
            setBoardBoxes([...boardBoxes])

            const b = [];
            for (let i = 0; i < boardBoxes.length; i++) {
                b[i] = boardBoxes[i].text
            }

            console.log(checkwin(b.flat()))
            if (checkwin(b.flat())) {
                console.log(":(")
                won()
            }
        }
    }

    function checkwin(boardInLine) {
        const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = boardInLine

        return (
            checkThreeBoxes(b1, b2, b3) ||
            checkThreeBoxes(b4, b5, b6) ||
            checkThreeBoxes(b7, b8, b9) ||
            checkThreeBoxes(b1, b4, b7) ||
            checkThreeBoxes(b2, b5, b8) ||
            checkThreeBoxes(b3, b6, b9) ||
            checkThreeBoxes(b1, b5, b9) ||
            checkThreeBoxes(b3, b5, b7)
        )
    }

    function checkThreeBoxes(ti, ta, to) {
        if (!(ti === "") || !(ta === "") || !(to === "")) {
            return ti === ta && ta === to
        }
        else return false
    }

    function won() {
        var winStatement = document.getElementById('win')
        winStatement.textContent = "Player " + (isX ? "X" : "O") + ", YOU LOSE"
    }

    return(
        <>
            <h1>
                {setUpGame()}
            </h1>
            <div className="board">
                {boardBoxes.map((boardBox) => 
                    <BoardSquare
                        key={boardBox.id}
                        id={boardBox.id}
                        text={boardBox.text}
                        isClicked={boardBox.isClicked}
                        turn={turn}
                    />
                )}
            </div>
            <h1>
            hello
            </h1>
        </>
    )
}

export default Board