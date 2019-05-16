import Home from '../Home';
import React from 'react';
import { Route } from 'react-router-dom';
import Admin from '../Admin';
import Categorias from '../Categorias';
import Tipo from '../Tipo';

const Routes = props => {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/categorias/:id' component={Categorias} />
      <Route exact path='/tipos/:tipo' component={Tipo} />
    </>
  );
};

export default Routes;