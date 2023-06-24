import './App.css';
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';




function App() {
  return (
    <div className="App">
      <NavBar />
      <CodeForInterview />
      <AddUser />
      <AllUsers />
    </div>
  );
}

export default App;
