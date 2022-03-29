import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export const Login = (props : {setName : (name:string)=> void}) => {
    const [random, setRandom] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      setRandom(Math.floor(Math.random() * 600))
    }, [])
    
    const submit = async (e: SyntheticEvent) =>{
      e.preventDefault();
  
      const response = await fetch('http://localhost:8000/api/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      });  
      
      const content = await response.json();
      props.setName(content.name);

      setRedirect(true);

    }
  
    if (redirect){
      return <Navigate to="/" replace />
    }
  

  return (
    <form onSubmit={submit}>
        <div style={{textAlign: 'center'}}>
        <img className="mb-4" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+random+".png"} alt="" />
        </div>
        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
        <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="floatingInput">Correo electrónico</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2022</p>
    </form>
  )
}
