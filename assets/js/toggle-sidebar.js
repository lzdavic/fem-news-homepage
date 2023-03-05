const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')
const sidebar = document.getElementById('sidebar')

toggle();

function toggle() {
    if (window.innerWidth <= 650) {
        btnOpen.addEventListener('click', () => {
            sidebar.style = 'display: block;'
        })
        btnClose.addEventListener('click', () => {
            sidebar.style = 'display: none;'
        })
    } else {
        sidebar.style = 'display: block;'
    }
}