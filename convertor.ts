//he TypeScript console app is used to convert currencies: the users enter a certain amount
// of money in one currency and set the currency they want to check the monetary value of.

//'import("inquirer")'
import inquirer from "inquirer"
let conversion = {
    "pkr": {
        "pkr":1,
        "dollar":0.0035,
        "riyal": 74.36
    },
    
    "dollar":{
        "dollar":1,
        "pkr" : 278.97,
        "riyal":3.75
    },
    "riyal":{
        "riyal":1,
        "dollar":0.27,
        "pkr":74.36
    }
    }
    
    const answer:{
        from: "pkr" | "dollar" | "riyal",
        to: "pkr" | "dollar" | "riyal",
        amount: number
    }
    
    = await inquirer.prompt([
        {
            type:"list",
            name:"from",
            choices:["pkr","dollar","riyal"],
            message:'select your currency'
        },
        {
            type:"list",
            name:"to",
            choices:["pkr","dollar","riyal"],
            message:'select your conversion currency'
        },
        {
            type:"number",
            name:"amount",
            message:'Enter your amount:',
        }
    ])
   
    let {amount,to,from}=answer
    if(from && to && amount){
        let result = conversion[from][to]*amount;
        console.log(`your converted amount from ${from} to ${to} is ${result}`)
    }
    else {console.log("invalid input")}