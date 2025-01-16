 // Importerar biblioteker och komponenter
 import { React } from 'react';
    
 // Definierar Kundvagnskomponenten
 export function Cart() {
   const [AddCartItems, addCart] = useState([]);
 
   // Funktion som man lägger en produkt till kundvagnen
   function addCart(product) {
     AddCartItems(prevItems => [...prevItems, product]);

   }
 
   return (
    <html>
        <body id="body2">
    <div id="wrapper2">
        <div id="header2">
            <header>
                <h1 id="h1">Kundvagn</h1>
            </header>
        </div>
        <div id="topnav2">
            <nav>
                <a href="Webster.html">Introduktion</a>
                <a href="Produktsida.html">Produkt</a>
            </nav>
        </div>
        <div id="content2">
            <article id="article">
                <h3 id="title">Kundvagn</h3>
                <p id="p">I denna sidan, så ser man sin lista av föremål som man har lagt den i Kundvagnen och bestämmer om man vill slutföra sin köp eller tömma ut deras köp och välja nytt.</p>
            </article>
            <section id="product-sum">
                <article>
                    <strong id="strong1">Produkt 1 -</strong><br></br>
                    <strong id="strong2">Produkt 2 -</strong><br></br>
                    <strong id="strong3">Produkt 3 -</strong><br></br>
                </article>
            </section>
            <section id="payment">
                <form id="button4">
                    <button type="submit">Betala</button>
                </form>
                <form id="button5">
                    <button type="submit">Töm</button>
                </form>
            </section>
        </div>
        <div id="footer2">
            <footer>
                <h3>Copyright &amp; Webster 2024</h3>
            </footer>
        </div>
        </div>
    </body>
    </html>
   );
 }
 
 export default Cart;
  