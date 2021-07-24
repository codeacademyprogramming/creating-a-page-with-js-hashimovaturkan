const element = document.querySelector('.something');

const attribute = element.setAttribute('class', "something another-thing another-another-thing")

const listItems = Array.from(document.querySelectorAll('.custom li'));
listItems.forEach(listItem => {
    listItem.onmouseover = function () {
        const foundTarget = document.querySelector(`[data-target='${listItem.getAttribute('data-source')}']`);
        foundTarget.classList.remove('d-none');
    }

    listItem.onmouseout = function () {
        const unorderedLists = Array.from(document.querySelectorAll('.wrapper ul'));
        unorderedLists.forEach(unorderedList => {
            unorderedList.classList.add('d-none');
        })
    }
})

