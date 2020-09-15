import _ from 'lodash';
export default (state={},action:any) =>{
    if(action.type === 'ADD_PRODUCT'){
        return {...state, [action.payload.id]: action.payload}
    }
    if(action.type === 'ALL_PRODUCTS'){
        return {...action.payload}
    }
    if(action.type === 'DELETE_CATEGORY'){
        return _.omit(state,action.payload);
    }
    if(action.type === 'DELETE_PRODUCT'){
        return _.omit(state,action.payload);
    }
    return state;
}