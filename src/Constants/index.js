export const MARCAS = [
    {id: 1, nombre:'BMW'},
    {id: 2, nombre:'FORD'},
    {id: 3, nombre:'TOYOTA'}
]

const year = new Date().getFullYear();
export const years = Array.from(new Array(20),(value, index) => year-index)

export const PLANES = [
    {id: 1, nombre:'Básico'},
    {id: 2, nombre:'Intermedio'},
    {id: 3, nombre:'Completo'}
]