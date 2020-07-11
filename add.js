const add=document.querySelector('.box');
const list=document.querySelector('.todo');
const search=document.querySelector('.search');

 const createTemplate =  (todo) => {
    const html=`
        <li class="ll list-group-item d-flex justify-content-between align-items-center">
                <span> ${todo}</span>
                <i class="fas fa-trash delete"></i>
        </li>
    `;
    list.innerHTML +=html;
 };

add.addEventListener('submit',e => {
    e.preventDefault();
    const addnew=add.addnew.value.trim();
    if(addnew.length){
        createTemplate(addnew);
        add.reset();
    }
});

list.addEventListener('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filter1 = (todo) => {

    Array.from(list.children)
        .filter((sea) => !sea.textContent.includes(todo))
        .forEach((sea) => sea.classList.add('d-none'));

        Array.from(list.children)
        .filter((sea) => sea.textContent.includes(todo))
        .forEach((sea) => sea.classList.remove('d-none'));
    
};


search.addEventListener('keyup', () => {
    const term=search.search.value.trim();
    filter1(term);
});