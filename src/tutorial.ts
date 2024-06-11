console.log('typescript tutorial')

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

let array: number[] = [23,56,84]

let allValue: (string | number | boolean)[] = [34, 'test', true]

let car: {brand: string, year: number} = {brand: 'ford', year: 2015}


let book: {title: string, cost: number} = {title: 'new book', cost: 40} 
let pen: {title: string, cost: number} = {title: 'pen', cost: 10}
let notebook: {title: string} = {title: 'notebook'}

let allItems: {title: string, cost?: number}[] = [book,pen,notebook]