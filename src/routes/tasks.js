import express from 'express'
import Task from '../models/Task.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
})

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id)
  res.json(task)
})

router.post('/', async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.send('Task saved.')
})

router.put('/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body)
  res.send('Task updated.')
})

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id)
  res.send('Task removed.')
})

export default router
