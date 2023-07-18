import React, { useEffect } from "react";
import {Title} from "./styled"
import { Paragrafo } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";

import * as exampleActions from '../../store/modules/example/actions'

export default function Login() {

    const dispatch = useDispatch() // Dispara ações

    function handleClick(e){
        e.preventDefault()

        dispatch(exampleActions.clicaBotaoRequest())
    }
    return (
        <Container>
            <Title>Login
                <small>Lorem</small>
            </Title>
            <Paragrafo>lorem asdsa asdkasd</Paragrafo>
            <button type="button" onClick={handleClick}>Enviar</button>
        </Container>
        
    )
}