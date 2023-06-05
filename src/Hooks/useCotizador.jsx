import { useContext } from "react"
import CotizadorContext from "../Context/CotizadorProvide"

const useCotizador = () => {
    return useContext(CotizadorContext)
}

export default useCotizador