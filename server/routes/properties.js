const Joi = require('joi');
const express = require('express');
const router = express.Router();


const properties = [
    {id:1, owner: 'Alexis', status: 'available', price: 2000, state: 'Rwanda', city: 'kigali', address: 'kicukiro', type: '3 bed room'},
    {id:2, owner: 'Alexis', status: 'available', price: 3000, state: 'Burundi', city: 'Bujumbura', address: 'Kirundo', type: '3 bed room'},
    {id:3, owner: 'Yve', status: 'available', price: 2500, state: 'Uganda', city: 'kampala', address: 'Nalya', type: '3 bed room'},
    {id:4, owner: 'Peter', status: 'available', price: 2000, state: 'Kenya', city: 'nairobi', address: 'abacede', type: '3 bed room'},
    {id:5, owner: 'Evan', status: 'available', price: 4000, state: 'Tanzania', city: 'dar-es-ram', address: 'kigoma', type: '3 bed room'},
    {id:6, owner: 'Claude', status: 'available', price: 2300, state: 'Uganda', city: 'kampala', address: 'old Kampala', type: '3 bed room'},
    {id:7, owner: 'John', status: 'available', price: 2800, state: 'Burundi', city: 'Buhumbura', address: 'abcd', type: '3 bed room'},
    {id:8, owner: 'Yve', status: 'available', price: 4000, state: 'Rwanda', city: 'Kigali', address: 'nyamirambo', type: '3 bed room'},
];


router.get('/', (req, res) => {
    res.send(properties);
  });

router.post('/', (req, res) => {
    const { error } = validateProperty(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
  const property = {
      id: properties.length + 1,         
      owner: req.body.owner,
      status: req.body.status,
      price: req.body.price,
      state: req.body.state,
      city: req.body.city,
      address: req.body.address,
      type: req.body.type
    };
    
    properties.push(property);
    res.status(201).send(property);
  });
  
  router.put('/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({status: 404, message:'The property with the given ID was not found.'});
    const { error } = validateProperty(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    property.owner = req.body.owner;
    property.status = req.body.status;
    property.price = req.body.price;
    property.state = req.body.state;
    property.city = req.body.city;
    property.address = req.body.address;
    property.type = req.body.type;
    res.send(property);
  });
  
  // router.patch('/:id', (req, res) => {
  //   const property = properties.find(p => p.id === parseInt(req.params.id));
  //   if (!property) return res.status(404).send('The property with the given ID was not found.');
  //   const { error } = validateProperty(req.body); 
  //   if (error) return res.status(400).send(error.details[0].message);    
  //   res.send(property);
  // });

  router.delete('/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({status: 404, message:'The property with the given ID was not found.'});
  
    const index = properties.indexOf(property);
    properties.splice(index, 1);  
    res.send(property);
  });
  
  router.get('/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({status: 404, message:'The property with the given ID was not found.'});
    res.status(404).send(property);
  });
  
  function validateProperty(property) {
    const schema = {
      owner: Joi.string().min(3).required(),
      status: Joi.string().min(3).required(),
      price: Joi.string().min(3).required(),
      state: Joi.string().min(3).required(),
      city: Joi.string().min(3).required(),
      address: Joi.string().min(3).required(),
      type: Joi.string().min(3).required()
    };
  
    return Joi.validate(property, schema);
  }

  module.exports = router;