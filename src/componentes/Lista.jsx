
import Tarea from './Tarea';

export default function Lista(Entradas) {

    const { tareas, eliminarTarea, cambiarEstadoTarea, editarTarea } = Entradas

    return (
        <ul className="list-group m-5">
            <Tarea
                tareas={tareas}
                eliminarTarea={eliminarTarea}
                cambiarEstadoTarea={cambiarEstadoTarea}
                editarTarea={editarTarea}
            />
        </ul>
    );
}