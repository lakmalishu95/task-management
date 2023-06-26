import './App.css';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import EditTask from './components/EditTask';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        < Route path ="/" element={<CodeForInterview />} />
        < Route path ="/add" element={<AddTask />} />
        < Route path ="/all" element={<AllTasks />} />
        < Route path ="/edit/:id" element={<EditTask />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
