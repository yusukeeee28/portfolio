var tabobj = document.getElementsByTagName('a');
for (var i = 0; i < tabobj.length; i++) {
    if (tabobj[i].className == 'abar1') {
        tabobj[i].addEventListener('click', function () {
            tab_b('tab1b');

        })
    } else if (tabobj[i].className == 'abar2') {
        tabobj[i].addEventListener('click', function () {
            tab_b('tab2b');

        })
    } else if (tabobj[i].className == 'abar3') {
        tabobj[i].addEventListener('click', function () {
            tab_b('tab3b');

        })
    }
}

function tab_b(tabb) {
    document.getElementById('tab1b').style.display = 'none';
    document.getElementById('tab2b').style.display = 'none';
    document.getElementById('tab3b').style.display = 'none';

    if (tabb) {
        document.getElementById(tabb).style.display = 'block';
    }
}