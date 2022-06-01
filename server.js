require('dotenv').config()
const { application } = require('express');
const express = require("express");
const app = express();
const {Pool} = require('pg')
const db = require("./db.js");
const PORT = process.env.PORT || 3333

app.use(express.json())
app.use(express.static('public'))
// const pool = new pool({
//     user:process.env.USER,
//     host:process.env.HOST,
//     database:process.env.DATABASE,
//     password:'',
//     port:process.env.DATABASE_PORT
// })

app.post('/mvp', async (req, res) =>{
    let name = req.body.name
    let user = req.body.user_
    let date = req.body.entry_date
    let entry = req.body.entry
    console.log(req.body)
    try {
        await db.connect()
        let data = await db.query('INSERT INTO journal_id (entry_date, journal_entry, user_, name)values($1, $2, $3, $4)', [date, entry, user, name])
        res.json(req.body)
    } catch (error) {
   console.log(error.message)     
    }
    // res.send('path')
})

app.get('/api/journal_id', async (req, res) => {
    try {
   const {rows} = await db.query('SELECT * FROM journal_id')
      res.json(data.rows);
   } catch (error) {
     console.log(error)
     res.status(500).json(error)
   }
  });

  app.patch('/api/mvp', async (req, res) => {
    try{
    const {journal_entry} =  await db.query('SELECT * FROM mvp')
    // const {user_} = await = await db.query('SELECT * FROM mvp')
    }catch (error){
console.log(error) 
res.status(500).json(error)
    }
  })

  app.get('/api/mvp/:name', async (req, res) =>{
  try {
      const id = req.params.id
    const {rows} = await db.query('SELECT * FROM mvp WHERE name = $1', [id])   
  } catch (error) {
    console.log(error)
    res.status(500).json(error) 
  }
  })

  app.delete('api/mvp/:name', (req, res) => {
    res.send('deleted')
})

app.post('api/mvp'), (req, res) => {
    const {name} = req.body
    try {
        console.log(name)
        res.json(name)
    } catch (error) {
        console.error(error.message)
    }
}

  app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
  });
  