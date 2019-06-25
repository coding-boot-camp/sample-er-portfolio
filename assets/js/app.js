$(document).ready(function () {
    $('.grow-bar').waypoint(function () {
        $('.grow-bar').each(function () {
            $(this).addClass($(this).data('tech'));
        });
    }, { offset: 'bottom-in-view' });
});



var arr = ['apples', 'oranges', 'raspberries'];

var newArr = [...arr, 'lemons'];

console.log(arr);
console.log(newArr);