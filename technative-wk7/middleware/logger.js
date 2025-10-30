import cookieParser from 'cookie-parser'
import cors from 'cors'

app.use(cors())
app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
	res.cookie('theme', 'dark')
	res.send('Cookie set')
})

app.get('/read-cookie', (req, res) => {
	res.send(`Theme: ${req.cookies.theme}`)
})

app.listen(80, function () {
	console.log('CORS-enabled web server listening on port 80')
})