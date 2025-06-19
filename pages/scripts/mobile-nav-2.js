const toggleButton = document.getElementsByClassName('toggle-button')
const navbarLinks = document.getElementsByClassName('kiwi') [0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})