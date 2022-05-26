// const validator = require('validator');

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com'),
// );

// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com'),
// );

console.log('Привет из Node.js');

const Joi = require('joi');
const shortid = require('shortid');

// const passwordShema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordShema.validate('5yt912q'));

// console.log(shortid.generate(5));

const express = require('express');
