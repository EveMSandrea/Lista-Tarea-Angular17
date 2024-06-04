import { Injectable, Inject } from '@angular/core';
import {  DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TareasService{

 private localStorageKey = 'listaTareas';
 private  localStorage?;
// CDI
 constructor(@Inject(DOCUMENT) private document: Document) {
  this.localStorage = document.defaultView?.localStorage;
  if (this.localStorage) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(''));
 }
}

// Una funcion que traiga las tareas que esten en el localStorege,lo va a parsear y me lo  dara en un array
 getTareas ():string[]{
  let tarea:string[]=[];
  if (this.localStorage) {
     tarea= JSON.parse(this.localStorage.getItem(this.localStorageKey) as string) || [];
 }
 return tarea;

}
 // Declaro una constante llamada tareas que invoca el metodo  getTareas
 agregarTareas(tarea:string){
  const tareas=this.getTareas();
  console.log("r "+tareas);
  tareas.push(tarea);
  localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
 }
//
eliminarTarea(index:number){
  const tareas=this.getTareas();
  tareas.splice(index,1);
  localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
 }

}
