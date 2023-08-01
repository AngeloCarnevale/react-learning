import React, { useState } from "react";
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom";
import { isEmail } from 'validator'
import { get } from 'lodash'
import axios from '../../services/axios'

import { Container } from "../../styles/GlobalStyles";
import { Form } from './styled'

export default function Register() {
    const history = useHistory()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true
            toast.error("Nome deve ter entre 3 e 255 caracteres")
        }
        if (!isEmail(email)) {
            formErrors = true
            toast.error("E-mail inválido")
        }
        if (senha.length < 6 || nome.length > 50) {
            formErrors = true
            toast.error("senha deve ter entre 6 e 50 caracteres")
        }

        const email_banco = await axios.get("/users").then((response) => response.data);

        for (let index = 0; index < email_banco.length; index++) {
            const element = email_banco[index];
            if(element.email == email) {
                toast.error("Email ja existe")
                formErrors = true
                break
            }
        }

        if (formErrors) return;

        try {
            await axios.post('/users/', {
                nome, email, senha
            })
            toast.success('Você fez seu cadastro')
            history.push('/login')
        }
        catch (error) {
            const status = get(error, 'response.status')
        }

    }
    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" value={nome} placeholder="Seu nome" onChange={e => setNome(e.target.value)} />
                </label>

                <label htmlFor="email">
                    Email
                    <input type="email" value={email} placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)} />
                </label>

                <label htmlFor="senha">
                    Senha
                    <input type="password" value={senha} placeholder="Sua senha" onChange={e => setSenha(e.target.value)} />
                </label>

                <button type="submit">Criar minha conta</button>
            </Form>

        </Container>

    )
}