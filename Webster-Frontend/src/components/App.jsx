// Importerar nödvändiga biblioteker och komponenterna
import { React } from 'react';
import { Cart } from './Cart';
import { Loading } from './Loading';
import { Error } from './Error';
// Definierar App komponenterna
export function App() {
    const [status, setStatus] = useState('success');
    const [Products, setProducts] = useState(['Notepad', 'Lamp', 'Hulk']);
    const [updateProducts, setItems] = useState([newValue]);

    function updateProducts(newProduct){
        // setState kan ta en callbackfunktion som argument, den behöver returnera det nya värdet som statet ska ha
        // Callbackfunktionens parameter kommer innehålla det nuvarande värdet av statet
        setItems( current =>{
            currentItem = [...current];
            currentItem.push(newProduct);
            currentItem.shift();
            return currentItem;
        } );
    }

    useEffect(()=>{
        setStatus('loading');

        fetchProducts(Products[Products.length-1])
            .then((Products)=>{ 
                setProducts(Products); 
                setStatus('success') 
            })
            .catch(()=>{ setStatus('error')} );
    }, [lastSearches])
    
  return (
    <>
            <main>
                {/* Loading eller Error eller ProductContainer */}
                {status == 'loading' && <Loading/>}
                {status == 'error' && <Error/>}
                {status == 'success' && <ProductContainer Items={setItems}/>}
                {status == 'cart' && <Cart Products={setProducts}/>}
            </main>
        </>
  );
}

export default App;

const root = createRoot(document.querySelector('#root'));
root.render(<App/>);
root.render(<Product/>);
root.render(<Cart/>);
root.render(<Loading/>);
root.render(<Error/>);
