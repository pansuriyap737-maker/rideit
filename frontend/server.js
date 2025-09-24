import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Mongo connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rideit'
try {
	await mongoose.connect(mongoUri)
	console.log('MongoDB connected')
} catch (err) {
	console.error('MongoDB connection failed:', err?.message || err)
	process.exit(1)
}

// Health check
app.get('/api/health', (req, res) => {
	return res.json({ status: 'ok' })
})

// User model
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: { type: String, required: true },
	password: { type: String, required: true }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

// Routes
app.post('/api/auth/register', async (req, res, next) => {
	try {
		let { username, email, phoneno, password, cnfpass } = req.body
		if (!username || !email || !phoneno || !password || !cnfpass) {
			return res.status(400).json({ message: 'All fields are required' })
		}

		// normalize
		email = String(email).trim().toLowerCase()
		username = String(username).trim()
		phoneno = String(phoneno).trim()
		password = String(password)
		cnfpass = String(cnfpass)

		if (password !== cnfpass) {
			return res.status(400).json({ message: 'Passwords do not match' })
		}

		const existing = await User.findOne({ email })
		if (existing) {
			return res.status(409).json({ message: 'Email already registered' })
		}

		const user = await User.create({ username, email, phone: phoneno, password })
		return res.status(201).json({ id: user._id, username: user.username, email: user.email })
	} catch (err) {
		next(err)
	}
})

app.post('/api/auth/login', async (req, res, next) => {
	try {
		let { email, password } = req.body
		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required' })
		}

		// normalize
		email = String(email).trim().toLowerCase()
		password = String(password)

		const user = await User.findOne({ email })
		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		if (user.password !== password) {
			return res.status(401).json({ message: 'Invalid credentials' })
		}

		return res.status(200).json({ message: 'Login successful', user: { id: user._id, username: user.username, email: user.email } })
	} catch (err) {
		next(err)
	}
})

// 404 for unknown routes under /api
app.use('/api', (req, res) => {
	return res.status(404).json({ message: 'Not found' })
})

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	console.error('Unhandled error:', err)
	if (res.headersSent) return
	res.status(500).json({ message: 'Server error' })
})

process.on('unhandledRejection', (reason) => {
	console.error('Unhandled Rejection:', reason)
})
process.on('uncaughtException', (err) => {
	console.error('Uncaught Exception:', err)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
