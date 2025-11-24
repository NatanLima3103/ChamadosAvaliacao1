import React, { useEffect, useState } from 'react'
import api from '../../api'
type Chamado = { id: number; titulo?: string; status: string }
export default function NaoResolvidos() {
  const [chamados, setChamados] = useState<Chamado[]>([])
  useEffect(()=>{ api.get('/chamado/naoresolvido').then(res=>setChamados(res.data)).catch(()=>setChamados([])) },[])
  return (
    <div>
      <h2>Chamados Não Resolvidos</h2>
      <table border={1} cellPadding={6}><thead><tr><th>ID</th><th>Título</th><th>Status</th></tr></thead><tbody>{chamados.map(c=> (<tr key={c.id}><td>{c.id}</td><td>{c.titulo ?? '-'}</td><td>{c.status}</td></tr>))}</tbody></table>
    </div>
  )
}
