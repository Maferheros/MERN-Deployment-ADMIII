import './App.css';
import Formulario from './Componentes/Formulario/Formulario' ;
import VistaProducto from './Componentes/VistaProducto/VistaProducto' ;
import EditarProducto from './Componentes/EditarProducto/EditarProducto'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Switch>
      <Route path = "//" render = { (routeProps) => <Formulario {...routeProps}/>}/>
      <Route exact path= {"/:id"} render= { (routeProps) => <VistaProducto {...routeProps} />}/>
      <Route path= "/:id/editar" render = { (routeProps) => <EditarProducto  {...routeProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
