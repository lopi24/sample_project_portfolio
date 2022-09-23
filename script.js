// console.log('hello World')

const overlay = document.querySelector('.overlay')
let home = document.querySelector('.home')

const test = document.querySelector('.test')

home.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    overlay.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


home.addEventListener("mouseenter", (e) => {
    if(window.innerWidth >= 768) {
        overlay.style.transition = "all 0.5s ease";
        overlay.style.border = `100px solid white`;
    } else if(window.innerWidth <= 425) {
        home.addEventListener("mouseenter", (e) => {
            overlay.style.transition = "all 0.5s ease";
            overlay.style.border = `50px solid white`;
        })
    }
})


home.addEventListener("mouseleave", (e) => {
    overlay.style.transition = "all 0.5s ease";
    overlay.style.transform = `rotateY(0deg) rotateY(0deg)`;
    overlay.style.border = `50px solid white`
})

// nav collapse
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const nav = document.querySelector('.navs');
const initials = document.querySelector('.initials');
const socMeds = document.querySelector('.soc-meds')

let about = document.querySelector('.about')
let work = document.querySelector('.work')
let contact = document.querySelector('.contact')
    
let elementScrollTop = work.getBoundingClientRect().top

let elementScrollBot = work.getBoundingClientRect().bottom


window.addEventListener("scroll", () => {   
    
    

    const yAxis = window.scrollY

    if(window.scrollY > elementScrollTop && window.scrollY < elementScrollBot) {
        nav.classList.add("toggle")
        initials.classList.add("toggle")
        socMeds.classList.add("toggle")
        sidebar.classList.add("collapse")
        content.classList.add("toggle")
    } else {
        nav.classList.remove("toggle")
        initials.classList.remove("toggle")
        socMeds.classList.remove("toggle")
        sidebar.classList.remove("collapse")
        content.classList.remove("toggle")
    }
    

})

// carousel
const carouselSlide = document.querySelector('.carousel-imgs')
const carouselImgs = document.querySelectorAll('.slide')

//carousel btns 
const prevBtn = document.querySelector('#prevBtn')
const nxtBtn = document.querySelector('#nxtBtn')

//carousel counter
let counter = 0;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//btns listener
nxtBtn.addEventListener('click', () => {
    if(counter >= carouselImgs.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


let details = document.querySelectorAll('.slide .details');
let paragraphs = document.querySelectorAll('.slide .details p');

details.forEach(function(detail) {
    detail.addEventListener('mouseenter', () => {
        detail.style.transform = "translateY(-40vh) translateX(10vw)"
        paragraphs.forEach(function(paragraph) {
            paragraph.style.display = "flex";
        })

        detail.addEventListener('mouseleave', () => {
            detail.style.transform = "translateY(-20vh) translateX(10vw)"
            paragraphs.forEach(function(paragraph) {
                paragraph.style.display = "none";
            })
        })
    })
    
})

let navHome = document.querySelector('.navHome')
let navAbout = document.querySelector('.navAbout');
let navWork = document.querySelector('.navWork');
let navContact = document.querySelector('.navContact')

let homePage = document.querySelector('.home')
let aboutPage = document.querySelector('.about')
let workPage = document.querySelector('.slide img')
let contactPage = document.querySelector('.contact')

navHome.addEventListener('click', () => {
    homePage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

navAbout.addEventListener('click', () => {
    aboutPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

navWork.addEventListener('click', () => {
    // window.scrollBy(aboutPage, 0);
    workPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

navContact.addEventListener('click', () => {
    contactPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

window.onresize = function(){ location.reload(); }