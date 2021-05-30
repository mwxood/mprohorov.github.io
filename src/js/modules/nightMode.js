const nightMode = () => {
    const switchMode = document.querySelector ('.switch-mode');

    const nightMode = () => {
        if (localStorage.getItem('switchMode')) {
            document.body.classList.add ('dark-theme');
            switchMode.children[0].classList.remove('fa-moon');
            switchMode.children[0].classList.add('fa-sun');
            console.log('dasdasd')
    
        } else {
            document.body.classList.remove ('dark-theme');
            switchMode.children[0].classList.remove('fa-sun');
            switchMode.children[0].classList.add('fa-moon');
        }
    };

    try {
        switchMode.addEventListener ('click', () => {
            if (localStorage.getItem('switchMode')) {
                localStorage.removeItem('switchMode');
            } else {
                localStorage.setItem ('switchMode', true);
            }
    
            nightMode ();
        });
    } catch(e) {}

    nightMode();
};

export default nightMode;