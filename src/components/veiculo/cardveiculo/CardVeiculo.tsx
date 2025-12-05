import { Link } from "react-router-dom"
import type Veiculo from "../../../models/Veiculo"
import { PencilSimpleIcon, SteeringWheelIcon, TrashSimpleIcon } from "@phosphor-icons/react"

interface CardVeiculoProps {
  veiculo: Veiculo
}

function CardVeiculo({ veiculo }: CardVeiculoProps) {

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center md:items-start gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full">
        <img
          src={veiculo.foto}
          alt="Foto do carro"
          className="h-32 w-full md:w-40 md:h-28 object-cover rounded-xl shadow"/>
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-lime-900 flex justify-center md:justify-start items-center gap-2">
            <SteeringWheelIcon size={22} />
            {veiculo.modelo}
          </p>
          <p className="text-sm text-gray-600">Placa: {veiculo.placa}</p>
        </div>
      </div>
      <div className="flex gap-3 self-center md:self-start">
        <Link
          to={`/editarveiculo/${veiculo.id}`}
          className="bg-transparent p-2 rounded-md border border-gray-200 shadow-sm hover:bg-gray-100 transition flex items-center justify-center text-[#264117]" title="Editar Veículo"
        >
          <PencilSimpleIcon />
        </Link>
        <Link
          to={`/deletarveiculo/${veiculo.id}`}
          className="p-2 rounded-md border border-gray-200 shadow-sm flex items-center justify-center bg-transparent text-[#264117] cursor-pointer hover:bg-gray-100 transition" title="Excluir Veículo">
          <TrashSimpleIcon />
        </Link>
      </div>
    </div>
  )
}

export default CardVeiculo
