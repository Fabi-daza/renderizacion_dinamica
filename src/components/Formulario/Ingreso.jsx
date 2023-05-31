import React, { useState } from 'react'
import './Ingreso.css'

const Ingreso = ({ user, setUser }) => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    
    const getName = (event) => {
        setNombre(event.target.value)
    }
    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const index = user.length + 1
        const newUser = {
            id: index.toString(),
            nombre: nombre,
            correo: email
        }
        setUser([...user, newUser])
        console.log(user)
    }
    return (
        <div>
            <form className='campos' onSubmit={handleSubmit}>
                <h3>Nombre Colaborador</h3>
                <input type="text" id="name" placeholder='Ingrese el Nombre del Colaborador' onChange={getName} />
                <h3>Email Colaborador</h3>
                <input type="email" id="email" placeholder='Ingreso el Email del Colaborador' onChange={getEmail} />
                <button type="submit" disabled={!email.trim() || !nombre.trim()}>Agregar </button>
            </form>
        </div>
    )
}

export default Ingreso 