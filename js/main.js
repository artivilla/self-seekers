function readMore() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('readTogglerBtn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more &darr;';
        moreText.style.display = 'none';
    }
    else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less &uarr;';
        btnText.style.display = 'none'; // display 'Read less' btn
        moreText.style.display = 'inline';
    }
}

function fadeSplashOnScroll() {
    const CHECKPOINT = 840;
    const splashScreen = document.getElementById('splashScreen');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= CHECKPOINT) {
            opacity = 1 - currentScroll / CHECKPOINT;
        } else {
            opacity = 0;
        }
        splashScreen.style.opacity = opacity;
    });
}

/* Close lookbook modal by clicking outside the modal itself */
var modal = document.getElementById('lookbookModal');
function displayLookBook() {
    modal.style.display = 'flex';
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
}

function setupLookBook() {
    showDivs(slideIndex);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function navLinkHighlightsOnScroll() {
    window.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`.nav li a[href="#${id}"]`).classList.add('active');
                } else {
                    document.querySelector(`.nav li a[href="#${id}"]`).classList.remove('active');
                }
            });
        });
        /* Track all sections that have an `id` applied */
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });
    });

    const navElem = document.querySelector('.nav li a');
    navElem.addEventListener('click', (event) => {
        navElem.classList.remove('active');
        event.target.classList.add('active');
    });
}

function triggerClipboard() {
    if (ClipboardJS.isSupported()) {
        new ClipboardJS('#copyEmail');
    }
    // TODO: add delay to tooltip
    tippy('[data-tippy-content]', { trigger: 'click' });
}

function crossFadeCoverArt() {
    const elem = document.querySelector('.cover-art > img');
    elem.addEventListener('mouseenter', function () {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
        if (viewportWidth > 1136) {
            elem.setAttribute('src', 'assets/cover-art-back.png');
        }
    })
    elem.addEventListener('mouseleave', function () {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (viewportWidth > 1136) {
            elem.setAttribute('src', 'assets/cover-art-front.png');
        }
    })
}

var slideIndex = 1;
fadeSplashOnScroll();
setupLookBook();
navLinkHighlightsOnScroll();
triggerClipboard();
crossFadeCoverArt();