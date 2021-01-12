import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}


const tarefas = ['Acordar', 'Tomar Café', 'Estudar', 'Almoçar'];


function App() {
  return (
    <ul>
    {tarefas.map((element) =>  task(element))}
    </ul>
  );
}

export default App;
