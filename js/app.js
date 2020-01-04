`use strict`;

$('.thanks').on('click', function () {
    console.log('Thank You')
});

$('.hide').on('click', function () {
    $(this).parent().hide();
});