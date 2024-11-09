
export default function Tarea(Entradas) {

    const { tareas, eliminarTarea, cambiarEstadoTarea, editarTarea } = Entradas

    // Las completadas van abajo, las pendientes arriba
    const completadas = tareas.filter(tarea => tarea.estado === 'completada');
    const pendientes = tareas.filter(tarea => tarea.estado === 'pendiente');
    let tareasOrdenadas = [...pendientes, ...completadas];

    // Ordenar las pendientes por prioridad
    const prioritarias = pendientes.filter(tarea => tarea.priority);
    const noPrioritarias = pendientes.filter(tarea => !tarea.priority);
    tareasOrdenadas = [...prioritarias, ...noPrioritarias, ...completadas];

    return (
        tareasOrdenadas.map(tarea => (
            <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.descripcion}</p>
                    {tarea.priority && <p>Prioritario!</p>}
                    <button className="btn btn-warning m-1" onClick={() => editarTarea(tarea.id)}>Editar</button>
                    <button className="btn btn-danger m-1" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    <button className="btn btn-success m-1" onClick={() => cambiarEstadoTarea(tarea.id)}>Actualizar</button>
                </div>
                <span className={`badge ${tarea.estado === 'pendiente' ? 'bg-primary' : 'bg-success'} rounded-pill`}>{tarea.estado}</span>
            </li>
        ))
    );

}