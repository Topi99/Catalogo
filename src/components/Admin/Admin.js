import React, { useState } from 'react';
import { withFirebase, useAuth } from '../Firebase';

const Admin = ({firebase}) => {

  const [ active, setActive ] = useState('inicio');
  const { isLoading, user } = useAuth(firebase.auth); 

  const getActive = () => {
    if(active==='inicio')
      return <div> Aquí podras añadir elementos a la base de datos.</div>
  
    if(active==='lib')
      return(
        <div> Aquí podras añadir libros a la base de datos.</div>
      );

    if(active==='cata')
      return(
        <div> Aquí podras añadir catálogos a la base de datos.</div>
      );

    if(active==='rev')
      return(
        <div> Aquí podras añadir revistas a la base de datos.</div>
      );

    if(active==='cate')
      return(
        <div> Aquí podras añadir categorías a la base de datos.</div>
      );
  }

  const [ correo, setCorreo ] = useState('');
  const [ pass, setPass ] = useState('');

  const handleCorreoChange = e => {
    setCorreo(e.target.value);
  }
  
  const handlePassChange = e => {
    setPass(e.target.value);
  }

  const login = e => {
    e.preventDefault();
    firebase.doSignInWithEmailAndPassword(correo, pass);
    setCorreo('');
    setPass('');
  }
  
  return(
    <section className="Admin">
      {
        user 
        ? <main className="Card active">
            <aside>
              <ul>
                <li onClick={() => setActive('lib')}>
                  <i className="material-icons">
                    library_books
                  </i>
                  <span>Nuevo Libro</span>
                </li>
                <li onClick={() => setActive('cata')}>
                  <i className="material-icons">
                    collections_bookmark
                  </i>
                  <span>Nuevo Catálogo</span>
                </li>
                <li onClick={() => setActive('rev')}>
                  <i className="material-icons">
                    photo_album
                  </i>
                  <span>Nueva Revista</span>
                </li>
                <li onClick={() => setActive('cate')}>
                  <i className="material-icons">
                    collections
                  </i>
                  <span>Nueva Categoría</span>
                </li>
                
                <li onClick={firebase.doSignOut}>
                  <i className="material-icons">
                  assignment_turned_in
                  </i>
                  <span>Cerrar Sesión</span>
                </li>
              </ul>
            </aside>

            <article>
              {
                getActive()
              }
            </article>
          </main>
        : <main className="Card active form">
            <p className="subtitle">Inicia sesión para continuar</p>
            <form onSubmit={login}>
              <p className="field">
                <label htmlFor="correo">Correo Electrónico</label>
                <input onChange={handleCorreoChange} value={correo} name="correo" placeholder="Escribe tu correo aquí" />
              </p>
              <p className="field">
                <label htmlFor="contraseña">Contraseña</label>
                <input onChange={handlePassChange} value={pass} type="password" name="contraseña" placeholder="Escribe tu contraseña aquí" />
              </p>
              <button className="button">Iniciar Sesión</button>
            </form>
          </main>
      }
    </section>
  )
}

export default withFirebase(Admin);