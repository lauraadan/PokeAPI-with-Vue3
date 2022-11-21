// Aqui utilizaremos la libreria FastAverage color.
// Importamos la libreria. Esta libreria calcula el color promedio de imagenes, videos y lienzos.
// // La usaremos para el fondo de las cards y en algunos otros detalles de la pokeapi que crearemos. Cogerá el color predominante del pokemon al que se
// esta refiriendo en ese momento y obtendrá dicho color. 

import { FastAverageColor } from 'fast-average-color'

/*Creamos una nueva funcion llamada getPokemonImage para que sea exportada y le indicaremos que obtenga el color predominante segun la id 
de cada pokemon.  */ 
export const getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

// Creamos una funcion que nos retornara el color predominante de una imagen y la exportamos. 
export const getColorByImage = async (image) => {
    const fac = new FastAverageColor();
    const color = await fac.getColorAsync(image)
    return color.hex
}