export const Home = (props : {name: string}) => {

  return (
    <div>
      <h1>{props.name ? "Hola "+props.name : "No estas logueado"}</h1>
    </div>
  )
}
