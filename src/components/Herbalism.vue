<template>
    <div class="container">
        <div id="biomeButtons">
            <div v-for="biome in biomes" :id="biome" class="biome" :class="selectedBiome === biome ? 'select' : ''" @click="selectedBiome = biome">{{biome}}</div>
        </div>
        <div id="options">
        </div>
        <button id="herbButton" @click="findPlants">Find plants</button>
        <div id="plants_found">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                biomes: [
                    'arctic',
                    'desert',
                    'grassland',
                    'coastal',
                    'forest',
                    'hill',
                    'mountain',
                    'swamp',
                ],
                plants_found: [],
                selectedBiome: 'arctic',
                options: []
            }
        },

        methods: {
            findPlants() {
                console.log(this)
            }
        },

        computed: {},

        mounted() {
        }
    }
</script>

<style scoped>
    #biomeButtons {
        width: 100%;
        padding: 0 calc((100% - 1000px) /2);
        margin:auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .biome {
        width: 220px;
        height: 220px;
        margin: 5px;
        vertical-align: middle;
        text-align: center;
        border: darkslategrey solid 5px;
        border-radius: 60px;
        cursor: pointer;

        text-transform: uppercase;
        color: white;
        font-size: 300%;
        font-family: fantasy;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;

        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    #herbButton {
        margin:auto;
        vertical-align: middle;
        text-align: center;
        width: 200px;
        height: 40px;
        font-size: 150%;
        border-radius: 10px;
        border: darkslategrey solid 4px;
        cursor: pointer;
        background-color: rgba(50, 50, 150, 0.4);

        font-family: fantasy;
        color: white;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;

        outline:none;
    }

    .select {
        border: #a87826 solid 5px;
    }

    #arctic {
        background: url("../assets/tiles/arctic.jpg");
    }

    #desert {
        background: url("../assets/tiles/desert.jpg");
    }

    #forest {
        background: url("../assets/tiles/dforest.jpg");
    }

    #hill {
        background: url("../assets/tiles/ghills.jpg");
    }

    #swamp {
        background: url("../assets/tiles/swamp.jpg");
    }

    #mountain {
        background: url("../assets/tiles/mountains.jpg");
    }

    #grassland {
        background: url("../assets/tiles/plains.jpg");
    }

    #coastal {
        background: url("../assets/tiles/coastal.jpg");
    }
</style>
