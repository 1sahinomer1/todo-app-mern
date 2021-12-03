const router = require('express').Router();
let User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return res.send('bu email kayitli');
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });
    await newUser.save();
    return res.send('Basariyla kaydedildi.');
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await User.findOne({ email: email });
    if (!isUser) {
      return res.send('boyle bir kullanici kayitli degil');
    }
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) {
      return res.send('Bilgiler uyusmuyor');
    }
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
