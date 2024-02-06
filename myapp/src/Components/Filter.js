import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParam,setSearchParam] = useSearchParams();
    console.warn(searchParam.get('age'))

    return(
        <div>
            <h1>Filter Page</h1>
        </div>
    )
}
export default Filter;