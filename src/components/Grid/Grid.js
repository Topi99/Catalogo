import React from 'react';
import Card from '../Card';

const GetCards = ({path, isLoading, data}) => {
  if(!isLoading) {
    if(data.docs.length) {  
      return(
        data.docs.map(cat => 
          <Card 
            key={cat.id} 
            titulo={cat.data().nombre} 
            link={`${path}${cat.id}/`}
            descripcion={cat.data().descripcion}
            imgSrc={cat.data().imgSrc}
          />
        )
      );
    } else {
      return(<p className="info">No hay nada por aquí :(</p>);
    }
  } else {
    return(<p className="loading">Cargando... :)</p>);
  }
}

const Grid = ({isLoading, data, path}) => {
  return(
    <section className="categories">
      <GetCards path={path} isLoading={isLoading} data={data} />
    </section>
  );
};

export default Grid;