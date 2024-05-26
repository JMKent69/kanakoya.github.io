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

// Function to load the menu bar
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
            setLanguage('en'); // Initialize the language
        });
}

// Initialize the page
window.onload = function() {
    loadMenu();
};
