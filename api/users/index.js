const express = require('express');
const router = express.Router();

let users = [
    {
      id: 1,
      name: 'alice'
    },
    {
      id: 2,
      name: 'bek'
    },
    {
      id: 3,
      name: 'chris'
    }
  ]

 router.get('/', (req, res) => {
  return res.json(users);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id,10);
  if(!id){
    return res.status(400).json({error: "Incorrect Id"});
  }
  let user = users.filter(user=>user.id === id)[0];
  if(!user){
    return res.status(404).json({error: "Unknown user"});
  }
  return res.json(user);
});

module.exports = router;