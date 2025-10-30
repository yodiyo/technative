import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Welcome to the Space API')
})

app.get('/planets', (req, res) => {
	res.json([
		{ id: 1, name: 'Earth' },
		{ id: 2, name: 'Mars' },
	])
})

app.listen(port, () => console.log(`Server running on port ${port}`))
