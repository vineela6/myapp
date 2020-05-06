import React, { useState, useEffect } from 'react'
const IceCreams = () => {
    const [productsData, setProductsData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        fetch('https://jsonblob.com/api/8f51a8de-8dd7-11ea-82f0-f5d885d3ad80').then(response => response.json()).then(json => {
            setProductsData([...json])
            totalAmount: parseInt(json.reduce((acc, item) => acc + item.cost, 0))
        })
    }, []);
    
    useEffect((prevState) => {
            const totalCost = productsData.map(product => parseInt(product.prices.cost) * product.quantity)
            setTotalAmount( totalCost.reduce((acc, amount) => acc + amount, 0)

            )
        
    }, [productsData]);
    const incrementCounter=(index) =>{
        productsData[index].quantity++
        setProductsData( [...productsData] )
    }
    const decrmentCounter=(index) =>{
        productsData[index].quantity--
       setProductsData( [...productsData] )
    }
    const removeProduct=(index)=>{
        productsData.splice(index,1)
        setProductsData( [...productsData])

    }

        return (
            <>

                <div >
                    <div class="row py-5 px-5">
                        <div class="col-8 border ">
                            <h5 className="pt-2 pb-2">My Cart</h5>
                            {productsData.map(({ imageLink, name, quantity, prices: { cost, originalcost, normaloffer } }, index) =>
                                <div className="row border">
                                    <div className="col-3 mt-3 ">
                                        <img style={{ height: '113px', width: '112px' }}
                                            src={imageLink} />

                                        <div className="row pt-3 align-items-center ">
                                            {!!quantity&&(<button onClick={() => decrmentCounter(index)}
                                                className="btn btn-primary m-2">-</button>)}
                                            <div className="card p-2 text-center" style={{
                                                height: '39px',
                                                width: '50px'
                                            }}>{quantity}</div>
                                            <button onClick={() =>incrementCounter(index)}
                                                className="btn btn-primary m-2">+</button>
                                        </div>
                                    </div>
                                    <div className="col-6 py-3">
                                        <h6>{name}</h6>
                                        <div style={{ display: 'flex' }} className="pt-2">
                                            <b className=" pr-2">${cost}</b>
                                            <p className="pr-2"><strike>{originalcost}</strike></p>
                                            <p className="text-success">{normaloffer}%Off</p>
                                        </div>

                                        <a className="pr-3" href="#">SAVE FOR LATER</a>
                                        <button type="button" onClick={() => removeProduct(index)}
                                            className="btn btn-primary">REMOVE</button>
                                    </div>

                                </div>
                            )
                            }
                        </div>
                        <div className="col-3 border ml-4 jumbotron" style={{ height: '187px' }}>
                            <h5>PRICE DETAILS</h5><hr />
                            <p className="float-left">Total Amount</p><b className="float-right">{totalAmount}</b>
                        </div>
                    </div>
                </div>

            </>
        )
    }

export default IceCreams;