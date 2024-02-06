import React from "react";
import { CommonContext } from "./CommonContext";
class Footer extends React.Component{
    render(){
        return(
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h1 style={{backgroundColor: color}}>Hello, this is Footer page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }
}
export default Footer;