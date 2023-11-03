// grabbed the form
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    //this will prevent the page from reloading so we don't lose data
    event.preventDefault();
    // get target data
    const { name, id, cryptoCurrencies, price, inStock } = event.target;
    // call the generate NFT f(x)
    generateNFT(name.value, id.value, cryptoCurrencies.value, price.value, inStock.value);
    console.log(name.value, id.value, cryptoCurrencies.value, price.value, inStock.value);

    //clear inputs from form 
    form.reset(); 
}); 

// test script connection
// console.log("test..from main");
