let theme = false;

function switchTheme() {
  
  
  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const cardcolumn = document.querySelectorAll('.column')
  const footertext = document.querySelector('.navbar-text')
  const h1title = document.getElementById('h1_title')
  const button = document.getElementById('themeSwitch')
  const colmd8 = document.querySelector('.col-md-8')
  const colmd4 = document.querySelector('.col-md-4')


  if (theme === false) {
    document.body.classList.add('bg-dark')
    navbar.classList.remove('navbar-light', 'bg-light')
    navbar.classList.add('navbar-dark', 'bg-dark')
    cards.forEach(card => {
      card.classList.add('text-white', 'bg-dark', 'border-light')
    })
  
    tables.forEach(table => {
      table.classList.add('table-dark')
    })
  
    cardcolumn.forEach(card => {
      card.classList.remove('col')
      card.classList.add('col-12')
    })
  
    footertext.style.paddingLeft = '1700px'
    footertext.style.display = 'block'
    footertext.classList.add('text-white')
  
    h1title.innerHTML = "This is the dark theme"
    h1title.classList.add("text-white")
  
    button.innerHTML = "Activate Light Theme"   
    colmd8.classList.add("text-white")
    colmd4.classList.add("text-white")
  }
  else{
    document.body.classList.remove('bg-dark')
    navbar.classList.remove('navbar-dark', 'bg-dark')
    navbar.classList.add('navbar-light', 'bg-light')

    cards.forEach(card => {
      card.classList.remove('text-white', 'bg-dark', 'border-light')
    })
    
    tables.forEach(table => {
      table.classList.remove('table-dark')
    })

    cardcolumn.forEach(card => {
      card.classList.add('col')
      card.classList.remove('col-12')
    })
    colmd8.classList.add("text-dark")
    colmd4.classList.add("text-dark")
    button.innerHTML = "Activate Dark Theme"   
  }
  theme = !theme
}