import React, { useEffect, useState } from 'react'
import api from '../../api'
type Chamado = { id: number; titulo?: string; status: string }
export default function Alterar() {
  const [chamados, setChamados] = useState<Chamado[]>([])
  useEffect(()=>{ api.get('/chamado/listar').then(res=>setChamados(res.data)).catch(()=>setChamados([])) },[])
  const handleAlterar = async (id:number) => { await api.patch('/chamado/alterar',{id}); const res = await api.get('/chamado/listar'); setChamados(res.data) }
  return (
    <div>
      <h2>Alterar Status do Chamado</h2>
      <table border={1} cellPadding={6}><thead><tr><th>ID</th><th>Título</th><th>Status</th><th>Ação</th></tr></thead>
      <tbody>{chamados.map(c=> (<tr key={c.id}><td>{c.id}</td><td>{c.titulo ?? '-'}</td><td>{c.status}</td><td><button onClick={()=>handleAlterar(c.id)}>Avançar Status</button></td></tr>))}</tbody></table>
    </div>
  )
}
