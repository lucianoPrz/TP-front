import { Link, NavLink } from "react-router-dom";
import ScannerWidget from "../ScannerWidget/ScannerWidget";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <h1 className="navbar-brand me-auto">
                            APP
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active ms-5" aria-current="page">
                                    Productos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/producto"} className="nav-link active ms-5" aria-current="page">
                                    Nuevo Producto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/movimientos"} className="nav-link active ms-5" aria-current="page">
                                    Movimientos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/config"} className="nav-link active ms-5" aria-current="page">
                                    Configuración
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <ScannerWidget/>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
