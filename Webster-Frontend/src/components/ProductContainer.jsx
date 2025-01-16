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
    <html>
    <body id="body3">
    <div id="wrapper3">
        <div id="header3">
            <header>
                <h1 id="h1">Produkt</h1>
            </header>
        </div>
        <div id="topnav3">
            <nav>
                <a href="Webster.html">Introduktion</a>
                <a href="Kundvagnssida.html">Kundvagn</a>
            </nav>
        </div>
        <div id="content3">
            <article id="article">
                <h3 id="title">Produkter</h3>
                <p id="p">I denna sidan, så hittar man olika produkter med lagom kvalitet och användarvänliga komponenterna för rättvist pris och inkluderar även rabatt för en bättre pris</p>
            </article>
            <section id="product-card1">
                <img id="notepad" src="Notepad.avif" width="300px" height="250px" alt="Notepad"></img>
                <article id="info1">
                    <p>Produkt 1 - 25 kr</p>
                </article>
                <article id="info2">
                    <p>Lager: 250</p>
                </article>
                <form id="button1">
                    <button type="submit" onClick={addProduct}>Lägg till</button>
                </form>
            </section>
            <section id="product-card2">
                <img id="lamp" src="Lamp.jpg" width="300px" height="250px" alt="Lamp"></img>
                <article id="info3">
                    <p>Produkt 2 - 500 kr</p>
                </article>
                <article id="info4">
                    <p>Lager: 500</p>
                </article>
                <form id="button2">
                    <button type="submit" onClick={addProduct}>Lägg till</button>
                </form>
            </section>
            <section id="product-card3">
                <img id="toy" src="Hulk.jpg" width="300px" height="250px" alt="Hulk"></img>
                <article id="info5">
                    <p>Produkt 3 - 750 kr</p>
                </article>
                <article id="info6">
                    <p>Lager: 750</p>
                </article>
                <form id="button3">
                    <button type="submit" onClick={addProduct}>Lägg till</button>
                </form>
            </section>
        </div>
        <div id="footer3">
            <footer>Copyright &amp; Webster 2024</footer>
        </div>
    </div>
    </body>
    </html>
  );
}

export default React;
