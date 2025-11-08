//5) Se deberá realizar un listado de tareas el cual se deberá mostrar en una tabla las tareas precargadas. Se podrá agregar y eliminar tareas a gusto del usuario.


import { useState } from "react";

function App() {
  // Estado inicial de tareas
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React" },
    { id: 2, texto: "Practicar ejercicios" },
    { id: 3, texto: "Leer documentación" },
    { id: 4, texto: "Mirar videos sobre React" },
  ]);

  // Estado para la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Agregar nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return; // evita agregar vacías
    const nueva = { id: Date.now(), texto: nuevaTarea };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  // Eliminar tarea por id
  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(filtradas);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        textAlign: "center",
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#a020f0" }}>📋 Lista de Tareas</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            backgroundColor: "#6633cc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </div>

      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "70%",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#e9d7ff" }}>
          <tr>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Tarea
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                {tarea.texto}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  style={{
                    backgroundColor: "#cc3333",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
