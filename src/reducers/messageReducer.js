const messageReducer = (state='', action) => {
    switch(action.type){
        case 'TYPE':
            return action.payload
        default:
            return state
                
    }
}
 
export default messageReducer;