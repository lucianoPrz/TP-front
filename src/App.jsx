import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scanner from './components/Scanner/Scanner';
import NewProductForm from './components/Form/NewProductForm';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer greeting={"Lista de productos"} dataType="products" /> }/>
          <Route path="/ingreso" element = {<Scanner pantalla={"ingresos"}/>}/>
          <Route path="/salida" element = {<Scanner pantalla={"salidas"}/>}/>
          <Route path="/producto" element = {<NewProductForm />}/>
          <Route path="/movimientos" element = {<ItemListContainer greeting={"Movimientos"} dataType="movements" />}/>
        </Routes>
      
      </BrowserRouter>
      
      {/* <ItemDetailContainer/> */}
    </>
  );
}

export default App;