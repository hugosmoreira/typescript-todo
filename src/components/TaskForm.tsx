import React from 'react'
import styles from './TaskForm.module.css'

type Props = {
    btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <>
        <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Titulo:</label>
                <input type="text" name="title" placeholder='Titulo da sua tarefa' />
            </div>
            <div>
                <label htmlFor="difficult">Dificuldate:</label>
                <input type="text" name="difficult" placeholder='Dificuldade de tarefa' />
            </div>
            <input type="submit" value={btnText} />
        </form>
    
    </>
  )
}

export default TaskForm