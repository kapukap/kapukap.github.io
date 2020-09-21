$(document).ready(() => {
    const code = '+7 ';

    $('.bxslider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: false,
    });


    $('#phone').mask(`${code} (000)-000-00-00`, {placeholder: `${code} (___)-___-__-__`});
});
