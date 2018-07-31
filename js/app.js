$(function () {
    console.log('działa');

    $(".set > div").on("click", function () {
        if($(this).hasClass('active')){
$(this).removeClass('active');
$(this).siblings('.content').slideUp(200)

        }else{
            
            $(".set > div").removeClass('active');
            $(this).addClass("active");
            $('content').slideUp(200);
            $(this).siblings(".content").slideDown(200, function () {
                $(this).css('display', 'flex');
            });
        }
    })






});