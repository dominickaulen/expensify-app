
//
// Object destructuring
//


// const person = {
//     name : "Dominic",
//     age : 18,
//     location : {
//         city : "Lantershofen",
//         temperature : "19"
//     }
// }

// const {age, name = "Dominic"} = person;
// const {city, temperature} = person.location

// console.log(`${name} is ${age}. I live in ${city} and it's currently ${temperature} degrees celcius`)

// const book = {
//     title : "Ego Is The Enemy",
//     author : "Ryan Holiday",
//     publisher : {
//         name : "Penguin"
//     }
// }

// const {name : publisherName = "self-published"} = book.publisher

// console.log(publisherName) //default self-published

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19128']

// const [, city, state] = address

// console.log(`You are in ${city} ${state}`)

//challenge 
//grab the first and third item using array destructuring


const item = ['Coffee (hot)', '$2.0', '$2.5', '$2.75']
const [product, ,mediumPrize]  = item

console.log(`A medium ${product} costs ${mediumPrize} `)