
$(document).ready(function () {
    $('.new-chat').click(function (event) {
        $('.popup-new').toggleClass('open');
    });
    $('.templates-open').click(function (event) {
        $('.templates').toggleClass('open');
    });
    $('.settings-open').click(function (event) {
        $('.settings').toggleClass('open');
    });
    $('.info-open').click(function (event) {
        $('.info').toggleClass('open');
        $('.content-chat-content').toggleClass('info-pad');
    });
    $('.new-templates-open').click(function (event) {
        $('.new-templates').toggleClass('open');
        $('.settings').removeClass('open');
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