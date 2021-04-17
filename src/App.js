
import './App.css';
import Header from "./mycomponents/Header"
import Displaypic from "./mycomponents/Displaypic"
import Footer from "./mycomponents/Footer"
import Info from "./mycomponents/Info"
import Myskill from "./mycomponents/Myskill"
import Contact from "./mycomponents/Contact"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (<>
    <Router>
      <Header />





      <Switch>
        <Route exact path="/" render={() => {
          return (
            <>
              <Displaypic />
              <Info />
              <Myskill />
            </>)
        }}>
       </Route>



        <Route exact path="/Contact" render={() => {
          return (
            <>
              <Contact />
            </>
          )
        }}>

        </Route>

      </Switch>








      <Footer />
    </Router>
  </>
  );
}

export default App;
