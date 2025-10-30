
import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

const result = await pool.query('SELECT NOW()')
console.log(result.rows)