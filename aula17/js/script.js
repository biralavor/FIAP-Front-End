var months_of_year = ['janeiro', 'fevereiro', 'março', 'abril', 'maio'];
var todays_date = new Date();
var actual_month = todays_date.getMonth();
var actual_day = todays_date.getDate();
var actual_year = todays_date.getFullYear();
document.getElementById("todays_date").innerText = "Today is " + actual_day + " de " + months_of_year[actual_month] + " de " + actual_year;

var locale_date = todays_date.toLocaleDateString();
var locale_hour = todays_date.toLocaleTimeString();
document.getElementById("locale_date").innerText = "The date of today using the local configuration is: " + locale_date + " " + locale_hour;

setInterval(realtimeGenerator, 1000);

function realtimeGenerator() {
    var another_date_instance = new Date();
    var realtime = another_date_instance.toLocaleTimeString();
    document.getElementById("show_realtime").innerText = realtime
}

hsl_color = [hsl, 40, 60]

function smallerbox_manager() {
    var smallerbox = document.getElementById("smallerbox");
    var biggerbox = document.getElementById("biggerbox");
    var y_pos = 0;
    var x_pos = 0;
    var usefull_area = biggerbox.clientWidth - smallerbox.clientWidth
    setInterval(move_the_smallerbox, 5)
    function move_the_smallerbox() {
        if (y_pos < usefull_area && x_pos == 0)
            move_down()
        if (y_pos == usefull_area && x_pos < usefull_area)
            move_right()
        if (y_pos > 0  && x_pos == usefull_area) {
            move_up()
        }
        if (y_pos == 0 && x_pos <= usefull_area) {
            document.getElementById("debug").innerText = x_pos
            move_left()
            if (x_pos == 0)
                clearInterval(move_the_smallerbox())
        }
    }
    function move_down() {
        y_pos++;
        smallerbox.style.top = y_pos + "px";
    }
    function move_right() {
        x_pos++;
        smallerbox.style.left = x_pos + "px";
    }
    function move_up() {
        y_pos--;
        smallerbox.style.top = y_pos + "px";
    }
    function move_left() {
        x_pos--;
        smallerbox.style.left = x_pos + "px";
    }
}

