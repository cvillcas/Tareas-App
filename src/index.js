// IMPORTACIONES DE JAVASCRIPT

import {  Todo,TodoList } from "./classes";  //  CUANdo no  especificamos el archivo lo va buscar por defecto
import { crearTodoHtml   } from "./js/componentes";




// import { Todo} from "./classes/todo.class.js";
// import { TodoList } from "./classes/todo-list-class.js";
// IMPORTACIONES DE CSS
import './styles.css';

 export const todoList = new TodoList();

 //  Esto es para traer y reconstruir todos los  todosc  fon un forech

//  todoList.todos.forEach(todo => crearTodoHtml(todo));

// todoList.todos.forEach((  todo)=> {
    
// });

todoList.todos.forEach( todo => {
    return crearTodoHtml(todo);
    
});


//  todoList.todos[0].imprimirClase();

   

  


//  const tarea = new Todo("Aprender Javascript");

//  todoList.nuevoTodo(tarea);
 


//  console.log(todoList);

//  const neto = new  Todo('python');

//  todoList.nuevoTodo(neto);


//  crearTodoHtml(tarea);

//  ESTO  ES PARA  REMOVER PERO MEDIANTE EL KEY
//  setTimeout(() => {
//      localStorage.removeItem("modo");
    
//  }, 2500);





