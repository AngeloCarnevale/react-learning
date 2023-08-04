import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { Form } from './styled'
import { useState } from "react";
import { isEmail } from 'validator'
import { toast } from 'react-toastify'
import * as actions from '../../store/modules/auth/actions'


export default function Aluno() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit (e) {
        e.preventDefault();
        
        let formErrors = false

        if (!isEmail(email)) {
            formErrors = true
            toast.error("E-mail inválido")
        }
        if (senha.length < 6 || senha.length > 50) {
            formErrors = true
            toast.error("senha inválida")
        }

        if(formErrors) return

        dispatch(actions.loginRequest({email, senha}))
        
    }

    return (
        <Container>
            <h1>Login</h1>

            <Form>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                />
                <input
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="Sua senha"
                />
                <button onClick={handleSubmit} type="submit">Entrar</button>

            </Form>
        </Container>

    )
}