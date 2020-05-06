import React from 'react'

const Navbar=()=> {
    return (
        <div>
            <div className=" navbar m-0 pr-3 bg-primary fixed-top">
            <img class="navbar-brand ml-4" src="https://www.kindpng.com/picc/m/3-31442_vector-transparent-flipkart-logo-png-png-download.png" width="100px" />
      <div class="search-container"> 
      <form action="" method="get"> 
      <input type="text" placeholder="Search.." name="search"/> 
      <button class="bg-warning" type="submit">Search</button> 
      </form> </div> 
      <a href="#" style={{color: 'white'}}>Log in </a>
       <a href="#" style={{color: 'white'}}>More </a> 
       <a href="#" style={{color: 'white'}}> 
       <p style={{color: 'white'}}>Cart</p> 
       </a> 
       </div>
        </div>
    )
}

export default Navbar
