import './index.scss'
import Formulario from '../../components/Formulario'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function AtualizarTurma(){
    const navigate = useNavigate()
    const { state } = useLocation()
    const {id, nome, descricao, anoLetivo, capacidade, ativo, dataCriacao} = state
    async function alterarTurma(turma){
        await axios.put(`http://localhost:5040/turma/${id}`, {...turma, dataCriacao: turma.dataCriacao?.split('T')[0]})
        .then(navigate("/turmas"))
        .catch(err=> alert(err.response.data.erro))
    }
    return(
        <div className='AdicionarTurma'>
            <Formulario titulo="Alterar Turma" id={id} nome={nome} descricao={descricao} anoLetivo={anoLetivo} capacidade={capacidade} ativo={ativo} dataCriacao={dataCriacao} receberDados={alterarTurma}/>
        </div>
    )
}