

const Paciente = ({paciente}) => {
  const {nombre, email, telefono, fecha, sintomas} = paciente
  return (
    <div className=" bg-white shadow-md mx-5 my-10  py-10 px-5  rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: 
                  <span className="font-normal normal-case"> {nombre}
                  </span>  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase"> Email: 
                  <span className="font-normal normal-case"> {email}
                  </span>  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase"> Teléfono: 
                  <span className="font-normal normal-case"> {telefono}
                  </span>  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha: 
                  <span className="font-normal normal-case"> {fecha}
                  </span>  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: 
                  <span className="font-normal normal-case"> {sintomas}
                  </span>  </p>
    </div>
  )
}

export default Paciente