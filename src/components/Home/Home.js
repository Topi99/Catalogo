import React, { useState } from 'react';
import Card from '../Card';
import { withFirebase, useQuery } from '../Firebase';

const Home = ({firebase}) => {

  const refCategorias = firebase.db.collection('categorias');
  const { isLoading, data} = useQuery(refCategorias);

  const getCategorias = categorias => {
    if(categorias) {  
      return(
        categorias.docs.map(cat => 
          <Card 
            key={cat.id} 
            titulo={cat.data().nombre} 
            link={`/categorias/${cat.id}/`}
            imgSrc={cat.data().imgSrc}
          />
        )
      );
    } else {
      return(<p>No hay nada por aquí :(</p>)
    }
  }

  return(
    <section className="Home">
      <main>
        <section className="categories">
          {
            getCategorias(data)
          }
        </section>
      </main>
    </section>
  );
};

export default withFirebase(Home);