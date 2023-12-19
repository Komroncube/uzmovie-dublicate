function initializeCarousel(carouselSelector) {
    const multipleItemCarousel = document.querySelector(carouselSelector);

    if (window.matchMedia("(min-width:576px)").matches) {
        // Check if Bootstrap is defined and loaded
        if (typeof bootstrap !== 'undefined') {
            window.addEventListener('load', function () {
                const carousel = new bootstrap.Carousel(multipleItemCarousel, {
                    interval: 5000
                });

                var carouselWidth = $(carouselSelector + ' .carousel-inner')[0].scrollWidth;
                var cardWidth = $(carouselSelector + ' .carousel-item').width();
                var scrollPosition = 0;

                $(carouselSelector + ' .carousel-control-next').on('click', function () {
                    if (scrollPosition < (carouselWidth - (cardWidth * 3))) {
                        console.log('next');
                        scrollPosition = scrollPosition + cardWidth;
                        $(carouselSelector + ' .carousel-inner').animate({
                            scrollLeft: scrollPosition
                        }, 600);
                    } else {
                        // Return to the first item
                        scrollPosition = 0;
                        $(carouselSelector + ' .carousel-inner').animate({
                            scrollLeft: scrollPosition
                        }, 600);
                    }
                });

                $(carouselSelector + ' .carousel-control-prev').on('click', function () {
                    if (scrollPosition > 0) {
                        console.log('prev');
                        scrollPosition = scrollPosition - cardWidth;
                        $(carouselSelector + ' .carousel-inner').animate({
                            scrollLeft: scrollPosition
                        }, 600);
                    } else {
                        // Go to the last item
                        scrollPosition = carouselWidth - (cardWidth * 3);
                        $(carouselSelector + ' .carousel-inner').animate({
                            scrollLeft: scrollPosition
                        }, 600);
                    }
                });
            });
        } else {
            console.error("Bootstrap is not defined. Make sure you have included Bootstrap JavaScript.");
        }
    } else {
        $(multipleItemCarousel).addClass('slide');
        console.log("xato");
    }
}

// Call the function for each carousel you want to initialize
initializeCarousel("#multipleFilmsPart1");
initializeCarousel("#multipleFilmsPart2");
initializeCarousel("#multipleFilmsPart3");
// Add more calls if needed
