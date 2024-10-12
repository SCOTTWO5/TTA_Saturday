const ul = document.querySelector('#list-container')
const list = ['Play Ludo', 'Watch Video', 'Time To Study', 'Go And Eat', 'Play Football'];
list.forEach(function (listitem) {
    ul.innerHtml +=`<li class="flex flex justify-center border-black border-[2px]">${listitem}</li>`
});