import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {} from "../redux/actionType"
import {useNavigate} from "react-router-dom"
import { addUsers } from '../redux/action'
const AddUser = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const data = {name,email,phone,password}
    const dispatch = useDispatch()
    const navigantion = useNavigate()
    const getData=(e)=>{
        e.preventDefault();
        dispatch(addUsers(data))
        navigantion("/")

    }
  return (
    <div>
      <h2>Add User</h2>
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
        <button>Submit</button>
        
      </table>
      </form>

    </div>
  )
}

export default AddUser
