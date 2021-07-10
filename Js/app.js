// Select menu items when hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW 
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})
// HIDE 
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})


// Remove menu When Clicked On navMenu Items
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction)
)
// scroll section active link
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);


// Highlight NavMenu item when scrolling
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active');

        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active');
        }

    })
}
