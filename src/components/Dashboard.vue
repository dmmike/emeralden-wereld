<template>
    <div id='dashboard-container' class="container">
        <div class='dashboard-half'>
            <ul>
                <li>
                    <a href="https://donjon.bin.sh">Donjon</a>
                    <ul class="sublist">
                        <li>
                            <a href="https://donjon.bin.sh/d20/weather/" target="_blank">Weather generator</a>
                        </li>
                        <li>
                            <a href="https://donjon.bin.sh/5e/random/#type=treasure;treasure-cr=0;treasure-loot_type=treasure_hoard"
                               target="_blank">Treasure generator</a>
                        </li>
                        <li>
                            <a href="https://donjon.bin.sh/fantasy/inn/" target="_blank">Inn generator</a>
                        </li>
                        <li>
                            <a href="https://donjon.bin.sh/fantasy/calendar/#" target="_blank">Calendar</a>
                        </li>
                        <li>
                            <a href="https://donjon.bin.sh/5e/monsters/" target="_blank">Monster list</a>
                        </li>
                        <li>
                            <a href="https://donjon.bin.sh/5e/random/#type=encounter;encounter-n_pc=4;encounter-level=11;encounter-difficulty=any;encounter-environment=underdark"
                               target="_blank">Encounter generator</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="https://tabletopaudio.com/" target="_blank">Tabletop Audio</a>
                    <ul class="sublist">
                        <li>
                            <a href="https://tabletopaudio.com/dungeon_sp.html" target="_blank">Dungeon</a>
                        </li>
                        <li>
                            <a href="https://tabletopaudio.com/darkforest_sp.html" target="_blank">Forest</a>
                        </li>
                        <li>
                            <a href="https://tabletopaudio.com/olde_towne_sp.html" target="_blank">Town</a>
                        </li>
                        <li>
                            <a href="https://tabletopaudio.com/tavern_sp.html" target="_blank">Tavern</a>
                        </li>
                        <li>
                            <a href="https://tabletopaudio.com/combat_sp.html" target="_blank">Combat</a>
                        </li>
                        <li>
                            <a href="https://tabletopaudio.com/custom_sp.html" target="_blank">Custom</a>
                        </li>
                    </ul>
                </li>
                <li><a href="https://emeraldenwereld.obsidianportal.com/wikis/main-page">Wiki</a></li>
                <li>
                    <a href="http://www.fantasynamegenerators.com/" target="_blank">Fantasy Name Generators</a>
                    <ul>
                        <li>Rassen</li>
                        <ul class="sublist">
                            <li v-for="race in racesTable">
                                <a :href="'http://www.fantasynamegenerators.com/' + race.urls.name_generator + '.php'" target="_blank" >
                                    {{race.species}}
                                </a>
                            </li>
                        </ul>
                        <li>Plekken</li>
                        <ul class="sublist">
                            <li>
                                <a href="http://www.fantasynamegenerators.com/fantasy-town-names.php"
                                   target="_blank">Steden</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/inn_names.php"
                                   target="_blank">Herbergen</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/castle_names.php"
                                   target="_blank">Kastelen</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/dungeon-names.php"
                                   target="_blank">Dungeons</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/library-names.php" target="_blank">Bibliotheken</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/ruin-names.php" target="_blank">Ruïnes</a>
                            </li>
                            <li>
                                <a href="http://www.fantasynamegenerators.com/temple-names.php"
                                   target="_blank">Tempels</a>
                            </li>
                        </ul>
                        <li>Overigen</li>
                        <ul class="sublist">
                            <li>
                                <a href="http://www.fantasynamegenerators.com/book-title-generator.php" target="_blank">Boeken</a>
                            </li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </div>
        <div class='dashboard-half'>
            <div id="arrows">
                <label>
                    Arrows fired
                    <input v-model.number="arrowsFired">
                    <button @click="recoverArrows">Recover</button>
                </label>
                <br/>
                Arrows recovered: {{arrowsRecovered}}
            </div>
<!--            TODO: Perception checker toevoegen -->
        </div>
    </div>
</template>

<script>
    import Races from "@/controllers/tables/Races"
    import DieRoller from "@/controllers/DieRoller"

    export default {
        data() {
            return {
                racesTable: Races.table,
                arrowsFired: 0,
                arrowsRecovered: 0
            }
        },
        methods: {
            recoverArrows() {
                this.arrowsRecovered = 0
                for (let i = 0; i < this.arrowsFired; i++) {
                    if (DieRoller.rollDie(2) === 2) this.arrowsRecovered++
                }
                console.log(this.arrowsRecovered)
            }
        }
    }
</script>

<style scoped>
    #dashboard-container {
        flex-wrap:wrap;
        display:flex;
    }

    .dashboard-half {
        flex-wrap: wrap;
        width: 50%;
    }
</style>
