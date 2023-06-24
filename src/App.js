import './App.css';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        < Route path ="/" element={<CodeForInterview />} />
        < Route path ="/add" element={<AddUser />} />
        < Route path ="/all" element={<AllUsers />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
