import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {

  const [name, setName] = useState("")

  useEffect(() => {
    (
     async () => {
        const response = await fetch('http://localhost:8000/api/user',{
          headers: {'Content-Type': 'application/json'},
          credentials: 'include'
        });
        const content = await response.json();

        setName(content.name);
     }
    )()
  }, [])
  
    return (
    <Router>
      <div className="App">
        <Nav name={name} setName={setName} 
        />
        <main className="form-signin">
            <Routes>
              <Route path='/' element={<Home name={name} />} />
              <Route path='/login' element={<Login setName={setName} />} />
              <Route path='/register' element={<Register />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
