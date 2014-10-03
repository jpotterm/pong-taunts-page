function init() {
    var buttons = document.querySelectorAll('.page-content .button-grid > li');

    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].addEventListener('click', buttonClick);
    }
}

function buttonClick(e) {
    var li = e.currentTarget;
    var audio = li.querySelector('audio');
    audio.play();
}
