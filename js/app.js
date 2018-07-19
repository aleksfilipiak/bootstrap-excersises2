$(function () {
    console.log('działa');

    $(".set > div").on("click", function () {
        if($(this).hasClass('active')){
$(this).removeClass('active');
$(this).siblings('.content').slideUp(200);
// $(".set > a i").removeClass('fa-minus').addClass('fa-plus');
        }else{
            // $(".set> a").removeClass('fa-minus').addClass('fa-plus');
            // $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
            $(".set > div").removeClass('active');
            $(this).addClass("active");
            $('content').slideUp(200);
            $(this).siblings(".content").slideDown(200, function () {
                $(this).css('display', 'flex');
            });
        }
    })






});