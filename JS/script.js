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





});