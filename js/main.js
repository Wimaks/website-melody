$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $('.counter-up')
    let counterDown = $('.counter-down')
    let path = $('.home-image path');
    
    path.on('mouseover', function () {
        path.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping: false }); //форматирование переменной так, чтобы всегда было минимум 2 цифры в числе, типа 01, а не 1
            $('.counter').text(usCurrentFloor);
            path.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }});

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor);
            path.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
        }
    });
});