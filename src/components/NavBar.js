import React from 'react'
import CartWidget from './CartWidget'



export default function NavBar(){
    return (
        <>
            <nav>
                <h1>Mi Marca</h1>
                <a href="#"><p>remeras</p></a>
                <a href="#"><p>pantalones</p></a>
                <a href="#"><p>camisas</p></a>
                <CartWidget />
            </nav> 
        </>
    )
}