import { Link } from "react-router-dom"
import classes from "./index.module.css"

export default function NavBar() {

    return (
        <>
            <nav className={"navbar navbar-default m-0 p-0 text-white " + classes.navbar_principal}>
                <div className="container-fluid">
                    <div className="d-flex navbar-header align-items-center ">
                        <img src="/img/logo.png" alt="Logo" className="mv-1 h-75" />
                        <span className="navbar-brand mx-2 fw-bold fst-italic" >FrotasBR</span>
                    </div>
                    <i className="bi bi-person-circle " width="32" height="32"> LOGIN</i>
                </div>
            </nav>

            <div className="input-group input-group-sm my-1">
                <Link to="/" className="btn btn-outline-secondary" type="button">INICIO</Link>
                <Link to="/motorista" className="btn btn-outline-secondary" type="button">MOTORISTA</Link>
                <Link to="/multa" className="btn btn-outline-secondary" type="button">MULTA</Link>
                <Link to="/veiculo" className="btn btn-outline-secondary" type="button">VEICULO</Link>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" />
            </div>
        </>
    )
}