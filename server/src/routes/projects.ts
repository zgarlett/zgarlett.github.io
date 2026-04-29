import { Router, Request, Response } from 'express'
import projects from '../data/projects.json'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.json(projects)
})

router.get('/:id', (req: Request, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id)
  if (!project) {
    res.status(404).json({ error: 'Project not found' })
    return
  }
  res.json(project)
})

export default router
