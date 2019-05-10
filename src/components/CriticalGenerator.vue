<template>
    <div class="container">
        <h2>Damage</h2>
        <input v-model.number="damage" type="number">
        <input v-model.checkbox="attack" type="checkbox">
        <h2>Critical Hit</h2>
        <button @click="generateCritical">Generate Critical</button>
        <table class="table table-striped">
            <colgroup>
                <col width="15%">
                <col width="auto">
            </colgroup>
            <thead>
            <th></th>
            <th></th>
            </thead>
            <tbody>
            <tr>
                <td class="table-head">Hit Location</td>
                <td>{{hitLocation}}</td>
            </tr>
            <tr>
                <td class="table-head">Effect</td>
                <td v-html="critResult"></td>
            </tr>
            <tr>
                <td class="table-head">Healing</td>
                <td v-html="critHealing"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Criticals from "@/controllers/tables/Criticals"

    export default {
        data() {
            return {
                damage: 0,
                attack: true,
                hitLocation: '',
                critResult: '',
                critHealing: '',
            }
        },
        methods: {
            generateCritical() {
                let result = Criticals.hit_locations.roll()
                this.hitLocation = result.location
                let crit = Criticals.crits[result.table].roll(false, this.attack ? (Math.floor(this.damage / 2)) : 0)
                this.critResult = crit.effect
                this.critHealing = crit.healing
            }
        }
    }
</script>

<style scoped>

</style>
