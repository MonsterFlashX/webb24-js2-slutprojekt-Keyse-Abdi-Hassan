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
    <>
    <div id="header2">
    <h1>Kundvagnssida</h1>
    </div>
    <div id="content2">
        <article id="article">
            <h3 id="title3">Kundvagn</h3>
        </article>
        <section id="product-sum">
            <article>
                    <strong id="strong1">Produkt 1 -</strong>
                    <strong id="strong2">Produkt 2 -</strong>
                    <strong id="strong3">Produkt 3 -</strong>
                    <strong id="strong4">Produkt 4 -</strong>
                    <strong id="strong5">Produkt 5 -</strong>
                    <strong id="strong6">Produkt 6 -</strong>
            </article>
        </section>
        <section id="payment">
        <form id="button7">
                    <button type="submit">Betala</button>
                </form>
                <form id="button8">
                    <button type="submit">Töm</button>
                </form>
        </section>
    </div>
    </>
    );
 }
 
 export default Cart;
  