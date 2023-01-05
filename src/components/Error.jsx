

const Error = ({mensaje}) => {
  return (
    <div className="mb-3 p-3 text-center bg-red-800 text-white font-bold uppercase rounded">
                  <p>{mensaje}</p>
    </div>
  )
}

export default Error