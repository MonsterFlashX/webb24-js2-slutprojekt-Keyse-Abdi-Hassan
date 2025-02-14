// Importerar biblioteker och komponenterna
import {React} from 'react';
function addProduct() {
    const button1 = addEventListener("button1").innerHTML;
    const button2 = addEventListener("button2").innerHTML;
    const button3 = addEventListener("button3").innerHTML;

    if (button1 < "success")  {
        console.log("product added to your cart");
        alert("Success! Product Added To Your Cart");
    }
    else if (button1 > "error") {
        console.log("Product not added");
        alert("Failure! Product Not Added To Your Cart");
    }
    if (button2 < "success")  {
        console.log("product added to your cart");
        alert("Success! Product Added To Your Cart");

    }
    else if (button2 > "error") {
        console.log("Product not added");
        alert("Failure! Product Not Added To Your Cart");
    }
    if (button3 < "success")  {
        console.log("product added to your cart");
        alert("Success! Product Added To Your Cart");
    }
    else if (button3 > "error") {
        console.log("Product not added")
        alert("Failure! Product Not Added To Your Cart");
    }
}

// Definierar produktskomponenten
function Product() {
    const [cart, setCart] = useState();

    const addProductToCart = (productId) => {
      commerce.cart.add(productId, 1)
        .then(result => {
          setCart(result.cart);
          alert("Product added to cart");
        });
    }
  
    useEffect(() => {
      commerce.cart.retrieve()
        .then(cart => {
          setCart(cart);
        })
    }, [])
  
  
  return (
    <>
      <div id="header3">
      <h1 id="h1">Produktssida</h1>
      </div>
      <div id="content3">
        <article id="article">
          <h3 id="h3">Produkter</h3>
        </article>
        <section id="product-card1">
          <img id="notepad" src="Notepad.avif" width="300px" height="250px" alt="Notepad"></img>
          <article id="info1">
            <p>Produkt 1 - Anteckningsblock</p>
            <p>Pris: 25 kronor</p>
          </article>
          <article id="info2">
            <p>Lager: 25 st</p>
          </article>
          <form id="button1">
            <button type="submit">Lägg till</button>
          </form>
        </section>
        <section id="product-card2">
          <img id="lamp" src="Lamp.jpg" width="300px" height="250px" alt="Lamp"></img>
          <article id="info3">
            <p>Produkt 2 - Lampa</p>
            <p>Pris: 50 kronor</p>
          </article>
          <article id="info4">
            <p>Lager: 50 st</p>
          </article>
          <form id="button2">
            <button type="submit">Lägg till</button>
          </form>
        </section>
        <section id="product-card3">
          <img id="toy" src="Hulk.jpg" width="300px" height="250px" alt="Hulk"></img>
          <article id="info5">
            <p>Produkt 3 - Leksak</p>
            <p>Pris: 75 kronor</p>
          </article>
          <article id="info6">
            <p>Lager: 75 st</p>
          </article>
          <form id="button3">
            <button type="submit">Lägg till</button>
          </form>
        </section>
        <section id="product-card4">
          <img id="T-shirt" src="T-shirt.webp" width="300px" height="250px" alt="T-shirt"></img>
          <article id="info7">
            <p>Produkt 4 - Tröja</p>
            <p>Pris: 250 kronor</p>
          </article>
          <article id="info8">
            <p>Lager: 250 st</p>
          </article>
          <form id="button4">
            <button type="submit">Lägg till</button>
          </form>
        </section>
        <section id="product-card5">
          <img id="Mittens" src="Mittens.webp" width="300px" height="250px" alt="Mittens"></img>
          <article id="info9">
            <p>Produkt 5 - Vantar</p>
            <p>Pris: 90 kronor</p>
          </article>
          <article id="info10">
            <p>Lager: 50 st</p>
          </article>
          <form id="button5">
            <button type="submit">Lägg till</button>
          </form>
        </section>
        <section id="product-card6">
          <img id="Watch" src="Watch.avif" width="300px" height="250px" alt="Watch"></img>
          <article id="info11">
            <p>Produkt 6 - Klocka</p>
            <p>Pris: 2 500 kronor</p>
          </article>
          <article id="info12">
            <p>Lager: 75 st</p>
          </article>
          <form id="button6">
            <button type="submit">Lägg till</button>
          </form>
        </section>
      </div>
      <div id="footer3">
        <p>Copyright © Webster 2025</p>
      </div>
    </>
  );
}

export default React;
