//npm is node package manager
// npm -global command
// npm --v     verison command


// nmp init -y             this command is for creating package.json file
// npm i <package name>    this command is for installing a new package

const _ = require('lodash')

const first = [1,[8,[0,[9]]]]

const second = _.flattenDeep(first)

console.log(second)