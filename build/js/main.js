const init = () => {
    const hamburger = document.getElementById('hamburger-button')
    const mobile = document.getElementById('mobile-menu')

    const handleMenuClick = () => {
        mobile.classList.toggle('hidden')
        hamburger.classList.toggle('toggle-btn')
        console.log(hamburger)
    }

    mobile.addEventListener('click', handleMenuClick);
    hamburger.addEventListener('click', handleMenuClick);
};

document.addEventListener('DOMContentLoaded', init());