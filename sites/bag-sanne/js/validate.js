const phone = document.querySelector('#phone');
const name = document.querySelector('#name');
const subBtn = document.querySelector('#sub-btn');


const validate = ($node, param = 'information', callback = null) => {
    return $node.value.trim() === '' ? $node.setCustomValidity(`Paste ${param}`) : callback;
}

const checkLetters = ($node, callback) => {
    let param = /^[A-Za-z]+$/;
    return $node.value.trim().match(param) ? callback : $node.setCustomValidity('Incorrect name');
}

const checkNameLength = ($node) => {
    return $node.value.trim().length <= 30 ? $node.setCustomValidity('') : $node.setCustomValidity('Max symbols: 30');
}


const validateName = () => {
    return validate(name, 'name', checkLetters(name, checkNameLength(name)));
}

const validatePhone = () => {
    return validate(phone, 'phone', phone.setCustomValidity(''));
}


subBtn.addEventListener('click', () => {
    validateName();
    validatePhone();
});
