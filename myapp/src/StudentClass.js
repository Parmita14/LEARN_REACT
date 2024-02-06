import React from "react";
//
export class StudentC extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>Student {this.props.name}</div>
        )
    }
}