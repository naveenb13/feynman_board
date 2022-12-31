import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import Addtopic from './Addtopic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Main />} >
      <Route path="" element={<Dashboard />} />
      <Route path="addtopic" element={<Addtopic />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
