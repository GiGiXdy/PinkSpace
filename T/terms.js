function changeLanguage(lang) {
    const esContent = document.getElementById('content-es');
    const enContent = document.getElementById('content-en');

    if (lang === 'es') {
        esContent.classList.add('active');
        enContent.classList.remove('active');
    } else if (lang === 'en') {
        enContent.classList.add('active');
        esContent.classList.remove('active');
    }
}
