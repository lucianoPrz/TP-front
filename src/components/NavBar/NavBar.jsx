import ScannerWidget from "../ScannerWidget/ScannerWidget"

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto" href="#">
                        APP
                    </a>
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
                                <a className="nav-link active ms-5" aria-current="page" href="#">
                                    Productos
                                </a>
                            </li>
                            <li>
                                <a className="nav-link active ms-5" aria-current="page" href="#">
                                    Scanner
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar