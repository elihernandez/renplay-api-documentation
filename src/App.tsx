import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const App = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/usuarios">Usuarios</a>
          </li>
          <li>
            <a href="/inicio">Home</a>
          </li>
          <li>
            <a href="/audiolibros">AudioLibros</a>
          </li>
          <li>
            <a href="/musica">Music</a>
          </li>
          <li>
            <a href="/suscripcion">Subscripción</a>
          </li>
          <li>
            <a href="/creadores">Creadores</a>
          </li>
        </ul>
      </div>
      <SwaggerUI url="/data.json" />
    </div>
  )
}

export default App