class ListaTareas{
    constructor(){
        this.tareas = JSON.parse(localStorage.getItem('tareas'));

        if (!this.tareas) {
            this.tareas = [
                {   tarea:'Aprender javascript',
                    completado: false},
                    {tarea:'Aprender Python',
                    completado: false},
                    {tarea:'Aprender C++',
                    completado: true},
            ];
        } 
        this.cargarTareas();
        this.agregarEventListeners();
}


agregarEventListeners(){
    const recordatorio = document.getElementById('recordatorio')
    recordatorio.addEventListener('keypress',(evento)=>{
        if(evento.keyCode == 13){
            this.agregarTarea(evento.target.value);
            evento.target.value = '';
        }
    })
}

cargarTareas(){

}

agregarTarea(){

}

}


let ListaTareas;
