console.log('all ready');


$(function() {
    console.log( "test!");
});

$(function () {
    $('#search').on('keyup', function () {
        var pattern = $(this).val();
        $('.items-collection .item').hide();
        $('.items-collection .item').filter(function () {
            return $(this).text().match(new RegExp(pattern, 'i'));
        }).show();
    });
});
