function switchTheme() {
  document.body.classList.add('bg-dark')
  
  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables = document.querySelectorAll('.table')
  const cardcolumn = document.querySelectorAll('.column')

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
}