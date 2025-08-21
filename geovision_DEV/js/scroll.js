window.addEventListener('scroll', () => {
    const buttonUp = document.querySelector('#btnUp');
    console.log(window.screenY);
    buttonUp.classList.toggle('btn-up-show', window.scrollY > 100);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})