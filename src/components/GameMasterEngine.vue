<template>
    <div id="mythicContainer">

        <span>Chaos Factor</span>
        <div id="chaosContainer">
            <div
                    v-for="index in 9" :key="index"
                    :class="chaosFactor === index ? 'chaos focus' : 'chaos'"
                    :id="'chaos' + index"
                    @click="chaosFactor = index"
            >
                {{index}}
            </div>
        </div>

        <span>Fate table</span>
        <div id="fateContainer">
            <div class="fate" @click="rollFate('impossible')">Impossible</div>
            <div class="fate" @click="rollFate('noWay')">No way</div>
            <div class="fate" @click="rollFate('veryUnlikely')">Very unlikely</div>
            <div class="fate" @click="rollFate('unlikely')">Unlikely</div>
            <div class="fate" @click="rollFate('fiftyfifty')">50/50</div>
            <div class="fate" @click="rollFate('somewhatLikely')">Somewhat likely</div>
            <div class="fate" @click="rollFate('likely')">Likely</div>
            <div class="fate" @click="rollFate('veryLikely')">Very likely</div>
            <div class="fate" @click="rollFate('nearSureThing')">Near sure thing</div>
            <div class="fate" @click="rollFate('aSureThing')">A sure thing</div>
            <div class="fate" @click="rollFate('hasToBe')">Has to be</div>
        </div>

        <span>Fate result: </span>
        <span id="result">{{fateResult}}</span>

        <hr style="width:100%">

        <div id="eventButton" @click="generateEvent">Generate Event!</div>
        <div id="eventResult">
            <div id="eventFocus" @click="generateFocus">{{focus ? focus : 'Focus'}}</div>
            <div id="eventAction" @click="generateAction">{{action ? action : 'Action'}}</div>
            <div id="eventSubject" @click="generateSubject">{{subject ? subject : 'Subject'}}</div>
        </div>
    </div>
</template>

<script>
    import DieRoller from '@/controllers/DieRoller'
    import Events from '@/controllers/tables/Events'

    const FATECHANCE = {
        'impossible': {1: -20, 2: 0, 3: 0, 4: 5, 5: 5, 6: 10, 7: 15, 8: 25, 9: 50},
        'noWay': {1: 0, 2: 5, 3: 5, 4: 10, 5: 15, 6: 25, 7: 35, 8: 50, 9: 75},
        'veryUnlikely': {1: 5, 2: 5, 3: 10, 4: 15, 5: 25, 6: 45, 7: 50, 8: 65, 9: 85},
        'unlikely': {1: 5, 2: 10, 3: 15, 4: 20, 5: 35, 6: 50, 7: 55, 8: 75, 9: 90},
        'fiftyfifty': {1: 10, 2: 15, 3: 25, 4: 30, 5: 50, 6: 65, 7: 75, 8: 85, 9: 95},
        'somewhatLikely': {1: 20, 2: 25, 3: 45, 4: 50, 5: 65, 6: 80, 7: 85, 8: 90, 9: 95},
        'likely': {1: 25, 2: 35, 3: 50, 4: 55, 5: 75, 6: 85, 7: 90, 8: 95, 9: 100},
        'veryLikely': {1: 45, 2: 50, 3: 65, 4: 75, 5: 85, 6: 90, 7: 95, 8: 95, 9: 105},
        'nearSureThing': {1: 50, 2: 55, 3: 75, 4: 80, 5: 90, 6: 95, 7: 95, 8: 100, 9: 115},
        'aSureThing': {1: 55, 2: 65, 3: 80, 4: 85, 5: 90, 6: 95, 7: 95, 8: 110, 9: 125},
        'hasToBe': {1: 80, 2: 85, 3: 90, 4: 95, 5: 95, 6: 100, 7: 100, 8: 130, 9: 145},
    }

    export default {
        data() {
            return {
                chaosFactor: 5,
                fateResult: '',
                focus: '',
                action: '',
                subject: '',
            }
        },

        methods: {
            rollFate(fate) {
                let rollResult = DieRoller.d100()
                let chance = FATECHANCE[fate][this.chaosFactor]

                let result = 'No!'

                if (rollResult <= chance / 5) {
                    result = 'Exceptional Yes!'
                } else if (rollResult <= chance) {
                    result = 'Yes!'
                } else if (rollResult > (100 - (100 - chance) / 5)) {
                    result = 'Exceptional No!'
                }

                if (this.eventHappens(rollResult)) {
                    result += ' An event is triggered!'
                    this.generateEvent()
                }

                this.fateResult = result
            },
            eventHappens(rollResult) {
                if (rollResult === 100 || rollResult % 11 === 0) {
                    return rollResult % 10 <= this.chaosFactor
                } else {
                    return false
                }
            },
            generateEvent() {
                this.generateFocus()
                this.generateAction()
                this.generateSubject()
            },
            generateFocus() {
                this.focus = Events.focus.roll()
            },
            generateAction() {
                this.action = Events.action.roll()
            },
            generateSubject() {
                this.subject = Events.subject.roll()
            }

        },

        computed: {},

        mounted() {
        }
    }
</script>

<style scoped>
    #mythicContainer {
        width: 1200px;

        padding: 0 18px;
        font-family: fantasy;
        color: white;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;
        font-size: 100%;

        display: flex;
        margin: 0 auto 0 auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    #fateContainer {
        display: flex;
        margin: 0 auto 0 auto;
        flex-wrap: wrap;
        justify-content: center;

        background-image: linear-gradient(to right, darkred, red, darkorange, orange, yellow, lightgreen, green);

        border-top: darkslategrey solid 2px;
        border-bottom: darkslategrey solid 2px;
        border-radius: 100px;

        width: 100%;
    }

    .fate {
        width: 90px;
        margin: 0 5px;
        height: 100px;
        vertical-align: middle;
        text-align: center;
        font-size: 120%;

        cursor: pointer;

        text-transform: uppercase;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #fiftyfifty {
        font-size: 180%;
    }

    #chaosContainer {
        display: flex;
        margin: 0 auto 20px auto;
        flex-wrap: wrap;
        justify-content: center;

        /*background-image: linear-gradient(to right, darkred, red, darkorange, orange, yellow, lightgreen, green);*/

        border-top: darkslategrey double 4px;
        border-bottom: darkslategrey double 4px;
        border-radius: 40px;

        width: 60%;
    }

    .chaos {
        width: 60px;
        margin: 0 5px;
        height: 60px;
        vertical-align: middle;
        text-align: center;

        cursor: pointer;

        text-transform: uppercase;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .focus {
        font-size: 150%;
        border: red double 5px;
        border-radius: 60px;
    }

    #mythicContainer span {
        text-transform: uppercase;
        color: white;
        font-size: 200%;
        width: 100%;
        text-align: center;
        margin: 5px;

    }

    #result {
        height: 40px;
        color: beige;
    }

    #eventButton {
        vertical-align: middle;
        text-align: center;
        line-height: 40px;
        width: 200px;
        height: 40px;
        font-size: 150%;
        border-radius: 10px;
        border: darkslategrey solid 4px;
        cursor: pointer;
        background-color: rgba(50, 50, 150, 0.4);
    }

    #eventResult {
        display: flex;
        flex-wrap: wrap;
        vertical-align: middle;
        text-align: center;
        line-height: 40px;
        width: 70%;
        height: 40px;
        font-size: 150%;
        border-radius: 10px;
        border: darkslategrey solid 4px;
        background-color: rgba(10, 50, 10, 0.4);
    }

    #eventResult div {
        cursor: pointer;
        width: 31%;
        margin-left: 1%;
        margin-right: 1%;
        font-size: 80%;
    }
</style>
