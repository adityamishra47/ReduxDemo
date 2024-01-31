export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"

export const incrementActionDispatch = (value) => {
    return { type: INCREMENT, payload: value }
}

export const decrementActionDispatch = (value) => {
    return { type: DECREMENT, payload: value }
}

const fetchProducts = (data) => {
    return {
        type: FETCH_PRODUCTS,
        payload: data
    }
}

export const fetchProductsAsync = () => {
    return dispatch => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(response => {
                dispatch(fetchProducts(response.products))
            })
            .catch(err => {
                console.error("Error: ", err);
            })
    }
}
