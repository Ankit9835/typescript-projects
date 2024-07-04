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

function processData(input: string | number, config: {reverse:boolean} = {reverse: false}): string | number {
    if(typeof input === 'number'){
        return input * input
    } else {
        return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase()
    }
}

console.log(processData(10))
console.log(processData('Hello'))
console.log(processData('Hello', {reverse:true}))



// type alias

type User = {
    id: number; name: string; isActive: boolean
}

const john: User = {
    id: 1,
    name: 'test',
    isActive: true
}

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
  }

  type Theme = 'red' | 'black'

  let color: Theme = 'black'

  function colors(t: Theme): string {
    return `${t} is a string`
  }

  colors('red')

  // challenge

//   type Employee = {
//     id:number,
//     name: string,
//     department: string
//   }

  type Manager = {
    id:number,
    name: string,
    employees: Employee[]
  }

  type Staff = Employee | Manager

function printStaffDetails(staff: Staff): void{
    if('employees' in staff){
        console.log(`${staff.name} is a manager of ${staff.employees.length} employees.`)
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department} department.`)
    }
}


const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

console.log(printStaffDetails(alice))
console.log(printStaffDetails(bob))


// intersection type

type Book = {
    id:number,
    name:string,
    price:number
}

const discountedBook:Book & {discount:number} = {
    id:1,
    name:'bob',
    price:23,
    discount:0.2
}


// computed properties

const propName = 'test'

type Animal = {
    [propName]:string
}

const animal: Animal = {
    [propName]: 'tiger'
} 


// interface

interface Profile {
    id:number,
    name:string,
    imageUrl:string
    isActive?:boolean
    printAuthor():void,
    printTitle(message:string):string
    printSomething:(message:string)=>string
}

const profile:Profile = {
    id:1,
    name:'Ankit',
    imageUrl:'pixels.com',
    printAuthor(){
        console.log('print author')
    },
    printTitle(message){
        return `${this.name} ${message}`
    },
    // first choice
    // printSomething:function(message){
    //     return `${this.name} ${message}`
    // }
    // second choice
    printSomething:(message)=>{
        return `${message}`
    }
}

console.log(profile.printTitle('is a good boy'))


interface Computer {
    readonly id:number;
    brand:string;
    ram:number;
    updgradeRam(amount:number):number;
    storage?:number
}


const laptop: Computer = {
    id:1,
    brand: 'hp',
    ram: 8,
    updgradeRam(amount:number){
        this.ram += amount
        return this.ram
    }
}

laptop.storage = 250

console.log('laptop',laptop)
console.log(laptop.updgradeRam(25))

// interface merging,extend and typeguard

interface Person {
    name: string,
    getDetails():string
}

interface DogOwner {
    dogName: string,
    getDogDetails():string
}

interface Person {
    age:number
}

const person:Person = {
    name:'ankit',
    getDetails(){
        return `${this.name}`
    },
    age:30
}

interface Employee extends Person {
    employeeId:string
}

const employee: Employee = {
    name: 'ankit',
    getDetails(){
        return `${this.name}`
    },
    age:28,
    employeeId: 'fde23423'
}

interface Managers extends Person, Employee {
    managePeople():void
}

// tuple

let persons: readonly [string,number] = ['test', 1];
let userName: [string,number?] = ['john',2]
userName[0] = 'test'
userName.push('some random value')
console.log('userName', userName)

function getPerson(): [string,number]{
    return ['john', 35]
}

let randomPerson = getPerson()
console.log(randomPerson[0])
console.log(randomPerson[1])

enum ServerResponseStatus {
    Success = 200,
    Error = 'Error',
}

interface ServerResponse {
    result: ServerResponseStatus,
    data: string[]
}

function getServerResponse(): ServerResponse{
    return {
        result: ServerResponseStatus.Error,
        data: ['test', 'ring']
    }
}

let testServer: ServerResponse = getServerResponse()
console.log('test server',testServer)

enum UserRole {
    Admin = 'Admin',
    Manager = 'Manager',
    Employee = 'Employee'
}

type NewUser = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string,string]
}

function createUsers(user: NewUser): NewUser{
    return user
}

console.log(createUsers({id:1,name:'ankit',role:UserRole.Admin,contact:['IN', '0612']}))

// type assertion

let someValue:any = 'this is a string'

let stringLength:number = (someValue as String).length

type Bird = {
    name:string
}

type Animals = {
    breed:string
}

let birdString = '{"name":"sparrow"}'
let animalString = '{"breed":"lion"}'

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let animalObject = JSON.parse(animalString);

let bird = birdObject as Bird
let animals = animalObject as Animals

console.log('bird', bird.name)
console.log('animal', animals.breed)

// unknown

let unknownValue:unknown

unknownValue = 'test'
unknownValue = ['test', 1, true]
unknownValue = 42.234423

if(typeof unknownValue === 'number'){
    console.log(unknownValue.toFixed())
}

// never

type DifferentColor = 'light' | 'dark'

function checkDifferentColor(color: DifferentColor){
    if(color === 'light'){
        console.log('light theme')
        return
    } if(color === 'dark'){
        console.log('dark theme')
        return
    }
    color // never type is use here
}

enum Color {
    Red,
    Blue
}

function getColorName(color: Color){
    switch(color){
        case Color.Red:
            return 'Red'
        case Color.Blue:
            return 'Blue'
        default:
            let unexpectedColor:never = color
            throw new Error(`Unexpected color value: ${unexpectedColor}`);
    }
}

console.log(getColorName(Color.Red))
console.log(getColorName(Color.Blue))

// modules 

let name = 'shakeAdnBake';

const susan = 'susan';

export let something = 'something';

export function sayHello(name:string):void{
    console.log(`Hello ${name}`)
}

export let pers= 'mike'

export type Student = {
    name:string,
    age:number
}

const newStudent: Student = {
    name:'Ankit',
    age:25
}

export default newStudent

// generics

function genericsFunction<T>(args:T):T{
    return args
}

const someStringValue = genericsFunction<string>('test')
const numberValue = genericsFunction<number>(3)

interface Genetics<T>{
    value: T,
    getValue: () => T
}

const genericSting: Genetics<string> = {
    value: 'hello world',
    getValue(){
        return 'test'
    }
}

async function someFunc(): Promise<number>{
    return 1234
}

function createArray<T>(length:number, values:T): Array<T>{
    let result: T[] = []
    result = Array(length).fill(value)
    return result
}

let arrayString = createArray<string>(10, 'test')

function pair<T,U>(param1:T,params2:U): [T,U]{
    return [param1, params2]
}

const newPair = pair<number,string>(2,'test')

function processValue<T extends string | number>(value: T):T{
    console.log(value)
    return value
}

processValue('hello')
processValue(25)


type Car = {
    brand: string;
    model: string;
  };
  
  const cars: Car = {
    brand: 'ford',
    model: 'mustang',
  };
  
  type Product = {
    name: string;
    price: number;
  };
  
  const product: Product = {
    name: 'shoes',
    price: 1.99,
  };
  
  type Students = {
    name: string;
    age: number;
  };
  
  const student: Student = {
    name: 'peter',
    age: 20,
  };

function printName<T extends {name: string}>(value: T):void{
    console.log(value.name)
    //return value
}

// const newName = printName(product)

// const url = 'https://www.course-api.com/react-tours-project';

// type Tour = {
//     id: string;
//     name: string;
//     info: string;
//     image: string;
//     price: string;
//     // Add more fields as necessary.
//   };

// async function fetchData(url: string):Promise<Tour[]>{
//     try {
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const data: Tour[] = await response.json();
//         return data;
//     } catch (error) {
//         const errMsg = error instanceof Error ? error.message : 'there was an error'
//         console.log(errMsg)
//         return []
//     }
// }

// const tours = await fetchData(url)
// tours.map((tour) => {
//     console.log(tour.name)
// })

// zod library

import { z } from 'zod';
const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
    somethign: z.string(),
  });

  type Tour = z.infer<typeof tourSchema>

  async function fetchData(url:string): Promise<Tour[]>{
    try {
        const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData:Tour[] = await response.json()
    const result = tourSchema.array().safeParse(rawData)
    if (!result.success) {
        throw new Error(`Invalid data: ${result.error}`);
      }
      return result.data;
    } catch (error) {
        const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errMsg);

    // throw error;
    return [];
    }
  }

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});

// classes

// class Book {
//     public readonly title: string;
//     public author: string;
//     private checkedOut: boolean = false;
//     constructor(title: string, author: string) {
//       this.title = title;
//       this.author = author;
//     }
//     public checkOut() {
//       this.checkedOut = this.toggleCheckedOutStatus();
//     }
//     public isCheckedOut() {
//       return this.checkedOut;
//     }
//     private toggleCheckedOutStatus() {
//       return !this.checkedOut;
//     }
//   }
  
//   const deepWork = new Book('Deep Work', 'Cal Newport');
//   deepWork.checkOut();
//   console.log(deepWork.isCheckedOut()); // true
  // deepWork.toggleCheckedOutStatus(); // Error: Property 'toggleCheckedOutStatus' is private and only accessible within class 'Book'.

//   class Books {
//     private checkedOut: boolean = false;
//     constructor(public readonly title: string, public author: string) {}
//   }

//   class Book {
//     private checkedOut: boolean = false;
//     constructor(public readonly title: string, public author: string) {}
//     get info() {
//       return `${this.title} by ${this.author}`;
//     }
  
//     private set checkOut(checkedOut: boolean) {
//       this.checkedOut = checkedOut;
//     }
//     get checkOut() {
//       return this.checkedOut;
//     }
//     public get someInfo() {
//       this.checkOut = true;
//       return `${this.title} by ${this.author}`;
//     }
//   }
  
//   const deepWork = new Book('deep work', 'cal newport');
//   console.log(deepWork.info);
//   // deepWork.checkOut = true;
//   console.log(deepWork.someInfo);
//   console.log(deepWork.checkOut);


// interface IPerson {
//     name: string;
//     age: number;
//     greet(): void;
//   }
  
//   class Person implements IPerson {
//     constructor(public name: string, public age: number) {}
  
//     greet() {
//       console.log(
//         `Hello, my name is ${this.name} and I'm ${this.age} years old.`
//       );
//     }
//   }
  
//   const hipster = new Person('shakeAndBake', 100);
//   hipster.greet();

