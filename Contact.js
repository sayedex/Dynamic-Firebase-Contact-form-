import React, { useState } from "react"
export default function Contact(){
//this is our object
const [user,setuser] = useState({
    Fname:"",
    Masseae:"",
})
const HandleClick = (e)=>{
const {name,value} = e.target;
setuser({...user,[name]:value})
}
//PostDeta
const PostDeta = async (eventa)=>{

    eventa.preventDefault();
    const {Fname,Masseae} = user;
    const res = await fetch("https://sayedtech-5e028-default-rtdb.firebaseio.com/DynamicContact.json",{

method:"POST",
headers:{
"Content-Type":"application/json",
},
body:JSON.stringify(
  {
      Fname,
      Masseae,
  }
)}
);

if(Fname && Masseae){

    setuser({
        Fname:"",
        Masseae:"",
    })
alert("Your Deta is Stored")


}else{
alert("hey fill")

}

};


return (
    <form method="POST">

<h1>Hello This is Dynamic form</h1>
<label>Enter Your Name</label><br/>
<input 
type="text"
placeholder="Enter Your Name"
value={user.Fname}
name="Fname"
onChange={HandleClick}
></input><br/>
<label>Enter Your Name</label>
<br/>
<input type="text"
 placeholder="Enter Your Masseage"
 value={user.Masseae}
 name="Masseae"
 onChange={HandleClick}
 
 ></input><br/>
<button onClick={PostDeta}>Send Your Requst</button>
</form>
)
}
