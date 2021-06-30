const toggleHidden = (el) => {
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
    }

}

window.addEventListener('load', () => {
    // portfolioCards are loaded from loadPortfolioData.js
    document.querySelector("#main-accordian-list").innerHTML = makeHtml(portfolioCards);

    // load third party swipers
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



    // add the event listeners.
    // top element that isn't generated
    document.querySelector(`#section-0 h4`)
    .addEventListener('click', (e) => {
        e.preventDefault();
        toggleHidden(document.querySelector(`#section-0 p`))
    })

// the generated elements
    portfolioCards.forEach((element, index) => {
        document.querySelector(`#section-${index + 1} h4`)
            .addEventListener('click', (e) => {
                e.preventDefault();
                toggleHidden(document.querySelector(`#section-${index + 1} div`))
            })
    })

});



