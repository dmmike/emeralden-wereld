<template>
    <div class="container">
        <h2 @click="generateNpcs" @mousedown.prevent>NPCs Generated</h2>
        <table class="table table-striped">
            <colgroup>
                <col width="5%">
                <col width="16%">
                <col width="16%">
                <col width="20%">
                <col width="20%">
                <col width="auto">
            </colgroup>
            <thead>
            <th></th>
            <th style="text-align:left">Sex</th>
            <th style="text-align:left">Gender</th>
            <th style="text-align:left">Race (Subrace)</th>
            <th style="text-align:left">Class</th>
            <th>URLs</th>
            </thead>
            <tbody>
            <tr v-for="(npc, index) in npcs">
                <td @click="replaceNpc(index)">
                    <font-awesome-icon
                            class="redo"
                            icon="redo"
                            @mouseover="hoveringIcon = index"
                            @mouseout="hoveringIcon = null"
                            @mousedown.prevent
                            :class="hoveringIcon === index ? 'fa-spin' : ''"
                    >
                    </font-awesome-icon>
                </td>
                <td>{{npc.sex}}</td>
                <td>{{npc.gender}}</td>
                <td>{{npc.hasOwnProperty('subspecies') ? `${npc.species} (${npc.subspecies})` : npc.species}}</td>
                <td>{{npc.cclss}}</td>
                <td class="url-container">
                    <a class='name_url'
                       :href="'http://www.fantasynamegenerators.com/' + npc.urls.name_generator + '.php'"
                       target="_blank">Name</a>
                    <a class='wiki_url' :href="'http://emeraldenwereld.obsidianportal.com/wikis/' + npc.urls.wiki"
                       target="_blank">Wiki</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Npc from "@/controllers/Npc"

    export default {
        data() {
            return {
                npcs: [],
                hoveringIcon: null,
            }
        },
        methods: {
            generateNpcs() {
                this.npcs = []
                for (let i = 0; i < 10; i++) {
                    this.npcs.push(new Npc)
                }
            },
            replaceNpc(index) {
                let newNpcsArray = this.npcs
                newNpcsArray[index] = new Npc

                this.npcs = []
                newNpcsArray.forEach((npc) => {
                    this.npcs.push(npc)
                })
            },
        },
        computed: {},
        mounted() {
            this.generateNpcs()
        },
    }
</script>

<style scoped>
    td {
        text-transform: capitalize;
    }

    h2:hover {
        cursor: pointer;
    }

    .url-container {
        display: flex;
        flex-wrap: wrap;
        padding-left: 10%;
        padding-right: 10%;
    }

    .url-container a {
        margin: auto;
        height: 100%;
        width: 30%;
        text-align: center;

        font-family: fantasy;
        color: white;
        text-decoration: none;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;
        text-transform: uppercase;

        border-radius: 10px;
        border: darkslategrey solid 4px;
        background-color: rgb(184, 211, 225);
    }

    .redo {
        text-align: center;
        width: 100%;
        cursor: pointer;
    }
</style>
