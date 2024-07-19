import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'  codifo de incio estilos de inico
import Dashboard from "./views/Dashboard.jsx";
// import HomeInicio from "./views/HomeInicio.jsx"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListAlumnos from "./views/Alumnos/ListAlumnos.jsx";
import Usuarios from   "./views/Alumnos/Usuarios.jsx";
import Pagos from "./views/Alumnos/Pagos.jsx";
import Ciclos from "./views/Alumnos/Ciclos.jsx";
import GCiclos from "./views/Alumnos/GestionCiclo.jsx";
import Apoderado from "./views/Alumnos/Apoderado.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <Router>
        <Routes>
          <Route element={<Dashboard />}>
              {/* <Route path="/inicio" element={<HomeInicio />} /> */}
              <Route path="/alumnos" element={<ListAlumnos />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/pagos" element={<Pagos />} />
              <Route path="/ciclos" element={<Ciclos />} />
              <Route path="/gesciclos" element={<GCiclos />} />
              <Route path="/apoderados" element={<Apoderado />} />

              <Route path="/" element={<Usuarios />} />
          </Route>

        </Routes>
      </Router> 
      <ToastContainer />
    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
     
    </>
  )
}

export default App
