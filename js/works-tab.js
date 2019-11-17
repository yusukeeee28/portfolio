var tabobj2 = document.getElementsByTagName('div');
for (var i = 0; i < tabobj2.length; i++) {
    if (tabobj2[i].className == 'square-in1') {
        tabobj2[i].addEventListener('click', function () {
            tab_b2('num-ex');

        })
    } else if (tabobj2[i].className == 'square-in2') {
        tabobj2[i].addEventListener('click', function () {
            tab_b2('maru-ex');

        })
    } else if (tabobj2[i].className == 'square-in3') {
        tabobj2[i].addEventListener('click', function () {
            tab_b2('port-ex');

        })
    }
}

function tab_b2(tabb) {
    document.getElementById('num-ex').style.display = 'none';
    document.getElementById('maru-ex').style.display = 'none';
    document.getElementById('port-ex').style.display = 'none';

    if (tabb) {
        document.getElementById(tabb).style.display = 'block';
    }
}