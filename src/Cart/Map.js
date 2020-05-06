import React from 'react'
import Remove from './Remove';
import Details from './Details';
import Updates from './Updates';
const Map=({incrementCounter,decrmentCounter,index,productsData,removeProduct})=> {
    return (
        <div>
             <div className="row shadow-lg p-3 mb-3 bg-white rounded">
                                    <div className="col-3 mt-3 ">
                                        <img style={{ height: '113px', width: '112px' }}
                                            src={productsData.imageLink} />

                                        <div className="row pt-3 align-items-center ">
                                            <Updates  index={index} productsData={productsData}></Updates>
                                        </div>
                                    </div>
                                    <div className="col-6 py-3">
                                <Details productsData={productsData}></Details>        
                                    
                                       <Remove  index={index}></Remove>
                                    </div>

                                </div>
        </div>
    )
}

export default Map
