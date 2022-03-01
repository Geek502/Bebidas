import React from 'react';

const Formulario = () => {
    return ( 

        <form
            className='col-md-12 '
        >
           <fieldset className='text-center'>
               <legend>Busca bebida por  categoria o ingrediente</legend>
           </fieldset>

           <div className='row'>
               <div className='col-md-4'>
                   <input name='ingediente' type="text" className='form-control' placeholder='Buscar por ingrdiente'/>
               </div>
           </div>
        </form>

     );
}
 
export default Formulario;