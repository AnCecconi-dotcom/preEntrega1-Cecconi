import CartWidget from "./CartWidget";
import Categorias from "./Categorias";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="text-bg-dark my-3">
              <div className="contenedor my-3">
            <div className="row">
                <div className="col-md-2 justify-content-end d-flex align-items-center ">
                    <Logo />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <Categorias />
                </div>
                <div className="col-md-3 txt-end d-flex align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
        </div>
    )
};

export default NavBar;