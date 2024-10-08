import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { deleteUsers, loadUsers } from '../redux/action'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadUsers())
    },[])
    const {users} = useSelector((state)=>state.data)

    const navigantion = useNavigate()
    const handleDelete=(id)=>{
        if(window.confirm("Are you sure Deleted")){
            dispatch(deleteUsers(id))
        }
    }
  return (
    <div>
      <h1>Home</h1>
      <table border="2px" align='center'>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Password</td>
            <td>Actions</td>
        </tr>
        {
            users.map((result)=>{
                return(
                    <tr>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.password}</td>
                        <td><button onClick={()=>{handleDelete(result.id)}}>Delete</button>
                        <button onClick={()=>navigantion(`/editUser/${result.id}`)}>Edit</button></td>


                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Home
