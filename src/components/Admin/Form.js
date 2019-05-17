import React, { useState } from 'react';
import { withFirebase, useQuery } from '../Firebase';

const Form = ({type, firebase}) => {

  const [ formData, setFormData ] = useState({
    autor: '',
    añoPub: '',
    cantidad: 0,
    categoria: '',
    categoriaID: '',
    descripcion: '',
    edicion: '1',
    editorial: '',
    idioma: '',
    imgSrc: '',
    nombre: '',
    pais: '',
    tipo: type
  });

  const handleChange = (value, id) => {
    if(id==='categoriaID') {
      setFormData({
        ...formData,
        [id]: value,
        categoria: data.docs.find(cat => cat.id === id).data().nombre
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
    console.log(formData)
  }

  const categRef = firebase.db.collection('categorias');
  const { isLoading, data } = useQuery(categRef);

  const getCategories = () => {
    if(data) {
      return data.docs.map(cat => <option value={cat.id}>{cat.data().nombre}</option>);
    }
  }

  const save = e => {
    e.preventDefault();
    firebase.db.collection('elemento').add(formData);
  }

  return(
    <form className="form no-padding" onSubmit={save}>
      <p className="subtitle">Nuevo {type}</p>
      <p className="field">
        <label htmlFor="nombre">Nombre del Libro: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.nombre} name="nombre" />
      </p>
      <p className="field">
        <label htmlFor="autor">Autor: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.autor} name="autor" />
      </p>
      <p className="field">
        <label htmlFor="añoPub">Año de publicación: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.añoPub} name="añoPub" />
      </p>
      <p className="field">
        <label htmlFor="cantidad">Cantidad: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} type='number' value={formData.cantidad} name="cantidad" />
      </p>
      <p className="field">
        <label htmlFor="categoriaID">Selecciona una categoria: </label>
        <select onChange={e => handleChange(e.target.value, e.target.name)} name='categoriaID' value={formData.categoriaID}>
          {
            getCategories()
          }
        </select>
      </p>
      <p className="field">
        <label htmlFor="descripcion">Descripcion: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.descripcion} name="descripcion" />
      </p>
      <p className="field">
        <label htmlFor="edicion">Edicion: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} type='number' value={formData.edicion} name="edicion" />
      </p>
      <p className="field">
        <label htmlFor="editorial">Editorial: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.editorial} name="editorial" />
      </p>
      <p className="field">
        <label htmlFor="idioma">Idioma: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.idioma} name="idioma" />
      </p>
      <p className="field">
        <label htmlFor="imgSrc">Enlace a la imagen: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.imgSrc} name="imgSrc" />
      </p>
      <p className="field">
        <label htmlFor="pais">Pais de origen: </label>
        <input onChange={e => handleChange(e.target.value, e.target.name)} value={formData.pais} name="pais" />
      </p>

      <button className="button">Agregar</button>
    </form>
  );
}

export default withFirebase(Form);