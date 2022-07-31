import React, {useState} from 'react';
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';


// mui icon
import {GrFormAdd} from "react-icons/gr"

const CreateNote =(props) => {

    const [note,setNote]=useState({
        title:"",
        content:"", 

    }) ;


    const InputEvent =(event) =>{

        const value =event.target.value;
        const name =event.target.name;

        // const {name,value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]:value ,
            };
        });

        console.log(note);
};

const addEvent =() =>{
    props.passNote(note);
    setNote({
        
        

    });

  


};
return <> 

<div className='main_note'>
    <form>
        <input type='text' name='title'  
        onChange={InputEvent}
        placeholder='Title' autoComplete='off' />
        <textarea 
        rows='' 
        column='' 
        name='content'
        value={note.content} 
        onChange={InputEvent}
        placeholder ='Write a notes...'>
        </textarea>
        <Button onClick={addEvent}>
            <GrFormAdd className="plus_sign" /> 
        </Button>
        
        
    
    </form>
</div>

</>;


};
 


export default CreateNote;