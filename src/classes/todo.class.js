
export class Todo{

   static fronJson({id,tarea,completado,creado}){//   como llamamos los metodos de las instancias de del TODO
        const  tempTodo = new Todo (tarea) ; //   tenemos que mandar la Tarea al constructor 

        tempTodo.id          = id;  //  igualamos  todos  los  argumentos con  la constante
        tempTodo.completado  = completado;  //  destructurando el  objecto
        tempTodo.creado      =creado

        
         return tempTodo;

        }


 





     constructor(tarea){

        this.tarea       = tarea;  //  por aca pasaremos la tarea  que deseamos  hacer por argumento
        this.id          = new Date().getTime();   // Esto es  como la hora en  numeros 162629191616161
        this.completado  = false;
        this.creado      = new Date()
     }

   //   imprimirClase(){
   //    console.log(`${this.tarea} - ${this.id}`);
   //   }

     


}

