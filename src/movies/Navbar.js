import React from 'react'

const Navbar = ({ inputHandler, Search }) => {
    return (
        <div>
            <div className=" navbar m-0 bg-dark fixed-top mb-2">
                <img class="navbar-brand ml-4" src="https://i.gadgets360cdn.com/large/amazon-prime-video-wa_1539075436936.jpg" width="100px" />
                <a href="#" style={{ color: 'white' }}> Home </a>
                <div className="navbar p-0 ">
                    <div className="input-group my-3">
                        <input type="text" onChange={inputHandler} placeholder="Search.." name="search" />
                        <div className="input-group-append">
                            <button onClick={Search} className="btn btn-danger" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <a href="#" style={{ color: 'white' }}>Movies </a>
                <a href="#" style={{ color: 'white' }}>Kids </a>
                <a href="#" style={{ color: 'white' }}>
                    <p style={{ color: 'white' }}>Acc Holder Name</p>
                </a>
            </div>
        </div>
    )
}

export default Navbar
