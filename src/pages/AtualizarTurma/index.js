import './index.scss'
import Formulario from '../../components/Formulario'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function AtualizarTurma(){
    const [turma, setTurma] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    //const { state } = useLocation()
    //const {id, nome, descricao, anoLetivo, capacidade, ativo, dataCriacao} = state

    //useEffect(() => {
    //    carregarTurma()
    //}, [])

    async function carregarTurma(){
        await axios.get('http://localhost:5040/turma/'+id)
            .then(res => setTurma(res.data[0]))
            .catch(err => alert(err.response.data.erro))
            
    }


    async function alterarTurma(turma){
        await axios.put(`http://localhost:5040/turma/${id}`, {...turma, dataCriacao: turma.dataCriacao?.split('T')[0]})
        .then(navigate("/turmas"))
        .catch(err=> alert(err.response.data.erro))
    }
    return(
        <div className='AtualizarTurma'>
            
            <Formulario titulo="Alterar Turma" id={id} receberDados={alterarTurma}/>
            
        </div>
    )
}