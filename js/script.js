
$(document).ready(function () {
    $('.new-chat').click(function (event) {
        $('.popup-new').toggleClass('open');
    });
    $('.templates-open').click(function (event) {
        $('.templates').toggleClass('open');
    });
    $('.micro__icon-1').click(function (event) {
        $('.micro__two-item').toggleClass('open');
        setTimer()
    });

    $('.settings-open').click(function (event) {
        $('.settings').toggleClass('open');
    });
    $('.info-open').click(function (event) {
        $('.info').toggleClass('open');
        $('.content-chat-content').toggleClass('hidden');
        $('.content-chat-content').toggleClass('info-pad');
    });
    $('.new-templates-open').click(function (event) {
        $('.new-templates').toggleClass('open');
        $('.settings').removeClass('open');
    });
    $('.preview').click(function (event) {
        $('.preview-chat').toggleClass('open');
    });
    $('.preview-chat__close').click(function (event) {
        $('.preview-chat').removeClass('open');
    });
    $('.new-templates__back').click(function (event) {
        $('.new-templates').removeClass('open');
        $('.settings').addClass('open');
    });
    $('.papki').click(function (event) {
        $('.chat').toggleClass('pad');
        $('.letters-chat__text,.letters-chat__new-chat').toggleClass('visible');
    });
    $('.letters-chat__new-chat-text').click(function (event) {
        $('.letters-chat__form').toggleClass('open');
        $('.letters-chat__new-chat-text').toggleClass('none');
    });
    $('.slick-track').css('transform', 'translate3d(0,0,0)');
});
$(document).ready(function () {
    $('.__select__title').click(function (event) {
        const select = $(this).parents('.__select').first()
        if (!select.attr('data-state')) {
            select.attr('data-state', 'active')
        } else {
            select.attr('data-state', '')
        }

    });
    $('.__select__label').click(function (event) {
        console.log($(this).closest('.__select').children('.__select__title').text(event.target.textContent))
        $(this).parents('.__select').first().attr('data-state', '')
    });
});
$(document).ready(function () {
    $.each($('.checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active')
        return false;
    });
});
$(document).ready(function () {
    $('.preview-chat__slider-big').slick({
        arrows: true,
        slidesToShow: 1,
        dots: false,
        asNavFor: '.preview-chat__slider-small_item',
    });
});
$(document).ready(function () {
    $('.preview-chat__slider-small_item').slick({
        arrows: false,
        slidesToShow: 10,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.preview-chat__slider-big',
        useCSS: 'false',
        useTransform: false,
    });
});

function setTimer() {
    let time = 0
    const timerInput = document.querySelector('.micro__timer')
    timerInput.style.fontSize = 18 + 'px'
    const timer = setInterval(function () {
        time = time + 1
        let mins = Math.floor(time / 60)
        let seconds = time % 60
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        timerInput.textContent = `${mins}:${seconds}`
        if (time == 0) {
            clearInterval(timer)
            timerInput.style.fontSize = 0
            document.querySelector('.popup__restart').style.fontSize = 12 + 'px'
            document.querySelector('.popup__restart').addEventListener('click', restartTimer)
        }
    }, 1000)
    alert('End!');
}