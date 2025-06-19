function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
function fixedimageAnim(){

    
    var elem = document.querySelector(".elem-container")
    var fixed = document.querySelector(".fixed-img")
    
    elem.addEventListener("mouseenter",function(){
        fixed.style.display = "block";
    })
    elem.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })
    
    
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var img = elem.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${img})`
    })
});

}
function swiper(){
    var container = document.querySelector(".slider-container")
    var slider = document.querySelector(".slider")

    var containerWidth = container.offsetWidth
    var scrollWidth = slider.scrollWidth

    container.addEventListener("mousemove",function(dets){
        var x = dets.clientX

        var percent = x/containerWidth

        var maxx = scrollWidth - containerWidth

        var move = -maxx * percent

        gsap.to(slider,{
            x: move -50,
            duration:6,
            ease:"power3.out"
        })
    })
}
function menuAnimation(){

    var fullscr = document.querySelector(".full-scr")
    var img = document.querySelector("nav img")
    var flag = 0
    document.querySelector("nav h3").addEventListener("click",function(){
        if(flag == 0){
            fullscr.style.top = 0
            img.style.opacity = 0
            flag = 1
        }
        else{
            fullscr.style.top = "-100%"
            img.style.opacity = 1
            flag = 0
        }
    })
}
function loaderAnimation(){

    var loader = document.querySelector(".loader")
    setTimeout(function(){
        loader.style.top = "-100%"
        
    },3400)
}


swiper()
locomotive();
fixedimageAnim();
menuAnimation();
loaderAnimation();
