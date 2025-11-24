import React, { useEffect, useState } from 'react'
import api from '../../api'

type Chamado = { id: number; titulo?: string; descricao?: string; status: string }

export default function Listar() {
  const [chamados, setChamados] = useState<Chamado[]>([])
  useEffect(() => { api.get('/chamado/listar').then(res => setChamados(res.data)).catch(()=>setChamados([])) }, [])
  return (
    <div>
      <h2>Listar Chamados</h2>
      <table border={1} cellPadding={6}>
        <thead><tr><th>ID</th><th>Título</th><th>Descrição</th><th>Status</th></tr></thead>
        <tbody>{chamados.map(c => (<tr key={c.id}><td>{c.id}</td><td>{c.titulo ?? '-'}</td><td>{c.descricao ?? '-'}</td><td>{c.status}</td></tr>))}</tbody>
      </table>
    </div>
  )
}
