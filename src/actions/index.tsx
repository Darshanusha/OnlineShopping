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

export const deleteCategory =(id:any) => async(dispatch:any)=>{
    const response = await products.delete(`/categories/${id}`);
    dispatch({type:"DELETE_CATEGORY", payload:response.data});
}

export const addCategory = (category:any) => async (dispatch:any)=>{
    const response = await products.post('/categories',category);
    dispatch({type:"ADD_CATEGORIES", payload:response.data})
}