import Paciente from "./Paciente"



const ListadoPacientes = ({pacientes}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">Administra tus {''}
          <span className="text-cyan-600 font-bold">Pacientes y Citas</span></p>

          <div className=" ">

                { pacientes.map( (paciente, index) => (
                  <Paciente
                    key={index}
                    paciente={paciente}
                  />
                ))}
                
               
          </div>
    </div>
    
  )
}

export default ListadoPacientes