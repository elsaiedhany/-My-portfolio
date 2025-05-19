function changeLanguage(lang) {
    // Save language preference to localStorage
    localStorage.setItem('lang', lang);

    // Set document direction based on language
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
    }

    // Update text content based on data-en and data-ar attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'ar') {
            element.textContent = element.getAttribute('data-ar');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Update title tag
    const titleElement = document.querySelector('title');
    if (titleElement) {
        if (lang === 'ar') {
            titleElement.textContent = titleElement.getAttribute('data-ar');
        } else {
            titleElement.textContent = titleElement.getAttribute('data-en');
        }
    }

    // Update active state for language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Optionally, update active state for navigation links if needed
    // You might want to handle this based on current page URL
}
