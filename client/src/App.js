import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MyGames from './views/MyGames';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-games" element={<MyGames />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
