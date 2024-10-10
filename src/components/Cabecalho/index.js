import './index.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Cabecalho(){
    const navigate = useNavigate()
    function sair(){
        localStorage.removeItem("TOKEN")
        navigate('/login')
    }
    return (
        <header className='cabecalho'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/turmas">Turmas</Link>
                <Link to="/inserir">Adicionar</Link>
            </nav>
            {localStorage.getItem("TOKEN")?<button onClick={() => sair()}>Sair</button>
            :<button onClick={() => navigate('/login')}>Login</button>}
            
        </header>
    )
}