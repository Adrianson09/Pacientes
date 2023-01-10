import { useState, useEffect } from "react"
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [cedula, setCedula] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() =>{
    if ( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setTelefono(paciente.telefono)
      setFecha(paciente.fecha)
      setCedula(paciente.cedula)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar Formulario
    if( [nombre, email, telefono, fecha, cedula, sintomas ].includes('') ){
      
      setError(true)
      return;
    } 

    setError(false)

    // Obj de Paciente
    const objetoPaciente = {
      nombre,
      email,
      telefono,
      fecha,
      cedula,
      sintomas
      
    }

    if (paciente.id) {
      // Editando registro de paciente
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})

    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    

    // Reiniciar el formulario
    setNombre('');
    setEmail('');
    setTelefono('');
    setFecha('');
    setCedula('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
          <span className="text-cyan-600 font-bold ">Administralos</span>
          </p>
          <form className="bg-white shadow-md mb-10 rounded-lg py-10 px-5" onSubmit={handleSubmit}>
            {error && 
              <Error><p>Todos los campos son obligatorios!</p></Error>
            }
              <div className="mb-5">
                <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold"> Nombre</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" value={nombre} onChange={ (e) => setNombre(e.target.value) } id="nombre" placeholder="Nombre del Paciente"/>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Email</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" name="" id="email" placeholder="Email del Paciente" value={email} onChange={ (e) => setEmail(e.target.value) }/>
              </div>

              <div className="mb-5">
                <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold"> Teléfono</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="tel" name="" id="telefono" placeholder="Teléfono del Paciente" value={telefono} onChange={ (e) => setTelefono(e.target.value) }/>
              </div>

              <div className="mb-5">
                <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold"> Fecha</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" name="" id="fecha" value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
              </div>

              <div className="mb-5">
                <label htmlFor="cedula" className="block text-gray-700 uppercase font-bold"> Cédula</label>
                <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" value={cedula} onChange={ (e) => setCedula(e.target.value) } id="cedula" placeholder="Cédula del Paciente"/>
              </div>

              <div className="">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Síntomas</label>
                <textarea rows="3" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text-area" name="" id="sintomas" placeholder="Describe los síntomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value) }/>
              </div>
              <input type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer transition-colors w-full p-3 uppercase text-white font-bold"
              value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} />
          </form>
    </div>
  )
}

export default Formulario