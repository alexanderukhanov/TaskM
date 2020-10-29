const EMPTY_STRING = '';
const TEXT_DEL = `del`;
const TEXT_LI = `LI`;
const TEXT_CHECKED = `checked`;
const LENGTH_OF_STRING = 3;
const TEXT_ADD = `Add`;
const ERROR_TEXT = `Enter minimum 3 symbols`;

let wrapper = document.querySelector(`.wrapper`);
let add = document.querySelector(`.add`);
let taskText = document.querySelector(`.taskText`);
let list = document.querySelector(`#myList`);
let p = document.querySelector(`#p`);

wrapper.addEventListener(`click`, function (event) {
    if (event.target.value == TEXT_ADD) {

        if (taskText.value.trim().length < LENGTH_OF_STRING) {
            add.disabled = true;
            p.innerHTML = ERROR_TEXT;
            p.style = `color:red`;
            taskText.style = `box-shadow: inset 0px 0px 0px 3px red`;
            return;
        }
        let li = document.createElement('li');
        li.innerHTML = taskText.value;
        let button = document.createElement(`button`);
        button.className = TEXT_DEL;
        li.appendChild(button);
        list.appendChild(li);
        taskText.value = EMPTY_STRING;
    }
    else if (event.target.className == TEXT_DEL) {
        event.target.parentNode.remove();
    }

    else if (event.target.tagName == TEXT_LI) {
        if (event.target.className == TEXT_CHECKED) {
            event.target.style = EMPTY_STRING;
            event.target.className = EMPTY_STRING;
            return;
        }
        event.target.style = `text-decoration: line-through; background: slategray`;
        event.target.className = TEXT_CHECKED;
    }
});

taskText.addEventListener(`input`, function () {
    add.disabled = false;
    p.innerHTML = EMPTY_STRING;
    p.style = EMPTY_STRING;
    taskText.style = EMPTY_STRING;
});

