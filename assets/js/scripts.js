const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement


toggleTheme.addEventListener('click', () => {
    const currentTheme = rootHtml.getAttribute('data-theme')

   currentTheme === 'dark' ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
    
    toggleTheme.classList.toggle('bi-brightness-high')
    toggleTheme.classList.toggle('bi-moon-stars')
})
