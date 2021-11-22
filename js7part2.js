$(function() {
    $(".nav li").hover(
        function () {
            $("ul", this).fadeIn();  // fade in sub menu
        },
        function () {
            $("ul", this).fadeOut();  // fade out sub menu
        }
    );
});

