const template = document.querySelector('.template');
const box = document.querySelector('.box');
const search = document.querySelector('.search');
const sheet = document.querySelector('.card');

let persons = [
    {
        name: "Ivy",
        surname: "Aniston",
        age: '30'
    },

    {
        name: "Bruce",
        surname: "Wayne",
        age: '50'

    },

    {
        name: "Jack",
        surname: "Edison",
        age: '21'
    },

    {
        name: "David",
        surname: "Roller",
        age: '20'
    },

    {
        name: "Nicole",
        surname: "Robinson",
        age: '34'
    },

    {
        name: "Janice",
        surname: "Alder",
        age: '18'
    },

    {
        name: "Kait",
        surname: "Rossi",
        age: '39'
    },

    {
        name: "Darcie",
        surname: "Rhodes",
        age: '29'
    },

    {
        name: "Alexis",
        surname: "Jackson",
        age: '56'
    },

];

let users = [];

search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    //console.log(users);
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.surname.toLowerCase().includes(value) || user.age.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible); 
    })
});


users = persons.map(user => {
    const card = template.content.cloneNode(true).children[0];
    console.log(card)
    const name = card.querySelector('.name');
    const surname = card.querySelector('.surname');
    const age = card.querySelector('.age');
    name.textContent = "Name: " + user.name;
    surname.textContent = "Surname: " + user.surname;
    age.textContent = "Age: " + user.age;
    box.append(card);

    return {name: user.name, surname: user.surname, age: user.age, element: card}
});


