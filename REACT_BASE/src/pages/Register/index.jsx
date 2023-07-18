import React, {useState} from "react";


import { Container } from "../../styles/GlobalStyles";
import {Form} from './styled'

export default function Register() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <Container>
            <h1>Crie sua conta</h1>

            <Form>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" value={nome} placeholder="Seu nome" onChange={e => setNome(e.target.value)}/>
                </label>

                <label htmlFor="email">
                    Email
                <input type="email" value={email} placeholder="Seu e-mail" onChange={e => setNome(e.target.value)}/>
                </label>

                <label htmlFor="senha">
                    Senha
                <input type="password" value={senha} placeholder="Sua senha" onChange={e => setNome(e.target.value)}/>
                </label>

                <button type="submit">Criar minha conta</button>
                    

            </Form>

        </Container>
        
    )
}