const reducer = (state, action) => {
    const { type, payload } = action
    const { productsData } = state;
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        }
        case 'SET_TOTAL_AMOUNT': {
            const totalCost = productsData.map(product => parseInt(product.prices.cost) * product.quantity)
            return {
                ...state,
                totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
            }
        }
        case 'REMOVE_PRODUCT': {
            const { index } = payload;
            return {
                ...state,
                productsData: [...productsData.filter((item,i)=>i!=index)]
            }
        }
        case 'INC_COUNTER': {       
            const { index } = payload;
            productsData[index].quantity++;
            return {
                ...state,
                productsData: [...productsData]
            }
        }
        case 'DEC_COUNTER': {
            const { index } = payload;
            productsData[index].quantity--;
            return {
                ...state,
                productsData: [...productsData]
            }
        }
        default: {
            return state
        }


    }
}
export default reducer