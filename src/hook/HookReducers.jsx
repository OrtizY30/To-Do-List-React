
import { useReducer, useState } from 'react';
import { ListadoReducer } from '../reducers/ListadoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('listado')) || [];
  }

const HookReducer = () => {

   const [listado, dispatch] = useReducer(ListadoReducer, [], init)


   const [newTarea, setNewTarea] = useState('')

//    Estado que muestra el input para editar la tarea
   const [showInput, setShowInput] = useState(0)

//    Funcion que guarada nueva tarea
   const guardarTarea = (e) => {
    e.preventDefault();

    if (newTarea === '') return;

    let tarea = {
      id: new Date().getTime(),
      titulo: newTarea,
      completado: false
    };
    const action = {
      type: 'agregar',
      payload: tarea
    }
    dispatch(action)
    setNewTarea('')
    console.log(tarea)
  }

//   Borrar la tarea recibe como parametro un id
  const borrartarea = id => {
    dispatch({
      type: 'borrar',
      payload: id
    });

  }

  const tareaCompletada = id => {
    dispatch({
      type: 'completado',
      payload: id
    })
  }

  // Funcion que permite editar la tarea
  const editarTarea = (e, id) => {
    let tarea = {
      id,
      titulo: e.target.value,
      completado: false
    };
    dispatch({
      type: 'editar',
      payload: tarea
    })
  }

//   Funcion que guarda la tarea editada
  const guardarEditado = (tarea) => {

    let tareaEditada = {
      id: tarea.id,
      titulo: tarea.titulo,
      completado: tarea.completado
    };

    dispatch({
      type: 'guardar',
      payload: tareaEditada
    })
    setShowInput(0)
  }

  return {
    listado,
    guardarTarea,
    tareaCompletada,
    borrartarea,
    editarTarea,
    guardarEditado,
    setNewTarea,
    newTarea,
    setShowInput,
    showInput

  }
}

export default HookReducer