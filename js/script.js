$('.owl-carousel').owlCarousel({
    // stagePadding: 200,？
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
    responsive:{
        1000:{
            items:3,
            // stagePadding: 200
        }
    }
})