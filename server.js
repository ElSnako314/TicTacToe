const express = require('express')
const app = new express()
const db = require('better-sqlite3')('TicTacToe.accdb')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/login',(req,res) => {
    // Something goes here...
})

app.get('/newgame',(req,res) => {
    const query = db.prepare("SELECT * FROM books")
    const books = query.all()
    res.json({
        books
    })
})

app.post("/checkout",(req,res) => {
    const {bookId} = req.body
    const query = db.prepare("UPDATE books SET available = 0 WHERE id = ?")
    const result = query.run(bookId)
    console.log(`checked out ${result.changes} book(s)`)
    res.json({
        didCheckOut: result.changes > 0 ? true : false,
        bookId
    })
})

app.listen(3000,() => {
    console.log("server started")
})