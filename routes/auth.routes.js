const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const router = Router()

router.post(
  '/register',
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({
            errors: errors.array(),
            message: 'Некорректные данные при регистрации!'
          })
      }

      const {email, password} = req.body
      const candidate = await User.findOne({email})

      if (candidate) {
        return res.status(400).json({message: 'Пользователь с таким email уже существует!'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({email, password: hashedPassword})
      await user.save()

      res.status(201).json({message: 'Пользователь успешно создан!'})

    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

router.post(
  '/login',
  check('email', 'Введите email').normalizeEmail().isEmail(),
  check('password', 'Введите пароль').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({
            errors: errors.array(),
            message: 'Некорректные данные при авторизации!'
          })
      }

      const {email, password} = req.body
      const user = await User.findOne({email})

      if (!user) {
        return res.status(400).json({message: 'Пользователь не найден!'})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({message: 'Не верный пароль!'})
      }

      const token = jwt.sign(
        {userId: user.id},
        process.env.JWTSECRET,
        {expiresIn: '1h'}
      )

      res.json({token, userId: user.id})

    } catch (e) {
      return res.status(500).json({message: 'Что то пошло не так ...'})
    }
  })

module.exports = router
