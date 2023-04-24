const progress = document.querySelector("#progress");
window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scroll / height) * 100;
    console.log(scrolled)
    progress.style.width = `${scrolled}%`;
})