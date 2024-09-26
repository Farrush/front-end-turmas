import './index.scss'
import { Link } from 'react-router-dom'

export default function Cabecalho(){
    return (
        <header className='cabecalho'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/turmas">Turmas</Link>
                <Link to="/inserir">Adicionar</Link>
            </nav>
        </header>
    )
}