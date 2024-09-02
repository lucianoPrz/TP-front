import { Link, NavLink } from "react-router-dom";

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
                                <NavLink to={"/ingreso"} className="nav-link active ms-5" aria-current="page">
                                    Ingreso
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/salida"} className="nav-link active ms-5" aria-current="page">
                                    Salida
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/nuevoProducto"} className="nav-link active ms-5" aria-current="page">
                                    Nuevo Producto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/movimientos"} className="nav-link active ms-5" aria-current="page">
                                    Movimientos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
