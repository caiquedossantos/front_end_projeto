import { useState } from 'react';
import './App.css';
import  logo from './logo.png';

function App() {

      const [tarefa, setTarefa] = useState('');
      const [tarefas, setTarefas] = useState([]);

      const adicionarTarefa = () => {
        if(tarefas.includes(tarefa)){
          alert('Tarefa já existe na lista. ')
          return;
        }
        setTarefas([...tarefas,tarefa]);

        setTarefa('')
      }

      return(
        <div className='App'>
            <img src={logo} alt='Logo'/>
            <hr/>
            <h2>Adicionar Tarefa</h2>
            <input
            type='text'
            placeholder='Adicione uma tarefa'
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <hr/>
            <h2>Lista de Tarefas</h2>
            <ol>
              {tarefas.map((tarefa, index) => (<li key={index}>{tarefa}</li>))}
            </ol>
        </div>
      );

}

export default App;
