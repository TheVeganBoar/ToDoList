export function generateItemModal(){
    let modal = document.createElement('div')
    modal.id = 'item-modal'
    modal.className = 'hidden'

    let modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    
    let h3newTask = document.createElement('h3')
    h3newTask.id = 'modal-header'
    h3newTask.textContent = 'NEW TASK'
    modalContent.appendChild(h3newTask)

    let itemModalForm = document.createElement('form')
    itemModalForm.id = 'itemModal-form'

    let title = document.createElement('input')
    title.required = true
    title.placeholder = 'Title'
    title.maxLength = 25
    title.className = 'formItem title'

    let description = document.createElement('textarea')
    description.placeholder = 'Description'
    description.className = 'formItem description'

    let due_date = document.createElement('input')
    due_date.type = 'date'
    due_date.name = 'duedate'
    due_date.className = 'formItem duedate'

    let dueDateLabel = docuemnt.createElement('label')
    dueDateLabel.for = 'duedate'

    let priority = document.createElement('select')
    priority.className = 'hidden-priority'
    // Uses loop to create three priority "boxes" and attaches them to select element
    for (let i=0 ; i<=2 ; i++) {
        let box = document.createElement('option')
        box.value = i
        priority.appendChild(box)
    }

    priority.style.display = 'none'

    // Creates option-div and adds classes to style options
    let priorityButtons = document.createElement('div')
    priorityButtons.className = `formItem select-priority`
    priorityButtons.innerHTML = `
        <label id="priority-label"> Priority </label>
        <span class="priority-option" id="priority-1"></span>
        <span class="priority-option darken" id="priority-2"></span>
        <span class="priority-option darken" id="priority-3"></span>
        `

    let createButton = document.createElement('input')
    createButton.type = 'submit'
    createButton.value = 'CREATE'
    createButton.className = 'formItem submit'
    createButton.id = 'submit'

    itemModalForm.appendChild(title)
    itemModalForm.appendChild(description)
    itemModalForm.appendChild(dueDateLabel)
    itemModalForm.appendChild(due_date)
    itemModalForm.appendChild(priority)
    itemModalForm.appendChild(priorityButtons)
    itemModalForm.appendChild(doneButton)

    modalContent.appendChild(itemModalForm)
    modal.appendChild(modalContent)

    
}