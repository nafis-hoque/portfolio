const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
		body.classList.add('menu-open')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
		body.classList.remove('menu-open')
	}
}

btnHamburger.addEventListener('click', displayList)

const navLinks = document.querySelectorAll('.nav__list-item a')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (document.querySelector('.nav__list').classList.contains('display-nav-list')) {
      displayList()
    }
  })
})

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom
    const windowHeight = window.innerHeight
    
    if (elementTop < windowHeight - 100 && elementBottom > 0) {
      element.classList.add('animate')
    }
  })
}

document.addEventListener('scroll', animateOnScroll)
document.addEventListener('DOMContentLoaded', animateOnScroll)