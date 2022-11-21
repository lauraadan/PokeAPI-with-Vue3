<!-- VIEW PRINCIPAL QUE SE CARGARÁN TODAS LAS CARDS CON TODOS LOS POKEMONS -->

<template>

    <!-- HTML para visualizar todas las cards juntas en un section -->
    <!-- dentro de  este section se crea la condicion if que indica que, si la pagina NO está cargando la información, aparezca el contenido de esta informacion.
    de lo contrario, se mostrará el isLoading importado desde el componente isLoading, donde aparecerá la bola girando y el texto is loading...-->
    <section v-if="!isLoading" class="section container">
        <div class="columns is-multiline is-centered is-mobile">
            <!-- Creamos un bucle for que almacene el nombre del pokemon y la id y que los muestre en pantalla. 
            Guardaremos esta informacion en dos variables, una para el pokemon y otra para su id-->
            <div v-for="(pokemon, index) in pokemons"
                class="column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen">
                <!-- router link es una etiqueta especial para poder navegadr a las rutas desde los views.
                Los dos puntos significa que vamos a pasar un objeto de javascript 
                En este :to indica que accedemos a la ruta de details, de tal manera que si hacemos click, accedemos a los details de
                cada pokemon con su nombre e id.-->
                <router-link :to="{name:'details', params:{id:index + 1 }}">
                    <!-- dentro de la card de ruta en si, mostrará la informacion obtenida en pokecard, es decir 
                    la imagen del pokemon, su id y su nombre. -->
                    <PokeCard :name="pokemon.name" :id="index + 1" />
                </router-link>
            </div>
        </div>
    </section>

    <div class="loading-container" v-else>
        <Loading />
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import { getPokemons } from '../api' // importamos la obtencion de los datos de la pokeapi mediante axios
import PokeCard from '../components/PokeCard.vue';
import Loading from '../components/Loading.vue';

// //Creamos la variable pokemons que sera una array ref. En esta variable se guarda la informacion del bucle for creado mas arriba, 
// que almacena toda la info de los pokemons
// Creamos la variable isLoading que sera una variable ref
const pokemons = ref([]);
const isLoading = ref(true);

// onMounted es obligatorio cuando obtenemos informacion de una api externa, para otros casos que no lo sea, tambien es buena practica
// cogemos la informacion obtenida por axios y la montamos. Hacemos una funcion asincrona dado que es informacion obtenida de una api.
onMounted(async () => {
    const res = await getPokemons();
    // en este console log podemos ver la array con los 251 pokemons obtenidos de la pokeapi externa
    console.log(res);
    //console.log(pokemons)
// // Indicamos que el valor del bucle for con nombre pokemons (creado mas arriba) tiene que ser igual a la 
// informacion de res.results que basicamente, es toda la info completa
// de los pokemons
    pokemons.value = res.results;
    // // luego indicamos que una vez obtenida esta informacion, el valor de isLoading tiene que ser false y por tanto, como indica arriba con el v-if, 
    // tiene que mostrar la informacion que queremos de los pokemons
    isLoading.value = false
})

</script>
<style scoped>

.loading-container{
    height: calc(100vh - 52px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>