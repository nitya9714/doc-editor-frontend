import Editor from "./pages/Editor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Protected';
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Protected> <Home /> </Protected>} />
          <Route path='/login' element={<Login />} />
          <Route path='/docs/:id' element={<Protected> <Editor /> </Protected>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
