<template>
    <div class="container">
        <h2>Biome</h2>
        <div id="biomeButtons">
            <div v-for="(_, biome) in biomes" :id="biome" class="biome" :class="selectedBiome === biome ? 'select' : ''" @click="selectBiome(biome)">{{biome}}</div>
        </div>

        <h2>Options</h2>
        <div id="options">
            <div class="option-select" :class="provisions ? 'select-true' : 'select-false'" @click="provisions = !provisions">
                provisions?
                <font-awesome-icon :icon="provisions ? 'check' : 'times'"></font-awesome-icon>
            </div>
            <div v-for="(value, option) in options" class="option-select" :class="options[option] ? 'select-true' : 'select-false'" @click="options[option] = !options[option]">
                {{option + '?'}}
                <font-awesome-icon :icon="options[option] ? 'check' : 'times'"></font-awesome-icon>
            </div>
        </div>

        <button id="herbButton" @click="findPlants">Find plants</button>
        <div id="plantsFound">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                biomes: {
                    arctic: {},
                    desert: {},
                    grassland: {},
                    coastal: {
                        underwater: false
                    },
                    forest: {
                        night: false
                    },
                    hill: {},
                    mountain: {
                        cave: false
                    },
                    swamp: {
                        rain: false
                    },
                },
                provisions: false,
                plantsFound: [],
                selectedBiome: 'forest',
                options: {
                    night: false
                }
            }
        },

        methods: {
            findPlants() {
                console.log(this)
            },

            selectBiome(biome) {
                this.selectedBiome = biome
                this.options = this.biomes[biome]
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

    #options {
        width:100%
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
