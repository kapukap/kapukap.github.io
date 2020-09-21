$(document).ready(function () {

    /* scroll */

    $(".scroll").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /* timer */

    function update() {
        let Now = new Date(), Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
            Finish.setDate(Finish.getDate() + 1);
        }
        let sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        let hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        let min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").text(pad(hrs));
        $(".timer .minutes").text(pad(min));
        $(".timer .seconds").text(pad(sec));
        setTimeout(update, 200);
    }

    function pad(s) {
        return ('00' + s).substr(-2)
    }

    update();
});
