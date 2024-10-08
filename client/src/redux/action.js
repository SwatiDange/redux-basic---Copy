import {ADD_USERS, DELETE_USERS, GET_SINGLE_USERS, GET_USERS, UPDATE_USERS} from "./actionType"
import axios from "axios"

const getUsers =(users)=>({
        type:GET_USERS,
        payload:users
})   
export const loadUsers=()=>{
    return function(dispatch){
        axios.get("http://localhost:5000/user/display").then((resp)=>{
            console.log("display",resp);
            dispatch(getUsers(resp.data))
        }).catch(error=>{
            console.log(error);
        })
    }
}

const userDeleted =()=>({
    type:DELETE_USERS,
    

})

export const deleteUsers=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:5000/user/deleteapi/${id}`).then((resp)=>{
            console.log("display",resp);
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch(error=>{
            console.log(error);
        })
    }
}

const userAdded =()=>({
    type:ADD_USERS,
})

export const addUsers=(user)=>{
    return function(dispatch){
        axios.post(`http://localhost:5000/user/insert`,user).then((resp)=>{
            console.log("display",resp);
            dispatch(userAdded())
            // dispatch(loadUsers())
        }).catch(error=>{
            console.log(error);
        })
    }
}

const getUser =(user)=>({
    type:GET_SINGLE_USERS,
    payload:user
    

})


export const getSingleUsers=(id,setName,setEmail,setPhone,setPassword)=>{
    return function(dispatch){
        axios.get(`http://localhost:5000/user/findapi/${id}`).then((resp)=>{
            console.log("display",resp);
            dispatch(getUser(resp.data));
            setName(resp.data.name)
            setEmail(resp.data.email)
            setPhone(resp.data.phone)
            setPassword(resp.data.password)



            
         
        }).catch(error=>{
            console.log(error);
        })
    }
}

const userUpdated =()=>({
    type:UPDATE_USERS,
})

export const updateUsers=(user,id)=>{
    return function(dispatch){
        axios.put(`http://localhost:5000/user/updateapi/${id}`,user).then((resp)=>{
            console.log("display",resp);
            dispatch(userUpdated())
         
        }).catch(error=>{
            console.log(error);
        })
    }
}

