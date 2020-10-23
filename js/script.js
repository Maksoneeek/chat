
$(document).ready(function () {
    $('.new-chat').click(function (event) {
        $('.popup-new').toggleClass('open');    
    });
    $('.templates-open').click(function (event) {
        $('.templates').toggleClass('open');    
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

