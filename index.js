'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

const result = MyMath.sum(7,4);
console.log(result);


const compon = new Component();
console.log(compon.render());