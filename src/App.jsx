import { useState, useEffect } from 'react'
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
    },
    {
        id: 3,
        titulo: "Tarea 3",
        descripcion: "Descripcion 3",
        estado: "pendiente",
        priority: false
    },
    {
        id: 4,
        titulo: "Tarea 4",
        descripcion: "Descripcion 4",
        estado: "pendiente",
        priority: true
    },
    {
        id: 5,
        titulo: "Tarea 5",
        descripcion: "Descripcion 5",
        estado: "completada",
        priority: false
    },
    {
        id: 6,
        titulo: "Tarea 6",
        descripcion: "Descripcion 6",
        estado: "pendiente",
        priority: true
    },
    {
        id: 7,
        titulo: "Tarea 7",
        descripcion: "Descripcion 7",
        estado: "pendiente",
        priority: false
    },
    {
        id: 8,
        titulo: "Tarea 8",
        descripcion: "Descripcion 8",
        estado: "pendiente",
        priority: true
    },
    {
        id: 9,
        titulo: "Tarea 9",
        descripcion: "Descripcion 9",
        estado: "completada",
        priority: false
    },
    {
        id: 10,
        titulo: "Tarea 10",
        descripcion: "Descripcion 10",
        estado: "pendiente",
        priority: false
    }
]

function App() {

    const [tareas, setTareas] = useState([])

    // LocalStorage para cargar las tareas
    useEffect(() => {
        const tareas = JSON.parse(localStorage.getItem("tareas"))
        if (tareas) {
            setTareas(tareas)
        } else {
            setTareas(initialStateTareas)
        }
    }, [])

    // LocalStorage para guardar las tareas
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    }, [tareas])

    // Guardar la tarea para poder editarla mas adelante
    const [tareaEditar, setTareaEditar] = useState({
        id: "",
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

    function cancelarEdicion() {
        setTareaEditar({
            id: "",
            titulo: "",
            descripcion: "",
            estado: "pendiente",
            priority: false
        })
    }

    return (
        <div className="m-5" >
            <Formulario
                agregarTarea={agregarTarea}
                editarTarea={editarTarea}
                cancelarEdicion={cancelarEdicion}
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
