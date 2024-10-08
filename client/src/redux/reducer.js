import { ADD_USERS, DELETE_USERS, GET_SINGLE_USERS, GET_USERS, UPDATE_USERS } from "./actionType";

const initialState ={
    users:[],
    user:{}
}

const userReducers=(state=initialState,action)=>{
    switch(action.type){
        case GET_USERS:{
            return{
                ...state,
                users:action.payload
            }
        }
        case DELETE_USERS:{
            return{
                ...state,
            }
        }
        case ADD_USERS:{
            return{
                ...state,
            }
        }
        case GET_SINGLE_USERS:{
            return{
                ...state,
                user:action.payload
            }
        }
        case UPDATE_USERS:{
            return{
                ...state,
            }
        }
        default:return state;
    }
}

export default userReducers