
const initialState = {user : null}

const userReducer = (state = initialState,action)=>{
    if(action.type === "SET_USER"){
        return {
            user : action.payload.user
        }
    }
    else if(action.type === "CLEAR_USER"){
        return {
            user : null
        }
    }
    return state
}
export default userReducer