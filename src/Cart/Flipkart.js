import React, { useContext,useEffect, useReducer } from 'react'
import Items from './Items';
import Price from './Price';
import Navbar from './Navbar';
import Footer from './Footer';
import useAPI from './useAPI';
import {FlipkartContext} from '../context/FlipkartContext';
const Flipkart = () => {
    
const{
    state,
    incrementCounter,
    decrmentCounter,
    removeProduct
}= useContext(FlipkartContext);
    return (
        <>
            <Navbar></Navbar>
            <div >
                <div class="row py-5 px-5 mt-4">
                    <div class="col-7">
                        <h5 className="pt-2 pb-2">My Cart</h5>
                        <Items productsData={state.productsData}></Items>
                    </div>
                    <div className="col-3 border mt-5 ml-4 shadow-lg p-3 mb-5 bg-white rounded" style={{ height: '187px' }}>
                        <Price></Price>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )

}

export default Flipkart;