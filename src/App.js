// import logo from './logo.svg';
import './App.css';
import { useState,  useEffect } from 'react';
import { List } from './components/todoList';

// const List = ({ todoList, updateTodo }) => {
//   return (
//     <ul>
//       {
//         todoList.map((todo) => (
//           <li className="py-4" key={ todo.id } data-id={ todo.id } >
//             <label className={ todo.status ? 'line-through' : ''}>
//               <input onChange={ updateTodo } type="checkbox" className="mr-2"  data-id={ todo.id } checked={ todo.status }/>
//               { todo.name }
//             </label>
//           </li>
//         ))
//       }
//     </ul>
//   )
// }


const App = () => {
  const [ todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem('todoList')) || []);


  const addTodo = (event) => {
    const input = document.querySelector('#todoInput');
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: input.value,
        status: false,
      }
    ]);
    input.value = '';
  };

  const updateTodo = (event) => {
    const { id } = event.target.dataset;
    console.log(id)

    const newTodoList = todoList.map((todo) => {
      if(todo.id === Number(id)) {
        todo.status = !todo.status;
      }
      return todo;
    });

    setTodoList([ ...newTodoList ]);
  }

  const remoteAllTodo = () => {
    setTodoList([]);
  };
  
  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [ todoList ]);

  return (
    <div>
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React ToDoList</h1>
          <div className="flex">
            <input id="todoInput" type="text" className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0" placeholder="請輸入你的代辦事項" />
            <button onClick={ addTodo } className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button>
          </div>

          <List  todoList={ todoList } updateTodo={ updateTodo }/>

          <div className="flex justify-between items-center">
            <p>
              目前有 <span className="font-medium">{ todoList.length }</span> 個事項待完成
            </p>

            <button onClick={ remoteAllTodo } type="button" className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700">Clear All Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<App />);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
