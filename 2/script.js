// Task 2
// Необхідно реалізувати наступний функціонал як на відео taskList, а саме:
// — при кліку кнопку Додати додававляти нове завдання в список завдань
// — якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про попередження: “Пусте поле не можна добавити”
// — в списку завдань при кліку на чекбокс завдання має видалятися зі списку
// — якщо залишилося 1не завдання то його не можна видалити
// — якщо захочемо видалити то має вивести повідомлення у модальному вікні про попередження: “Останній таск зі списку Ви не можете видалити”

function addNewTodo() {
    const box = document.querySelector(`.do_task`)
    const someText = document.querySelector(`#text`).value;

    if (!someText.trim().length) {
        document.querySelector(`.popup`).classList.add(`open`)
        document.querySelector(`.popup__text`).textContent = `Пусте поле не можна добавити.`

    } else {
        if (document.querySelectorAll(`.task`).length <= 13) {
            box.appendChild(createNewToDo(someText, (Math.random() * 1000).toFixed().toString()))
            document.querySelector(`#text`).value = ''
        } else {
            document.querySelector(`.popup`).classList.add(`open`)
            document.querySelector(`.popup__text`).textContent = `Ви не можете додати більше 14 тасків.`
        }
    }
}

function removeElement(el) {
    if (document.querySelectorAll(`.task`).length > 1) {
        let toDone = el.target.parentElement.id
        document.getElementById(toDone).remove()
    } else {
        document.querySelector(`.popup`).classList.add(`open`)
        document.querySelector(`.popup__text`).textContent = `Останній таск зі списку Ви не можете видалити.`
    }
}

function closePopup() {
    document.querySelector(`.popup`).classList.remove(`open`)
}

function createNewToDo(text = `default name`, id) {
    let parentDiv = document.createElement(`div`)
    parentDiv.className = 'task'
    parentDiv.setAttribute(`id`, id)
    parentDiv.setAttribute(`onclick`, 'removeElement(event)')
    let childInput = document.createElement(`input`)
    childInput.className = 'custom-checkbox'
    childInput.setAttribute(`type`, `checkbox`)

    childInput.setAttribute(`name`, `task`)
    let childLabel = document.createElement(`label`)
    childLabel.setAttribute(`for`, id)
    childLabel.setAttribute(`class`, `label`)

    childLabel.textContent = text;
    parentDiv.appendChild(childInput)
    parentDiv.appendChild(childLabel)
    return parentDiv;
}


