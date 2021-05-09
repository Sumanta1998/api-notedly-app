const jwt = require('jsonwebtoken');

const token = jwt.sign({ claims: 'read-post' }, 'secret', {
  algorithm: 'HS256',
})

console.log(token)