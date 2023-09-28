
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;