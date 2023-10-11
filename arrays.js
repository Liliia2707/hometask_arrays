// решить три задачи с codewars
//  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// Write a function to split a string and convert it into an array of words.

const string = 'Liliia Pavlova'
function stringToArray(string) {
  const wordsArray = string.split(" ")
  return wordsArray
}
console.log(stringToArray(string))
// https://www.codewars.com/kata/55b42574ff091733d900002f

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
const friends = ["Ryan", "Kieran", "Jason", "Yous"]
function friend(friends) {
  return friends.filter(el => el.length === 4)
}
console.log(friend(friends))

// Задача на filter
// 1. Отфильтровать массив только с уникальными хначения используя filter и indexOf()
const array = [1, 2, 2, 3, 4, 4, 5, 6, 6]
const uniqueValues = array.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
console.log(uniqueValues)

// 2. Отфильтровать продукты дешевле 15
const products = [
  { name: 'Apple', price: 15 },
  { name: 'Banana', price: 8 },
  { name: 'Cherry', price: 3 },
  { name: 'Grape', price: 22 },
  { name: 'Orange', price: 12 },
]

const cheapProducts = products.filter(el => el.price < 15)
console.log(cheapProducts)

// 3. Найти объект с автором В
const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
  { title: 'Book 4', author: 'Author C' },
]

const authorB = books.filter(el => el.author === 'Author B')
console.log(authorB)
// задачи sort

// 4. отсортировать по id
const arr2 = [
  { id: 9, title: 'велосипед', price: 45000 },
  { id: 14, title: 'самокат', price: 15000 },
  { id: 7, title: 'сноуборд', price: 20000 },
  { id: 1, title: 'лыжи', price: 22000 },
  { id: 3, title: 'ролики', price: 18000 },
  { id: 13, title: 'коньки', price: 17000 },
  { id: 4, title: 'скейтборд', price: 19000 },
  { id: 15, title: 'парашют', price: 50000 },
  { id: 8, title: 'гироборд', price: 25000 },
  { id: 6, title: 'сёрфборд', price: 27000 },
  { id: 10, title: 'подводные лыжи', price: 55000 },
  { id: 12, title: 'мотоцикл', price: 65000 },
  { id: 11, title: 'санки', price: 5000 },
  { id: 5, title: 'батут', price: 30000 },
  { id: 2, title: 'катамаран', price: 32000 },
]

const sortById = arr2.sort((a, b) => a.id - b.id)
console.log(sortById)

// 5. отсортировать объекты по алфавиту
const people = [
  { name: 'Frank', age: 35 },
  { name: 'Eva', age: 22 },
  { name: 'Hannah', age: 31 },
  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'Jack', age: 27 },
  { name: 'Bob', age: 20 },
  { name: 'David', age: 28 },
  { name: 'Grace', age: 29 },
  { name: 'Isaac', age: 23 },
]

const sortByName = people.sort((a, b) => a.name.localeCompare(b.name))
console.log(sortByName)

// 6. Отсортиировать по возрасту
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 28 },
  { name: 'Eva', age: 22 },
  { name: 'Frank', age: 35 },
  { name: 'Grace', age: 29 },
  { name: 'Hannah', age: 31 },
  { name: 'Isaac', age: 23 },
  { name: 'Jack', age: 27 },
]

const sortByAge = people.sort((a, b) => a.age - b.age)
console.log(sortByAge)


// задачи reduce
// 7. найти сумму четных!! чисел массива.
const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]

const evenNumbers = numbers22.filter(el => el % 2 === 0)
const sumOfEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sumOfEvenNumbers)

// 8.  Используя метод reduce найти наибольшее число массива.
const numbers23 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]

const maxNumber = numbers23.reduce((maxValue, currentValue) => {
  return Math.max(maxValue, currentValue)
}, numbers23[0])
console.log(maxNumber)


// 9.reduce найти объект товара с самой высокой ценой.
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]

const highestPrice = arr2.reduce((maxNumber, currentValue) => {
  return Math.max(maxNumber, currentValue.price)
}, arr2[0].price)
console.log(highestPrice)

// 10. Найти среднюю оценку marks у товара
const arr2 = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]

const newArr2 = arr2.map(el => el.marks.reduce((acc, currentValue) => {
  return acc + currentValue
}, 0) / el.marks.length)

console.log(newArr2)





