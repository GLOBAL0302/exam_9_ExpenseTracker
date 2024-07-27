import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';
import { Route, Routes } from 'react-router-dom';
import CategoryEdit from './components/Categories/CategoryEdit';
import AddRecord from './components/AddRecord/AddRecord';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/categoryEdit" element={<CategoryEdit />}></Route>
        <Route path="/addRecord" element={<AddRecord />} />
        <Route path="/categories/:id" element={<CategoryEdit />}></Route>
      </Routes>
    </>
  );
};

export default App;
