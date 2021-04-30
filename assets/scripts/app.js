
window.addEventListener('load', () => {
    document.querySelector("#main-accordian-list").innerHTML = makeHtml(portfolioCards);

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
    
    });



