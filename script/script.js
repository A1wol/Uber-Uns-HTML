let swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let modal = document.getElementById("modal");
let img = document.getElementsByTagName('img').item(0);
let modalImg = document.getElementById("modalImg");
let captionText = document.getElementById("modal__header");
document.querySelectorAll(".slide-img").forEach((item) => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });
    item.addEventListener("click", (event) => {
        modal.style.display = "flex";
        modal.style.position = "fixed";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    });
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
} 