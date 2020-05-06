import React from 'react'


const Details=({productsData})=> {
    return (
        <div>
            <h6>{productsData.name}</h6>
                                        <div style={{ display: 'flex' }} className="pt-2">
                                            <b className=" pr-2">${productsData.prices.cost}</b>
                                            <p className="pr-2"><strike>{productsData.prices.originalcost}</strike></p>
                                            <p className="text-success">{productsData.prices.normaloffer}%Off</p></div>
        </div>
    )
}

export default Details
