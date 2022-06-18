import React , {useState, ChangeEvent, FormEvent, useEffect}  from 'react'
import styles from './TaskForm.module.css'
import { Task} from '../interfaces/ITask';

type Props = {
    btnText: string
    taskList: Task[]
    setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<string>('');

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);

        const newTask: Task = {id, title, difficulty};
        

        setTaskList([...taskList, newTask]);
        setTitle('');
        setDifficulty('');

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        } else {
            setDifficulty(e.target.value);
        }
        console.log(title);
        console.log(difficulty);
    }


  return (
    <>
        <form className={styles.form} onSubmit={addTaskHandler}>
            <div className={styles.input_container}>
                <label htmlFor="title">Titulo:</label>
                <input type="text" name="title" placeholder='Titulo da sua tarefa' onChange={handleChange}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldate:</label>
                <input type="text" name="difficulty" placeholder='Dificuldade de tarefa' onChange={handleChange}/>
            </div>
            <input type="submit" value={btnText} />
        </form>
    
    </>
  )
}

export default TaskForm