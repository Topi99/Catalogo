import React from 'react';
import { withFirebase, useQuery } from '../Firebase';
import Grid from '../Grid';

const Categorias = ({firebase, match}) => {
  const categoriaRef = firebase.db.collection('elemento').where('categoriaID','==',match.params.id);
  const { isLoading, data } = useQuery(categoriaRef);
  
  return(
    <section className="Categorias">
      <main>
        <Grid path='/elemento/' isLoading={isLoading} data={data} />
      </main>
    </section>
  ); 
}

export default withFirebase(Categorias);