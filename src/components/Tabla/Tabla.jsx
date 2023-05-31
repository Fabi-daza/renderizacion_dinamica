import React from 'react'
import './Tabla.css'

const Tabla = ({ user, search , setSearch }) => {
    let resultadoBusqueda = []
    if (!search){
        resultadoBusqueda = user
    } else{
        resultadoBusqueda = user.filter((u) =>
            u.nombre.includes(search) || u.id.includes(search) || u.correo.includes(search)
        )
    }
    console.log(user)
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Colaborador</th>
                    <th>Email Colaborador</th>
                </tr>
            </thead>
            <tbody>
                {resultadoBusqueda.map((i) => (
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.nombre}</td>
                        <td>{i.correo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabla