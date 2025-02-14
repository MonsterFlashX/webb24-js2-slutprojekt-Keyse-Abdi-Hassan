// Importerar nödvändiga biblioteker och komponenterna
import './App.css';
import { React } from 'react';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Loading } from './Loading';
import { Products } from './Products';
import { Error } from './Error';
import { Routes, Route } from 'react-router-dom';

function App(){
    return (
        <>
        <Navbar>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>
            <Loading>
                
            </Loading>
        </Navbar>         
        </>
      );
}


export default App;