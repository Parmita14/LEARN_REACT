import React,{useEffect,useRef} from "react";
function User(props)
{
    const lastVal = useRef();
    useEffect(()=>{
        lastVal.current = props.count
    })
    const previousProps = lastVal.current
    return(
        <div>
            <h1>User Component {props.count}</h1>
            <h1>Previous val {previousProps}</h1>
        </div>
    )
}
export default User;