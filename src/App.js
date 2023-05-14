import React, { useState } from 'react';
import Todolist from './Todolist';
const App = () =>{
    const[inputList,setInuptList]=useState("");
    const[Items, setItems]=useState([]);
    const itemEvent = (event) =>{
        setInuptList(event.target.value);
    };
    const listOfItems = () =>{
       setItems((oldItems) =>{
        return [...oldItems,inputList];
    });
        setInuptList("");
    };
    const deleteItems =(id) =>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrayElem,index)=>{
            return index !==id;

            })
        })
    };
    return(
    <>
<div className='main_div'>
<div className='center_div'>
    <br/>
    <h1>To do List For placement !!!</h1>
    <br/>
    <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent}/>
    <button onClick={listOfItems}> + </button>
    <ol>
        {/* <li>{inputList}</li> */}
          {Items.map((itemval,index) => {
            return <Todolist key={index} id={index} text={itemval} 
                onSelect={deleteItems}
            />;
          })}
    </ol>
</div>

</div>
    </>
    )
}
export default App;