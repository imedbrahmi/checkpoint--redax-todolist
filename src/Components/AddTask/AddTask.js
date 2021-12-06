import { Button, Form } from 'react-bootstrap';
import './AddTask.css';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from "../../Actions"




function AddTask(){
   const dispatch = useDispatch()
    const  [newToDo, setNewToDo]= useState("")
    const handleChange =(input) =>{
        setNewToDo(input)
    }
    const handleSubmit =()=> {
         
        dispatch(addTask({newToDo: newToDo}))
        
        
    }
   
    return (
<div className="add">

<div className="input">
<Form.Control type="text" placeholder="Add To Do ..." onChange={(e) => handleChange(e.target.value) }/>
<Button className="addButton" variant="success"onClick={handleSubmit}>    ADD    </Button>
</div>
</div>
    )
   
}
export default AddTask