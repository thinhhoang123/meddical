// searching icon display
var searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener('click', () => document.getElementById('search').classList.toggle('show-text'));

// our servieces
function openTab(event, tabName) {
    var tabContent = document.getElementsByClassName('tabcontent');
    var tabLinks = document.getElementsByClassName('tablinks');
    for (let element of tabContent) {
        element.style.display = 'none';
    }
    for (let element of tabLinks) {
        element.className = element.className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = "inline-block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

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