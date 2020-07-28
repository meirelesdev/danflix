import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../components/Layout/layout'

function CadastroCategoria(){
    return (
        <Layout>
            <h1>Cadastro de Categorias!</h1>
            <form>
                <label>
                    Nome da Categoria:
                    <input type="text"/>
                </label>
                <button>
                    Cadastrar
                </button>
            </form>
            <Link to="/">
                Ir para Home
            </Link>
            
        </Layout>

    )
}

export default CadastroCategoria