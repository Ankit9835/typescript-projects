import newStudent, {Student,sayHello,pers} from "./tutorial";

sayHello('TypeScript');
console.log(person);
console.log(newStudent);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);

// typeguard

type ValueType = string | number | boolean
let value:ValueType
const random = Math.random()
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value:ValueType){
    if(typeof value === 'string'){
        console.log(`value is string`)
        return
    } 
    if(typeof value === 'number'){
        console.log('value is number')
        return
    }
    console.log('value is boolean')
}

checkValue(value)

type Cat = {type:'cat', name:string, meow:() => void}
type Dog = {type:'dog', name:string, bark:() => void}

type Animal = Cat | Dog

function checkAnimal(name: Animal){
    if(name.type === 'dog'){
        console.log(`this is ${name.type}`)
    } else{
        console.log(`this is ${name.type}`)
    }

}

function checkDate(input: Date | string): string{
    if(input instanceof Date){
        return input.getDate.toString()
    }
    return input
}

console.log(checkDate(new Date()))
console.log('2020-05-25')

type Student = {
    name: string;
    study: () => void;
  };
  
  type User = {
    name: string;
    login: () => void;
  };
  
  type Person = Student | User;
  
  const randomPerson = (): Person => {
    return Math.random() > 0.5
      ? { name: 'john', study: () => console.log('Studying') }
      : { name: 'mary', login: () => console.log('Logging in') };
  };
  
  const person = randomPerson();


  function isStudent(person: Person): person is Student {
    // return 'study' in person;
    return (person as Student).study !== undefined;
  }
  
  // Usage
  
  if (isStudent(person)) {
    person.study(); // This is safe because TypeScript knows that 'person' is a Student.
  } else {
    person.login();
  }
