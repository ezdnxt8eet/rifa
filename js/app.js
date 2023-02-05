$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                dots: false,
                lazyLoad: true
            },
            768: {
                items: 2,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                dots: false,
                lazyLoad: true
            },
            1200: {
                items: 5,
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                dots: false,
                lazyLoad: true
            }
        }
    });
});

// YouTube Testimony
$(document).on('click', 'a#testimonyClick', function (e) {
    const videoID = $(this).attr('data-video');
    let owl = $(".owl-carousel");
    owl.trigger('stop.owl.autoplay');

    let player = $('iframe#ytplayer');
    player.attr('src', 'https://www.youtube.com/embed/' + videoID + '?rel=0&autoplay=1&controls=0&modestbranding=0&showinfo=0&start=0');
});

// Event trigger when modal is closed
const myModalEl = document.getElementById('testimony');
myModalEl.addEventListener('hidden.bs.modal', event => {
    $('iframe#ytplayer').attr('src', '');
    let owl = $(".owl-carousel");
    owl.trigger('play.owl.autoplay', [1000]);
});

// Button href
$('[data-href]').click(function(){
    if($(this).attr('data-target')){
        window.open($(this).attr('data-href'), $(this).attr('data-target'));
    }else{
        window.location.href = $(this).attr('data-href');
    }
});

// Blog
$('a#blog').on('click', function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Blog',
        text: 'Em breve!',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
});