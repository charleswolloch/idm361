$(document).ready(function () {
    var button1 = new Audio('./audio/Laugh.mp3');
    $('#laugh').mousedown(function () {
        button2.pause();
        button3.pause();
        button4.pause();
        button5.pause();
        button6.pause();

        button1.load();
        button1.play();

    });

    var button2 = new Audio('./audio/Boo.mp3');
    $('#boo').mousedown(function () {
        button1.pause();
        button3.pause();
        button4.pause();
        button5.pause();
        button6.pause();

        button2.load();
        button2.play();
    });

    var button3 = new Audio('./audio/Aww.mp3');
    $('#aww').mousedown(function () {
        button1.pause();
        button2.pause();
        button4.pause();
        button5.pause();
        button6.pause();

        button3.load();
        button3.play();
    });

    var button4 = new Audio('./audio/Cricket.mp3');
    $('#cricket').mousedown(function () {
        button1.pause();
        button2.pause();
        button3.pause();
        button5.pause();
        button6.pause();

        button4.load();
        button4.play();
    });

    var button5 = new Audio('./audio/Confused.mp3');
    $('#confused').mousedown(function () {
        button1.pause();
        button2.pause();
        button3.pause();
        button4.pause();
        button6.pause();

        button5.load();
        button5.play();
    });

    var button6 = new Audio('./audio/Wow.mp3');
    $('#wow').mousedown(function () {
        button1.pause();
        button2.pause();
        button3.pause();
        button4.pause();
        button5.pause();

        button6.load();
        button6.play();
    });
});
