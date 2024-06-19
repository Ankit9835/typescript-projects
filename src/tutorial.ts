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