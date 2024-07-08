const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const ulList = document.querySelector<HTMLUListElement>('.list')

type Task = {
    description:string
    isCompleted:boolean
}

const tasks:Task[] = loadTask()

tasks.forEach(renderTask)

function loadTask():Task[]{
    const storedTask = localStorage.getItem('tasks')
    return storedTask ? JSON.parse(storedTask) : []
}

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
        renderTask(task)
        updatedStorage()
        formInput.value = ''
        return
    }
    alert('test')
})

function createTask(task:Task): void {
    tasks.push(task)
    console.log(tasks)
}

function renderTask(task:Task): void {
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description
    ulList?.appendChild(taskElement)   
    
}

function updatedStorage():void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}