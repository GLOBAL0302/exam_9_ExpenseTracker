import './App.css';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;
