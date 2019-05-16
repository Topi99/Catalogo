import React from 'react';
import { withFirebase } from '../Firebase';

const Admin = ({firebase}) => {
  return(
    <>
      admin
    </>
  )
}

export default withFirebase(Admin);