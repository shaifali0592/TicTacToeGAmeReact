import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar className="header-nav">
            
                <div className="tictaktoe-header">
                   <NavLink to="/"><img src="https://cdn-icons-png.flaticon.com/512/5791/5791753.png"/>Tic-Tac-Toe</NavLink>
                
                    
                </div>
            </Navbar>
        </>
    )
}

export default Header;