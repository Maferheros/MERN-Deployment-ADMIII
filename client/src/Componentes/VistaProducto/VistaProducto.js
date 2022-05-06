import {useParams} from 'react-router';
import {useEffect, useState} from 'react';
import axios from 'axios';

function VistaProducto (props){
    console.log(props)
    const {id} = useParams();
    const [listaId, setListaId] = useState ( {} );

    useEffect (() => {
        axios.get( `http://localhost:8080/api/product/${id}`)
          .then( response => {
            setListaId ( () => response.data);
            console.log(response.data)
            })
            .catch (err => {
                console.log (err);
            });
      }, [id]);

    return(
        <div>
           <h1> {listaId.titulo} </h1>
           <p> Precio : ${listaId.precio} </p>
           <p> Descripcion : {listaId.descripcion} </p>
        </div>
    )
}

export default VistaProducto;