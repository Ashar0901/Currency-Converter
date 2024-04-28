#! /usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
  USD: 1,
  GBP: 0.80,
  SAR: 3.75,
  AUSD: 1.54,
  EURO: 0.94,
  PKR: 278.40
};

let answer = await inquirer.prompt([
  {
    message: "Please Select From Currency",
    type: "list",
    choices: ["USD","GBP","SAR","AUSD","EURO","PKR"],
    name: "from",
  },

  {
    message: "Please Select to Currency",
    type: "list",
    choices: ["USD","GBP","SAR","AUSD","EURO","PKR"],
    name: "to",
  },

{ message: "Please enter amount",
type: "number",
name: "amount",}

]);

let fromamount =currency[answer.from]
let toamount = currency[answer.to]
let useramount=answer.amount
let baseamount=useramount/fromamount
let convertedamount =baseamount*toamount
console.log(convertedamount);



