import { useState, useEffect } from "react"

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
          <span className="text-cyan-600 font-bold ">Administralos</span>
          </p>
          <form className="bg-white shadow-md mb-10 rounded-lg py-10 px-5">
              <div className="mb-5">
                <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold"> Nombre</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" name="" id="nombre" placeholder="Nombre del Paciente"/>
              </div>

              {/* <div className="mb-5">
                <label htmlFor="apellido" className="block text-gray-700 uppercase font-bold"> Apellido</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" name="" id="apellido" placeholder="Apellido del Paciente"/>
              </div> */}

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Email</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" name="" id="email" placeholder="Email del Paciente"/>
              </div>

              <div className="mb-5">
                <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold"> Teléfono</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="tel" name="" id="telefono" placeholder="Teléfono del Paciente"/>
              </div>

              <div className="mb-5">
                <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold"> Fecha</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="datetime-local" name="" id="fecha" />
              </div>

              <div className="">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Síntomas</label>
                <textarea rows="3" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text-area" name="" id="sintomas" placeholder="Describe los síntomas"/>
              </div>
              <input type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer transition-colors w-full p-3 uppercase text-white font-bold"
              value="Agregar Paciente" />
          </form>
    </div>
  )
}

export default Formulario