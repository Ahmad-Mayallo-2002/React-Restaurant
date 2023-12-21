import { Link } from "react-router-dom";

function MenuButton() {
    return (
        <>
            <Link to="/menu">
                <button type="button" className="btn btn-success btn-large">
                    Our File Menu
                </button>
            </Link>
        </>
    )
}

export default MenuButton;