function navigation(){
    const icon = document.querySelector('#icon');
    const navbar = document.querySelector(".navbar")


    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times")
        navbar.style.left = "0";
    }
    else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars")
        navbar.style.left = "-100%";
        console.log(navbar)
    }


}