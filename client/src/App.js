//in here we just want the structure of our routes
//just the definitions of the routes

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
//Router=
//instead of switch we will use ROUTES
//Route= route that we created in the pages folder
import HomePage from "./pages/HomePage/HomePage";
import CreatePost from "./pages/Newsletter/CreatePost"
import AboutUs from "./pages/AboutUs/About"
import './App.css';
import FoodPantry from './pages/FoodPantry/FoodPantry';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  
  return (
  <div className="App"> 
  <Router>
    
    <Header />
    <br></br>
    <Routes>
       <Route path="/" element={<HomePage/>}/>   
       <Route path="/createpost" element={<CreatePost/>}/>  
       <Route path="/aboutus" element={<AboutUs/>}/> 
       <Route path="/foodpantry" element={<FoodPantry/>}/>
       </Routes>  
  </Router>
  <br></br>
  <Footer/>
  </div>
      );
}

export default App;

