import React,{useContext} from 'react'
import {FlipkartContext} from '../context/FlipkartContext'
const Updates=({index,productsData}) =>{
    const {decrmentCounter,incrementCounter}=useContext(FlipkartContext)
    return (
        <div>
            {!!productsData.quantity&&(<button onClick={() => decrmentCounter(index)}
                                                className="btn btn-primary m-2 ">-</button>)}
                                            <span className="badge p-2 text-center">{productsData.quantity}</span>
                                            <button onClick={() =>incrementCounter(index)}
                                                className="btn btn-primary m-2 ">+</button>
            
        </div>
    )
}

export default Updates
