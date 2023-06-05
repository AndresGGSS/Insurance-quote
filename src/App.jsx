import Seguro from "./Components/Seguro"
import { CotizadorProvider } from "./Context/CotizadorProvide"

export default function App() {
  return (
    <CotizadorProvider>
        <Seguro/>
    </CotizadorProvider>
  )
}
