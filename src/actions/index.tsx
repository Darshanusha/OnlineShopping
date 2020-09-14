import products from '../api/products';
export const categories = () => async (dispatch:any)=>{
    const response = await products.get('/categories');
    dispatch({type:"CATEGORIES", payload:response.data});
}

export const addProducts = (product:Object) => async (dispatch:any)=>{
    const response = await products.post('/products',product);
    dispatch({type:"ADD_PRODUCT", payload:response.data});
}

export const getAllProducts = ()=> async (dispatch:any)=>{
    const response = await products.get('/products');
    dispatch({type:"ALL_PRODUCTS", payload:response.data});
}