let board = document.querySelector('.board'),
    template = document.querySelector('template').content.querySelector('div');

for (let i = 0; i < 8; i++) {
    let elem = template.cloneNode(true);
    elem.classList.add('row-' + (i + 1));
    board.appendChild(elem);
}