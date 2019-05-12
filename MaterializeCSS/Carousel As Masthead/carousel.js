M.AutoInit();

$('.carousel.carousel-slider').carousel({
    fullWidth: true
    });
    
    // CAROUSEL (Duration = gradual transition speed, autoplay = how long each slide lasts ex: 7500/7.5 sec)
    $(document).ready(function(){
        $('.carousel').carousel(
        {
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 250,
        }
        );
    });

    autoplay()   
        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 7500);
        }