export default (state = null,action:any)=>{
    if(action.type === "CATEGORIES"){
        return action.payload;
    }
    return state;
}