//grabbed the form
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    //this will prevent the page from reloading so we don't lose data
    event.preventDefault();
    // get target data
    const { name, id, cryptoCurrencies, price, inStock } = event.target;

})
