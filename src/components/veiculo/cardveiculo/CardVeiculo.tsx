import { Link } from "react-router-dom"
import type Veiculo from "../../../models/Veiculo"
import { PencilSimpleIcon, SteeringWheelIcon, TrashSimpleIcon } from "@phosphor-icons/react"

interface CardVeiculoProps {
  veiculo: Veiculo
}

function CardVeiculo({ veiculo }: CardVeiculoProps) {

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex justify-between items-center w-full max-w-4xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="bg-white  p-5 mb-10 flex justify-between items-center gap-6">
                        <img
                            src={veiculo.foto}
                            alt="Foto do carro"
                            className="h-28 w-40 object-cover rounded-xl shadow"
                        />

                        <div>
                            <p className="text-lg font-semibold text-lime-900 flex items-center gap-2">
                                <SteeringWheelIcon size={22} />
                                {veiculo.modelo}
                            </p>
                            <p className="text-sm text-gray-600">
                                Placa: {veiculo.placa}
                            </p>
                        </div>
                    </div>
      </div>
      <div className="flex gap-2">
        <Link
          to={`/editarveiculo/${veiculo.id}`}
          className="bg-transparent p-2 rounded-md border border-gray-200 shadow-sm 
                     hover:bg-gray-100 transition flex items-center justify-center text-[#264117]"
          title="Editar Veiculo"
        >
          <PencilSimpleIcon />
        </Link>
        <Link
          to={`/deletarveiculo/${veiculo.id}`}
          className="p-2 rounded-md border shadow-sm flex items-center justify-center bg-transparent border-gray-200 shadow-s text-[#264117] cursor-pointer"
          title="Excluir Veiculo">
          <TrashSimpleIcon />
        </Link>
      </div>
    </div>
  )
}

export default CardVeiculo
