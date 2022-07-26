// import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

import { Todo } from "../classes";

import { todoList } from "../index";

//Referencias HTML

const divTodoList     = document.querySelector('.todo-list');
const txtInput        = document.querySelector('.new-todo');
const btnBorrar       = document.querySelector('.clear-completed');
const ulFiltros       = document.querySelector('.filters');
const anchortFiltro   = document.querySelectorAll('.filtro');
const nunPendientes   = document.querySelectorAll('.todo-count');







export const crearTodoHtml = (todo) => {

    const htmlTodo = `
<li class="${(todo.completado) ? "completed" : ""}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? "checked" : ""}   > 
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;


    divTodoList.append(div.firstElementChild);



    return div.firstElementChild;

}


//  EVENTOS 


//EVENTO DE  INGRESAR UN NUEVO TODO

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {// vvalidamos  el vento  y  el enter  y valor ingressado

        const nuevoTodo = new Todo(txtInput.value); // creamos una nueva constante parta una nuevo todo
        todoList.nuevoTodo(nuevoTodo); //  importamos el  metodo dde listado de la lista de todo
        crearTodoHtml(nuevoTodo);//  creamos  con el metodo  de HTml
        txtInput.value = "";//  Limpiamos el input 
    }
})


divTodoList.addEventListener('click', (event) => {


    const nombreElemento = event.target.localName;  //  de esta manera podemos referencias a que  boton le hacemos click
    const todoElemento = event.target.parentElement.parentElement; //  esto referencia a todo  el UL   HTML
    const todoId = todoElemento.getAttribute('data-id');  //  aca esta extraendo el ID  de todo con el Atributee

    if (nombreElemento.includes('input')) {  // click en el check o input 
        todoList.marcarCompletado(todoId);  // de la lista  marca  si la actividad ya esta realizada
        todoElemento.classList.toggle('completed'); // agregamos  la clase para marcar   si la actividad ya esta realizada 
        // toggle agrega  si esta o no la clase
    } else if (nombreElemento.includes('button')) { // click  en el boton}
        todoList.eliminarTodo(todoId);  // Listamos todos los todos  y llamamos el metodo
        divTodoList.removeChild(todoElemento);/// Se remueve con el elemento que coincida  con ese elemento
    }

})


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) { //  hacemos un for a al reversa y agarramos todos los  hijos
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);

        }





    }


})



ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if (!filtro) { return };


    anchortFiltro.forEach(element =>  { element.classList.remove('selected')});//  removemos la  clase a todos los  a
    event.target.classList.add('selected'); // Para saver a que  elemento le estamos agregando la clase
   




    for (const elemento of divTodoList.children) {

        elemento.classList.remove('hidden'); //  saca  la clase hidden  
        const completado = elemento.classList.contains('completed');  //  pregunta si tiene la  clase completed

        switch (filtro) {

            case "Pendientes":
                if (completado) {
                    elemento.classList.add('hidden'); //  si esta  todo completado agregamos la clase
                    
                }
                break; /// saliemos  si encuentra con el break
            case "Completados":
                if (!completado) {
                    elemento.classList.add('hidden'); //  si esta  todo completado agregamos la clase
                }
                break;
            }
        
    }
           
   















})













































