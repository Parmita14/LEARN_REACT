import React from "react";
import { Link,Outlet } from "react-router-dom";
function Contact(){
    return(
        <div>
            <h1>On contact page</h1>
            <h1>We have some businesses here</h1>
            <Link to="company">Company</Link>
            <Link to="Channel">Channel</Link>
            <Link to="Other">Other</Link>
            <Outlet/>

        </div>
    )
}
export default Contact;