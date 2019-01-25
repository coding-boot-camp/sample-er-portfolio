$(document).ready(function () {
    $('.grow-bar').waypoint(function () {
        $('.grow-bar').each(function () {
            $(this).addClass($(this).data('tech'));
        });
    }, { offset: 'bottom-in-view' });
});