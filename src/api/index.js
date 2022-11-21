// EN ESTE ARCHIVO SE TRABAJARÁ TODO LO RELACIONADO CON LA IMPORTACION DE LOS DATOS DE LA POKEAPI

import axios from 'axios'
// importamos el archivo que indica el numero maximo de pokemons que importará la api
import { limitPokemons } from '../config'

//axios es un equivalente a fetch, es un cliente http. Se basa en promesas, lo que permite aprovechar async y await de js para obtener un codigo mas legible.

//creamos una instancia de la pokeapi
// timeout corta la peticion cuando pasa el tiempo en ms
const pokeApi = axios.create({
    // baseURL , url de axios para llamar a la api. En esta url en este caso llamamos a todos los datos de toda la api.
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 3000
})

// obtenemos los datos de los pokemons a traves de getPokemons y le añadimos un export para que pueda ser exportado y usado en otro componente o archivo 
// a traves de la sentencia import
// Utilizamos async y await porque estamos utilizando los datos de la api anterior, por eso, al tener que recoger esos datos, hay que usar async y await.
/* guardamos los datos en la variable response y en esta variable guardamos los datos obtenidos del fetch pokeapi y le decimos que guarde, los pokemons, con el limite 
indicado en la variable limitPokemons que hemos importado arriba del todo. Esta funcion es la que usaremos para la parte del componente HOME y POKECARD en la que se visualizarán
todos los pokemons en la home */
export const getPokemons = async () => {
    const response = await pokeApi.get('pokemon?limit=' + limitPokemons);
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data
}   

/* Creamos la const getPokemonDetails para obtener la informacion de los pokemons a traves de su id. Volvemos a llamar a la api 
a traves de la funcion pokeapi creada anteriormente y solicitamos la id de cada pokemon. este lo usaremos para el componente DETAILS + POKEMONPROFILE
donde se verá la informacion detallada de cada pokemon*/ 
export const getPokemonDetails = async (id) => {
    const response = await pokeApi.get('pokemon/' + id);
    return response.data;
}