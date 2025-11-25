import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Listar from './pages/chamado/listar'
import Cadastrar from './pages/chamado/cadastrar'
import Alterar from './pages/chamado/alterar'
import Resolvidos from './pages/chamado/resolvidos'
import NaoResolvidos from './pages/chamado/naoresolvido'

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Gerenciamento de Chamados</h1>
      <nav style={{ marginBottom: 12 }}>
        <Link to="/chamado/listar" style={{ marginRight: 8 }}>Listar</Link>
        <Link to="/chamado/cadastrar" style={{ marginRight: 8 }}>Cadastrar</Link>
        <Link to="/chamado/alterar" style={{ marginRight: 8 }}>Alterar</Link>
        <Link to="/chamado/resolvidos" style={{ marginRight: 8 }}>Resolvidos</Link>
        <Link to="/chamado/naoresolvido" style={{ marginRight: 8 }}>Não Resolvidos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/chamado/listar" element={<Listar />} />
        <Route path="/chamado/cadastrar" element={<Cadastrar />} />
        <Route path="/chamado/alterar" element={<Alterar />} />
        <Route path="/chamado/resolvidos" element={<Resolvidos />} />
        <Route path="/chamado/naoresolvido" element={<NaoResolvidos />} />
      </Routes>
    </div>
  );
}
