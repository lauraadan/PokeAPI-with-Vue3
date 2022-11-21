<!-- EN ESTE COMPONENTE SE MUESTRA LA INFORAMCION VISUAL QUE HABRIA DENTRO DEL COMPONENTE HOME. DENTRO DE CADA CARD DE 
CADA POKEMON, OBTENEMOS UNA IMAGEN, UN NOMBRE Y UNA ID Y MODIFICAMOS LOS VALORES DE ESTOS ESTILOS DESDE AQUI -->

<template>
    <!-- backgroundColor principalmente de color blanco -->
    <div v-if="!isLoading" class="card pt-3" :style="{backgroundColor:bg }">
        <div class="card-image p-4">
            <!-- En la imagen de aqui, obtenemos la informacion extraida de la funcion getPokemon donde muestra
            la imagen de cada pokemon segun su id -->
            <figure class="image is-4by3">
                <!-- Enlazamos la imagen vinculada segun su id obtenida en getPokemonImage a una etiqueta img de html -->
                <img :src="getPokemonImage(props.id)" alt="">
            </figure>
        </div>
        <!-- Mostramos en pantalla el numero de id del pokemon y su nombre -->
        <div class="card-content is-uppercase has-text-centered has-text-weight-bold">
            #{{id}}
            {{props.name}}
        </div>
    </div>

</template>
<script setup>

import { defineProps, ref, onMounted } from 'vue'
// getPokemonImage importamos la funcion que obtiene la imagen del pokemon segun su id
// getColorByImage importamos la funcion que obtiene el color predominante de cada pokemon
import { getPokemonImage, getColorByImage } from '../helpers';


//Definimos las props que van a incluir la informacion de las cards, un nombre y una id.
const props = defineProps({
    name: String,
    id: Number
})

// Definimos el background de la card principalmente de blanco
// Definimos la variable isLoading principamente en true
const bg = ref('#fff');
const isLoading = ref(true);

// Como getColorByImage y getPokemonImage vienen de una libreria externa, las montamos usando async y await.

onMounted(async () => {
    /* Obtenemos el color predominante de la imagen. Cambiamos el valor de la variable bg de blanco a 
    el color predominante que se mostrará gracias a getColorByImage y que vinculará al pokemon correspondiente gracias a la imagen
    obtenidoa del pokemon segun su id en getPokemonImage*/
    bg.value = await getColorByImage(getPokemonImage(props.id));
    // inicamos que si el componente esta listo para mostrar, isLoading este en false y muestre el contenido. 
    isLoading.value = false
})

</script>
<style scoped>
.card {
    border-radius: 10px;
    transition: 300ms;
    height: 100%;
}

.card:hover {
    transform: scale(1.1);
}

.card img {
    object-fit: contain;
}

.card .card-image{
    background-image: url('https://i.pinimg.com/originals/fd/72/1f/fd721f81cf12ebf7b3234c2c665b584c.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.card-content{
    font-size: 1rem;
    color: #eee;
    text-shadow: 1px 1px 2px black;
    padding: 10px;
}
</style>