import React from 'react'
import { Task } from '../interfaces/ITask'
import styles from './TaskList.module.css'



type Props = {
  taskList: Task[]
}

const TaskList = (props: Props) => {
  return (
    <>
      {TaskList.length > 0 ? (
        <p>Tem tarefas cadastradas</p>
      ) : (
        <p>Nenhuma tarefa cadastrada</p>
      )}
    </>
  )
}

export default TaskList