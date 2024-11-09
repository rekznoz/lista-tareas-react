import {useState} from "react"
import Swal from "sweetalert2"

const InitialValues = {
    titulo: '',
    descripcion: '',
    estado: 'pendiente',
    priority: false
}

export default function Formulario(Entradas) {

    const { agregarTarea, tareaEditar, editarTarea } = Entradas

    const [tarea, setTarea] = useState(InitialValues)

    // Actualizar el formlario para que se pueda editar una tarea
    if (tareaEditar.id && tarea.id !== tareaEditar.id) {
        setTarea(tareaEditar)
        console.log(tareaEditar)
    }

    // Manejar el envio del formulario
    function handleSubmit(e) {
        e.preventDefault()

        if (!tarea.titulo || !tarea.descripcion) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
            return
        }

        if (!tarea.titulo.trim() || !tarea.descripcion.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
            return
        }

        const nuevaTarea = {
            id: Date.now(),
            ...tarea
        }

        if (tareaEditar.id) {
            nuevaTarea.id = tareaEditar.id
            editarTarea(nuevaTarea)

            Swal.fire({
                icon: 'success',
                title: 'Tarea editada',
                showConfirmButton: false,
                timer: 1500
            })

        } else {
            agregarTarea(nuevaTarea)

            Swal.fire({
                icon: 'success',
                title: 'Tarea agregada',
                showConfirmButton: false,
                timer: 1500
            })

        }

        console.log(tarea)
    }

    // Manejar los cambios en los inputs
    function handleChange(e) {
        const { name, value, checked, type } = e.target
        const valor = type === 'checkbox' ? checked : value
        const nuevaTarea = { ...tarea, [name]: valor }
        setTarea(nuevaTarea)
    }

    return (
        <div className="container">
            <h1 className="text-center" >Formulario</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" name="titulo" value={tarea.titulo} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={tarea.descripcion} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select className="form-select" id="estado" name="estado" value={tarea.estado} onChange={handleChange}>
                        <option value="pendiente">Pendiente</option>
                        <option value="completada">Completada</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="priority" name="priority" checked={tarea.priority} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="priority">Prioridad</label>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}