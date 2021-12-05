import React, { useState, useEffect } from 'react';
import './App.css';

const getInitialTasks = () => {
  const initialTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  return initialTasks;
}
// lazy initialization
function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // const initialTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  const addTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  }

  const removeTask = (index) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
    setInput('');
  }
  // const removeTask = (event) => {
  //   const index = event.target.dataset.index;
  //   const tasksCopy = [...tasks];
  //   tasksCopy.splice(index, 1);
  //   setTasks(tasksCopy);
  //   setInput('');
  // }

    return (
      <div>
        <h1>Tasks</h1>
        <h2>You have {tasks.length} tasks</h2>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              {/* <button data-index={i} onClick={removeTask}>Done</button> */}
              <button onClick={() => removeTask(i)}>Done</button>
            </li>
          ))}
        </ul>
        <input value={input} onChange={handleChange} />
        <button onClick={addTask}>Add</button>
      </div>
    );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       input: ''
//     }
//   }
//   componentDidMount() {
//     const tasks = localStorage.getItem('tasks');
//     if (tasks) {
//       this.setState({
//         tasks: JSON.parse(tasks)
//       });
//     }
//     window.addEventListener('beforeunload', () => {
//       localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
//     });
//   }

//   handleChange = (event) => {
//     this.setState({
//       input: event.target.value
//     });
//   }

//   addTask = () => {
//     this.setState(state => ({
//       tasks: [...state.tasks, state.input],
//       input: ''
//     }));
//   }

//   removeTask = (event) => {
//     const index = event.target.dataset.index;
//     console.log(index);
//     this.setState(state => {
//       const tasks = [...state.tasks];
//       tasks.splice(index, 1);
//       return { tasks: tasks };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Tasks</h1>
//         <h2>You have {this.state.tasks.length} tasks</h2>
//         <ul>
//           {this.state.tasks.map((task, i) => (
//             <li key={i}>
//               {task}
//               <button data-index={i} onClick={this.removeTask}>Done</button>
//             </li>
//           ))}
//         </ul>
//         <input value={this.state.input} onChange={this.handleChange} />
//         <button onClick={this.addTask}>Add</button>
//       </div>
//     );
//   }
// }

export default App;
