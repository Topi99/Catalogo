import Home from '../Home';
import React from 'react';
import { Route } from 'react-router-dom';
import Admin from '../Admin';

const Routes = props => {
  return(
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
    </>
  );
};

export default Routes;