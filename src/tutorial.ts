console.log('typescript tutorial')
//interface
interface SomeValue {
    name: string,
    id: number
}

let someObj: SomeValue = {
    name: 'John',
    id: 1
}

console.log(someObj)

// union type

let randomNumber: string | number = 23
randomNumber = 'test'

// literal types
let literalType: 'success' | 'error' | 'fail' = 'success'
literalType = 'error'

let books: (string | undefined)[] = ['2002', 'test', 'seller']

let foundBook: string | undefined;

for(let book of books){
    if(book === '2001'){
        foundBook = book
        break
    }
}

console.log(foundBook)
// array

let array: number[] = [23,56,84]

let allValue: (string | number | boolean)[] = [34, 'test', true]

let car: {brand: string, year: number} = {brand: 'ford', year: 2015}


// objects

let book: {title: string, cost: number} = {title: 'new book', cost: 40} 
let pen: {title: string, cost: number} = {title: 'pen', cost: 10}
let notebook: {title: string} = {title: 'notebook'}

let allItems: {title: string, cost?: number}[] = [book,pen,notebook]


// function

function calculateDisount(price: number): number {
    return price * 0.9
}

const value = calculateDisount(9)
console.log(value)


let names: string[] = ['susan', 'anna', 'tele', 'max']

function isNameInList(name: string): boolean {
    return names.includes(name)
}

let nameToCheck = 'susan'

if(isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is in the list`)
} else {
    console.log(`${nameToCheck} is not in the list`)
}

function discountPrice(price:number, discount?: number){
    return price - (discount || 0)
}

function sum(message:string, ...number:number[]): string{
    let total = number.reduce((prev,current) => {
        return prev + current
    },0)
    return `${message}${total}`
}

const test = sum('the sum is ', 2,4,6)
console.log(test)

function processInput(input: string | number){
    if(typeof input === 'number'){
        console.log(input * 2)
    } else {
        console.log(input.toLocaleLowerCase())
    }
}

processInput('test')
processInput(10)

// objects

function createEmployee({id}: {id:number}): {
    id: number,
    isActive: boolean
} {
    return {
        id,
        isActive: id % 2 == 0
    }
}

function createStudent(student:{id:number,name:string}):void {
    console.log(`Welcome to the course ${student.name}`)
}