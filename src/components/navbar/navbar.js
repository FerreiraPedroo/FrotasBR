import classes from "./navbar.module.css"
import { Button } from "../Button/button"


export function Navbar(props) {

    return (
        <>
            <nav className={classes.navbar}>
                <div>FrotasBR</div>
                <div></div>
                <div></div>
                <div><Button size="width-3x height-2x " textbutton="ENTRAR" /></div>
            </nav>
        </>
    )

}