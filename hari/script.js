const showPopupBtn = document.querySelector(".login-btn");
const formPopupBtn = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
showPopupBtn.addEventListener("click",()=> {
    document.body.classList.toggle("show-popup");
});
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
formPopupBtn.classList[link.id === "signup-link" ? 'add' : 'remove' ]("show-signup");
    });
});
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
