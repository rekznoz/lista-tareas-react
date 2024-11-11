
export default function Tarea(Entradas) {

    const { tareas, eliminarTarea, cambiarEstadoTarea, editarTarea } = Entradas

    // Las completadas van abajo, las pendientes arriba
    const completadas = tareas.filter(tarea => tarea.estado === 'completada');
    const pendientes = tareas.filter(tarea => tarea.estado === 'pendiente');

    // Ordenar las pendientes por prioridad
    const prioritarias = pendientes.filter(tarea => tarea.priority);
    const noPrioritarias = pendientes.filter(tarea => !tarea.priority);


    let tareasOrdenadas = [...prioritarias, ...noPrioritarias, ...completadas];

    return (
        tareasOrdenadas.map(tarea => (
            <li key={tarea.id} className={`list-group-item d-flex justify-content-between align-items-start ${tarea.estado === 'completada' ? 'bg-secondary-subtle' : ''}`}>
                <div className="ms-2 me-auto">
                    <h1>{tarea.titulo}</h1>
                    <p>{tarea.descripcion}</p>
                    {tarea.priority && <p>Prioritario!</p>}
                    <button className="btn btn-warning m-1" onClick={() => editarTarea(tarea.id)}>Editar</button>
                    <button className="btn btn-danger m-1" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    <button className={
                        `btn m-1 ${tarea.estado === 'pendiente' ? 'btn-success' : 'btn-secondary'}`
                    } onClick={() => cambiarEstadoTarea(tarea.id)}>{
                        tarea.estado === 'pendiente' ? 'Completar' : 'Pendiente'
                    }</button>
                </div>
                <span className={`badge ${tarea.estado === 'pendiente' ? 'bg-primary' : 'bg-success'} rounded-pill`}>{tarea.estado}</span>
            </li>
        ))
    );

}