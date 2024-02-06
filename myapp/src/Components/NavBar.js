import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <ul>
                <li>
            <Link to="/About">About</Link>
                </li>
           
           <li>
           <Link to="/">Home</Link>
           </li>
           <li><Link to="/User/parms">user</Link></li>
           </ul>
        </div>
    )
}
export default NavBar;