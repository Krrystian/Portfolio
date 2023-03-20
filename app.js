function classOnClick() {
    const menu = document.querySelector('.menu');
    const btns = menu.querySelectorAll('.btn-icon');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // remove class 'active-btn'
            if(!btn.parentElement.classList.contains('active-btn')) {
                btns.forEach(otherBtn => {
                    if (btn !== otherBtn) {
                        otherBtn.parentElement.classList.remove('active-btn');
                    }
                });
                // add active-btn to class
                btn.parentElement.classList.add('active-btn');
                // change scene: remove .active class -> find data-id value and add active
                document.querySelector('.active').classList.remove('active');
                const element = document.getElementById(btn.dataset.id).classList;
                element.add('active');
            }
        });
    });
}
function colorTheme(){
    const body = document.querySelector('body');
    body.parentElement.classList.toggle('dm');
    const icon = document.getElementById('lightmode-icon');
    if(icon.classList.contains('fa-moon')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    else{
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
}
classOnClick();