'use strict';
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

const result = MyMath.sum(7,4);
console.log(result);


const compon = new Component();
console.log(compon.render());

const fs = require('fs/promises');

 fs.readFile('./text.txt','utf-8').then((content)=>{
   const newText = '\n lorem';
   fs.writeFile('./newText.txt', content+newText);
  });

 