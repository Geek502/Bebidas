import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import { Fragment } from 'react';

function App() {
  return (
    
    <Fragment>
       <Header/>
    <div className='container mt-5'>
      <div className='row'>
          <Formulario />
      </div>
    </div>

    </Fragment>

  );
}

export default App;