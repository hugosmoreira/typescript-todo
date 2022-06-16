import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
     <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList />
        </div>
        

      </main> 
     <Footer />    
     
    </div>
  );
}

export default App;
