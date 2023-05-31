import React from 'react'
import './buscador.css'

const Buscador = ({setSearch}) => {

    return (
        <div className="searchbar">
            <input type="text" placeholder='Busca por nombre, email o ID' onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Buscador