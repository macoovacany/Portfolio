
// 
const itemTemplate = function (itemData) {
    return `
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 swiper-slide">
    <a href="${itemData.link}">
    <img class="w-full" style="height:200px" src="${itemData.thumbNail}" alt="${itemData.altDescription}">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${itemData.heading}</div>
    <p class="text-grey-darker text-base"> ${itemData.longDescription}</p>
    </div>
    </a>
    </div>
    `;
}



const makeItemsHtml = function ( cards ) {
    let preamble = `<div class="swiper-container">
    <div class="swiper-wrapper">
    `
    let postamble = `</div>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-pagination"></div>
    </div>
    `

    html = cards.reduce((html, item) => {
        return html + itemTemplate(item);
    }, preamble);
    html += postamble;

    return html;
}



const makeSectionHtml = function ({ sectionName, cards }, i) {
// each section is an accordian component
// https://codepen.io/allmanaj/pen/dyPqOxo


    let sectionPreamble = `
<li id="section-${i}" class="flex align-center flex-col">
    <h4 class="cursor-pointer px-5 py-3 bg-indigo-400 text-white text-center inline-block hover:opacity-75 hover:shadow hover:-mb-3">
        ${sectionName} </h4>
    <div class="flex flex-row space-x-4 hidden">
        `;

    let sectionPostamble = `
    </div>
</li>
`
    html = sectionPreamble + makeItemsHtml(cards) + sectionPostamble;
    return html;
};


const makeHtml = function (sectionAndCardsData){
  html = `            <li id="section-0" class="flex align-center flex-col">
                <h4 
                    class="cursor-pointer px-5 py-3 bg-indigo-300 text-white text-center inline-block hover:opacity-75 hover:shadow hover:-mb-3 rounded-t">
                    Tim McKeaveney, Personal Website
                </h4>
                <p class=" flex justify-center  py-0 px-0 ">
                    <img class=" banner-image" src="assets/images/banner.jpg">
                </p>
            </li>
`
  sectionAndCardsData.forEach((sect, i) => {
//     each sect is an object containing a sectionName, and 
//     cards (an array of objects for)
    html +=  makeSectionHtml(sect, i+1);
  });
  return html;
};




