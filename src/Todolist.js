import React from 'react';
const Todolist = (props) =>{
  
    return (
        <>
        <div className="todo_style">
        <i className="bi bi-x-circle-fill" aria-hidden="true"
            onClick={()=> {
                props.onSelect(props.id);
            }}
        />
    <li>{props.text}</li>
    </div>
    </>
    );
}
export default Todolist;