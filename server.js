const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static('./client/build'))
app.use(express.json())

/* app.get('/login',(req,res) => {
    // Something goes here...
}) */

app.get('/newgame',(req,res) => {
    const playernames = db.prepare("SELECT username FROM users WHERE user_id = 1")
    const names = playernames.all()
    res.json({
        names
    })
})

/* app.post("/checkout",(req,res) => {
    const {bookId} = req.body
    const query = db.prepare("UPDATE books SET available = 0 WHERE id = ?")
    const result = query.run(bookId)
    console.log(`checked out ${result.changes} book(s)`)
    res.json({
        didCheckOut: result.changes > 0 ? true : false,
        bookId
    })
}) */

app.get("/initialize",(req,res) => {
    const test = db.prepare("SELECT * FROM users")
    const testmore = test.all()
    res.json({
        testmore
    })
})

app.listen(8080,() => {
    console.log("server started")
})