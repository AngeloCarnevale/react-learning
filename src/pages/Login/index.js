import React from "react";
import {Title} from "./styled"
import { Paragrafo } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function Login() {
    return (
        <Container>
            <Title isRed >Login
                <small>Lorem</small>
            </Title>
            <Paragrafo>lorem asdsa asdkasd</Paragrafo>
            <button type="button">Enviar</button>
        </Container>
        
    )
}