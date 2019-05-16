import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({titulo, descripcion, imgSrc, link, className}) => {
  return(
    <article className={`Card ${className}`}>
      <Link to={link}>
        <div className="img-container">
          <img src={imgSrc} alt={titulo} />
        </div>
        <div className="info">
          <p className="title">{titulo}</p>
          <p className="description">{descripcion}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;