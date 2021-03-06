import React from 'react';
import { useContext,useState } from 'react';
import { CateoriasContext } from '../context/CategoriasContext';
const Formulario = () => {


    const {categorias}  = useContext(CateoriasContext);
    const [busqueda,guardarBusqueda]=useState({
        nombre: '',
        categoria:''

    });


    // funcion para leer los contenidos 

    const obtenerDatosRecetas = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    return ( 

        <form
            className='col-md-12 '
        >
           <fieldset className='text-center'>
               <legend>Busca bebida por  categoria o ingrediente</legend>
           </fieldset>

           <div className='row mt-4'>
               <div className='col-md-4'>
                   <input name='nombre' type="text" className='form-control' placeholder='Buscar por ingrdiente' onChange={obtenerDatosRecetas}/>
               </div>
            
            <div className='col-md-4'>
                <select className='form-control' name="categoria" onChange={obtenerDatosRecetas}>
                    <option value="">....Selecciona categoria</option>
                    {categorias.map(categoria =>(
                        <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                    ))}
                </select>
            </div>

            <div className='col-md-4'>
                <input type="submit" className='btn btn-block btn-primary' value="buscar bebidas" />
            </div>

           </div>
        </form>

     );
}
 
export default Formulario;