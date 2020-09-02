'use strict';

(() => {
    let userCategory = 'character';
    let defaultPage = 1;
    let name = '';
    let status = '';
    const resources = {
        'Characters': 'character',
        'Locations': 'location',
        'Episodes': 'episode',
    }

    const template = document
        .querySelector('template')
        .content.querySelector('.content__card');
    const content = document.querySelector('.content__container');
    const searchInput = document.querySelector('.search__input');

    // Pagination
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const currentPage = document.querySelector('#current-page');
    const allPages = document.querySelector('#all-pages');
    // END Pagination

    let renderCharacterQuery = (category, page, name, status) => {
        let url = `https://rickandmortyapi.com/api/${category}/?page=${page}&name=${name}&status=${status}`;
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                data.results.forEach((item) => {
                    let elem = template.cloneNode(true);
                    elem.querySelector('.image').src = item.image;
                    elem.querySelector('.card__info .card__name').textContent = item.name;
                    elem.querySelector('.card__info .card__status').textContent = 'Status: ' + item.status;
                    elem.querySelector('.card__info .card__species').textContent = 'Species: ' + item.species;
                    elem.querySelector('.card__info .card__gender').textContent = 'Gender: ' + item.gender;
                    elem.querySelector('.card__info .card__location').textContent = 'Location: ' + item.location.name;

                    content.append(elem);
                });

                currentPage.textContent = defaultPage;
                allPages.textContent = data.info.pages;

                currentPage.textContent === '1' ? prevBtn.style.visibility = 'hidden' : prevBtn.style.visibility = 'visible';
                currentPage.textContent === allPages.textContent ? nextBtn.style.visibility = 'hidden' : nextBtn.style.visibility = 'visible';

            })
            .catch((err) => {
                allPages.textContent = '1';
                nextBtn.style.visibility = 'hidden';
            })
    };


    document.querySelector('.content__category').addEventListener('click', (e) => {
        if (e.target.localName === 'button') {
            document.querySelector('.active').classList.remove('active');
            userCategory = resources[e.target.textContent];
            e.target.classList.add("active");
            content.innerHTML = '';
            renderCharacterQuery(userCategory, defaultPage, name, status);
        }
    });


    const selectName = (param) => {
        content.innerHTML = '';
        defaultPage = 1;
        name = param;
        renderCharacterQuery(userCategory, defaultPage, name, status);
    };

    document.querySelector('.search__button').addEventListener('click', () => {
        let input = searchInput.value.trim();
        input !== '' ? selectName(input) : selectName('');
    });

    document.querySelector('#status').addEventListener('change', (e) =>{
        content.innerHTML = '';
        status = e.target.value;
        renderCharacterQuery(userCategory, defaultPage, name, status);
    });

    // Pagination
    nextBtn.addEventListener('click', () => {
        if (defaultPage < allPages.textContent)
            content.innerHTML = '';
        renderCharacterQuery(userCategory, ++defaultPage, name, status);
    });

    prevBtn.addEventListener('click', () => {
        if (defaultPage > 1) {
            content.innerHTML = '';
            renderCharacterQuery(userCategory, --defaultPage, name, status);
        }
    });
    // END Pagination

    renderCharacterQuery(userCategory, defaultPage, name, status);
})();
