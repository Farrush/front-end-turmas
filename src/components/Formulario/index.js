import './index.scss'
import { useState } from 'react'
export default function Formulario(props){

    const [id, setId] = useState(props.id)
    const [nome, setNome] = useState(props.nome)
    const [descricao, setDescricao] = useState(props.descricao)
    const [anoLetivo, setAnoLetivo] = useState(props.anoLetivo)
    const [capacidade, setCapacidade] = useState(props.capacidade)
    const [ativo, setAtivo] = useState(props.ativo)
    const [dataCriacao, setDataCriacao] = useState(props.dataCriacao?.split('T')[0])

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