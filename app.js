// // API SECTION
// const express = require('express');
// const request = require('request');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static(path.join(__dirname, 'DELANI-STUDIO')));

// app.post('', function(req, res) {

//     const { name, email, text } = req.body;





// });



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, console.log(`server started on ${PORT}`))
// app.listen(PORT, console.log(`server started on ${PORT}`))

$(document).ready(() => {
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
            $("#portfolio1").slideDown('slow').css("display", "block");
        })
    $("#work1-image").mouseleave(function() {

        $("#portfolio1").hide();
    });


    // project 2
    $("#work2-image").mouseenter(
        function() {
            $("#portfolio2").slideDown('slow').css("display", "block");
        })
    $("#work2-image").mouseleave(function() {
        $("#portfolio2").hide();
    });

    // project 3
    $("#work3-image").mouseenter(
        function() {
            $("#portfolio3").slideDown('slow').css("display", "block");
        })
    $("#work3-image").mouseleave(function() {
        $("#portfolio3").hide();
    });


    // project 4
    $("#work4-image").mouseenter(
        function() {
            $("#portfolio4").slideDown('slow').css("display", "block");
        })
    $("#work4-image").mouseleave(function() {
        $("#portfolio4").hide();
    });

    // project 5
    $("#work5-image").mouseenter(
        function() {
            $("#portfolio5").slideDown('slow').css("display", "block");
        })
    $("#work5-image").mouseleave(function() {
        $("#portfolio5").hide();
    });


    // project 6
    $("#work6-image").mouseenter(
        function() {
            $("#portfolio6").slideDown('slow').css("display", "block");
        })
    $("#work6-image").mouseleave(function() {
        $("#portfolio6").hide();
    });

    // project 7
    $("#work7-image").mouseenter(
        function() {
            $("#portfolio7").slideDown('slow').css("display", "block");
        })
    $("#work7-image").mouseleave(function() {
        $("#portfolio7").hide();
    });

    // project 8

    $("#work8-image").mouseenter(
        function() {
            $("#portfolio8").slideDown('slow').css("display", "block");
        })
    $("#work8-image").mouseleave(function() {
        $("#portfolio8").hide();
    });


    // $("#work1-image").hover(
    //     function() {
    //         $("#portfolio").css("display", "none").slideDown(1000);
    //     },
    //     function() {
    //         $("#portfolio").css("display", "block").slideUp(slow);
    //     }
    // );



    // $("#work2-image").hover(function() {

    //         $("#portfolio2").slideDown('slow').css("display", "block");

    //     },
    //     function() {
    //         $("#portfolio2").hide();

    //     });













});