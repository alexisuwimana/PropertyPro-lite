const Joi = require('joi');
const express = require('express');
const router = express.Router();


const users = [
    {id:1, email: 'alexisuwimana@gmail.com', first_name: 'Alexis', last_name: 'UWIMANA', password: 'abc123', phoneNumber: '0788687667', address: 'kicukiro', userType: 'is_admin'},
    {id:2, email: 'alexisuwimana@yahoo.fr', first_name: 'Alexis', last_name: 'UWIMANA', password: '123abc', phoneNumber: '0733301006', address: 'gikondo', userType: 'is_admin'},
    {id:3, email: 'alexisuwimana@hotmail.com', first_name: 'Alexis', last_name: 'UWIMANA', password: '1a2b3c', phoneNumber: '0722666600', address: 'nyamirambo', userType: 'is_admin'},
    {id:4, email: 'alexisuwimana@cutl.org', first_name: 'Alexis', last_name: 'UWIMANA', password: 'a1b2c3', phoneNumber: '0788687667', address: 'kicukiro', userType: 'is_admin'},
];  
router.get('/', (req, res) => {
    res.send(users);
  });

router.post('/', (req, res) => {
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
  const user = {
      id: users.length + 1,         
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name, 
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      userType: req.body.userType,
    };
    
    users.push(user);
    res.send(user);
  });
  
//   router.put('/:id', (req, res) => {
//     const user = users.find(p => p.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('The user with the given ID was not found.');
//     const { error } = validateUser(req.body); 
//     if (error) return res.status(400).send(error.details[0].message);
//     user.owner = req.body.owner;
//     user.status = req.body.status;
//     user.price = req.body.price;
//     user.state = req.body.state;
//     user.city = req.body.city;
//     user.address = req.body.address;
//     user.type = req.body.type;
  
//     res.send(user);
//   });
  
//   router.delete('/:id', (req, res) => {
//     const user = users.find(p => p.id === parseInt(req.params.id));
//     if (!user) return res.status(404).send('The user with the given ID was not found.');
  
//     const index = users.indexOf(user);
//     users.splice(index, 1);
  
//     res.send(user);
//   });
  
  router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
  });
  
  function validateUser(user) {
    const schema = {
      email: Joi.string().email().required(),
      first_name: Joi.string().min(3).required(),
      last_name: Joi.string().min(3).required(),
      password: Joi.string().min(3).required(),
      phoneNumber: Joi.string().min(10).required(),
      address: Joi.string().min(3).required(),
      userType: Joi.string().min(3).required()
    };
  
    return Joi.validate(user, schema);
  }

  module.exports = router; 