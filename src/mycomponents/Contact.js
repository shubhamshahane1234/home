import React from 'react'

export default function Contact() {
    return (
        <>
<h1 style={{textAlign:"center"}}> contact me </h1>


<form className = "p-5 ">
  <div className="mb-3" style = {{maxWidth : "500px"}}>
    <label for="exampleInputEmail1" className="form-label">First Name :</label>
    <input type="email" placeholder="name here" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3" style = {{maxWidth : "500px"}}>
    <label for="exampleInputPassword1" className="form-label">Last Name :</label>
    <input type="text" placeholder="last here" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3 " style = {{maxWidth : "500px"}}>
    <label for="exampleInputPassword1"  className="form-label">Phone :</label>
    <input type="text"  placeholder="phone number here" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3 " style = {{maxWidth : "500px"}}>
    <label for="exampleInputPassword1"  className="form-label">Comment :</label>
    <textarea className="form-control" placeholder="comment here" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
            
        </>
    )
}
