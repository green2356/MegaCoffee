$(function(){

    var headerH = $('.header').outerHeight();
    $('.section').css('padding-top', headerH);
    
    // 햄버거 메뉴 버튼
    $('.menu_btn').click(function(){
        $('.nav').animate({'right':0});
    });

    // 닫기 버튼
    $('.close').click(function(){
        $('.nav').animate({'right':'-100vw'})
    });


    // 아코디언 메뉴
    $('.nav nav > ul > li > a').click(function(e){
        e.preventDefault();
        //만약 클릭한 주메뉴에 active가 설정되어 있지 않으면
        //attr() : 객체의 속성을 인식하는 메서드
        if($(this).attr('class') != 'active') {
            $('.nav nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).next().stop().slideToggle();
        }else{
            $(this).removeClass('active');
            $(this).next().stop().slideUp();
        }
    });

    var swiper1 = new Swiper(".mySwiper", {
        cssMode: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: {
            invert:false
        }
    });

    // 탭메뉴
    $('.tab_content > div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.con1').show();
        $('.con2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });
    $('.t2').click(function(){
        $('.con1').hide();
        $('.con2').show();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
    });


    // 서브페이지 메뉴
    $(document).on('pageshow','#sub1',function(){
        const swiper2 = new Swiper(".Swiper_sub_menu", {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 30,            
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            mousewheel: {
                invert:false
            }
        }); 
    });
    
    // top

    // 보이기 | 숨기기 
    $(window).scroll(function() { if ($(this).scrollTop() > 250) {
        // 스크롤 250 넘으면 버튼이 보여지게
        $('.top').fadeIn(); } else { $('.top').fadeOut(); } });
        // 버튼 클릭시
        $(".top").click(function() {
            $('html, body').animate({
                scrollTop : 0 // 0 까지 animation 이동합니다.
            }, 400);        // 속도 400
            return false; 
        });
    });