import React,{useContext} from 'react'
import {FlipkartContext} from '../context/FlipkartContext'

const Remove=({index}) =>{
    const {removeProduct}=useContext(FlipkartContext)
    return (
        <div>
             <a className="pr-3" href="#">SAVE FOR LATER</a>
                                        <button type="button" onClick={() => removeProduct(index)}
                                            className="btn btn-primary">REMOVE</button>
        </div>
    )
}

export default Remove
