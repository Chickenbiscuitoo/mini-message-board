var express = require('express');
var router = express.Router();

const messages = [
  {
    title: 'dunno',
    text: "I forgor",
    username: "Gut",
    added: new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString()
  },
  {
    title: 'dunno',
    text: "Jou!",
    user: "Gon",
    added: new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString()
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', function(req, res) {
  res.render('form')
})

router.post('/new', (req, res) => {
  const { title, text, username } = req.body

  const newMessage = {
    title,
    text,
    username,
    added: new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString()
  };
  
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
