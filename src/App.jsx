import { useState } from 'react'
import Formulario from "./componentes/Formulario.jsx";
import Lista from "./componentes/Lista.jsx";
import Swal from "sweetalert2";

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

    // Guardar la tarea para poder editarla mas adelante
    const [tareaEditar, setTareaEditar] = useState({
        id: 0,
        titulo: "",
        descripcion: "",
        estado: "pendiente",
        priority: false
    })

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

    function editarTarea(tarea) {
        const nuevasTareas = tareas.map((t) => {
            if (t.id === tarea.id) {
                t = tarea
            }
            return t
        })
        setTareas(nuevasTareas)
    }

    function eventoEditarTarea(id) {
        const tarea = tareas.find((tarea) => tarea.id === id)
        setTareaEditar(tarea)
    }

    return (
        <div className="m-5" >
            <Formulario
                agregarTarea={agregarTarea}
                editarTarea={editarTarea}
                tareaEditar={tareaEditar}
            />
            <Lista
                tareas={tareas}
                eliminarTarea={eliminarTarea}
                cambiarEstadoTarea={cambiarEstadoTarea}
                editarTarea={eventoEditarTarea}
            />
        </div>
      )
}

export default App
