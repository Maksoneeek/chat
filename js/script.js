
$(document).ready(function () {
    $('.new-chat').click(function (event) {
        $('.popup-new').toggleClass('open');
    });
    $('audio::-webkit-media-controls-play-button').click(function (event) {
        $('.popup-new').toggleClass('open');
    });
    $('.templates-open').click(function (event) {
        $('.templates').toggleClass('open');
        $('.templates').removeClass('templates-2');
    });
    $('.templates-open-2').click(function (event) {
        $('.templates').toggleClass('open');
        $('.templates').toggleClass('templates-2');
    });
    $('.micro__icon-1').click(function (event) {
        $('.micro__two-item').toggleClass('open');
        setTimer()
    });
    $('.close-template').click(function (event) {
        $('.templates').removeClass('open');
    });
    $('.close-new').click(function (event) {
        $('.popup-new').removeClass('open');
    });
    $('.close-search-1').click(function (event) {
        $('.search__body-1').removeClass('open');
        $('.header-list-chat__icon').removeClass('none');
        $('.header-list-chat__title').removeClass('none');
        $('.header-list-chat__icon_none').removeClass('none');
        $('.header-list-chat').removeClass('search-pad');
    });
    $('.search-1').click(function (event) {
        $('.search__body-1').addClass('open');
        $('.header-list-chat__icon').addClass('none');
        $('.header-list-chat__title').addClass('none');
        $('.header-list-chat').addClass('search-pad');
    });
    $('.search-2').click(function (event) {
        $('.search__body-2').addClass('open');
        $('.header-item-chat__search').addClass('none');
        $('.content-chat-content__arrows').addClass('open');
    });
    $('.close-search-2').click(function (event) {
        $('.search__body-2').removeClass('open');
        $('.header-item-chat__search').removeClass('none');
        $('.content-chat-content__arrows').removeClass('open');
    });
    $('.close-settings').click(function (event) {
        $('.settings').removeClass('open');
    });
    $('.item-list-chat').click(function (event) {
        $('.list-chat').addClass('none');
        $('.chat-item').addClass('block');
    });
    $('.close-new-templates').click(function (event) {
        $('.new-templates').removeClass('open');
    });
    $('.settings-open').click(function (event) {
        $('.settings').toggleClass('open');
    });
    $('.info-open').click(function (event) {
        $('.info').toggleClass('open');
        $('.content-chat-content').toggleClass('hidden');
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
        $('.chat__container').toggleClass('pad');
        $('.letters-chat').toggleClass('open');
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

