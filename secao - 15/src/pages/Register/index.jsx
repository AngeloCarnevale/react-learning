import React, {useState} from "react";
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { get } from 'lodash'
import axios from '../../services/axios'

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled'

export default function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false

        if(nome.length < 3 || nome.length >  255) {
            formErrors = true
            toast.error("Nome deve ter entre 3 e 255 caracteres")
        }
        if(!isEmail(email)) {
            formErrors = true
            toast.error("E-mail inválido")
        }
        if(senha.length < 6 || nome.length >  50) {
            formErrors = true
            toast.error("senha deve ter entre 6 e 50 caracteres")
        }

        if(formErrors) return;

        try {
            const response = await axios.post('/users/', {
                nome, email, senha
            })

            console.log(response.data)
        } 
        catch (error) {
            const status = get(error, 'response.status')
            console.log(status)
        }

    }
    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" value={nome} placeholder="Seu nome" onChange={e => setNome(e.target.value)}/>
                </label>

                <label htmlFor="email">
                    Email
                <input type="email" value={email} placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="senha">
                    Senha
                <input type="password" value={senha} placeholder="Sua senha" onChange={e => setSenha(e.target.value)}/>
                </label>

                <button type="submit">Criar minha conta</button>
                    

            </Form>

        </Container>
        
    )
}