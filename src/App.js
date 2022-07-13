import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import TaskList from './components/TaskList';

import Button from 'react-bootstrap/Button';

import DoneList from './components/DoneList';

import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const [taskList, setTaskList] = useState([]);

  const [markedList, setMarkedList] = useState([]);

  const [doneList, setDoneList] = useState([]);

  
  const markAsComplete = (val, index) => {
    const temp = markedList;
    if (temp.includes(index)) {
      temp.splice(temp.indexOf(index), 1);
    }
    else {
      temp.push(index);
    }
    setMarkedList(temp);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      const newList = taskList.concat(input);
      setTaskList(newList);
    }
    setInput('');
  }


  function handleTasks() {
    const tasks = taskList;
    const temp = markedList;
    const finish = doneList;
    

    for (let index of temp) {
      finish.push(tasks[index]);
    }

    temp.sort((a, b) => a - b).reverse();

    for(let index of temp){
      tasks.splice(index,1);
    }

    setTaskList(tasks);
    setMarkedList([]);
    setDoneList(finish);
  }

  function deleteCompleted(){
    setDoneList([]);
  }


  return (

    <Container>
      Enter your task below
      <Row xl={{ span: 4, offset: 4 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Label> Task: </Form.Label>
          <Form.Control type="text" placeholder="Task" onChange={e => setInput(e.target.value)} value={input}></Form.Control>
          <Button type="submit">Submit
          </Button>
        </Form>
      </Row>
      <Row>
        <Col>
          <TaskList taskList = {taskList} markAsComplete = {markAsComplete}></TaskList>
        </Col>
        <Col>
        <DoneList doneList = {doneList}></DoneList>
        </Col>
      </Row>
      <Row>
        <Button onClick = {handleTasks}>Move marked items to completed table</Button>
        <Button onClick = {deleteCompleted}>Clear completed items</Button>
      </Row>

    </Container>

  );
}

export default App;