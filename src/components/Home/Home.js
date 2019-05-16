import React from 'react';
import { withFirebase, useQuery } from '../Firebase';
import Grid from '../Grid';

const Home = ({firebase}) => {

  const refCategorias = firebase.db.collection('categorias');
  const { isLoading, data} = useQuery(refCategorias);

  return(
    <section className="Home">
      <main>
        <Grid path='/categorias/' isLoading={isLoading} data={data} />
      </main>
    </section>
  );
};

export default withFirebase(Home);