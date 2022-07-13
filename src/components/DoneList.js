function DoneList(props){

    return (
        <ul>
            {props.doneList.map((task,index) => {
 
                return (
                    <li key = {task + '_' + index}>{task}</li>
                );
            })}
        </ul>
    );
}

export default DoneList;