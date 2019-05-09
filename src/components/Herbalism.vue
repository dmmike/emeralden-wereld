<template>
    <div class="container">
        <h2>Biomes & Options</h2>
        <div id="biomeButtons">
            <div v-for="(_, biome) in biomes" :id="biome" class="biome" :class="selectedBiome === biome ? 'select' : ''"
                 @click="selectedBiome = biome">{{biome}}
            </div>
        </div>

        <div id="options">
            <button id="herbButton" @click="findPlants()">Find plants</button>

            <div class="option-select" :class="provisions ? 'select-true' : 'select-false'"
                 @click="provisions = !provisions">
                provisions?<br/>
                <font-awesome-icon :icon="provisions ? 'check' : 'times'"></font-awesome-icon>
            </div>
            <div v-for="(value, option) in biomes[selectedBiome]" class="option-select"
                 :class="value ? 'select-true' : 'select-false'" @click="biomes[selectedBiome][option] = !value">
                {{option + '?'}}<br/>
                <font-awesome-icon :icon="value ? 'check' : 'times'"></font-awesome-icon>
            </div>
            <p v-for="(number, plant) in plantsFound">{{number}} {{plant}}</p>
        </div>

        <hr style="width:100%">

        <h2>Plants Found</h2>
        <div id="plantsTable">
            <table class="table table-striped">
                <colgroup>
                    <col width="13%">
                    <col width="7%">
                    <col width="auto%">
                    <col width="5%">
                    <col width="15%">
                    <col width="5%">
                </colgroup>
                <thead>
                <th style="text-align:left">Ingredient</th>
                <th style="text-align:left">Rarity</th>
                <th style="text-align:left">Description</th>
                <th style="text-align:center">DC</th>
                <th style="text-align:left">Grows in...</th>
                <th style="text-align:center"># Found</th>
                </thead>
                <tbody v-html="plantsTable"></tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Herbs from '@/controllers/tables/Herbs'
    import DieRoller from "@/controllers/DieRoller"

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
                plantsFound: {},
                plantsTable: '',
                selectedBiome: 'forest',
                herbs: Herbs
            }
        },
        methods: {
            findPlants() {
                let numberOfIngredients = DieRoller.d4()

                this.plantsFound = []

                console.log('Generating ' + numberOfIngredients + ' ingredients')
                let ingredientsGenerated = 0
                while (ingredientsGenerated < numberOfIngredients) {
                    this.generateIngredient()
                    ingredientsGenerated++
                }
                console.log(Herbs.descriptions.wild_sageroot)

                // Ugly workaround for the fact that Vue has problems noticing array changes
                this.plantsTable = ''
                Object.keys(this.plantsFound).forEach((ingredient) => {
                    let plant = Herbs.descriptions[ingredient]
                    console.log(ingredient, plant)
                    this.plantsTable += "<tr><td style='text-align:left'>" + plant.name + "</td>" +
                        "<td style='text-align:left'>" + plant.rarity + "</td>" +
                        "<td style='text-align:left'>" + plant.details + "</td>" +
                        "<td style='text-align:center'>" + plant.dc + "</td>" +
                        "<td style='text-align:left'>" + plant.terrains + "</td>" +
                        "<td style='text-align:center'>" + this.plantsFound[ingredient] + "</td>"
                })

                console.log(this.plantsFound)
            },
            generateIngredient(generateCommonIngredient = false) {
                let rollResult
                if (generateCommonIngredient) {
                    rollResult = Herbs.common.roll(true)
                } else {
                    rollResult = Herbs[this.selectedBiome].roll(true)
                }

                if (this.isElementalWater(rollResult.roll)) {
                    this.addIngredient('elemental_water')
                } else if (typeof (rollResult.result) === 'string') {
                    if (rollResult.result === 'common_ingredient') {
                        this.generateIngredient(true)
                    } else {
                        this.addIngredient(rollResult.result)
                    }
                } else {
                    this.handleExtendedResult(rollResult.result)
                }
            },
            handleExtendedResult(extendedResult) {
                let ingredient = extendedResult.ingredient
                let rule = extendedResult.additional_rule

                switch (rule) {
                    case 'double':
                        this.addIngredient(ingredient)
                        this.addIngredient(ingredient)
                        break
                    case '1d2':
                        this.addIngredient(ingredient)
                        if (DieRoller.roll('1d2') === 2) this.addIngredient(ingredient)
                        break
                    case 'elemental':
                        this.addIngredient(ingredient)
                        this.addIngredient('elemental_water')
                        break
                    case 'rain':
                        this.addIngredient(ingredient)
                        if (this.biomes[this.selectedBiome].rain) this.addIngredient(ingredient)
                        break
                    case 'night':
                        if (this.biomes[this.selectedBiome].night) this.addIngredient(ingredient)
                        break
                    case 'provisions':
                        if (this.provisions) {
                            this.addIngredient(ingredient)
                        } else {
                            this.generateIngredient()
                        }
                        break
                    default:
                        if (this.biomes[this.selectedBiome][rule]) {
                            this.addIngredient(ingredient)
                        } else {
                            this.generateIngredient()
                        }
                }
            },
            addIngredient(ingredient) {
                if (this.plantsFound.hasOwnProperty(ingredient)) {
                    this.plantsFound[ingredient]++
                } else {
                    this.plantsFound[ingredient] = 1
                }
            },
            isElementalWater(dieRoll) {
                if ((dieRoll < 5) || (dieRoll > 9)) {
                    return DieRoller.d100() >= 75
                } else {
                    return false
                }
            }
        },

        computed: {},

        mounted() {
        }
    }
</script>

<style scoped>
    #plantsTable {
        width: 100%;
    }

    #biomeButtons {
        width: 80%;
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
        margin: 20px;
        vertical-align: middle;
        text-align: center;
        width: calc(100% - 40px);
        height: 40px;
        font-size: 150%;
        border-radius: 10px;
        border: darkslategrey solid 4px;
        cursor: pointer;
        background-color: rgba(50, 50, 150, 0.4);

        font-family: fantasy;
        color: white;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;

        outline: none;
    }

    .select {
        border: #a87826 solid 5px;
    }

    #options {
        width: 20%;
    }

    .option-select {
        margin: 20px;
        width: calc(100% - 40px);
        height: 80px;
        text-align: center;
        vertical-align: middle;
        font-family: fantasy;
        text-transform: uppercase;
        color: white;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;

        font-size: 150%;
        border-radius: 10px;
        border: darkslategrey solid 4px;
        cursor: pointer;
    }

    .select-true {
        background-color: rgba(26, 150, 31, 0.4);
    }

    .select-false {
        background-color: rgba(150, 39, 21, 0.4);
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
