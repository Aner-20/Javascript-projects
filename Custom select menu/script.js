const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const options = wrapper.querySelector(".options");
const searchInp = wrapper.querySelector("input")
let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];




function addCountry(selectedCountry){
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class=${isSelected}>${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    })
}

addCountry();

function updateName(selectedli){
    searchInp.value = "";
    addCountry(selectedli.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedli.innerText   // for some reason firstElementChild is foundamental to keep the angle
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedValue = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("") // join() returns the arr as a string
    //console.log(arr);
    options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
})

selectBtn.addEventListener('click', () => {
    wrapper.classList.toggle("active");
})




