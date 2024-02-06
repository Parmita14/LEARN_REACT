// import { Children } from "react";

function Student(Parms){
    const num = Parms.name;

    console.log(Parms);
return(
    <div style={{backgroundColor:"grey", margin:"20"}}>
        <h1>Student Component {num} {Parms.email} {Parms.Addition}</h1>
    </div>
);
}
export default Student;