import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import './createnote.css'



 const CreateNote=(props)=> {
    
    const obj={
        title:"",
        text:""
    }
    const [note, setNote] = useState(obj);

    const [total, setTotal] = useState([]);
   
   
    const itemEvent = (event) => {
     const {name,value}=event.target;
        setNote((prev)=>{
           return {...prev,
            [name]:value
            }

        });


    };

    const setIteam=()=>{ 
       //props.pass(note)
       setNote(obj);
       axios.post('http://localhost:8000/api/postNote', {
         title: note.title,
         note: note.text
       })
       .then(function (response) {
         window.location.reload();
         
         console.log(response);
       })

    }



    return (
 <>
 
<div className="main">
   
      NoteApp
     
       <input type="text" placeholder="Title" name="title" autoComplete="off" onChange={(e)=>{itemEvent(e)}} value={note.title}/>
       <textarea  placeholder="Write A Note" name="text" onChange={(e)=>{itemEvent(e)}} value={note.text}/>
       <Button onClick={setIteam}><AddIcon /></Button>
       
      
    
</div>

 </> 
 );
}

export default  CreateNote;
