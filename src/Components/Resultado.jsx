import useCotizador from "../Hooks/useCotizador"
import { useCallback,useRef} from "react"
import { MARCAS, PLANES } from "../Constants"

export default function Resultado() {

    const { resultado, datos} = useCotizador()
    const {marca, plan,year} = datos

    if (resultado === 0) return null

    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)),[resultado])
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)),[resultado])
    const yearRef = useRef(year)

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-700 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año: </span>
                {yearRef.current}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}
