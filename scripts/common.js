const header = () => {
  const burderMenu = document.querySelector('#burger-menu')
  const menuList = document.querySelector('#menu-list')

  burderMenu.addEventListener('click', () => {
    burderMenu.classList.toggle('toggle')
    menuList.classList.toggle('active')
  })

  const menuDropDown = document.querySelector('.menu-item.drop-down')
  menuDropDown.addEventListener('click', () => {
    document.querySelector('.menu-item.drop-down .drop-down-content').classList.toggle('active')
  })
}

header()
