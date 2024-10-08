import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {} from "../redux/actionType"
import {useNavigate,useParams} from "react-router-dom"
import { getSingleUsers, loadUsers, updateUsers } from '../redux/action'
const EditUser = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const data = {name,email,phone,password}
    const dispatch = useDispatch()
    const {id} = useParams();
    const navigantion = useNavigate()
    const getData=(e)=>{
        e.preventDefault();
        dispatch(updateUsers(data,id))
        dispatch(loadUsers())
        navigantion("/")

    }
    useEffect(()=>{
        dispatch(getSingleUsers(id,setName,setEmail,setPhone,setPassword))
    },[])

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={(e)=>getData(e)}>
      <table border="2px" align='center'>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>

        <label>Email</label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>

        <label>Phone</label>
        <input type='text' value={phone}  onChange={(e)=>{setPhone(e.target.value)}}/><br/><br/>

        <label>Password</label>
        <input type='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <button>Update</button>
        
      </table>
      </form>

    </div>
  )
}

export default EditUser
