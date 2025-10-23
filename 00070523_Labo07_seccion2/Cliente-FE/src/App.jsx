import { useEffect, useState } from 'react'

function App() {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    fetch('http://localhost:5000/') // 👈 apunta al puerto correcto del backend
      .then(res => res.text()) // usamos .text() porque el backend envía texto plano
      .then(data => setMensaje(data))
      .catch(err => {
        console.error('Error al obtener datos:', err)
        setMensaje('Error al cargar')
      })
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', color: 'white' }}>
      <h1>Cliente React + Vite</h1>
      <h2>GET desde el backend:</h2>
      <p>{mensaje}</p>
      <h2>POST hacia el backend:</h2>
      <button
        onClick={() => {
          fetch('http://localhost:5000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prueba: 'Hola desde el cliente' })
          })
            .then(res => res.text())
            .then(data => alert(`Respuesta del backend: ${data}`))
        }}
      >
        Enviar POST de prueba
      </button>
    </div>
  )
}

export default App
