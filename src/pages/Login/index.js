import './index.scss'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logar() {
        await axios.post('http://localhost:5040/login',
            {
                email,
                senha
            }
        )
        .then(res => loginRealizado(res.data.token))
        .catch(err => alert(err.response.data.erro))
    }
    async function cadastrar(){
        await axios.post('http://localhost:5040/cadastrar', {email, senha})
            .then(res => alert("Cadastrado com sucesso "+res.data))
            .catch(err => alert(err.response.data.erro))
    }

    function loginRealizado(token){
        localStorage.setItem("TOKEN", token)
        navigate('/turmas')
    }

    return(
        <div className='login'>
            <div className='login-form'>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>
                <div className='botoes'>
                    <button onClick={cadastrar}>Cadastrar</button>
                    <button onClick={logar}>Fazer Login</button>
                </div>
            </div>
        </div>
    )
}