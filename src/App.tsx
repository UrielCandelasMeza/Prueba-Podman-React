import React, { useState } from 'react'


function App() {
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("¡Hola! " + tempName);
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-semibold">Hola Mundo</h1>
        <p>Esta es una prueba de como funciona mi propio servidor con una pagina web</p>

        <section className="grid grid-cols-2 gap-5">
            <form onSubmit={handleSubmit} className="grid border rounded-2xl px-3 py-5 gap-4">
              <label>
                <p>Nombre:</p>
                <input 
                  type="text" 
                  placeholder="Escribe tu nombre..." 
                  value={tempName} 
                  onChange={(e) =>setTempName(e.target.value)} 
                  required
                  className="border border-gray-400 px-3 py-1"
                  />
              </label>
              
              <button type="submit" className="border-gray-400 bg-gray-300">Enviar</button>
            </form>

          <div className="grid border rounded-2xl px-3 py-5 gap-4">
            <p>Salida: </p>
            <p>{name}</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
