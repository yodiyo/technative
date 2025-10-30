app.get('/', (req, res) => {
	const name = req.query.name || 'Home'
	res.send(`This is ${name}!`)
})

app.get('/data', async (req, res) => {
	try {
		const data = await fetchDataFromDatabase()
		res.json(data)
	} catch (error) {
		console.error('Error fetching data:', error)
		res.status(500).json({ error: 'Internal server error' })
	}
})

app.get('/greet', (req, res) => {
	const name = req.query.name || 'visitor'
	res.send(`Hello, ${name}`)
})

app.get('/products/:id', async (req, res, next) => {
	try {
		const productId = req.params.id
		const result = await pool.query('SELECT * FROM products WHERE id = $1', [productId])
		res.json(result.rows[0])
	} catch (error) {
		console.error('Error fetching product:', error)
		res.status(500).json({ error: 'Internal server error' })
	}
})