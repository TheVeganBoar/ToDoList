export function generateItemModal(){
    let modal = document.createElement('div')
    modal.id = 'item-modal'
    modal.className = ''

    //task div, h3, title, description, due date, priority, done button
    let modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    
    let h3newTask = document.createElement('h3')
    h3newTask.id = 'modal-header'
    h3newTask.textContent = 'NEW TASK'
    modalContent.appendChild(h3newTask)

    let form = document.createElement('form')
    form.id = 'form'

    let title = document.createElement('div')

    let description = document.createElement('div')

    let due_date = document.createElement('input')
    due_date.type = 'date'

    let priority = document.createElement('button')

    let doneButton = document.createElement('input')
    doneButton.type = 'submit'
    doneButton.value = 'SUBMIT'
    doneButton.id = 'item-submit'

    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(due_date)
    form.appendChild(priority)
    form.appendChild(doneButton)
    modalContent.appendChild(form)
}