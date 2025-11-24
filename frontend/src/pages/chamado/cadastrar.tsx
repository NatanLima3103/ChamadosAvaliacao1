import React, { useState } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

export default function Cadastrar() {
  const [titulo, setTitulo] = useState(''); const [descricao, setDescricao] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { titulo, descricao, status: 'Aberto' }
    await api.post('/chamado/cadastrar', payload)
    navigate('/chamado/listar')
  }
  return (
    <div>
      <h2>Cadastrar Chamado</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Título:</label><br/><input value={titulo} onChange={e=>setTitulo(e.target.value)} /></div>
        <div><label>Descrição:</label><br/><textarea value={descricao} onChange={e=>setDescricao(e.target.value)} /></div>
        <div style={{marginTop:8}}><button type="submit">Cadastrar</button></div>
      </form>
    </div>
  )
}
