import React from 'react'
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function HomePage() {
    return(
        <>
        <Router>
        <div className="container-fluid">
        <header className="pt-2">
            <nav className="navbar navbar-expand justify-content-between text-black" >
                <h4 style={{ fontSize: 'xx-large' }} className="text-warning navbar-brand">
                    <img height="100px" src="https://images-platform.99static.com//kgq3Hx-c3PxjMK4gWiqUaZUfSgI=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/99/99316/attachment_99316081" />Desserts&Shakes</h4>
                <ul className="navbar-nav ">
                    
                        <li className="nav-item pr-4">
                        <Link to="/Home"><a className="nav-link  text-dark font-weight-bold" href="#">Home</a></Link>
                        </li>
                    <li className="nav-item pr-4">
                    <Link to="/Menu"> <a className="nav-link  text-dark font-weight-bold" href="#">Menu</a></Link>
                        </li>     
                        <li className="nav-item pr-4">
                            <a className=" nav-link text-dark font-weight-bold" href="#">Login</a>
                        </li>
                        <li className="pr-4 nav-item">
                            <button className="btn btn-dark">Sign Up</button>
                        </li>
                        <li className="nav-item pr-4">
                            <Link to="/Contact"><a className=" nav-link text-dark font-weight-bold" href="#">Contact Us</a></Link>
                        </li>
                        <li className="pr-4 nav-item">
                            <a className=" nav-link text-dark font-weight-bold">MyCart</a>
                        </li>
                </ul>
            </nav>
        </header>
        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Contact" exact component={Contact}></Route>
        <Route path="/Menu" exact component={Menu}></Route>
        </div>
        </Router>
        </>
    )

}
export default HomePage