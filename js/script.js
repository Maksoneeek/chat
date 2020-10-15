
$(document).ready(function () {
    $('.new-chat').click(function (event) {
        $('.popup-new').toggleClass('open');    
    });
    $('.chats').click(function (event) {
        $('.list-chat__scroll').toggleClass('open');    
    });
});

