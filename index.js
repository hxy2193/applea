$(function(){
    $('.sousuo').on('click',function(){
        $('.header').addClass('searching');
        $('#chahao').addClass('chahao');
    });
    $('.bag').on('click',function(){
        $('.header').removeClass('searching');
        $('#chahao').removeClass('chahao');
    });
    $('#rotate-box').on('click',function () {
        $('#rotate-box').toggleClass('active');
    });
    var slides =$('.gallery-slide-wrapper a');
    var dots =$('.dot-nav .dot');
    var moving=false;
    var moveTo =function (el,dir) {
        moving=true;
        if (dir==='right'){
            slides.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function () {
                $(this).removeClass('leave').dequeue();
                moving=false;
            });
            $(el).addClass('right');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right').addClass('active');
        }else if(dir==='left'){
            slides.filter('.active').removeClass('active').addClass('right').delay(1000).queue(function () {
                $(this).removeClass('right').dequeue();
                moving=false;
            });
            $(el).addClass('enter').addClass('active').delay(1000).queue(function () {
                $(this).removeClass('enter').dequeue();
            })
        }
        dots.removeClass('active').eq(slides.index(el)).addClass('active');
    };
    var moveRight=function(){
        if(moving) return;
        var active=slides.filter('.active');
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,'right');
    };
    var moveLeft=function () {
        if(moving) return;
        var active=slides.filter('.active');
        var el=active.next().length?active.next():slides.eq(-1);
        moveTo(el,'left');
    };
    dots.on('click',function(){
        if(moving) return;
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if (c===n) return;
        if (c<n) {
            moveTo(slides.eq(n),'right');
        }else{
            moveTo(slides.eq(n),'left');
        }
        clearInterval(t);
    });
    var t=setInterval(moveRight,3000);
    //more 响应式下拉
    $('.directory').on('click',function(){
       $(this).find('.xiala').slideToggle();
    })
});