<template>
    <div class="container">
        <p v-for="npc in npcs" @click="generateNpcs">{{npc}}</p>
    </div>
</template>

<script>
    import Npc from "@/controllers/Npc"

    export default {
        data() {
            return {
                npcs: []
            }
        },
        methods: {
            generateNpcs() {
                this.npcs = []
                for (let i = 0; i < 10; i++) {
                    this.npcs.push(new Npc)
                }
            },
        },
        computed: {},

        mounted() {
            this.generateNpcs()
        }
    }
</script>

<style scoped>
</style>
