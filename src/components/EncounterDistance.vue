<template>
    <div id="encounterTilesContainer">
        <div id="desert" class="encounter-tile" @click="getTerrainDistance('desert')">Desert</div>
        <div id="dunes" class="encounter-tile" @click="getTerrainDistance('dunes')">Dunes</div>
        <div id="dforest" class="encounter-tile" @click="getTerrainDistance('dforest')">Forest (Deep)</div>
        <div id="mforest" class="encounter-tile" @click="getTerrainDistance('mforest')">Forest (Medium)</div>
        <div id="sforest" class="encounter-tile" @click="getTerrainDistance('sforest')">Forest (Sparse)</div>
        <div id="ghills" class="encounter-tile" @click="getTerrainDistance('ghills')">Hill (Gentle)</div>
        <div id="rhills" class="encounter-tile" @click="getTerrainDistance('rhills')">Hill (Rugged)</div>
        <div id="distanceBox" class="encounter-tile">{{encounter_distance}}</div>
        <div id="moor" class="encounter-tile" @click="getTerrainDistance('moor')">Marsh (Moor)</div>
        <div id="swamp" class="encounter-tile" @click="getTerrainDistance('swamp')">Marsh (Swamp)</div>
        <div id="mountains" class="encounter-tile" @click="getTerrainDistance('mountains')">Mountains</div>
        <div id="plains" class="encounter-tile" @click="getTerrainDistance('plains')">Plains</div>
        <div id="urban" class="encounter-tile" @click="getTerrainDistance('urban')">Urban</div>
        <div id="cwater" class="encounter-tile" @click="getTerrainDistance('cwater')">Water (Clear)</div>
        <div id="mwater" class="encounter-tile" @click="getTerrainDistance('mwater')">Water (Murky)</div>
    </div>
</template>

<script>
    import DieRoller from "@/controllers/DieRoller";

    const DISTANCES = {
        'desert': '6d6*20',
        'dunes': '6d6*10',
        'dforest': '2d6*10',
        'mforest': '2d8*10',
        'sforest': '3d6*10',
        'ghills': '2d10*10',
        'rhills': '2d6*10',
        'moor': '6d6*10',
        'swamp': '2d8*10',
        'mountains': '4d10*10',
        'plains': '6d6*40',
        'urban': '1d12*5',
        'cwater': '4d8*10',
        'mwater': '1d8*10',
    }

    export default {
        data() {
            return {
                encounter_distance: '',
                loading: true,
            }
        },

        methods: {
            getTerrainDistance(terrainType) {
                let encounterDistance = DieRoller.roll(DISTANCES[terrainType])
                this.encounter_distance = `${encounterDistance}ft/${encounterDistance / 5}"`
            }
        },

        computed: {

        },

        mounted() {
        }
    }
</script>

<style scoped>
    #encounterTilesContainer {
        width: 1200px;

        display: flex;
        padding: 0 18px;

        margin: 0 auto 0 auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    .encounter-tile {
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

    #distanceBox {
        cursor: default;
        color: beige;
        font-size: 250%;
        border-color: darkgoldenrod;
    }

    #desert {
        background: url("../assets/tiles/desert.jpg");
    }

    #dunes {
        background: url("../assets/tiles/dunes.jpg");
    }

    #dforest {
        background: url("../assets/tiles/dforest.jpg");
    }

    #mforest {
        background: url("../assets/tiles/mforest.jpg");
    }

    #sforest {
        background: url("../assets/tiles/sforest.jpg");
    }

    #ghills {
        background: url("../assets/tiles/ghills.jpg");
    }

    #rhills {
        background: url("../assets/tiles/rhills.jpg");
    }

    #distanceBox {
        background: url("../assets/tiles/distancebox.jpg");
    }

    #moor {
        background: url("../assets/tiles/moor.jpg");
    }

    #swamp {
        background: url("../assets/tiles/swamp.jpg");
    }

    #mountains {
        background: url("../assets/tiles/mountains.jpg");
    }

    #plains {
        background: url("../assets/tiles/plains.jpg");
    }

    #urban {
        background: url("../assets/tiles/urban.jpg");
    }

    #cwater {
        background: url("../assets/tiles/cwater.jpg");
    }

    #mwater {
        background: url("../assets/tiles/mwater.jpg");
    }
</style>
