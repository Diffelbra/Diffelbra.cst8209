function setTitle(newTitle) {
    const pageTitle = document.getElementById('pageTitle');
    pageTitle.innerText = newTitle;
    return 'Title has been updated to: $(newTitle)';
}

setTitle("<h1>");
increaseFontSize("<h1>");
decreaseFontSize("<h1>");
setBackgroundColor("lightyellow");
setFontColor("darkblue");
setTheme("theme2");