

export function List ({ todoList, updateTodo }) {
  return (
    <ul>
      {
        todoList.map((todo) => (
          <li className="py-4" key={ todo.id } data-id={ todo.id } >
            <label className={ todo.status ? 'line-through' : ''}>
              <input onChange={ updateTodo } type="checkbox" className="mr-2"  data-id={ todo.id } checked={ todo.status }/>
              { todo.name }
            </label>
          </li>
        ))
      }
    </ul>
  )
}
