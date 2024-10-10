import './index.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Formulario(props){

    const [id, setId] = useState(props.id)
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [anoLetivo, setAnoLetivo] = useState('')
    const [capacidade, setCapacidade] = useState('')
    const [ativo, setAtivo] = useState(false)
    const [dataCriacao, setDataCriacao] = useState('')
    const [turma, setTurma] = useState({})

    useEffect(() => {
        carregarTurma()
    }, [])
    useEffect(() => {
        setNome(turma.nome)
        setDescricao(turma.descricao)
        setAnoLetivo(turma.anoLetivo)
        setCapacidade(turma.capacidade)
        setAtivo(turma.ativo)
        setDataCriacao(turma.dataCriacao?.split('T')[0])
    }, [turma])

    async function carregarTurma(){
        await axios.get('http://localhost:5040/turma/'+id)
            .then(res => setTurma(res.data[0]))
            .catch(err => alert(err.response.data.erro))   
    }

    function enviarDados(){
        const dados = {id, nome, descricao: descricao, anoLetivo: Number(anoLetivo), capacidade: Number(capacidade), ativo, dataCriacao: dataCriacao}
        props.receberDados(dados)
        resetDados()
    }
    function resetDados(){
        setId('')
        setNome('')
        setDescricao('')
        setAnoLetivo('')
        setCapacidade('')
        setAtivo(false)
        setDataCriacao('')
    }
    return(
        <div className='form'>
            <h1>{props.titulo}</h1>
            <div className='form-row'>
                <label>
                    ID:
                </label>
                <input readOnly={true} type='number' value={id} onChange={(ev)=>setId(ev.target.value)}/>
            </div>
            <div className='form-row'>
                <label>
                    Nome da Turma:
                </label>
                <input type='text' value={nome} onChange={(ev)=>setNome(ev.target.value)}/>
            </div>
            <div className='form-row'>
                <label>
                    Descricão do Curso:
                </label>
                <textarea type='text' value={descricao} onChange={(ev)=>setDescricao(ev.target.value)}/>
            </div>
            <div className='form-row'>
                <label>
                    Ano Letivo:
                </label>
                <input type='number' value={anoLetivo} onChange={(ev)=>setAnoLetivo(ev.target.value)}/>
            </div>
            <div className='form-row'>
                <label>
                    Capacidade:
                </label>
                <input type='number' value={capacidade} onChange={(ev)=>setCapacidade(ev.target.value)}/>
            </div>
            <div className='form-row'>
                <label>
                    Ativo:
                </label>
                <input type='checkbox' checked={ativo} onChange={(ev)=>setAtivo(ev.target.checked)}/>
            </div>
            <div className='form-row'>
                <label>
                    Data de Inclusão:
                </label>
                <input type='date' value={dataCriacao} onChange={(ev)=>setDataCriacao(ev.target.value)}/>
            </div>
            <div className='form-row button'>
                <button onClick={enviarDados}>Enviar</button>
            </div>
        </div>
    )
}