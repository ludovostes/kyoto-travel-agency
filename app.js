/* =================== NAVBAR ==================== */
/* -------------- ANIMATION NAVBAR --------------- */

const btnMenu = document.querySelector('.nav-logo-menu');
const menu = document.querySelector('.nav-liste');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active')
    })

const allLinks = document.querySelectorAll('.nav-item');

    allLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('active')
        })
    })