export default (state = {},action:any)=>{
    if(action.type === "CATEGORIES"){
        return action.payload;
    }
    if(action.type === "ADD_CATEGORIES"){
        return {...state, [action.payload.id]:action.payload}
    }
    return state;
}