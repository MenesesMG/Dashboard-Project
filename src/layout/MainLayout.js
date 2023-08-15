import React from 'react'
import NavbarComp from '../components/NavbarComp'
import Footer from '../components/Footer'

function MainLayout({children}) {
    return (
        <div>
            <NavbarComp></NavbarComp>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout