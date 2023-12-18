

export const ListadoReducer = (listado = [], action) => {
  switch (action.type) {
    case 'agregar':
      return [...listado, action.payload];

    case 'borrar':
      return listado.filter(tarea => tarea.id !== action.payload);

    case 'editar': {
      let editar = listado.findIndex(tarea => tarea.id === action.payload.id)
   
      listado[editar] = action.payload;

    }
      return [...listado]
    // return listado.map( tarea => tarea.id === action.payload ? { ...tarea, completado: !tarea.completado } : tarea);

    case 'completado':
      return listado.map((tarea) =>
        tarea.id === action.payload ? { ...tarea, completado: !tarea.completado } : tarea
      );

      case 'guardar':{
      //  let listadoNuevo = listado.filter((tarea) => tarea.id !== action.payload.id)
 
      //  return [...listadoNuevo, action.payload];
      let editar = listado.findIndex(tarea => tarea.id === action.payload.id)
   
      listado[editar] = action.payload;
        }
        return [...listado]
    default:
      return listado;
  }
}
