const cardsWrapper = document.getElementById('userCardsWrapper')
const userTally = document.getElementById('userCount')

// variables
// const immutableVariable = "hello I'm immutable"

// let mutableVariable = "hi, I am mutable"
// console.log(mutableVariable)

// functions

// 1. regular function syntax

// function functionName() {
// window.alert("hello team x-ers")
// }

// const statementFunctionName = function() {
  //   alert("this is a statement function")
  // }
  
// 2. arrow function syntax

// const arrowFunction = () => alert("I am arrow function")

const permission = "12"

// one equal means a declaration
// two equal sign means equality
// three means equality in both value and type
  
const arrowFunction = () => {
  if (permission == 12) {
   alert("I am arrow function")
  } 

  console.log("hello world")
}

// function invokation
// arrowFunction

// userTally.addEventListener(
//   "click", arrowFunction
// )

userTally.onclick = arrowFunction

const divTags = document.getElementsByTagName("div")
const card = document.getElementsByClassName('card')

if (divTags)  {
  console.log(card)
}

if (card) {
  console.log(card)
}

// arrays

const myArray = [
  "item 1", 1, true, 
]

const nameArray = [

  "John", "Esther", "Abigail", "Andrew"
]

console.log(myArray.length, nameArray.length)

// objects

const myObject = {
  name: "Abubakar",
  class: "100L",
  department: "Quantity Surveying"
}

console.log(myObject.name)

const objectArray = [
  13, "hello", myObject
]

console.log(objectArray)


async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url) 
    const data = await response.json() 
    console.log(data) 

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    userCount.innerHTML = data.length
    console.log(data[0])

    const users = data.map(
        (each) => {
            
            const avatarAlphabet = each.username.slice(0, 1).toUpperCase()
            const { phone, website, email } = each


                return `
                <div class="card bg-white rounded p-5 sm:w-[80%] sm:mx-auto md:mx-0 md:w-[45%] lg:w-[30%]">
            <section class="image-wrapper flex justify-between items-center">
              <div
                class="user_image bg-pink-200 w-[50px] h-[50px] rounded-full font-bold text-center text-[25px] p-[5px]"
              >
                ${avatarAlphabet}
              </div>
              <button
                class="follow-user cursor-pointer px-6 py-1 font-bold text-[16px] rounded-[30px] text-white bg-black h-[35px]"
              >
                follow
              </button>
            </section>
            <section class="flex flex-col mt-2">
              <div class="name font-bold text-[18px] mt-3">${each.name}</div>
              <div class="user-name text-[14px] mt-1 text-gray-400 font-bold">
                @${each.username}
              </div>
            </section>
            <section class="mt-3 text-[14px]">
              Software engineer at @<span class="underline">${each.company.name}</span> <br />
              ${each.company.catchPhrase}, ${each.company.bs}
            </section>
            <section class="mt-4 text-gray-400 font-bold text-[10px] flex">
              <span
                class="after:bg-black after:w-[5px] after:h-[5px] after:inline-block after:rounded-full after:mx-2 flex items-center"
                >${email}</span
              ><span
                class="after:bg-black after:w-[5px] after:h-[5px] after:inline-block after:rounded-full after:mx-2 flex items-center"
                >${phone}</span
              ><span>${website}</span>
            </section>
          </div>
                `
        }
       )

    cardsWrapper.innerHTML = users.join('')
}

window.addEventListener(
    'DOMContentLoaded', () => {
       getData()
    }
)


