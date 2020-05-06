import React from 'react'

import Map from './Map'

const Items=({productsData,decrmentCounter,incrementCounter,removeProduct}) =>{
    console.log(productsData)
    return (
        <>
        {productsData.map((productsData, index) =>
                           (
                               <>
                               <Map incrementCounter={incrementCounter}
                               decrmentCounter={decrmentCounter}
                               productsData={productsData}
                               removeProduct={removeProduct}
                               index={index}></Map>
                               </>
                           )    
                            )
                            }
            
        </>
    )
}

export default Items
