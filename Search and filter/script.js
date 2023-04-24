let products = {
    data: [
    {
        productName: "Regular White T-shirt",
        category: "Topwear",
        price: "30",
        image: "white t-shirt.png",
    },
       
    {
        productName: "Yellow sweater",
        category: "Topwear",
        price: "15",
        image: "Yellow sweater.png",
    },

    {
        productName: "Demin jacket",
        category: "Jacket",
        price: "70",
        image: "Demin jacket.png",
    },

    {
        productName: "Demin Skirt",
        category: "Bottomwear",
        price: "49",
        image: "demin skirt.png",
    },

    {
        productName: "Green trousers",
        category: "Bottomwear",
        price: "30",
        image: "Green trousers.png",
    },


    {
        productName: "Smart Watch",
        category: "Watch",
        price: "99",
        image: "Smart watch.png",
    },

    ],
};


for(let i of products.data){
    const card = document.createElement('div');
    
    // adding the class i.category and should stay hidden at the beginning
    card.classList.add('card', i.category, 'hide');

    // image div
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    // image tag
    const image = document.createElement('img');
    image.setAttribute('src', i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer)
    
    // is foundational to show the images, product names, prices
    document.getElementById('products').appendChild(card);

    //container
    const container = document.createElement('div');
    container.classList.add('container');
    
    // product name
    const name = document.createElement('h5');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    
    // to show the product name
    card.appendChild(container);
    console.log(card)

    // price
    const price = document.createElement('h6');
    price.innerText = "$ " + i.price;
    container.appendChild(price);

}


// Display all the products at the beginning



window.onload = () => {
    filterProduct("all");
};

// parameter passed from button 

function filterProduct(value){
    // button class code
    const buttons = document.querySelectorAll('.btn-value');
    buttons.forEach(button => {
        // checking if value equal innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active');
        }
        else{
            button.classList.remove('active');
        }
    });

    // select all cards
    const elements = document.querySelectorAll('.card');

    // loop through all cards

    elements.forEach((element) => {
        // display all cards on 'all' button click

        if(value == "all"){
            element.classList.remove('hide');
        }
        else{
            //check if element contains category class
            if(element.classList.contains(value)){
                // display element based on category
                element.classList.remove("hide");
            }
            else{
                // hide other elements
                element.classList.add('hide');

            }
        }
    });

};

// Search button click
document.querySelector('.search').addEventListener
('click', () => {
    const searchInput = document.querySelector('.search-input').value;
    const elements = document.querySelectorAll('.product-name');
    const cards = document.querySelectorAll('.card');
    // loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove('hide');
            
        }
        else{
            //hide others
            cards[index].classList.add('hide');
        }
    })
})


