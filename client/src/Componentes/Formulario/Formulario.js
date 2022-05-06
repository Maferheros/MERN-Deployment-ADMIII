import {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

function Formulario (props){
    const [productos, setProductos] = useState( [] );
    const [titulo, setTitulo] = useState ('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('')
    const { removeFromDom } = props;
  
    const agregarProducto = (event) =>{
      event.preventDefault();
        const nuevoProducto = { titulo, precio, descripcion}
        console.log("producto:", nuevoProducto)
      
      axios.post ( ' http://localhost:8080/api/product/new ' , {
        titulo,
        precio,
        descripcion
      })
        .then ( response => console.log(response))
        .catch ( err => console.log(err))
    }
  
  
    useEffect (() => {
      axios.get ( 'http://localhost:8080/api/product' )
        .then ( response => {
          setProductos (response.data);
        });
    }, [productos]);
  
    
    const deleteProducto = (id) => {
      axios.delete ( `http://localhost:8080/api/product/delete/${id}` )
        .then ( response => {
          removeFromDom(id)
        });}
    
    return (
      <div> 
          <h1> Product Manager </h1>
          <form onSubmit={agregarProducto}>
              <label htmlFor="titulo">Titulo:</label>
              <input type="text" id="titulo" onChange={ (event) => setTitulo(event.target.value)}></input>
              <nav>
              <label htmlFor="precio">Precio:</label>
              <input type="number" id="precio" onChange={ (event) => setPrecio(event.target.value)}></input>
              </nav>
              <label htmlFor="descripcion">
                      Descripcion:
              </label>
              <input type="text" id="descripcion" onChange={ (event) => setDescripcion(event.target.value)}></input>
              <nav>
              <button type="submit">
                  Create
              </button>
              </nav>
          </form>
          <h1> All Products: </h1>
              {productos.map((producto, index) => {
                      return (
                          <nav>
                              <Link to= {"/" + producto._id} key={index}>{producto.titulo} </Link>
                              <Link to= {"/" + producto._id + "/editar"} key={index} > <button> Edit </button> </Link>
                              <button onClick={() => deleteProducto (producto._id)}> Delete </button>
                            </nav>
                      )})
              }
        </div>
    );
}

export default Formulario;