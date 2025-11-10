let theme = false;

function switchTheme() {
  document.body.classList.add('bg-dark')
  
  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const cardcolumn = document.querySelectorAll('.column')
  const footertext = document.querySelector('.navbar-text')
  const h1title = document.getElementById('h1_title')
  const button = document.getElementById('themeSwitch')


  if (theme === false) {
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
  }
  else{
    navbar.classList.remove('navbar-dark', 'bg-dark')
    navbar.classList.add('navbar-light', 'bg-light')
  }
  theme = !theme
}