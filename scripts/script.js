
window.addEventListener("DOMContentLoaded", () => {

    function setImage() {
        const imageHolder = document.querySelector('.header-image-holder');
        const url = 'https://robohash.org/set_set';
        const image = document.createElement('img');
        image.src = url + Math.round(Math.random() * 10);
        imageHolder.append(image);
    }
    
    function getDate() {
        const date = new Date();
        const dateElement = document.querySelector('.date');
        dateElement.innerHTML = date.getFullYear();
    }

    const switchMode = document.querySelector('.switch-mode');
    const contactBtn = document.querySelector('.contact-btn');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close');

    function nightMode() {
        if(localStorage.getItem('switchMode')) {
            document.body.classList.add('dark-theme');
            switchMode.children[0].classList.remove('fa-moon');
            switchMode.children[0].classList.add('fa-sun')

        } else {
            document.body.classList.remove('dark-theme');
            switchMode.children[0].classList.remove('fa-sun');
            switchMode.children[0].classList.add('fa-moon')
        }
    }

    switchMode.addEventListener('click', () => {
        if(localStorage.getItem('switchMode')) {
            localStorage.removeItem('switchMode')
        } else {
            localStorage.setItem('switchMode', true);
        }

        nightMode();
    })

    nightMode();
    setImage();
    getDate();


   
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('modal-active');
    });


    function removeModal() {
        document.body.classList.remove('modal-active');
        console.log('works')
    }

    overlay.addEventListener('click', removeModal);
    closeBtn.addEventListener('click', removeModal);
});
