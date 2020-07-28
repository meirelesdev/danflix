import React from 'react'
import './styles.css'
import Menu from '../Menu'
import Footer from '../Footer'

function Layout({ children }) {
    return (
        <>
            <Menu />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout