const sidebar = document.getElementById('sidebar'),
    openBtn = document.getElementById('header__menu-btn'),
    exit = document.querySelector('.sidebar__child-exit i'),
    brandName = document.getElementById('header__logo__brand-name'),
    overlay = document.getElementById('overlay')

function qosh() {
    sidebar.classList.add('enter');
    brandName.classList.add('hidden');
    overlay.classList.add('hidden');
}
function yashir(){
    sidebar.classList.remove('enter');
    brandName.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

openBtn.addEventListener('click', qosh);
exit.addEventListener('click', yashir);
overlay.addEventListener('click', yashir)
