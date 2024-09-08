import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scanner from './components/Scanner/Scanner';
import NewProductForm from './components/Form/NewProductForm';
import ConfigModule from './components/ConfigModule/ConfigModule';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer greeting={"Lista de productos"} dataType="products" /> }/>
          <Route path="/scanner" element = {<Scanner />}/>
          <Route path="/producto" element = {<NewProductForm />}/>
          <Route path="/config" element = {<ConfigModule />}/>
          <Route path="/movimientos" element = {<ItemListContainer greeting={"Movimientos"} dataType="movements" />}/>
        </Routes>
      
      </BrowserRouter>
      
      {/* <ItemDetailContainer/> */}
    </>
  );
}

export default App;