// 06/05/2022

let quote1;
let quote2;
let quote3;
let quote4;
let quote5;

let author1;
let author2;
let author3;
let author4;
let author5;

quote1 = "When the going gets tough, the tough get going.";
quote2 = "Life is what happens when you’re busy making other plans";
quote3 = "That which does not kill us makes us stronger.";
quote4 = "The journey of a thousand miles begins with one step";
quote5 = "Tough times never last but tough people do.";

author1 = "- Joe Kennedy";
author2 = "- John Lennon";
author3 = "- Friedrich Nietzsche";
author4 = "- Lao Tzu"
author5 = "- Robert H. Schuller";

let quotes = [quote1, quote2, quote3, quote4, quote5];
let authors = [author1, author2, author3, author4, author5];


document.getElementById("btn").onclick = function(){
    class Generator{

        constructor(quote, author){
            this.quote = quote;
            this.author = author;
    
        }
    }
    
    const generator1 = new Generator(quote1, author1);
    const generator2 = new Generator(quote2, author2);
    const generator3 = new Generator(quote3, author3);
    const generator4 = new Generator(quote4, author4);
    const generator5 = new Generator(quote5, author5);
    
    let generators = [generator1, generator2, generator3, generator4, generator5];
    generators = generators[Math.floor(Math.random() * generators.length)];
    
    document.getElementById("quote").textContent = generators.quote;
    document.getElementById("author").textContent = generators.author;
    
}
