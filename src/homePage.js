import menuPageDisplay from './menuPage.js';
import contactPageDisplay from './contactPage.js';

export default function homePageDisplay(element) {
    console.log('I got called from homePage.js!');

    element.innerHTML = "";

    // Create elements for webpage
    
    const navbar = document.createElement("div");
    const homeBtn = document.createElement("button");
    homeBtn.innerText = "Home";
    homeBtn.setAttribute("id", "homeBtn");
        homeBtn.addEventListener("click", function() {
        homePageDisplay(element);
        })

    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Menu";
    menuBtn.setAttribute("id", "menuBtn");
    menuBtn.addEventListener("click", function() {
    menuPageDisplay(element);
})
    const contactBtn = document.createElement("button");
    contactBtn.innerText = "Contact";
    contactBtn.setAttribute("id", "contactBtn");
    contactBtn.addEventListener("click", function() {
    contactPageDisplay(element);
})
    

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    const header = document.createElement("header");
    header.textContent = "Welcome to Pizza Palace!";
    header.classList.add("test");

    const heroImage = document.createElement("img");
    heroImage.setAttribute("height", "300px");
    heroImage.setAttribute("width", "300px");
    heroImage.setAttribute("id", "hero-image");
    heroImage.setAttribute("src", "../hero-image.png");

    const heroMessage = document.createElement("p");
    heroMessage.setAttribute("id", "hero-message");
    heroMessage.textContent = 
            "Welcome to our beloved pizza restaurant, where family traditions and exceptional service blend to create an unforgettable dining experience!"
            + '\n' + "For over three decades, we have proudly served our community with the utmost passion, dedication, and, of course, mouthwatering pizzas."
            + '\n' + "Our commitment to preserving that legacy is unwavering. From the moment you step into our cozy establishment,"
            + '\n' + "our warm and friendly staff greets you with genuine smiles, eager to provide exceptional customer service that goes beyond expectations."
            + '\n' + "Our pizzas are a masterpiece, meticulously prepared with only the freshest ingredients, hand-tossed dough, and a blend of flavorful sauces that dance on your palate."
            + '\n' + "Each pizza is lovingly topped with an abundance of premium cheeses and a variety of meticulously selected toppings, ensuring every bite is a symphony of flavors."
            + '\n' + "So join us, as we invite you to savor the magic of our cherished family recipe, experience the warmth of our genuine customer service, and become a part of our pizza-loving family.";
    
    heroMessage.classList.add('test');

    // Add elements to content elem
    element.appendChild(navbar);
    element.appendChild(header);
    element.appendChild(heroImage);
    element.appendChild(heroMessage);

  }
