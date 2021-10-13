var searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener('click', () => document.getElementById('search').classList.toggle('show-text'));


// quote
var quoteIndex = 1;
currentQuote(quoteIndex);

function currentQuote(numberQuote) {
    var dotsQuote = document.getElementsByClassName('dot-quote');
    var quote = document.getElementsByClassName('quote-content-slide');
    for (let element of quote) {
        element.style.display = 'none';
    }

    for (let element of dotsQuote) {
        element.className = element.className.replace(' dot-quote-active', '');
    }

    quote[numberQuote - 1].style.display = 'block';
    dotsQuote[numberQuote - 1].className += ' dot-quote-active';
}
// out doctor
var slideIndex = 1;
currentSlide(slideIndex);

function currentSlide(numberSlide) {
    var dots = document.getElementsByClassName('dot');
    var doctors = document.getElementsByClassName('doctor-file');
    for (let element of doctors) {
        element.style.display = 'none';
    }

    for (let element of dots) {
        element.className = element.className.replace(' dot-active', '');
    }

    doctors[numberSlide - 1].style.display = 'block';
    dots[numberSlide - 1].className += " dot-active";
}

// news
var newsIndex = 1;
currentNews(newsIndex);

function currentNews(numberNews) {
    var dotsNews = document.getElementsByClassName('dot-news');
    var News = document.getElementsByClassName('news-content-4');
    for (let element of News) {
        element.style.display = 'none';
    }

    for (let element of dotsNews) {
        element.className = element.className.replace(' dot-news-active', '');
    }

    News[numberNews - 1].style.display = 'block';
    dotsNews[numberNews - 1].className += ' dot-news-active';
}