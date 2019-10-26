var navFixStatus = false;

$(".nav-fix__body__menu, .nav-fix__body__nav-list").on("click", function() {
    if($(window).width() <= 1024){
        navFixStatus = !navFixStatus
        if(navFixStatus){
            $(".nav-fix__body__nav-list").css({
                "transform": "translateY(0)"
            })      
        } else{
            $(".nav-fix__body__nav-list").css({
                "transform": "translateY(-150%)"
            })
        }
    }
})
