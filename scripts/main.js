import { randpix, RandpixColorScheme, Symmetry } from 'randpix';


const generate = randpix({
    colorScheme: RandpixColorScheme.DARKULA, // Color theme (default: NEUTRAL)
    size: 8, // Art size. Recommended 7 or 8 (odd/even symmetry) (default: 8)
    scale: 32, // Pixel scale (default: 1)
    symmetry: Symmetry.VERTICAL, // Symmetry (default: VERTICAL)
    color: [255, 100, 50], // [R, G, B] like color for solid art (default: undefined),
    seed: 'Some string', // Seed (default: undefined)
    colorBias: 15, // Slightly changes the color hue, which adds more color to the image (default: undefined)
    grayscaleBias: false // Change only the brightness of the color instead of the hue (default: undefined)
  })
  
  const art = generate() // Generating the pixel art
  
  const pngBuffer = art.toBuffer('image/png')
  const dataURL = art.toDataURL()

//grabbed the form
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    //this will prevent the page from reloading so we don't lose data
    event.preventDefault();
    // get target data
    const { name, id, cryptoCurrencies, price, inStock } = event.target
    
})
