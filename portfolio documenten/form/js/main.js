const navbtn = document.getElementById('js--navbtn');
const nav = document.getElementById('js--nav');
const body = document.getElementById('js--body');

navbtn.onclick = function(){
    if(nav.classList.contains('show')){
        nav.classList.remove('show');
        body.style.overflow = "inherit";
    } else {
        nav.classList.add('show');
        body.style.overflow = "hidden";
    }
}