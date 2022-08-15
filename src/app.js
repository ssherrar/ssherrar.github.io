const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
// const navigation = document.getElementById('navigation')

function toggleButton() {
    navList.classList.toggle('show')
    // navigation.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)