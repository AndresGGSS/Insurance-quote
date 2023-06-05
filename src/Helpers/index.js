export function ObtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function CalcularMarca(marca) {
    let incremento
    switch (marca) {
        case "1":
            incremento = 1.30
            break
        case "2":
            incremento = 1.15
            break
        case "3":
            incremento = 1.05
            break
        default:
            break
    }
    return incremento
}

export function CalcularPlan(plan){
    let incremento
    switch (plan) {
        case "1":
            incremento = 1.20
            break
        case "2":
            incremento = 1.30
            break
        case "3":
            incremento = 1.50
            break
        default:
            break
    }
    return incremento
}

export function FomatearDinero(cantidad) {
  let resultado = '$' + cantidad
  resultado = resultado.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return resultado;
  }
  