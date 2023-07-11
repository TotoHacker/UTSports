import React from 'react'
import Header from './Componente/Header';
import Footer from './Componente/Footer';
function App(){
    return(
        
        <div className=''>
         <Header></Header>      
         <div className='conten2'>
            
            <div>
             <h1 className='titinit'>Carrito de compra</h1>    
            </div>
            <table>
                 <a className='Paddin' href="">No#</a>
                <a className='Paddin' href="">Producto</a>
                <a className='Paddin' href="">Precio</a>
                
            </table>
            <table >
                <a className='PaddinCon' href="">###</a>
                <a className='PaddinCon' href="">#####</a>
                <a className='PaddinCon' href="">####</a>
            </table>
            <button className='volver'>Pagar todo</button>
           <button className='volver'>Volver al catalogo</button>

           <Footer></Footer> 
         </div> 
        </div>
        
    );
}
export default App