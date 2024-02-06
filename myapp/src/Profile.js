import { useState } from "react";
function Profile(){
    // const [loggedIn,setLoggedIn] = useState(3);
   let loggedIn = 2
    return(
        <div>
            {
            loggedIn==1?
            <h1>Welcome user 1</h1>:
            loggedIn==2?<h1>Welcome user 2</h1>:
            loggedIn==3?<h1>Welcome user 3</h1>:
            <h1>Welcome 4</h1>
            }
        </div>
    )
}
export default Profile;