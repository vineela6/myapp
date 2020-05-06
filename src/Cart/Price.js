import React,{useContext} from 'react'
import {FlipkartContext} from '../context/FlipkartContext';
const Price=()=> {
    const {state:{totalAmount}}=useContext(FlipkartContext)
    return (
        <div>
            <h5>PRICE DETAILS</h5><hr />
                            <p className="float-left">Total Amount</p><b className="float-right">{totalAmount}</b>
        </div>
    )
}
export default Price
