import React, {useEffect, useState} from "react";
import './alunos.css'
import {Link} from 'react-router-dom'
import { FaEdit, FaWindowClose} from 'react-icons/fa'
import { Container } from "../../styles/GlobalStyles";
import axios from '../../services/axios'


export default function Alunos() {

    const [alunos, setAlunos] = useState([]) // useState recebe um valor inicial, nesse caso de array pois retorna um array


    useEffect(()=> {
        async function getData() {
            const response = await axios.get('/alunos')
            setAlunos(response.data)
        }
        getData()                      
    }, [])

    return (
        <Container>
            <h1>Alunos</h1>
            
            <div className="container-alunos">
                {alunos.map(aluno => (
                    <div key={String(aluno.id)}>
                    
                    <span>{aluno.nome}</span>
                    <span>{aluno.email}</span>

                    <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
                    <Link to={`/aluno/${aluno.id}/delete`}><FaWindowClose size={16} /></Link>
                    </div>
                ))}
            </div>
            
        </Container>
        
    )
}