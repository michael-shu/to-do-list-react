import React from 'react';
import ToDoItem from './ToDoItem';
 
 
function ToDoList (props) {


   return (
       <ol>
           {props.taskList.map((task,index) => {

               return (
                   <ToDoItem markAsComplete = {props.markAsComplete} key = {task + '_' + index} index = {index} text={task} />
               );
           })}
       </ol>
   );
};
 
export default ToDoList;