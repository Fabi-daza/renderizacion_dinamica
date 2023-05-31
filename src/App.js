import './App.css';
import { useState } from 'react';
import Ingreso from './components/Formulario/Ingreso.jsx';
import Tabla from './components/Tabla/Tabla';
import { Colaboradores } from './datos';
import Buscador from './components/Buscador/Buscador';


function App() {
  const [user, setUser] = useState(Colaboradores)
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <Buscador setSearch={setSearch} search={search}/>
      <Ingreso setUser={setUser} user={user}/>
      <Tabla user={user} setSearch={setSearch} search={search}/>
    </div>
  );
}

export default App;
