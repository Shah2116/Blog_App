
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import IndexPage from './Pages/IndexPage';
import { UserContextProvider } from './Components/UserContext';
import CreatePost from './Pages/CreatePost';
import PostPage from './Pages/PostPage';
import EditPost from './Pages/EditPost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
  
}

export default App;