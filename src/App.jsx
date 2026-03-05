import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="navbar">
        <h2>Social Media App</h2>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;