const inputSite = document.querySelector('.siteInput');
const inputPassword = document.querySelector('.passwordInput')
const inputSearch = document.querySelector('.searchInput');
const addSiteButton = document.querySelector('#appendSite');
const clearButton = document.querySelector('.clearBtn')
const template = document.querySelector('template');
const sitesSection = document.querySelector('.sites-section');
const site = document.querySelector('.site');

let store = JSON.parse(localStorage.getItem('Password store'))

inputSite.addEventListener('keyup', () => {
    let site = inputSite.value;
});


inputPassword.addEventListener('keyup', () => {
    let password = inputPassword.value;
    let site = inputSite.value
    if(password.trim() != false && site.trim() != false){
        addSiteButton.classList.add('active');
        
    }
    else{
        addSiteButton.classList.remove('active');
        
    }
});



function displaySites(){
    let divSite = "";
    if(store){   // if statement is used to prevent an error
        store.map((item, id) => {
            divSite += `<div class="site">
            <label class="siteName">${item.name}</label>
            <button class="icons left-icon" id="copyIcon" onclick="copyPassword(${item.pwd})"><i class="fa-regular fa-copy"></i></button>
            <button class="icons right-icon" id="deleteIcon" onclick="deletePassword(${id})"><i class="fa-regular fa-trash-can"></i></button>
            </div>`
        }) 
        sitesSection.innerHTML = divSite
        //console.log(store.length)
        
    }
}

displaySites();

function copyPassword(passwordSite){
    navigator.clipboard.writeText(passwordSite);

}

function deletePassword(deleteIndex){
    store.splice(deleteIndex, 1);
    localStorage.setItem('Password store', JSON.stringify(store));
    displaySites();
}

clearButton.addEventListener('click', () => {
    store.splice(0, store.length);
    localStorage.setItem('Password store',  JSON.stringify(store)); // saving to localstorage with todo-list name
    displaySites();
})

addSiteButton.addEventListener('click', () => {
    let site = inputSite.value;
    let password = inputPassword.value;
    if(store == null){
        store = [];
    }
    let siteInfo = {name: site, pwd: password};
    //console.log(siteInfo);
    store.push(siteInfo);
    //console.log(store) // [{...}] --> 0: {name: ..., pwd: ...}
                       //             1: {name: ..., pwd: ...}
                       //             2: {name: ..., pwd: ...}
    localStorage.setItem('Password store', JSON.stringify(store)); // boot up the localStorage
    displaySites();
    
})


inputSearch.addEventListener('keyup', (e) => {
    localStorage.setItem('Password store', JSON.stringify(store));
    let text = e.target.value.toLowerCase();
    store.forEach(element => {
        let visible = element.name.toLowerCase().includes(text)
        element.name.classList.toggle('hide', !visible)
            
    })
})


