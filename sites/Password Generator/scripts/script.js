let range = document.getElementById('range')
let rangePoints = document.querySelector('.points')
let checkboxesNodes = document.querySelectorAll('.check__input')
let refresh = document.querySelector('.refresh')
let copy = document.querySelector('.copy')
let pass = document.getElementById('password')

// constants
const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];
const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['!', '"', '#', '$', '%', '&', '\/', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
    '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

function getCurrentRange() {
    return Number(range.value)
}

function fillRangePoints() {
    rangePoints.textContent = getCurrentRange()
}

function selectedCheckboxes() {
    let types = []
    for (let i = 0; i < checkboxesNodes.length; i++) {
        if (checkboxesNodes[i].checked) {
            types.push(checkboxesNodes[i].dataset.type)
        }
    }
    return types
}

function encodeByNums(arrayAllLetters, arrayNums) {
    let pass = ''
    for (let i = 0; i < arrayNums.length; i++) {
        pass += arrayAllLetters[arrayNums[i]]
    }
    return pass
}

function passwordCreator(array, rangeLength) {
    let stack = []
    for (let i = 0; i < rangeLength; i++) {
        stack.push(Math.floor(Math.random() * array.length))
    }
    return encodeByNums(array, stack)
}

function generatePassword() {
    let selected = selectedCheckboxes()
    let passwordArray = [...alphabetLower]
    if (selected.length) {
        if (selected.includes('symbols')) {
            passwordArray.push(...symbols)
        }
        if (selected.includes('numbers')) {
            passwordArray.push(...numbers)
        }
        if (selected.includes('register')) {
            passwordArray.push(...alphabetUpper)
        }
    }
    return passwordCreator(passwordArray, getCurrentRange())
}

function fillPasswordInput() {
    pass.value = generatePassword()
}

// Listeners
range.addEventListener('change', () => {
    fillRangePoints()
    init()
})

refresh.addEventListener('click', () => {
    fillPasswordInput()
})

copy.addEventListener('click', () => {
    let copyText = document.querySelector(".password__input");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    if (!copy.classList.contains('active')) {
        copy.classList.add('active')
        setInterval(() => {
            copy.classList.remove('active')
        }, 2000)
    }
})

function init() {
    fillRangePoints()
    fillPasswordInput()
}

init()
