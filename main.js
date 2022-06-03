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


<ul class="sidebar__nav sidebar__alt">
                        <li class="sidebar__item px-5"><a href="" class="sidebar__item-text">Activity</a></li>
                        <li class="sidebar__item px-5"><a href="" class="sidebar__item-text">Labels</a></li>
                        <li class="sidebar__item px-5"><a href="" class="sidebar__item-text">Member</a></li>
                    </ul>
