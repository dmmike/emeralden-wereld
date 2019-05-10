import DieRoller from "@/controllers/DieRoller"

export default class Table {
    constructor(table, roll = '1d100') {
        this.rollDie = roll
        this.table = table
    }

    roll(returnRoll = false, modifier = 0) {
        let rollResult = DieRoller.roll(this.rollDie) + modifier

        let rolledValue = ''

        let table = this.table
        let lastValue = true
        Object.keys(table).reverse().forEach(function (target) {
            if (lastValue && (rollResult >= parseInt(target))) {
                rolledValue = table[target]
            } else {
                if (rollResult <= parseInt(target)) {
                    rolledValue = table[target]
                }
            }
            lastValue = false
        })

        //TODO: parse result for integrated rolls/tables
        if (returnRoll) {
            return {roll: rollResult, result: rolledValue}
        } else {
            return rolledValue
        }
    }
}
