import { Button, } from 'react-bootstrap';
import './ListTask.css'
import Task from '../Task/Task'
import {useSelector} from "react-redux"
import React, {useState} from 'react'

export default function ListTask(){

const toDos = useSelector( state => state.toDosReducer.todos)


const [showDone, setShowDone] = useState(false);
const [showNotDone, setShowNotDone] = useState(false);

const handleShowDone =()=> {
    setShowDone(!showDone)
    setShowNotDone(false)
 }
 const handleShowNotDone =()=> {
    setShowNotDone(!showNotDone)
    setShowDone(false)
 }
 const handleRemoveFilters =()=> {
    setShowNotDone(false);
    setShowDone(false);
 }
console.log(toDos)
    return (
<div className="listTask">
<Button variant="danger" onClick={handleShowNotDone}>  'Not Done' </Button>{' '}
<Button variant="success" onClick={handleShowDone}> 'Done'</Button>
<Button variant="info" onClick={handleRemoveFilters}> Remove filters </Button>
<div className="todos" style={{border:"3px"}} >
        
        {
      (showDone) ? toDos.filter(el=>el.done===true).map((task)=><Task taskToDo={task}/>)
   : (showNotDone) ? toDos.filter(el=>el.done===false).map((task)=><Task taskToDo={task}/>)
   :  toDos.map((task)=><Task taskToDo={task}/>)
        }


</div>
</div>
    )
}
