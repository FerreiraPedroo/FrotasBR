import { Switch, Route } from "react-router-dom";
import NavBar from "./paginas/navbar";
import rotasRaiz from "./rotas/rotas"

export default function App() {


  return (

    <>
    <NavBar />


    <Switch>
      {
        rotasRaiz.map((rota)=>{
          const Component = rota.componete;
          return (
            <Route key={rota.path} path={rota.path}>
              <Component />
            </Route>
          )
        })
      }
      <Route path="/">

      </Route>
    </Switch>

    </>
  )
}

