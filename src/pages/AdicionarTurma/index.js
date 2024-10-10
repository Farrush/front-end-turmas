import './index.scss'
import Formulario from '../../components/Formulario'
import axios from 'axios'
export default function AdicionarTurma(){
    async function cadastrarTurma(turma){
        await axios.post('http://localhost:5040/turma?x-access-token='+localStorage.getItem("TOKEN"), turma)
        .then()
        .catch(err=> alert(err.response.data.erro))
    }
    return(
        <div className='AdicionarTurma'>
            <Formulario titulo="Adicionar Turma" receberDados={cadastrarTurma}/>
        </div>
    )
}