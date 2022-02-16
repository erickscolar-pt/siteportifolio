$(document).ready(function(){

    $('#smScroll').click(function(){
        $('html, body').animate({
        scrollTop: $("#sobremim").offset().top
        },2000)
    })

    $('#pfScroll').click(function(){
        $('html, body').animate({
        scrollTop: $("#portifolio").offset().top
        },2000)
    })

    $('#skScroll').click(function(){
        $('html, body').animate({
        scrollTop: $("#skills").offset().top
        },2000)
    })

    $('#conSkcoll').click(function(){
        $('html, body').animate({
        scrollTop: $("#contato").offset().top
        },2000)
    })
})