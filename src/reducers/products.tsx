export default (state={},action:any) =>{
    if(action.type === 'ADD_PRODUCT'){
        return {...state, [action.payload.id]: action.payload}
    }
    return state;
}