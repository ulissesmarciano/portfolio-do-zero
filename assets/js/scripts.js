const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement
const acordions = document.querySelectorAll(".accordion__item")

acordions.forEach((header) => {
    header.classList.remove('active')
    let acordion = header.firstElementChild
    
    
    acordion.addEventListener('click', () => {
            let isActive = header.classList.contains('active')
            
            acordions.forEach(acordion => {
                acordion.classList.remove('active')
                
            });

            if (!isActive) {
                header.classList.add('active')
            }
            
        })
    
})



toggleTheme.addEventListener('click', () => {
    const currentTheme = rootHtml.getAttribute('data-theme')

   currentTheme === 'dark' ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
    
    toggleTheme.classList.toggle('bi-brightness-high')
    toggleTheme.classList.toggle('bi-moon-stars')
})
