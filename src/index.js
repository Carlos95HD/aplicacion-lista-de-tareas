import './styles.css'
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );

console.log( 'todos', todoList.todos );



// localStorage.setItem('mi-key', '')
// sessionStorage.setItem('mi-key', '')

// setTimeout( () =>{

//     localStorage.removeItem('mi-key')

// }, 1500 )