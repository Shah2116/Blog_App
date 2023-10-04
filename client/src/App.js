
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import IndexPage from './Pages/IndexPage';
import { UserContextProvider } from './Components/UserContext';
import CreatePost from './Pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePost />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
  
}

export default App;