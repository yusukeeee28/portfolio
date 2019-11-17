var body = document.getElementsByTagName('body')[0];



function fadeout() {
    body.classList.add('bodyfadeout');
}

function tablink() {
    location.href = 'index2.html'
}
var enter = document.getElementById('enterbutton');
enter.addEventListener('click', function () {
    // fadeout();
    body.classList.add('animeyu');
    setTimeout(tablink, 1500);
});