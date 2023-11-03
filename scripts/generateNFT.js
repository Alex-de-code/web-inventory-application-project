// import { randpix, RandpixColorScheme, Symmetry } from 'randpix';

// const generate = randpix({
//     colorScheme: RandpixColorScheme.DARKULA, // Color theme (default: NEUTRAL)
//     size: 8, // Art size. Recommended 7 or 8 (odd/even symmetry) (default: 8)
//     scale: 32, // Pixel scale (default: 1)
//     symmetry: Symmetry.VERTICAL, // Symmetry (default: VERTICAL)
//     color: [255, 100, 50], // [R, G, B] like color for solid art (default: undefined),
//     seed: 'Some string', // Seed (default: undefined)
//     colorBias: 15, // Slightly changes the color hue, which adds more color to the image (default: undefined)
//     grayscaleBias: false // Change only the brightness of the color instead of the hue (default: undefined)
//   });
  
// const art = generate() // Generating the pixel art
  
// const pngBuffer = art.toBuffer('image/png');
// const dataURL = art.toDataURL(); 

function nftTemplate(name, id, cryptoCurrencies, price, inStock) {
    const li = docuent.createElement("li");
    li.classList.add("nftList");  
    //create a button 
    const removeButton = document.createElement("button");
    removeButton.className = "remove"
    //add text to button 
    removeButton.textContent = "Remove NFT";
    //add an event listner to the button tp remove the li
    removeButton.addEventListener("click", (event) => {
    //find closest li to this button and remove it 
    event.target.closest(".nftList").remove();
    });

    if (name && id && cryptoCurrencies && price && inStock === "In Stock") {
        li.innterHTML = `<h3>👾</h3><p><strong>NFT Name</strong>: ${name}</p>;
        <p><strong>NFT ID</strong>: ${id}</p>;
        <p><strong>Crypto</strong>: ${cryptoCurrencies}</p>;
        <p><strong>Price</strong>: ${price}</p>;
        <p><strong>Stock</strong>: ${inStock}</p>`;

        // need to add logic for in stock/ out of stock putton to append here

        // append revove button to the li 
        li.append(removeButton);
    }

    return li; 
}

function generateNFT(name, id, cryptoCurrencies, price, inStock) {
    const li = nftTemplate(name, id, cryptoCurrencies, price, inStock);
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
