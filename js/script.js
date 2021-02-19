
$(document).ready(function () {
    $('.nav-link').on('click',function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });
});

$('form').submit(function () {
    let valid = true;
    if(valid){
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $(this).serialize()
        }).done(function () {
            console.log(true);
        })
    }
})