// this f(x) will change the text of the In Stock Button when clicked 
// Will need an event listener for the button is clicked 
const stockButton = document.querySelector(".stock-changer"); 
stockButton.addEventListener("click", function() {
    if (stockButton.textContent === "In Stock") {
    stockButton.textContent = "Out of Stock";
    stockButton.style.background = "#8a1016"; 
    } else if (stockButton.textContent === "Out of Stock") {
        stockButton.textContent = "In Stock";
        stockButton.style.background = "#73956f"; 
    }
})
//will need to manipulate the button itself to change the text 
//will use controlflow/boolean 
