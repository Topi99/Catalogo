import Home from '../Home';
import React from 'react';
import { Route } from 'react-router-dom';

const Routes = props => {
  return(
    <>
      <Route to='/' component={Home} />
    </>
  );
};

export default Routes;