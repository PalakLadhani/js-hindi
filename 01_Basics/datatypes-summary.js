// Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol.BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);


//const bigNumber=3456566668698896966n


//Reference (non-primitive)

//Array,Objects , Function


const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Palak",
    age:21,
}


const myFunction=function(){
    console.log("heloo world");

}

console.log(typeof anotherId);

//******************************************** *

//stack(primitive),Heap(Non-primitive)

let myYoutubename="palakladhanki2619.com"

let anotherName=myYoutubename
anotherName="Shiva@2619"

console.log(myYoutubename);
console.log(anotherName);

let userOne={
    email:"user@gamil.com",
    upi:"shiva@ybl"
}

let userTwo= userOne

userTwo.email="palak@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);