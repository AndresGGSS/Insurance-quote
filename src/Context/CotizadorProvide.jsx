import { createContext, useState } from "react"
import { ObtenerDiferenciaYear, CalcularMarca, CalcularPlan, FomatearDinero} from "../Helpers"

const CotizadorContext = createContext()
const CotizadorProvider = ({children}) => {

    const [datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const[error,setError] = useState('')
    const[resultado,setResultado] = useState(0)
    const[cargando,setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizar = () =>{
        let resultado = 2000
        const diferencia = ObtenerDiferenciaYear(datos.year)
        resultado -= ((diferencia * 3) * resultado) / 100
        resultado *= CalcularMarca(datos.marca)
        resultado *= CalcularPlan(datos.plan)
        resultado = resultado.toFixed(2)
        resultado = FomatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        },3000)
    }

    return(
        <CotizadorContext.Provider
        value={{
            error,
            setError,
            datos,
            handleChangeDatos,
            cotizar,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext