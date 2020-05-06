import React, { useEffect, useState } from 'react'

const Menu = () => {
    const [iceCreams, setIceCreams] = useState([]);
    const [isAPILoaded, setIsAPILoaded] = useState(false);
    useEffect(() => {
        fetch('https://jsonblob.com/api/60f63548-b24f-11ea-a473-9b04387a67b5').
            then(response => response.json()).
            then(json => {
                const{a,b}=json
                setIceCreams([...b])
                setIsAPILoaded(true)
            })
    }, []);
    return (
        <>
            <div class="container mt-3 bg-warning" style={{border:'1px solid #151617'}}> 
                <div className="row">
                    {iceCreams.map(({ name, image, price }) => (
                        <div class="col-3 mt-2 mb-3">
                            <div class="card w-100" style={{ height: '330px' }}>
                                <img src={image} height="200px" class="card-img-top " />
                                <div class="card-body">
                                    <h5 class="card-title p-2">{name}</h5>
                                    <p class="card-text float-left ml-2 mr-5">${price}</p>
                                    <button className=" border btn-success btn-sm ml-5">Buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu