import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './note.css'

 const Note=(prop)=> {
   const [title,setTitle] = useState(prop.obj.title)
    const [note,setNote] =useState(prop.obj.note)
    const [edit,setEdit] =useState(true)
    
   

   const deletenode=()=>{
       console.log(prop.id);
       prop.deleteiteam(prop.id);
 }

  
 const itemEvent = (event) => {
   const {name,value}=event.target;
   
     
     let obj=  {
          [name]:value
       }
          
   prop.change(obj,prop.id);


  };
  const Edit=()=>{
 if(edit){
   //  console.log(title)
   console.log(prop.id)
   
  setEdit(false);  
 }
 else{
   setEdit(true)
   fetch("http://localhost:8000/api/edit",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          title,
          note,
          id:prop.id
      })
  })



 }
  }
 
   
    return (
 <>
<div className="notemain">
   <form>
       <input type="text" name="title" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}  value={title} readOnly = {edit}  />
       <textarea  placeholder="Write A Note" name="text"  onChange={(e)=>{setNote(e.target.value)}} value={note} readOnly = {edit}/>
      
       <Button onClick={deletenode} ><DeleteIcon/></Button>
       <Button onClick={Edit} ><EditIcon/></Button>
     
       </form>
   
</div>
 </> 
 );
}

export default  Note;
