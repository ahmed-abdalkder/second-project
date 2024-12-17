

import express from 'express'
import cors from 'cors'
import connection from './db/connection.js'
import postrouter from './src/modules/posts/post.routes.js'
 
 
const app = express()
const port =process.env.port|| 3000
connection
app.use(express.json())
app.use(cors())
app.use("/posts",postrouter)

app.get('*', (req, res) => res.json(' url not found'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 