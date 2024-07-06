const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const ulList = document.querySelector<HTMLUListElement>('.list')

type Task = {
    description:string
    isCompleted:boolean
}

const tasks:Task[] = []

taskForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskDescription = formInput?.value
    console.log(taskDescription)
    if(taskDescription){
        const task:Task = {
            description: taskDescription,
            isCompleted: false
        }
        createTask(task)
        formInput.value = ''
        return
    }
    alert('test')
})

function createTask(task:Task): void{
    tasks.push(task)
    console.log(tasks)
}