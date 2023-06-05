import { Fragment } from "react"
import { MARCAS, years, PLANES } from "../Constants"
import useCotizador from "../Hooks/useCotizador"
import Error from "./Error"

export default function Formulario() {

    const {cotizar, error, setError, datos, handleChangeDatos } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError('TODOS LOS CAMPOS SON OBLIGATORIOS')
            return
        }
        setError('')
        cotizar()
    }

    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                    <select name="marca" id="" className="w-full p-3 bg-white border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">-- Selecciona Marca --</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >{marca.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='my-5'>
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                    <select name="year" id="" className="w-full p-3 bg-white border border-gray-200" onChange={e => handleChangeDatos(e)} value={datos.year}>
                        <option value="">-- Selecciona año --</option>
                        {years.map(year => (
                            <option
                                key={year}
                                value={year}
                            >{year}</option>
                        ))}
                    </select>
                </div>
                <div className='my-5'>
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
                    <div className="flex gap-3">
                        {PLANES.map(plan => (
                            <Fragment>
                                <label htmlFor="">{plan.nombre}</label>
                                <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input type="submit" className="w-full bg-cyan-400 hover:bg-cyan-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="Cotizar" />
            </form>
        </>
    )
}
