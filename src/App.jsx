import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scanner from './components/Scanner/Scanner';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer greeting={"Lista de Productos"} />}/>
          <Route path="/ingreso" element = {<Scanner pantalla={"ingresos"}/>}/>
          <Route path="/salida" element = {<Scanner pantalla={"salidas"}/>}/>
        </Routes>
      
      </BrowserRouter>
      
      {/* <ItemDetailContainer/> */}
    </>
  );
}

export default App;