import React from "react";
import { Switch} from 'react-router-dom'

import MyRoute from './MyRoute'
import Login from "../pages/Login";
import Aluno from "../pages/Aluno";
import Alunos from "../pages/Alunos";
import Register from "../pages/Register";
import Fotos from "../pages/Fotos";
import Page404 from "../pages/Page404";

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path="/" component={Alunos} isPrivate={false}/>
            <MyRoute exact path="/aluno:id/edit" component={Aluno} isPrivate/>
            <MyRoute exact path="/aluno/" component={Aluno} isPrivate/>
            <MyRoute exact path="/fotos/:id" component={Fotos} isPrivate/>
            <MyRoute exact path="/login/" component={Login} isPrivate={false}/>
            <MyRoute exact path="/register/" component={Register} isPrivate={false}/>
            <MyRoute path="*" component={Page404} />
        </Switch>
    )
}
