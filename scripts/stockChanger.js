// this f(x) will change the text of the In Stock Button when clicked 
// select all items with this stock-changer class (in our case these will only be buttons)
const stockButtons = document.querySelectorAll(".stock-changer"); 
function AddStockToggle (stockButton) {
        stockButton.addEventListener("click", function() {
        //because querySelectorAll returns an node list/collection of elements we must iterate through the list using a for-of loop 
        //will need to manipulate the button itself to change the text 
        //will use controlflow/boolean 
            if (stockButton.textContent === "In Stock") {
                //change text of button when clicked
                stockButton.textContent = "Out of Stock";
                //change button color when clicked
                stockButton.style.background = "#8a1016"; 
            // else change to in-stock
            } else {
                stockButton.textContent = "In Stock";
                stockButton.style.background = "#73956f"; 
            }
            })
}; 

// here we create a loop, to call f(x) each time we have a stockButton in the node list of stockButtons we're iterating through through our querySelector 
    for (const stockButton of stockButtons) {
        AddStockToggle(stockButton); 
    }