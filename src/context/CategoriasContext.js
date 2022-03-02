import React from 'react';
import { createContext,useState,useEffect } from 'react';
import axios from 'axios';
// Creamos el context 
export const CateoriasContext = createContext();

//Siempre creamos un provider, el provider es de donde van a salir los datos y las funciones 
const CategoriasProvider = (props) => {


    

    const[categorias,guardarCategorias]=useState([]);

    //hacer el llamado a la api
    useEffect(()=>{
       
        const obtenerCategorias= async () =>{

            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }

        obtenerCategorias();
    },[]);

    // en esta parte se retornan los datos para los componentes 
    return(

        <CateoriasContext.Provider value={{
            categorias
        }} >
            {props.children}
        </CateoriasContext.Provider>

    )
}


export default CategoriasProvider;