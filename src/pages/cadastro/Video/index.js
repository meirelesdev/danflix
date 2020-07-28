import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout/layout'

function CadastroVideo(){
    return (
        <Layout>
            <h1>Cadastro de video!</h1>
            <Link to="/">
                Ir para Home
            </Link>
            <br/>
            <Link to="/cadastro/categoria">
                Ir para Cadastro de Categorias
            </Link>
        </Layout>

    )
}

export default CadastroVideo