import { IUser } from '../models/user';
import { VerifiedUser } from '../types/types';

const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const maxAge = 60 * 60 * 24;
const createToken = (id) => {
  return jwt.sign({ id }, 'secretKeyword', { expiresIn: maxAge });
};

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body as IUser;

  try {
    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });
    await newUser.save();
    return res
      .status(201)
      .json({
        message:
          'User registration is successful.You are redirected to the login page.',
      });
  } catch (err) {
    return res.status(500).json({ message: 'User could not be registered.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user: VerifiedUser = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json('User does not exist');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong something!' });
    }
    const token = createToken(User._id);
    return res.status(200).json({
      message: 'Login successful!',
      token,
      user,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
