import React, { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  
  const submit = async (e: SyntheticEvent) =>{
    e.preventDefault();

    await fetch('http://localhost:8000/api/register',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    setRedirect(true);

  }

  if (redirect){
    return <Navigate to="/login" replace />
  }

  return (
    <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Registrarse</h1>
        <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput2" placeholder="Nombre" required onChange={e => setName(e.target.value)}/>
        <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={e => setEmail(e.target.value)} />
        <label htmlFor="floatingInput">Correo electrónico</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2022</p>
    </form>
  )
}


