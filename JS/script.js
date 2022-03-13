$(document).ready(() => {

    // design image
    $("#design-img").click(() => {

        $("#design-img, .h41").hide()
        $("#overlay_design").toggle().css('text-align', 'center');

    });
    $("#overlay_design").click(() => {

        $("#overlay_design").hide();
        $("#design-img, .h41").toggle()

    });

    // development image


    $("#development-img").click(() => {

        $("#development-img, .h42").hide()
        $("#overlay_development").toggle().css('text-align', 'center');

    });

    $("#overlay_development").click(() => {

        $("#overlay_development").hide();
        $("#development-img, .h42").toggle()

    });

    // product image


    $("#product-img").click(() => {

        $("#product-img, .h43").hide()
        $("#overlay_product").toggle().css('text-align', 'center');

    });

    $("#overlay_product").click(() => {

        $("#overlay_product").hide();
        $("#product-img, .h43").toggle()

    });


    // project1
    $("#work1-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work1-image").mouseleave(function() {

        $("#portfolio").hide();
    });


    // project 2
    $("#work2-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work2-image").mouseleave(function() {
        $("#portfolio").hide();
    });

    // project 3
    $("#work3-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work3-image").mouseleave(function() {
        $("#portfolio").hide();
    });


    // project 4
    $("#work4-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work4-image").mouseleave(function() {
        $("#portfolio").hide();
    });

    // project 5
    $("#work5-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work5-image").mouseleave(function() {
        $("#portfolio").hide();
    });


    // project 6
    $("#work6-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work6-image").mouseleave(function() {
        $("#portfolio").hide();
    });

    // project 7
    $("#work7-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work7-image").mouseleave(function() {
        $("#portfolio").hide();
    });

    // project 8

    $("#work8-image").mouseenter(
        function() {
            $("#portfolio").slideDown('slow').css("display", "block");
        })
    $("#work8-image").mouseleave(function() {
        $("#portfolio").hide();
    });


    // $("#work-image").hover(
    //     function() {
    //         $("#portfolio").css("display", "none").slideDown(1000);
    //     },
    //     function() {
    //         $("#portfolio").css("display", "block").slideUp(slow);
    //     }
    // );



























});