import {Link, useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1> home page</h1>
            <p>This is a home page</p>
            <Link to="/about">Go to About Page</Link>
            <br/>
            <button onClick={()=>navigate('/about')}>About Page</button>
        </div>
    )
}
export default Home;