



window.onload = function () {

    var oButton = document.getElementById('button');
    addEvent(oButton, 'click', fn1);
    addEvent(oButton, 'click', fn2);
    addEvent(oButton, 'click', fn3);

};


function fn1() {
    alert('1');
}

function fn2() {
    alert('2');
}

function fn3() {
    alert('3');
}
