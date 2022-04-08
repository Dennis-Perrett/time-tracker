

function dot_inserter(input) {
    if (event.key != 'Backspace' && input.value.length === 2) {
        input.value += ':';
    }
}

function diff_calc_s(output) {
    let s = document.getElementById("t1s").value;
    let e = document.getElementById("t2s").value;
    let b = document.getElementById("t3s").value;


    output.innerHTML = leave_time(s, e, b);
}

function diff_calc_d(output) {
    let s = document.getElementById("t1d").value;
    let e = document.getElementById("t2d").value;
    let b = document.getElementById("t3d").value;


    output.innerHTML = hours_worked(s, e, b);
}



function hours_worked(start, end, br){
    start = start.split(":");
    end = end.split(":");
    br = br.split(":")

    // Finish time minus start minus breaks
    var new_time = (end[0] * 60 * 60 * 1000) + (end[1] * 60 * 1000) - (start[0] * 60 * 60 * 1000) - (start[1] * 60 * 1000) - (br[0] * 60 * 60 * 1000) - (br[1] * 60 * 1000);

    var hours = Math.floor(new_time / 1000 / 60 / 60);
    new_time -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(new_time / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) { hours = hours + 24; }
    if (minutes < 10) { minutes = '0' + minutes }
    if (isNaN(minutes)) { return '-'; }

    return hours + ":" + minutes;

}

function get_overtime(finishtime) {
    let finish = finishtime.innerHTML.split(":");
    var today = new Date();
    var hours_to_work = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 48);
    var finish_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), finish[0], finish[1]);





    time_left = finish_date - hours_to_work
    var hours = Math.floor(time_left / 1000 / 60 / 60);
    time_left -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(time_left / 1000 / 60);

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (isNaN(hours)) {
        document.getElementById("overtime").innerHTML = "You will have worked - overtime!"
    } else {
        document.getElementById("overtime").innerHTML = "You will have worked " + hours + ":" + minutes + " overtime!"
    }
}

function leave_time(start, end, br) {
    start = start.split(":");
    end = end.split(":");
    br = br.split(":")

    var new_time = (start[0] * 60 * 60 * 1000) + (start[1] * 60 * 1000) + (end[0] * 60 * 60 * 1000) + (end[1] * 60 * 1000) + (br[0] * 60 * 60 * 1000) + (br[1] * 60 * 1000);

    var hours = Math.floor(new_time / 1000 / 60 / 60);
    new_time -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(new_time / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0) { hours = hours + 24; }
    if (minutes < 10) { minutes = '0' + minutes }
    if (isNaN(minutes)) { return '-'; }

    return hours + ":" + minutes;
}

function countdown(finishtime) {
    let finish = finishtime.innerHTML.split(":");
    var today = new Date();
    var finish_date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), finish[0], finish[1]);


    if (today > finish_date) {
        finish_date = new Date(finish_date.getFullYear(), finish_date.getMonth(), finish_date.getDate() + 1, finish[0], finish[1]);
    }


    time_left = finish_date - today
    var hours = Math.floor(time_left / 1000 / 60 / 60);
    time_left -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(time_left / 1000 / 60);

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (isNaN(hours)) {
        document.getElementById("countdown").innerHTML = "Only - to go!"
    } else {
        document.getElementById("countdown").innerHTML = "Only " + hours + ":" + minutes + " to go!"
    }
}

var t1 = document.querySelector('#t1s');
var t2 = document.querySelector('#t2s');
var t3 = document.querySelector('#t3s');
var t11 = document.querySelector('#t1d');
var t21 = document.querySelector('#t2d');
var t31 = document.querySelector('#t3d');

t1.addEventListener('keydown', function (e) { dot_inserter(t1) });
t2.addEventListener('keydown', function (e) { dot_inserter(t2) });
t3.addEventListener('keydown', function (e) { dot_inserter(t3) });


t11.addEventListener('keydown', function (e) { dot_inserter(t11) });
t21.addEventListener('keydown', function (e) { dot_inserter(t21) });
t31.addEventListener('keydown', function (e) { dot_inserter(t31) });

var t4 = document.querySelector('#leave-time');
t1.addEventListener('keyup', function (e) { diff_calc_s(t4) });
t2.addEventListener('keyup', function (e) { diff_calc_s(t4) });
t3.addEventListener('keyup', function (e) { diff_calc_s(t4) });

var t5 = document.querySelector('#leave-time-d');
t11.addEventListener('keyup', function (e) { diff_calc_d(t5) });
t21.addEventListener('keyup', function (e) { diff_calc_d(t5) });
t31.addEventListener('keyup', function (e) { diff_calc_d(t5) });





function swap_bg() {
    bgimg = window.getComputedStyle(document.querySelector('#img')).backgroundImage.split("/")
    f = bgimg[bgimg.length - 1]
    console.log(f)
    if (f === 'Sloth3.svg")') {

        document.getElementById('img').style.backgroundImage = "url('Dog.svg')";
        document.getElementById('img').style.marginTop = "50px";
        document.body.style.backgroundColor = "#c49a57";
        document.getElementById('img').style.backgroundColor = "#c49a57";
        document.getElementById('mb-sloth').style.display = "none";
        document.getElementById('mb-dog').style.display = "block";
        document.getElementById('slider').style.marginLeft = "49px";
        document.getElementById('slider').style.backgroundColor = "#c49a57";
        document.getElementById('swapper').style.backgroundColor = "#efe5b9";



    } else {
        document.getElementById('img').style.backgroundImage = "url('Sloth3.svg')";
        document.body.style.backgroundColor = "#efe5b9";
        document.getElementById('img').style.marginTop = "0px";
        document.getElementById('img').style.backgroundColor = "#efe5b9";
        document.getElementById('mb-sloth').style.display = "block";
        document.getElementById('mb-dog').style.display = "none";
        document.getElementById('slider').style.marginLeft = "0px";
        document.getElementById('slider').style.backgroundColor = "#efe5b9";
        document.getElementById('swapper').style.backgroundColor = "#c49a57"
        

    }
}

window.onload = diff_calc_s(t4);
window.onload = diff_calc_d(t5);
window.onload = countdown(t4);
window.onload = get_overtime(t5);
setInterval(function () { countdown(t4) }, 1000)
setInterval(function () { get_overtime(t5) }, 1000)
    //setInterval(function(){swap_bg()}, 3000)

