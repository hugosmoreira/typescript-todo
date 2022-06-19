import React, { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Task} from './interfaces/ITask';



function App() {

  const [taskList, setTaskList] = useState<Task[]>([]);


  return (
    <div className="App">
     <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={[]} />
        </div>
        

      </main> 
     <Footer />    
     
    </div>
  );
}

export default App;
