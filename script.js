// script.js
document.getElementById('sim').onclick = function() {
    window.location.href = 'https://www.youtube.com/watch?v=vhjBxI20uYc&ab_channel=DanielBayley'; 
};

document.getElementById('nao').onmouseover = function() {
    var naoBtn = document.getElementById('nao');
    naoBtn.style.position = 'absolute';
    naoBtn.style.top = Math.random() * (window.innerHeight - naoBtn.offsetHeight) + 'px';
    naoBtn.style.left = Math.random() * (window.innerWidth - naoBtn.offsetWidth) + 'px';
};
