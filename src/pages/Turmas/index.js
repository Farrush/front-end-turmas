import './index.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function(){
    const [turmas, setTurmas] = useState([])
    const [descShow, setDescShow] = useState('')
    const [ano, setAno] = useState('')
    const [curso, setCurso] = useState('')
    useEffect(() => {
        buscarTurmas()
    }, [])

    async function buscarTurmas(){
        await axios.get("http://localhost:5040/turma")
            .then(resp => {setTurmas(resp.data)})
            .catch(err => console.log(err.response.data.erro))
        
    }
    async function buscarTurmasFiltro(){
        let url = ""
        if(ano.length > 0 && Number(ano) && curso.length === 0)
            url = "http://localhost:5040/turma/busca?ano="+ano
        else if(curso.length > 0)
            url = `http://localhost:5040/turma/${ano}/?curso=${curso}`

        if(url.length > 0)
            await axios.get(url)
            .then(resp => setTurmas(resp.data))
            .catch(err => alert(err.response.data.erro))

    }
    async function deletarTurma(id){
        await axios.delete("http://localhost:5040/turma/"+id)
            .then(res => setTurmas(turmas.filter(t => t.id != id)))
            .catch(err => alert(err.response.data.erro))
    }
    return(
        <div className='turmas' style={{color: "#fff"}}>
            <h1>Turmas</h1>
            <div className='barra-pesquisa'>
                <label>Ano:</label>
                <input placeholder='2022' value={ano} onChange={ev => setAno(ev.target.value)}/>
                <label>Curso:</label>
                <input placeholder='TADS' value={curso} onChange={ev => setCurso(ev.target.value)}/>
                <button onClick={buscarTurmasFiltro}>Ir</button>
            </div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Ano Letivo</td>
                    <td>Capacidade</td>
                    <td>Status</td>
                    <td>Data de Inclusão</td> 
                    <td></td>
                    <td></td>            
                </tr>
                <tbody>
                {
                turmas.map(turma => 
                    <tr key={turma.id}>
                        <td>{turma.id}</td>
                        <td>{turma.nome}</td>
                        <td><span onMouseOut={() => setDescShow('')} onMouseEnter={() => setDescShow(turma.descricao)} className='descricao'>{turma.descricao}</span></td>
                        <td>{turma.anoLetivo}</td>
                        <td>{turma.capacidade}</td>
                        <td>{turma.ativo?"Ativa":"Inativa"}</td>
                        <td>{new Date(turma.dataCriacao).toLocaleDateString()}</td>
                        <td>
                            <Link className='alt' to={`/alterar/${turma.id}`} /*state={{...turma}}*/>Alterar</Link>
                        </td>
                        <td>
                            <a onClick={()=>deletarTurma(turma.id)} className='del' href='#'>Excluir</a>
                        </td>
                    </tr>
                )
                }
 
                </tbody>

            </table>
                {turmas.length === 0?
                    <h1>Turmas não foram encontradas ou carregadas</h1>
                :''}
            {descShow?.length > 0? 
            <div className='box-descricao'>
                <h5>Descrição</h5>
                <p>{descShow}</p>
            </div>
            :''}
        </div>
    )
}