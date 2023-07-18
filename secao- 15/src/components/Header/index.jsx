import React from "react";
import { useSelector } from "react-redux";

import {Nav} from './styled'
import { Link } from "react-router-dom";
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa'

export default function Header () {
    const botaoClicado = useSelector(state => state.example.botaoClicado)

    return (
        <Nav>
            <Link to='/'> <FaHome size={24}/></Link>
            <Link to='/user'><FaUserAlt size={24}/></Link>
            <Link to='/logout'><FaSignInAlt size={24}/></Link>
            {botaoClicado ? 'clicado' : 'não clicado'}
        </Nav>

    )
}