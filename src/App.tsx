import React, { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Task} from './interfaces/ITask';
import Modal from './components/Modal';



function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }
 

  return (
    <div className="App">
      <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} />} />
     <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={[]} handleDelete={deleteTask}/>
        </div>
        

      </main> 
     <Footer />    
     
    </div>
  );
}

export default App;
