import React, { useEffect } from 'react'
import basura from '/public/svg/basura.svg'
import editar from '/public/svg/editar.svg'
import guardar from '/public/svg/guardar.svg'
import { ListadoReducer } from '../reducers/ListadoReducer';
import HookReducer from '../hook/hookReducers';

// const init = () => {
//   return JSON.parse(localStorage.getItem('listado')) || [];
// }


const Listado = () => {
  const { 
    listado,
    guardarTarea,
    tareaCompletada,
    borrartarea,
    editarTarea,
    guardarEditado,
    setNewTarea,
    newTarea,
    setShowInput,
    showInput} = HookReducer()
  // const [listado, dispatch] = useReducer(ListadoReducer, [], init);
  // const [showInput, setShowInput] = useState(0)
  // const [editar, setEditar] = useState(0)
  // const [newTarea, setNewTarea] = useState('')

  useEffect(() => {
    localStorage.setItem('listado', JSON.stringify(listado))
  }, [listado]);

  // const guardarTarea = (e) => {
  //   e.preventDefault();

  //   if (newTarea === '') return;

  //   let tarea = {
  //     id: new Date().getTime(),
  //     titulo: newTarea,
  //     completado: false
  //   };
  //   const action = {
  //     type: 'agregar',
  //     payload: tarea
  //   }
  //   dispatch(action)
  //   setNewTarea('')
  //   console.log(tarea)
  // }
  // const borrartarea = id => {
  //   dispatch({
  //     type: 'borrar',
  //     payload: id
  //   });

  // }

  // const tareaCompletada = id => {
  //   dispatch({
  //     type: 'completado',
  //     payload: id
  //   })
  // }

  // // Funcion que permite editar la tarea
  // const editarTarea = (e, id) => {
  //   let tarea = {
  //     id,
  //     titulo: e.target.value,
  //     completado: false
  //   };
  //   dispatch({
  //     type: 'editar',
  //     payload: tarea
  //   })
  // }

  const canEdit = completado => !completado;

  // constante que almacena las tareas que no esten completadas
  const tareasPenientes = listado.filter((tarea) => !tarea.completado).length;
  console.log(tareasPenientes)

// Funcion que guarda la tarea editada
  // const guardarEditado = (tarea) => {

  //   console.log(tarea)
  //   let tareaEditada = {
  //     id: tarea.id,
  //     titulo: tarea.titulo,
  //     completado: false
  //   };

  //   dispatch({
  //     type: 'guardar',
  //     payload: tareaEditada
  //   })
  //   setShowInput(0)
  // }

  return (

    <section id="tarea">

      <form id='input' onSubmit={guardarTarea} >
        <input className='inputTarea' type="text" name='tarea' onChange={e => setNewTarea(e.target.value)} value={newTarea} placeholder='Nueva tarea' />
        <button id='btn-Add' >Agregar tarea</button>
      </form>


      <div id="list_tarea">

        <ul id="li-container">

          {listado.length === 0 ? <p style={{ color: 'gray', fontSize: '20px' }}>No tienes tareas pendientes</p> :
            listado.map((tarea) => {
              return (
                <li key={tarea.id} style={{ textDecoration: tarea.completado ? 'line-through' : 'none', cursor: 'pointer' }}>

                  {/* inputo tipo check que evaluara si la tarea esta completa */}
                  <input type="checkbox" checked={tarea.completado} onChange={() => tareaCompletada(tarea.id)} />

                  {/*Input que se mostrará al dar clik en editar tarea para editar la tarea  */}
                  {showInput === tarea.id ? <input className='inputEditar' type="text" value={tarea.titulo} onChange={(e) => editarTarea(e, tarea.id)} />
                    : <p>{tarea.titulo} </p>}


                  <div style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                       {showInput === tarea.id && <img src={guardar} onClick={() => guardarEditado(tarea)} className='guardar'/>}
                    <div className='hover hoverGuardar'>
                      Guardar
                    </div>
                    {/* Icono de guaradar que recibira accionara la funcion guaradarEditado  */}
                 

                    {/* Si la tarea no esta completada se mostrara el icono para editar la tarea */}
                    {canEdit(tarea.completado) && <img src={editar} onClick={() => setShowInput(tarea.id)} alt="" className='editar' />}
                    <div className='hover hoverEditar'>
                      Editar
                    </div>
                   

                    {showInput !== tarea.id &&  <img src={basura} alt="" onClick={() => borrartarea(tarea.id)} className='borrar' /> }
                    <div className='hover hoverBorrar' >
                      Borrar
                    </div>
                   
                  </div>
                </li>
              )
            })
          }

        </ul>

        {tareasPenientes > 0 && <div className='footer'><p>Tienes {tareasPenientes} {tareasPenientes === 1 ? 'tarea pendiente'
          : 'tareas penientes'}</p></div>}

      </div>
    </section>
  )
}

export default Listado