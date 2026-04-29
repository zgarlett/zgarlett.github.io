import express from 'express'
import cors from 'cors'
import projectsRouter from './routes/projects'

const app = express()
const PORT = 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
