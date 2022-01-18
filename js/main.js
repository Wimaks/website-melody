$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $('.counter-up')
    let counterDown = $('.counter-down')
    let path = $('.home-image path');
    // Подсветка по наведению и передача в счетчик

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

    // Открытие окна выбора квартиры
    let closeButton = $('.modal-close-button');
    let closeButtonPrimary = $('.button-primary');
    let modal = $('.modal');
    let pathFlat = $('.flats path');
    let flat = $('.flat-link');
    let currentFlat = 1;

    pathFlat.on('mouseover', function () {
        flat.removeClass('current-link');
        currentFlat = $(this).attr('data-flats');
        $(`[data-flats=${currentFlat}]`).toggleClass('current-link');
    });

    pathFlat.mouseleave(function () { 
        flat.removeClass('current-link');
    });

    flat.on('mouseover', function () {
        pathFlat.removeClass('current-flat')
        currentFlat = $(this).attr('data-flats')
        $(`[data-flats=${currentFlat}]`).toggleClass('current-flat');
    })

    flat.mouseleave(function () { 
        pathFlat.removeClass('current-flat');
    });

    path.on('click', function () {
        modal.toggleClass('is-open')
        // currentFloor = $(this).attr('data-floor');
        // $('.modal-counter').text(currentFloor);
    });

    closeButtonPrimary.on('click', function () {
        modal.toggleClass('is-open')
    });

    closeButton.on('click', function () {
        modal.removeClass('is-open')
    })
});