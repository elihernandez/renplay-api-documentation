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
          <li>Home</li>
          <li>Audiolibros</li>
          <li>Musica</li>
          <li>Suscripción</li>
          <li>Creadores</li>
        </ul>
      </div>
      <SwaggerUI url="/data.json" />
    </div>
  )
}

export default App