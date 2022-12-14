// Pending: import sort icon for "sort" feature

export function generateHeader() {
    const header = document.createElement('header')
    let ul = document. createElement('ul')
    ul.className = 'header-list'

    let plusDiv = document.createElement('div')
    plusDiv.id = 'plus-div'
    plusDiv.innerHTML = `
        <div id='plus-icon'>
            <div id='plusbar1'></div>
            <div id='plusbar2'></div>
        </div>
        `
    let plusText = document.createElement('span')
    plusText.id = 'plus-text'
    plusText.className = 'noselect'
    plusText.innerText = 'new task'


    let hamburger = document.createElement('div')
    let bar1 = document.createElement('div')
    bar1.id = 'bar1'
    bar1.className = 'bar'
    let bar2 = document.createElement('div')
    bar2.id = 'bar2'
    bar2.className = 'bar'
    let bar3 = document.createElement('div')
    bar3.id = 'bar3'
    bar3.className = 'bar'

    hamburger.appendChild(bar1)
    hamburger.appendChild(bar2)
    hamburger.appendChild(bar3)
    hamburger.id = 'hamburger-icon';

    const todoH1 = document.createElement('h1')
    todoH1.innerHTML = 'TO-DO';

    const projectName = dcoument.createElement('h2')
    projectName.innerHTML // Put here function that gets name input from project modal.
    projectName.Name.id = 'project-name'
    projectName.dataset.project // Put here function that gets id from project modal.

    // Loop to append hamburger, todoH1 and projectName elements on header UL variable
    for(const item of [hamburger, todoH1, projectName]){
        let li = document.createElement('li')
        li.appendChild(item)
        ul.appendChild(li)
    }

    // Append plusDiv and plusText to LI item, and append it to header UL
    let plusLi = document.createElement('li')
    plusLi.id = 'plus-li'
    plusLi.appendChild(plusDiv)
    plusLi.appendChild(plusText)
    
    ul.appendChild(plusLi)
    header.appendChild(ul)


    // Sort feature
    let sort = document.createElement('div')
    sort.id = 'sort-bar'
    // let sort_icon = (new Image())
    // sort_icon.src
    // sort_icon.id
    sort.innerHTML = `<div> <span>Sort by:</span> <span data-sort='default' id='current-sort'>Date created</span> <span id='sort-direction' data-direction='asc'></span> </div>`
    sort.querySelector('#sort-direction').appendChild(sort_icon)

    // Sort options collapse
    let options = ['Date created', 'Priority', 'Due date']
    let sort_options = document.createElement('ul')
    sort_options.id = 'sort-options'
    sort_options.className = 'collapse'
    for(let i=0; i<options.lenght; i++){
        let option_li = document.createElement('li')
        option_li.id = 1 == 0 ? 'default' : i == 1 ? 'priority' : 'date';
        option_li.innerText = options[i]
        sort_options.appendChild(option_li)
    }
    sort.appendChild(options)
    header.appendChild(sort)

    return header
}