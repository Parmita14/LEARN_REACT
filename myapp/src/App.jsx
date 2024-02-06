// import React,{useRef} from 'react'

// export default function App() {
//   let inputRef = useRef(null);
//   let inputRef2 = useRef(null);

//   function submitForm(e){
//     e.preventDefault();
//     console.warn("input field one value : ", inputRef.current.value)
//     console.warn("input field second value: ", inputRef2.current.value)
//     let input = document.getElementById("inputRef3").value
//     console.log(input)

//   }
//   return (
//     <div>
//       <h1> Uncontrolled Components</h1>
//       <form onSubmit={submitForm}>
//         <input ref={inputRef} type='text'/><br/><br/>
//         <input ref={inputRef2} type="text"/><br/> <br/>
//         <input id="inputRef3" type="text"/><br/> <br/>

//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// HOC
// import React,{useState} from "react";


// export default function App() {
//   return (
//     <div>
//       <h1>HOC</h1>
//       <HOC cmp={Counter}/>
//     </div>
//   )
// }
// function HOC(props){
//   return<h2 style={{backgroundColor:"red",  height:'56px'}}><props.cmp/></h2>
// }
// function Counter(){
//   const [count,setCount] = useState(0);
//   return(
//     <div>
//       <h3>{count}</h3>
//       <button onClick={()=>setCount(count+1)}>Update</button>
//     </div>
//   )
// }
//
// import React from 'react'
// import { BrowserRouter,Route,Routes} from 'react-router-dom'
// import Home from "./Components/Home"
// import About from './Components/About';
// import NavBar from './Components/NavBar';
// import Page404 from './Components/Page404';
// import User from './Components/User';
// import Filter from './Components/Filter';
// import Company from './Components/Company';
// import Channel from './Components/Channel';
// import Contact from './Components/Contact';
// import Other from './Components/Other'
// import Login from './Components/Login';
// import Protected from './Components/Protected';
//  function App() {
//   return (
//     <div>
//   <BrowserRouter>
//   <NavBar/>
//     <Routes> 
//       <Route path="/" element={<Protected Component={Home}/>}/>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path="/About" element={<About/>}/>
//       <Route path='/User/:name' element={<User/>}/>
//       <Route path='/*' element={<Page404/>}/>
//       <Route path='/filter' element={<Filter/>}/>
//       <Route path='/contact/' element={<Contact/>}>
//         <Route path='Company' element={<Company/>}/>
//         <Route path='Channel' element={<Channel/>}/>
//         <Route path='Other' element={<Other/>}/>
//       </Route>
//     </Routes>
//   </BrowserRouter>
//     </div>
//   )
// }
// export default App;

// import React, { useEffect, useState } from "react";
// function App(){
//   const [data,setData] = useState([])
//   useEffect(()=>{
//     fetch("http://localhost:4000/todo").then((result)=>{
//       result.json().then((res)=>{
//         //  console.warn("result",res)
//         setData(res);
//       })
//     })
//   },[])
//   console.log(data);

//   return(
//     <div>
//       <h1>Get API Call</h1>
//       <table>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           data.map((item)=>
//           <tr>
//             <td>{item.userId}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>{item.mobile}</td>
//           </tr>)
//         }
//       </table>
//     </div>
//   )
// }
// export default App;
// import React, { useState } from "react";
// function App(){
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [mobile,setMobile] = useState("");
//   function saveUser()
//   {
//      console.log(name,email,mobile)
//      let data= {name,email,mobile}     
//      fetch("http://localhost:4000/todo",{
//       method:'POST',
//       header:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//      }).then((result)=>{
//       // console.warn("result",result);
//       result.json().then((res)=>{
//         console.warn(res);
//       })
//      })
//   }
//   return(
//     <div>
//        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br/><br/>
//        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}name="email"/><br/><br/>
//        <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}name="mobile"/><br/><br/>
//       <button type="submit" onClick={saveUser}>Save New User</button>
//     </div>
//   )
// }
// export default App;

// import React, { useState } from "react";
// import User from "./User";
// function App(){  
//   const [data,setData] = React.useState({name:'Parms',age:'21'})
//   return(
//     <div>
//       <h1>State Object with Hooks</h1>
//       <input type="text" placeholder="enter your name" value={data.name}
//       onChange={(e)=>{setData({age:data.age,name:e.target.value})}}/>
//       <input type="text" placeholder="enter age" value={data.age}
//       onChange={(e)=>{setData({name:data.name,age:e.target.value})}}/>

//       <h1>{data.name}</h1>
//       <h1>{data.age}</h1>

//     </div>
//   )  
  
// }
// export default App;
import React from "react";
import { CommonContext } from "./Components/CommonContext";
import Main from "./Components/Main";
import UpdateButton from "./Components/UpdateButton";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
class App extends React.Component{
  constructor(){
    super();
    this.updateColor=(color)=>{
      this.setState({
        color:color
      })
    }
    this.state={
      color:"green",
     updateColor: this.updateColor
    }
   
  }
  render(){
    return(
      <CommonContext.Provider value={this.state}>
        <Header/>
        <h1>Complete Context</h1>
        <Main/>
        <UpdateButton/>
        <Footer/>
     </CommonContext.Provider>

    )
  }
}
export default App;