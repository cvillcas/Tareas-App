import { Todo } from "./todo.class";


 export class TodoList{

    constructor(){

        // this.todos = [];//   ya no es necesarios si implementas  el metodo  siguiente
        this.cargarLocalStorage()   //   llamamo a este metodo  para que carge   y si no hay nadie  tare vacio

    }

    nuevoTodo(todo){
        this.todos.push(todo)
        this.guardarLocalStorage()

    }

    eliminarTodo(id){

        this.todos = this.todos.filter( (todo) => todo.id != id ) ;  //estamos filtrando los todos que tiene el ID
        this.guardarLocalStorage()

            


        

    }

    marcarCompletado(id){

        for (const todo  of this.todos) { //  estamos  recorriendo  el array de  todo
        
            if( todo.id == id){  // condicion   si los id  son iguales

               todo.completado = !todo.completado; 
               this.guardarLocalStorage()  //  si uno es verdadero  el otro el falso
               break; //  saliemos del  recorrido

            }



            
        }

    }

    eliminarCompletados(){


        this.todos = this.todos.filter( (todo) => !todo.completado ) ;
        this.guardarLocalStorage();

    }
    
     //  estos metodo se guardaran y se cargaran los elementos
     //  se tiene   un local storage por dominio
     //  cuando esta oBJEct  OBject  nose puede recuperar 
     ///  esto guarda solo string  pero tienes que pasarlo a JSON 
     // 
      guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos));  // se esta tranfromando mi objecto de  todo a JSON








      }

      cargarLocalStorage(){

        // if( localStorage.getItem('todo')){//  condicion para traer todo   lo dle local storage

        //     this.todos = JSON.parse( localStorage.getItem('todo'));  //  parseamos   para que regrese a   su formato original
        //     console.log("cargando el local");

        // }else{
        //     this.todos = [];//  si no hay ninguna tarea regresa  arreglo vacio
        // }

        // Operador ternario

        this.todos = (localStorage.getItem('todo')) ?  this.todos = JSON.parse( localStorage.getItem('todo')): this.todos = [];
        this.todos = this.todos.map( (obj)=> Todo.fronJson(obj))  //  aca estamos llamando a la propiedad estatica

      }





}