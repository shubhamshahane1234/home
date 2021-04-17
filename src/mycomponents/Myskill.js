import React from 'react'
import Myskills from "./Myskills"

export default function Myskill() {
    return (
        <>

<h1 class = "text" style = {{textAlign: "center"}}> Myskills</h1>

 <h4 class = "text">Frontend technologies</h4>
<div style = {{display : "flex"}}>
<Myskills src = "/images/html.png"/>
<Myskills src = "/images/css.logo.png"/>
<Myskills src = "/images/js.png"/>
<Myskills src = "/images/reactjs.png"/>
<Myskills src = "/images/bs.png"/>
</div><hr/>

<h4 class = "text">Backend technologies </h4>
<div style = {{display : "flex"}}>
<Myskills src = "/images/py.png"/>
<Myskills src = "/images/dj.png"/>
<Myskills src = "/images/fl.png"/>
</div><hr/>

<h4 class = "text">Database</h4>
<div style = {{display : "flex"}} >
<Myskills src = "/images/mdb.png"/>
<Myskills src = "/images/mysql.png"/>
</div><hr/>


<h4 class = "text">softwares</h4>
<div style = {{display : "flex"}} >
<Myskills src = "/images/vscode.png"/>
<Myskills src = "/images/pycharm.png"/>
<Myskills src = "/images/sublime.png"/>
</div><hr/>




        </>
    )
}
