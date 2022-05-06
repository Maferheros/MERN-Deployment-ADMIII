import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router';
import { useHistory } from "react-router-dom";


function EditarProducto (props) {
    console.log( "editar:" + props)
    const {id} = useParams();
    console.log(id);
    const [titulo, setTitulo] = useState ('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('')
    const history = useHistory()
    const { removeFromDom } = props;
    
    useEffect (() => {
        axios.get( `http://localhost:8080/api/product/${id}`)
          .then( response => {
            setTitulo ( () => response.data.titulo);
            setPrecio ( () => response.data.precio);
            setDescripcion ( () => response.data.descripcion);
            console.log(response.data)
            })
            .catch (err => {
                console.log (err);
            });
      }, [id]);

const updateProducto = (event) => {
    event.preventDefault ();
    console.log(titulo, precio, descripcion);
    axios.put (`http://localhost:8080/api/product/${id}/edit`, {
        titulo,
        precio,
        descripcion
        })
        .then( response => {history.push( "/")});
    }

    const deleteProducto = (id) => {
        axios.delete ( `http://localhost:8080/api/product/delete/${id}` )
          .then ( response => {
            removeFromDom(id)
          })
      }

    return (
        <div>
            <h1> Update Product</h1>
            <form onSubmit={updateProducto}> 
                <p>
                    <label> Titulo: </label>
                    <input type="text" name="titulo"
                    value= {titulo}
                    onChange = {(event) => { setTitulo(event.target.value)} }/>
                </p>
                <p>
                    <label> Precio: </label>
                    <input type="number" name="precio"
                    value= {precio}
                    onChange = {(event) => { setPrecio(event.target.value)} }/>
                </p>
                <p>
                    <label> Descripcion: </label>
                    <input type="text" name="descripcion"
                    value= {descripcion}
                    onChange = {(event) => { setDescripcion(event.target.value)} }/>
                </p>
                <input type="submit"/>
                <button onClick={() => deleteProducto (id)}> Delete </button>
            </form>
        </div>
    )
}


export default EditarProducto;