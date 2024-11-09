import { useState } from 'react'
import Formulario from "./componentes/Formulario.jsx";
import Lista from "./componentes/Lista.jsx";

const initialStateTareas = [
    {
        id: 1,
        titulo: "Tarea 1",
        descripcion: "Descripcion 1",
        estado: "pendiente",
        priority: false
    },
    {
        id: 2,
        titulo: "Tarea 2",
        descripcion: "Descripcion 2",
        estado: "completada",
        priority: true
    }
]

function App() {
    const [tareas, setTareas] = useState(initialStateTareas)

    function agregarTarea(tarea) {
        setTareas([...tareas, tarea])
    }

    function eliminarTarea(id) {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id)
        setTareas(nuevasTareas)
    }

    function cambiarEstadoTarea(id) {
        const nuevasTareas = tareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.estado = tarea.estado === "pendiente" ? "completada" : "pendiente"
            }
            return tarea
        })
        setTareas(nuevasTareas)
    }

    function editarTarea(id) {
        console.log("Editar tarea con id: ", id)
    }

    return (
        <div className="m-5" >
            <Formulario agregarTarea={agregarTarea} />
            <Lista
                tareas={tareas}
                eliminarTarea={eliminarTarea}
                cambiarEstadoTarea={cambiarEstadoTarea}
                editarTarea={editarTarea}
            />
        </div>
      )
}

export default App
