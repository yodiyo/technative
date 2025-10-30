import cookieParser from 'cookie-parser'
import express from 'express'

const app = express()

app.use(cookieParser())
app.get('/set-cookie', (req, res) => {
	res.cookie('theme', 'dark')
	res.send('Cookie set')
})

app.get('/read-cookie', (req, res) => {
	res.send(`Theme: ${req.cookies.theme}`)
})