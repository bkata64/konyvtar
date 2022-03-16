$(document).ready(function(){
    // $('#megse').hide();
    if (localStorage.getItem("panel")=="closed")
        $('#kategoria').addClass('rejtett');
    $('#panel-zaro').click(function(){
        $('#kategoria').animate({
            width: "0"
        }, 700, function(){
            $('#kategoria').addClass('rejtett');
            localStorage.setItem("panel","closed");
        });
    });

    $('#panel-nyito').click(function(){
        $('#kategoria').removeClass('rejtett');
        $('#kategoria').animate({
            width: "25%"
        }, 700, function(){
            localStorage.setItem("panel","opened");
        });
    });

    $('#kereso').click(function(){
        $('#megse').show();
    });
    $('#megse').click(function(){
        $(this).hide();
    });
});