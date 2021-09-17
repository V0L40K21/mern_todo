const {Router} = require('express')
const Todo = require('../models/Todo')

const router = Router()

router.post(
  '/add',
  async (req, res) => {
    try {
      const {text, userId} = req.body

      const todo = new Todo({owner: userId, text})
      await todo.save()

      res.status(201).json(todo)

    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

router.get(
  '/',
  async (req, res) => {
    try {
      const {userId} = req.query || req.body
      const todos = await Todo.find({owner: userId})
      res.json(todos)
    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

router.delete(
  '/delete',
  async (req, res) => {
    try {
      const todo = await Todo.findOneAndDelete({_id: req.body.id});
      res.json(todo)
    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

router.get(
  '/complete',
  async (req, res) => {
    try {
      const {id} = req.query
      const todo = await Todo.findOne({_id: id})
      todo.completed = !todo.completed
      todo.save()
      res.json(todo)
    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

router.get(
  '/important',
  async (req, res) => {
    try {
      const {id} = req.query
      const todo = await Todo.findOne({_id: id})
      todo.important = !todo.important
      todo.save()
      res.json(todo)
    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

module.exports = router
