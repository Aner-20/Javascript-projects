const openModalButton = document.querySelector('.openModal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    console.log(modal);
    openModal(modal);
})


closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    console.log(modal);
    closeModal(modal);
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.modal.active');
    closeModal(modal)
})



function openModal(modal){
    if (modal == null) 
    return
    modal.classList.add('active');
    overlay.classList.add('active');
}


function closeModal(modal) {
    if (modal == null)
    return 
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
