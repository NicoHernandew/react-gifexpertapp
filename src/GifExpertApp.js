import React, { useState } from 'react';
import AddCategories from './components/AddCategories';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = ()=>{

     
const [categorias,setCategorias]=useState( ['Saludos']);


    return (
        <>
         <h2>GifExpertApp</h2>
         <AddCategories fnSetCategoria={setCategorias}/>
         <hr/>

         <ol>
             {
             categorias.map(categorias => 
             <GifGrid
              key = {categorias}
              categoria = {categorias} 
              />
             )
             }
         </ol>
        </>
    )
}

export default GifExpertApp;