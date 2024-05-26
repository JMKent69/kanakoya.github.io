function toggleLanguage(language) {
    const elementsEn = document.getElementsByClassName('lang-en');
    const elementsJa = document.getElementsByClassName('lang-ja');

    if (language === 'en') {
        for (let i = 0; i < elementsEn.length; i++) {
            elementsEn[i].style.display = 'block';
        }
        for (let i = 0; i < elementsJa.length; i++) {
            elementsJa[i].style.display = 'none';
        }
    } else if (language === 'ja') {
        for (let i = 0; i < elementsEn.length; i++) {
            elementsEn[i].style.display = 'none';
        }
        for (let i = 0; i < elementsJa.length; i++) {
            elementsJa[i].style.display = 'block';
        }
    }
}

function setLanguage(lang) {
    const enElements = document.getElementsByClassName('lang-en');
    const jaElements = document.getElementsByClassName('lang-ja');

    if (lang === 'en') {
        for (let i = 0; i < enElements.length; i++) {
            enElements[i].style.display = 'block';
        }
        for (let i = 0; i < jaElements.length; i++) {
            jaElements[i].style.display = 'none';
        }
    } else if (lang === 'ja') {
        for (let i = 0; i < enElements.length; i++) {
            enElements[i].style.display = 'none';
        }
        for (let i = 0; i < jaElements.length; i++) {
            jaElements[i].style.display = 'block';
        }
    }
}

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Initialize the page
window.onload = function() {
    setLanguage('en');
    showSlides();
};
