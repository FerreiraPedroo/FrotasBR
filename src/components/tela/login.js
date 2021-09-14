import classes from "./login.module.css";
import { Button } from "../Button/button"
import { Input } from "../Input/input";
import { Inicio } from "./inicio";

export function Login() {

    return (

            <Inicio />
        // <main className={classes["login-main"]}>

        //     <div>
        //         <span className={classes["login-title"]}>FrotasBR</span>
        //     </div>
        //     <div className={classes["login-input"]}>
        //         <span className={classes["login-input-name"]}>USUARIO</span>
        //         <Input size={"width-5x"} />
        //         <span className={classes["login-input-name"]}>SENHA</span>
        //         <Input type={"password"} size={"width-5x"} />
        //         <span className={classes["buttons-login-check"]}><Input type={"checkbox"} size={"height-1x"}/>LEMBRAR USUARIO</span>                               
        //     </div>
        //     <Button textbutton="ENTRAR" size={"width-4x height-2x"} />
        //     <a href="#" className={classes["buttons-login-lost"]}>ESQUECEU A SENHA ?</a>
        // </main>
    )
}