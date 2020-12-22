let content = document.querySelector('.content');
let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    content.textContent = "lorem ipsum";
});


// btn.onclick = function(){
//     content.textContent = "lorem ipsum";
// }