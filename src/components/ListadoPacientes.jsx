import Paciente from "./Paciente"



const ListadoPacientes = ({pacientes, setPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
          {pacientes && pacientes.length ? (
            <>
                  <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                  <p className="text-xl mt-5 text-center mb-10">Administra tus {''}
                  <span className="text-cyan-600 font-bold">Pacientes y Citas</span></p>
   
                   { pacientes.map( paciente  => (
                     <Paciente
                       key={paciente.id}
                       paciente={paciente}
                       setPaciente={setPaciente}
                     />
                   ))}
             </> 
                  ) : (
                    <>
                      <h2 className="font-black text-3xl text-center">Agrega Pacientes</h2>
                      <p className="text-xl mt-5 text-center mb-10">Comienza agregando  {''}
                      <span className="text-cyan-600 font-bold">Pacientes </span></p>
                    
                    </>
                  )}
                   
                
               
          
    </div>
    
  )
}

export default ListadoPacientes