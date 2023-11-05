function nftTemplate(name, id, cryptoCurrencies, price, inStock) {
    const li = document.createElement("li");
    li.classList.add("nftList");  
    //create a button 
    const removeButton = document.createElement("button");
    removeButton.classList.add = "remove"
    //add text to button 
    removeButton.textContent = "Remove NFT";
    //add an event listner to the button tp remove the li
    removeButton.addEventListener("click", (event) => {
    //find closest li to this button and remove it 
    event.target.closest(".nftList").remove();
    });

    if (name && id && cryptoCurrencies && price && inStock === "In Stock") {
        li.innerHTML = `<h3>👾</h3><p><strong>NFT Name</strong>: ${name}</p>
        <p><strong>NFT ID</strong>: ${id}</p>
        <p><strong>Crypto</strong>: ${cryptoCurrencies}</p>
        <p><strong>Price</strong>: ${price}</p>
        <p><strong>Stock</strong>: ${inStock}</p>`;

        // need to add logic for in stock/ out of stock putton to append here
        li.append(stockChange); 
        // append revove button to the li 
        li.append(removeButton);
    }

    return li; 
}

function generateNFT(name, id, cryptoCurrencies, price, inStock) {
    const li = nftTemplate(name, id, cryptoCurrencies, price, inStock);
    console.log("The test!!!!!",li) 
    const ul = document.querySelector("ul"); 
    ul.append(li); 
}

// this gives the Remove NFT button functionality and allows user to effectively remove any NFT from NFT Collection by clicking "Remove NFT"
const listItems = document.querySelectorAll(".remove");
// loop through elements
for(item of listItems) {
    item.addEventListener('click', (event) => {
        event.target.closest(".nftList").remove(); 
    });
}

// test if script is properly connected 
// console.log("test...from NFT generator"); 
