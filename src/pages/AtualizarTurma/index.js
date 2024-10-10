import './index.scss'
import Formulario from '../../components/Formulario'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export default function AtualizarTurma(){
    const navigate = useNavigate()
    const {id} = useParams()

    //const { state } = useLocation()
    //const {id, nome, descricao, anoLetivo, capacidade, ativo, dataCriacao} = state

    async function alterarTurma(turma){
        await axios.put(`http://localhost:5040/turma/${turma.id}?x-access-token=${localStorage.getItem("TOKEN")}`, {...turma, dataCriacao: turma.dataCriacao?.split('T')[0]})
        .then(navigate("/turmas"))
        .catch(err => alert(err.response.data.erro))
    }
    return(
        <div className='AtualizarTurma'>
            
            <Formulario titulo="Alterar Turma" id={id} receberDados={alterarTurma}/>
            
        </div>
    )
}