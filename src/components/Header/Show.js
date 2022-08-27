import $ from 'jquery';

$(document).ready(function() {
    $(".navbar_hidden").click(function() {
        $(".navbar_show1").slideToggle("fast");
    });
    $(".show").click(function() {
        $(".navbar_show1").slideUp("fast");
    });
})