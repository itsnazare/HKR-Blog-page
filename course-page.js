// alert(hello);
$(document).ready(function(){
    $('.course-curriculum .accordion-item li p').click(function(){
        if($(this).find("i.fa").hasClass("fa-plus")){
            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }
        else{
            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }
    });

    // Load More and Less define here
    
    $('.loadmore').click(function(){
        $(this).text(function(i, text) {
            return text === "Load Less" ? "Load More" : "Load Less";
        })
    });
    // Tools and Platforms style here
    $('.images').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        nextArrow: '.fa-arrow-right',
        prevArrow: '.fa-arrow-left',
    });

    
})