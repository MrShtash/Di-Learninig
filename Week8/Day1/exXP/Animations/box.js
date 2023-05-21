let id;
let pos = 0;
let startPos = 0;

function myMove(){
    let box = document.getElementById('animate');
    id = setInterval(function(){
        if (pos >= 350) {
            clearInterval(id);
            pos = startPos;
            box.style.left = pos + 'px';
        }
        pos++;
        box.style.left = pos + 'px';
    }, 5)
}