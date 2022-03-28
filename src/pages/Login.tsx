import React, { useEffect, useState } from 'react'

export const Login = () => {
    const [random, setRandom] = useState(0);

    useEffect(() => {
      setRandom(Math.floor(Math.random() * 600))
    }, [])
    
  return (
    <form>
        <div style={{textAlign: 'center'}}>
        <img className="mb-4" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+random+".png"} alt="" />
        </div>
        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
        <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Correo electrónico</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Acceder</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2022</p>
    </form>
  )
}
